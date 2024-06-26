/* Amplify Params - DO NOT EDIT
	API_CHARLOTTECH_GRAPHQLAPIENDPOINTOUTPUT
	API_CHARLOTTECH_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

'use strict';

const AWS = require('aws-sdk');
const DDB_TABLE_NAME = 'Comic-b3qzoouncvherefmatetichkvq-staging';
const ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: 'ap-northeast-1',
});
const { google } = require('googleapis');

// JWT 認証
// client_email と private_key のみ必要
const client = new google.auth.JWT({
  email: process.env.CLIENT_EMAIL,
  key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});
const analyticsreporting = google.analyticsreporting({
  version: 'v4',
  auth: client,
});

exports.handler = async () => {
  // TODO implement
  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          // Google Analytics の View ID
          viewId: '250431876',
          // 期間
          dateRanges: [
            {
              startDate: '7daysAgo',
              endDate: 'today',
            },
          ],
          // 取得したい metrics
          // 今回は PV 数のみ取得
          metrics: [{ expression: 'ga:pageviews' }],
          // 取得したい dimensions
          // 今回はページのパスとタイトルのみ取得
          dimensions: [{ name: 'ga:pagePath' }, { name: 'ga:pageTitle' }],
          // 並び順
          // 今回は PV を基準に、降順で取得
          orderBys: [{ fieldName: 'ga:pageviews', sortOrder: 'DESCENDING' }],
          // 取得数
          pageSize: 10,
        },
      ],
    },
  });
    
  if (res) {
        console.log('Data:', JSON.stringify(res.data));
        const rankingCode = res.data.reports[0].data.rows.filter(
            (data) => data.dimensions[0] !== '/' && data.dimensions[0] !== '/intro',
        ).map(async (data) => {
            await putPageView(data.dimensions[0].slice(1), Number(data.metrics[0].values[0]));
        });
      
        const result = await Promise.all(rankingCode);
  }
  
  return;
};

async function putPageView(code, like) {
  try {
    var params = {
      TableName: DDB_TABLE_NAME,
      Key: { code: code },
      ExpressionAttributeValues: {
        ':like': like,
      },
      ExpressionAttributeNames: { '#l': 'like' },
      UpdateExpression: 'set #l = :like',
      ReturnValues: 'UPDATED_NEW',
      ConditionExpression: 'attribute_exists(#l)'
    };
    
    return await ddb.update(params).promise();
  } catch (e) {
    console.error('putPageView', e);
    throw e;
  }
}
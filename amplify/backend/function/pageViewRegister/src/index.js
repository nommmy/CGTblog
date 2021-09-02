/* Amplify Params - DO NOT EDIT
	API_CHARLOTTECH_GRAPHQLAPIENDPOINTOUTPUT
	API_CHARLOTTECH_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

'use strict';

const AWS = require('aws-sdk');
const gaKey = require('./key.json');
const DDB_TABLE_NAME = 'Comic-b3qzoouncvherefmatetichkvq-staging';
const ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: 'ap-northeast-1',
});
const { google } = require('googleapis');

// JWT 認証
// client_email と private_key のみ必要
const client = new google.auth.JWT({
  email: gaKey.client_email,
  key: gaKey.private_key,
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
          pageSize: 5,
        },
      ],
    },
  });
  console.log(JSON.stringify(res.data));
  return;
};

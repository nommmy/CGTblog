import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { articleListSlice } from 'ducks/articleList';
import Amplify, { Auth, Analytics } from 'aws-amplify';
import reportWebVitals from './reportWebVitals';
import App from './App';

Amplify.configure({
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint:
    process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_cognito_identity_pool_id:
    process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  aws_user_files_s3_bucket: process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region:
    process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION,
  aws_mobile_analytics_app_id:
    process.env.REACT_APP_AWS_MOBILE_ANALYTICS_APP_ID,
  aws_mobile_analytics_app_region:
    process.env.REACT_APP_AWS_MOBILE_ANALYTICS_APP_REGION,
});
Auth.currentAuthenticatedUser()
  .then(() => {
    Amplify.configure({
      aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    });
  })
  .catch(() => {
    Amplify.configure({
      aws_appsync_authenticationType: 'AWS_IAM',
    });
  });


Auth.configure({
  Auth: {
    identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
    region: process.env.REACT_APP_AWS_MOBILE_ANALYTICS_APP_REGION,
  },
});
Analytics.configure({
  AWSPinpoint: {
    appId: process.env.REACT_APP_AWS_MOBILE_ANALYTICS_APP_ID,
    region: process.env.REACT_APP_AWS_MOBILE_ANALYTICS_APP_REGION,
    mandatorySignIn: false,
  },
});
Analytics.autoTrack('pageView', {
    enable: true,
    type: 'SPA',
});


const store = configureStore({ reducer: articleListSlice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

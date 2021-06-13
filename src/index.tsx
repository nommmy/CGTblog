import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { articleListSlice } from 'ducks/articleList';
import Amplify, { Auth } from 'aws-amplify';
import reportWebVitals from './reportWebVitals';
import App from './App';
import config from './aws-exports';

Amplify.configure(config);
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

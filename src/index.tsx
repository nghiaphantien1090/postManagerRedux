import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import './index.module.scss';
import { Provider } from 'react-redux';
import { worker } from './server/server'
import { useGetPostsQuery } from './features/api/apiSlice';
const container = document.getElementById('root')!;
const root = createRoot(container);

async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })
  root.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
);
}
start()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

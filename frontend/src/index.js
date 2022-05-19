import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './scss/index.scss';
import '@fontsource/roboto';
import '@fontsource/ubuntu';
import '@fortawesome/fontawesome-pro/css/all.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
      <App />
    </BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

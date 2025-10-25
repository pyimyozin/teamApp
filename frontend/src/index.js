import ReactDOM from 'react-dom/client';
import Router from './router';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import reportWebVitals from './utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

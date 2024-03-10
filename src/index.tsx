import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider } from '@nextui-org/react';
import { Helmet } from 'react-helmet';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
    <Helmet>
      <title>News App</title>
      <link type="image/png" sizes="32x32" rel="icon" href='./assets/newsIcon.png' />
    </Helmet>
      
      <div>
        <App />
      </div>
    </NextUIProvider>
  </QueryClientProvider>,
  
);

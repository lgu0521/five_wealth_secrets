import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyAccountsManagerPage from './pages/MyAccountsManagerPage';
import MyAccountDetailsPage from './pages/MyAccountDetailsPage';
import MyAccountAddPage from './pages/MyAccountAddPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyAccountDetailsByCategoryPage from './pages/MyAccountDetailsByCategoryPage';
import MyAccountDetailsAddPage from './pages/MyAccountDetailsAddPage';
import MyAccountDetailsEditPage from './pages/MyAccountDetailsEditPage';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global-styles';
import { theme } from './styles/theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyAccountsManagerPage />
  },
  {
    path: "/my-accounts/:accountId",
    element: <MyAccountDetailsPage />,
  },
  {
    path: "/my-accounts/add",
    element: <MyAccountAddPage />
  },
  {
    path: "/my-accounts/:accountId/tithe",
    element: <MyAccountDetailsByCategoryPage category='tithe' />
  }, {
    path: "/my-accounts/:accountId/investment",
    element: <MyAccountDetailsByCategoryPage category='investment' />
  }, {
    path: "/my-accounts/:accountId/savings",
    element: <MyAccountDetailsByCategoryPage category='savings' />
  }, {
    path: "/my-accounts/:accountId/offering",
    element: <MyAccountDetailsByCategoryPage category='offering' />
  }, {
    path: "/my-accounts/:accountId/spending",
    element: <MyAccountDetailsByCategoryPage category='spending' />
  },
  {
    path: "/my-accounts/:accountId/:category/details/add",
    element: <MyAccountDetailsAddPage />
  },
  {
    path: "/my-accounts/:accountId/details/add",
    element: <MyAccountDetailsAddPage />
  }, {
    path: "/my-accounts/:accountId/:category/details/:historyId",
    element: <MyAccountDetailsEditPage />

  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

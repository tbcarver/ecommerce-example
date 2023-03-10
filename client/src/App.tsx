import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import OneColumnLayout from './layouts/OneColumnLayout';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <OneColumnLayout>
        <RouterProvider router={router} />
      </OneColumnLayout>
    </div>
  );
}

export default App;

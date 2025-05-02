import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import "./styles/index.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";

import ProtectedRoute from "./routes/protectedRoute";
import { LoginProvider } from "./context/loginContext";
import { LanguageProvider } from "./context/languageContext";
import store from './redux/store';

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "rooms",
        element: (
          <ProtectedRoute>
            <Rooms />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <LanguageProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LanguageProvider>
    </LoginProvider>
  </React.StrictMode>
);

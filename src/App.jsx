import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Employees from "./pages/Employees";
import Rooms from "./pages/Rooms";
import UsersDetails from './pages/UserDetails';

import ProtectedRoute from "./routes/ProtectedRoute";
import { LoginProvider } from "./context/loginContext";
import { LanguageProvider } from "./context/languageContext";
import store from "./redux/store";
import { ThemeProvider } from "./context/themeContext";

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
        path: "bookings/:id",
        element: (
          <ProtectedRoute>
            <UsersDetails />
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
            <Employees />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <LoginProvider>
      <LanguageProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </LanguageProvider>
    </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>
);

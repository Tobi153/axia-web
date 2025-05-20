import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { DashboardScreen } from "../pages/DashboardScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { SignUpScreen } from "../pages/SignUpScreen";
import { AboutScreen } from "../pages/AboutScreen";
import { MarketPlaceScreen } from "../pages/MarketPlaceScreen";
import { ServicesScreen } from "../pages/ServicesScreen";
import { ProtectedRoute } from "./ProtectedRoute";
import { ForgotPasswordScreen } from "../pages/ForgotPasswordScreen";

// Defining router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardScreen />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/signup",
    element: <SignUpScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/services",
    element: <ServicesScreen />,
  },
  {
    path: "/marketplace",
    element: <MarketPlaceScreen />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}

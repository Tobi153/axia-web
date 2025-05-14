// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./assets/routes/AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-dom";
import "../index.css";
// const router = [];

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;

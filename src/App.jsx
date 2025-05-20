// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./assets/routes/AppRoutes";
// import { RouterProvider } from "react-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "../index.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;

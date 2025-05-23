import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

export default function RootLayout() {
  return (
    <div>
      <Outlet />

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

import { Link } from "react-router-dom";
export function AltAccount({ message, method }) {
  return (
    <div className="text-[14px]">
      {message}{" "}
      <Link
        to={`${method === "Log in" ? "login" : "signup"}`}
        className="text-btn-green-dark text-[14px] font-[700]"
      >
        {method}
      </Link>
    </div>
  );
}

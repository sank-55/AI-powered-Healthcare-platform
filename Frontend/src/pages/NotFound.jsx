import { Link } from "react-router-dom";
import React from "react";
export default function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back Home
      </Link>
    </div>
  );
}

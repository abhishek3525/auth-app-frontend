import React from "react";
import { AppData } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { logoutUser, user } = AppData();
  const navigate = useNavigate();

   return (
    <div className="m-auto mt-40 text-center">
      {user && (
        <div className="mb-6 bg-gray-100 p-6 rounded-lg inline-block text-left">
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
        </div>
      )}
      <div className="flex justify-center gap-4">
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={() => logoutUser(navigate)}
        >
          Logout
        </button>

        {user && user.role === "admin" && (
          <Link
            to="/dashboard"
            className="bg-purple-500 text-white p-2 rounded-md"
          >
            Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;

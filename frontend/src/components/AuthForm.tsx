import { useState } from "react";
import { useFakeAuth } from "@/components/FakeAuthContext";

const AuthForm = () => {
  const { user, login, logout } = useFakeAuth();
  const [email, setEmail] = useState("");

  if (user) {
    return (
      <div className="p-4 text-center space-y-4">
        <p className="text-xl">
          Welcome, <strong>{user}</strong>
        </p>
        <button
          onClick={logout}
          className="bg-gradient-primary text-primary-foreground px-8 py-4 mt-5 rounded-lg text-lg font-semibold hover:shadow-glow transition-all duration-300 interactive"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={() => login(email)}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign Up / Log In
      </button>
    </div>
  );
};

export default AuthForm;

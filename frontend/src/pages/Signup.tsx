import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate account creation
    localStorage.setItem("isSignedUp", "true"); // flag for showing message on login page
    navigate("/login");
  };

  return (
    <div className="cursor-default min-h-screen bg-background flex items-center justify-center px-6">
      <div className="bg-card p-8 rounded-lg shadow-elevated w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Create Your Visra Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:shadow-glow transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-4 text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary underline login-here hover:text-primary/80 transition"
          >
            Login here
          </Link>{" "}
          <Link
            to="/"
            className="text-primary underline hover:text-primary/80 transition"
          >
            Cancel
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated login
    localStorage.setItem("visra-user", email);
    toast.success("Logged in successfully");

    // ✅ Redirect to /explore instead of /
    navigate("/explore");
  };

  return (
    <div className="cursor-default min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Welcome Back to Visra
      </h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-card p-6 rounded-lg shadow-elevated"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md mb-4 border border-border bg-background text-foreground"
        />
        <button
          type="submit"
          className="w-full bg-gradient-primary text-primary-foreground p-3 rounded-md font-semibold hover:shadow-glow transition"
        >
          Log In
        </button>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="underline login-here hover:text-primary">
            Sign up
          </a>
          <Link
            to="/"
            className="text-primary underline hover:text-primary/80 transition ml-2"
          >
            Cancel
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

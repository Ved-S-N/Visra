import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/ThemeContent";
import { Sun, Moon } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const syncUser = () => {
      setUser(localStorage.getItem("visra-user"));
    };

    syncUser();
    window.addEventListener("focus", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("focus", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("visra-user");
    setUser(null);
    navigate("/");
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#signup" },
  ];

  return (
    <>
      <nav className="fixed top-0  left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
          >
            VISRA
          </div>

          <div className="flex items-center gap-4">
            {/* Show user greeting */}
            {user && (
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Hi, {user}
              </span>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Auth Button */}
            <button
              onClick={user ? handleLogout : () => navigate("/login")}
              className="text-sm px-3 py-1 rounded-md border border-border hover:bg-muted transition interactive"
            >
              {user ? "Logout" : "Login"}
            </button>

            {/* Hamburger Button */}
            <button
              className={`hamburger ${
                isOpen ? "active" : ""
              } flex flex-col gap-1.5 p-2 interactive`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex  items-center justify-center h-full">
          <div className="text-center space-y-8">
            {(location.pathname === "/explore"
              ? [
                  { name: "Home", href: "#top" },
                  { name: "Explore", href: "#local-guides" },
                  { name: "Teams", href: "#team" },
                ]
              : navItems
            ).map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-item block text-4xl md:text-6xl font-bold text-foreground hover:text-primary transition-all duration-300 interactive ${
                  isOpen ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Login / Logout in Mobile Menu */}
            <a
              onClick={() => {
                setIsOpen(false);
                if (user) {
                  handleLogout();
                } else {
                  navigate("/login");
                }
              }}
              className={`nav-item block text-4xl md:text-6xl pb-5 font-bold text-foreground hover:text-primary transition-all duration-300 interactive ${
                isOpen ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              {user ? "Logout" : "Login"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

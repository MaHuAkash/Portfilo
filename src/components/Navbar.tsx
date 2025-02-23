
import { FloatingDock } from "../components/acernityui/floating-dock"; // Update with your actual path
import { Home, User, Settings, Mail, Briefcase,Terminal } from "tabler-icons-react"; // Example icons

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: <Home />,
      href: "/",
    },
    {
      title: "Who am I?",
      icon: <User />,
      href: "/about",
    },
    {
      title: "Contact",
      icon: <Mail />,
      href: "/contact",
    },
    {
      title: "Terminal",
      icon: <Terminal />,
      href: "/terminal",
    },
  ];

  return (
    
// In your Navbar component where you use FloatingDock
<FloatingDock
  items={navItems}
  desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 shadow-lg dark:shadow-neutral-800/50 bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-lg z-50"
  mobileClassName="fixed bottom-4 right-4 bg-gray-50/80 dark:bg-neutral-800/80 backdrop-blur-lg z-50"
/>
  );
};
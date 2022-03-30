import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const ThemeToggle = ({ iconWidth }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const button = () => {
    const currentTheme = theme === "system" ? "systemTheme" : theme;

    return currentTheme === "dark" ? (
      <button onClick={() => setTheme("light")}>
        <SunIcon width={iconWidth} />
      </button>
    ) : (
      <button onClick={() => setTheme("dark")}>
        <MoonIcon width={iconWidth} />
      </button>
    );
  };

  if (!mounted) return null;
  //  If theme is dark, show the sun icon
  //       If theme is light, show the moon

  return <span className="fill-white flex">{button()}</span>;
};

export default ThemeToggle;

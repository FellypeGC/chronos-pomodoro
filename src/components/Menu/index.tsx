import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type AvailableThemes = "dark" | "light";

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageItem = localStorage.getItem("theme") as AvailableThemes || "dark";
    return storageItem;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink} 
        to='/'
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </Link>
      <Link
        className={styles.menuLink} 
        to=''
        aria-label="Ver Histórico"
        title="Ver Histórico">
        <HistoryIcon />
      </Link>
      <Link
        className={styles.menuLink} 
        to=''
        aria-label="Ir para Configurações"
        title="Ir para Configurações"
      >
        <SettingsIcon />
      </Link>
      <Link
        className={styles.menuLink} 
        to=''
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  )
}

export default Menu


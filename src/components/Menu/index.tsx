import {
  HistoryIcon,
  HouseIcon,
  Languages,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import RouterLink from "../RouterLink";
import LanguageToggle from "../LanguageToggle";
import { useTranslation } from "react-i18next";

type AvailableThemes = "dark" | "light";

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageItem =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageItem;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label={t("menu.home")}
        title={t("menu.home")}
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label={t("menu.history")}
        title={t("menu.history")}
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label={t("menu.settings")}
        title={t("menu.settings")}
      >
        <SettingsIcon />
      </RouterLink>
      <a
        className={styles.menuLink}
        href="#"
        aria-label={t("menu.theme")}
        title={t("menu.theme")}
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
      <LanguageToggle icon={<Languages />} />
    </nav>
  );
};

export default Menu;

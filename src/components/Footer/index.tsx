import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import RouterLink from "../RouterLink";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">{t("footer.about")}</RouterLink>
      <RouterLink href="/">
        {t("footer.rights", { year: new Date().getFullYear() })}
      </RouterLink>
    </footer>
  );
};

export default Footer;

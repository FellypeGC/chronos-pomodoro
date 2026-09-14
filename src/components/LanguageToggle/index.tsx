import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import brFlag from "../../assets/flags/br.svg";
import usFlag from "../../assets/flags/us.svg";
import menuStyles from "../Menu/styles.module.css";

type LanguageToggleProps = {
  icon: React.ReactNode;
};

const LanguageToggle = ({ icon }: LanguageToggleProps) => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "en").startsWith("pt") ? "pt" : "en";

  function handleSelect(lang: "pt" | "en") {
    i18n.changeLanguage(lang);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        type="button"
        className={`${menuStyles.menuLink} ${styles.trigger}`}
        aria-label={t("menu.language")}
        title={t("menu.language")}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((p) => !p);
        }}
      >
        {icon}
      </button>

      {open && (
        <div role="listbox" className={styles.dropdown}>
          <button
            role="option"
            aria-selected={currentLang === "en"}
            className={`${styles.option} ${currentLang === "en" ? styles.optionActive : ""}`}
            onClick={() => handleSelect("en")}
          >
            <img src={usFlag} alt="" className={styles.flag} />
            {t("common.english")}
          </button>
          <button
            role="option"
            aria-selected={currentLang === "pt"}
            className={`${styles.option} ${currentLang === "pt" ? styles.optionActive : ""}`}
            onClick={() => handleSelect("pt")}
          >
            <img src={brFlag} alt="" className={styles.flag} />
            {t("common.portuguese")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;

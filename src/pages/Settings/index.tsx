import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";
import DefaultInput from "../../components/DefaultInput/index";
import DefaultButton from "../../components/DefaultButton";
import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import brFlag from "../../assets/flags/br.svg";
import usFlag from "../../assets/flags/us.svg";
import styles from "./styles.module.css";

const Settings = () => {
  const { state, dispatch } = useTaskContext();
  const { t, i18n } = useTranslation();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `${t("settings.title")} - Chronos Pomodoro`;
  }, [t]);

  function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push(t("settings.errors.onlyNumbers"));
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push(t("settings.errors.focusRange"));
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(t("settings.errors.shortRange"));
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push(t("settings.errors.longRange"));
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success(t("settings.saved"));
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>{t("settings.title")}</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>{t("settings.description")}</p>
      </Container>

      <Container>
        <div className={styles.languageSection}>
          <h3 className={styles.languageTitle}>{t("settings.language")}</h3>
          <p className={styles.languageDescription}>
            {t("settings.languageDescription")}
          </p>
          <div className={styles.selectWrapper}>
            <select
              className={styles.languageSelect}
              value={(i18n.resolvedLanguage || i18n.language || "en").startsWith("pt") ? "pt" : "en"}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              aria-label={t("menu.languageLabel")}
            >
              <option value="en">{t("common.english")}</option>
              <option value="pt">{t("common.portuguese")}</option>
            </select>
            <span className={styles.flagPreview}>
              <img
                src={(i18n.resolvedLanguage || i18n.language || "en").startsWith("pt") ? brFlag : usFlag}
                alt=""
                className={styles.flagImg}
              />
            </span>
          </div>
        </div>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText={t("settings.focus")}
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText={t("settings.shortBreak")}
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText={t("settings.longBreak")}
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              type="submit"
              icon={<SaveIcon />}
              aria-label={t("settings.save")}
              title={t("settings.save")}
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};

export default Settings;

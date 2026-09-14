import { useTranslation } from "react-i18next";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import styles from "./styles.module.css";
import { getNextCycleType } from "../../utils/getNextCycleType";

const Cycles = () => {
  const { state } = useTaskContext();
  const { t } = useTranslation();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: t("cycles.focus"),
    shortBreakTime: t("cycles.short"),
    longBreakTime: t("cycles.long"),
  };

  return (
    <div className={styles.cycles}>
      <span>{t("cycles.label")}</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={t("cycles.indicator", { type: cycleDescriptionMap[nextCycleType] })}
              title={t("cycles.indicator", { type: cycleDescriptionMap[nextCycleType] })}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Cycles;

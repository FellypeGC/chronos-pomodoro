import { useTranslation } from "react-i18next";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const Tips = () => {
  const { state } = useTaskContext();
  const { t } = useTranslation();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForActiveTask = {
    workTime: <span>{t("tips.focus", { time: state.config.workTime })}</span>,
    shortBreakTime: <span>{t("tips.shortBreak", { time: state.config.shortBreakTime })}</span>,
    longBreakTime: <span>{t("tips.longBreak")}</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span dangerouslySetInnerHTML={{ __html: t("tips.nextFocus", { time: state.config.workTime }) }} />
    ),
    shortBreakTime: (
      <span>{t("tips.nextShort", { time: state.config.shortBreakTime })}</span>
    ),
    longBreakTime: <span>{t("tips.nextLong")}</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};

export default Tips;

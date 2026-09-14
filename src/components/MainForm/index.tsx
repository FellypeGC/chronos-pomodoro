import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import Tips from "../Tips";
import { showMessage } from "../../adapters/showMessage";

const MainForm = () => {
  const { state, dispatch } = useTaskContext();
  const { t } = useTranslation();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn(t("mainForm.required"));
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showMessage.success(t("mainForm.started"));
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error(t("mainForm.interrupted"));
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labelText={t("mainForm.taskLabel")}
          placeholder={t("mainForm.placeholder")}
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label={t("mainForm.startAria")}
            title={t("mainForm.startAria")}
            type="submit"
            icon={<PlayCircleIcon />}
            key="submit_button"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label={t("mainForm.interruptAria")}
            title={t("mainForm.interruptAria")}
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            key="interrupt_button"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
};

export default MainForm;

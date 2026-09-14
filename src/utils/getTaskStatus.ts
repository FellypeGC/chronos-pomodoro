import type { TaskModel } from "../models/TaskModel";
import i18n from "../i18n";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return i18n.t("history.statuses.complete");
  if (task.interruptDate) return i18n.t("history.statuses.interrupted");
  if (task.id === activeTask?.id) return i18n.t("history.statuses.inProgress");
  return i18n.t("history.statuses.abandoned");
}

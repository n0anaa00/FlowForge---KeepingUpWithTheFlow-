export type AnalyticsEventType =
  | "focus_completed"
  | "task_completed"
  | "achievement_unlocked";

export interface AnalyticsEvent {

  id: number;

  type: AnalyticsEventType;

  timestamp: Date;

  title: string;

  xp: number;
}
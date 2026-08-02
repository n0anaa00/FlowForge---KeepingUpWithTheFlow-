import type { Task } from "../types/Task";

export const mockTasks: Task[] = [
  {
    id: 1,
    title: "Implement Login",
    description: "Create authentication page",
    storyPoints: 3,
    status: "done",
  },
  {
    id: 2,
    title: "Focus Timer",
    description: "Implement Pomodoro timer",
    storyPoints: 5,
    status: "in_progress",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Create KPI widgets",
    storyPoints: 8,
    status: "todo",
  },
  {
    id: 4,
    title: "Achievement System",
    description: "Unlock developer badges",
    storyPoints: 5,
    status: "todo",
    
  },
];
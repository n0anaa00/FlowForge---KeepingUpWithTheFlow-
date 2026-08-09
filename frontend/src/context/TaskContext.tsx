import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type {
  Task,
  TaskStatus,
} from "../types/Task";

import { mockTasks } from "../mock/tasks";

interface TaskContextType {
  tasks: Task[];

  moveTask: (
    id: number,
    status: TaskStatus,
  ) => void;
}

const TaskContext =
  createContext<TaskContextType | undefined>(
    undefined,
  );



interface Props {
  children: ReactNode;
}

export function TaskProvider({
  children,
}: Props) {
  const [tasks, setTasks] =
    useState(mockTasks);

  const moveTask = (
    id: number,
    status: TaskStatus,
  ) => {
    setTasks(previous =>
      previous.map(task =>
        task.id === id
          ? { ...task, status }
          : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context =
    useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside TaskProvider",
    );


    
  }



  
  return context;
}




/* const { addXP } =
useGamification();

const { addEvent } =
useAnalytics();

if(
    task.id===id &&
    status==="done" &&
    task.status!=="done"
){

    addXP(100);

    addEvent({

        id: Date.now(),

        type:"task_completed",

        timestamp:new Date(),

        title:task.title,

        xp:100

    });

} */
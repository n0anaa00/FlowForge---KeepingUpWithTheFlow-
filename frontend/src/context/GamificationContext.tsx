import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Achievement } from "../types/Achievement";

interface GamificationContextType {
  xp: number;
  level: number;
  streak: number;
  achievements: Achievement[];

  addXP: (amount: number) => void;
}

const GamificationContext = createContext<
  GamificationContextType | undefined
>(undefined);

const defaultAchievements: Achievement[] = [
  {
    id: 1,
    title: "First Focus Session",
    description: "Complete your first focus session.",
    unlocked: true,
    xpReward: 50,
  },
  {
    id: 2,
    title: "Sprint Hero",
    description: "Complete 10 tasks.",
    unlocked: false,
    xpReward: 200,
  },
  {
    id: 3,
    title: "Deep Worker",
    description: "Reach 5 hours of focus time.",
    unlocked: false,
    xpReward: 300,
  },
];

interface Props {
  children: ReactNode;
}

export function GamificationProvider({
  children,
}: Props) {
  const [xp, setXp] = useState(50);

  const [level, setLevel] = useState(1);

  const [streak] = useState(1);

  const [achievements] =
    useState(defaultAchievements);

  const addXP = (amount: number) => {
    setXp(previous => {
      const total = previous + amount;

      const newLevel =
        Math.floor(total / 500) + 1;

      setLevel(newLevel);

      return total;
    });
  };

  return (
    <GamificationContext.Provider
      value={{
        xp,
        level,
        streak,
        achievements,
        addXP,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(
    GamificationContext,
  );

  if (!context) {
    throw new Error(
      "useGamification must be used inside GamificationProvider",
    );
  }

  return context;
}
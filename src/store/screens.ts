import { atom } from "jotai";

export type Screen =
  | "introLoading"
  | "outage"
  | "outOfMinutes"
  | "welcome"
  | "instructions"
  | "motivation"
  | "settings"
  | "interviewChat"
  | "conversation"
  | "conversationError"
  | "positiveFeedback"
  | "negativeFeedback"
  | "finalScreen"
  | "sessionEnded";

interface ScreenState {
  currentScreen: Screen;
}

const initialScreenState: ScreenState = {
  currentScreen: "welcome",
};

export const screenAtom = atom<ScreenState>(initialScreenState);

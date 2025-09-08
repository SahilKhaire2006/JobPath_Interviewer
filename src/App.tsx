import { useAtom } from "jotai";
import { screenAtom } from "./store/screens";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  IntroLoading,
  Outage,
  OutOfMinutes,
  Welcome,
  Instructions,
  Motivation,
  InterviewChat,
  FinalScreen,
} from "./screens";

function App() {
  const [{ currentScreen }] = useAtom(screenAtom);

  const renderScreen = () => {
    switch (currentScreen) {
      case "introLoading":
        return <IntroLoading />;
      case "outage":
        return <Outage />;
      case "outOfMinutes":
        return <OutOfMinutes />;
      case "welcome":
        return <Welcome />;
      case "instructions":
        return <Instructions />;
      case "motivation":
        return <Motivation />;
      case "interviewChat":
        return <InterviewChat />;
      case "finalScreen":
        return <FinalScreen />;
      default:
        return <Welcome />;
    }
  };

  return (
    <main className="h-screen bg-gray-50">
      {renderScreen()}
    </main>
  );
}

export default App;

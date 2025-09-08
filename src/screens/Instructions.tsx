import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  Code, 
  RotateCcw, 
  BarChart3 
} from "lucide-react";

export const Instructions: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleReady = () => {
    setScreenState({ currentScreen: "motivation" });
  };

  const instructions = [
    {
      icon: <CheckCircle className="size-6 text-green-500" />,
      text: "You can attempt the interview 3–4 times in a day."
    },
    {
      icon: <Clock className="size-6 text-blue-500" />,
      text: "There is a timer to show how much time the interview is going."
    },
    {
      icon: <FileText className="size-6 text-purple-500" />,
      text: "Be honest with your answers."
    },
    {
      icon: <Code className="size-6 text-orange-500" />,
      text: "Questions will be HR + Technical mixed."
    },
    {
      icon: <RotateCcw className="size-6 text-red-500" />,
      text: "No back option once you answer a question."
    },
    {
      icon: <BarChart3 className="size-6 text-indigo-500" />,
      text: "At the end, you'll get a short feedback/score."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Instructions Before You Begin
          </h1>

          {/* Instructions List */}
          <div className="space-y-6 mb-10">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-shrink-0 mt-1">
                  {instruction.icon}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {instruction.text}
                </p>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-800 text-center italic">
              "Treat it like a real interview experience."
            </p>
          </div>

          {/* Ready Button */}
          <div className="text-center">
            <Button
              onClick={handleReady}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              I'm Ready → Start Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
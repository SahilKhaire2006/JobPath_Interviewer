import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare } from "lucide-react";

export const Welcome: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleStartInterview = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          {/* Illustration */}
          <div className="mb-8">
            <div className="relative mx-auto w-64 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="size-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageSquare className="size-8 text-white" />
              </div>
              <div className="text-6xl">💼</div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to Mock Interview Portal
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            This mock interview will help you practice HR + Technical rounds. Be ready!
          </p>

          {/* Start Button */}
          <Button
            onClick={handleStartInterview}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Interview
          </Button>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">
          Powered by AI • Professional Interview Experience
        </p>
      </div>
    </div>
  );
};
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star } from "lucide-react";

export const Motivation: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleBegin = () => {
    setScreenState({ currentScreen: "interviewChat" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full opacity-15 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20">
          {/* Decorative Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Star className="size-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="size-6 text-white" />
            </div>
          </div>

          {/* Main Quote */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              "Confidence and preparation are the keys to cracking any interview."
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 italic mb-12 max-w-2xl mx-auto">
            "Every mock is a step closer to your real success."
          </p>

          {/* Growth Line Illustration */}
          <div className="mb-12">
            <div className="relative mx-auto w-64 h-16">
              <svg className="w-full h-full" viewBox="0 0 256 64" fill="none">
                <path
                  d="M8 56 L64 40 L128 24 L192 8 L248 8"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <TrendingUp className="size-3 text-white" />
              </div>
            </div>
          </div>

          {/* Begin Button */}
          <Button
            onClick={handleBegin}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Begin
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm mt-8">
          🚀 Your journey to success starts now
        </p>
      </div>
    </div>
  );
};
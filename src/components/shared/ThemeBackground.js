"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const ThemeBackground = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
          style={{
            background: isDark
              ? "linear-gradient(117deg, #1C0028 1.59%, #09152D 97.24%)"
              : "linear-gradient(116deg, #FDFFE0 5.9%, #FFEDEB 93.07%)",
          }}
        />
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed bottom-4 right-4 px-4 py-2 rounded-full border 
        transition-all duration-300 z-[9999] pointer-events-auto 
        ${
          isDark
            ? "bg-white/20 text-white border-white/30 hover:bg-white/30"
            : "bg-black/20 text-black border-black/30 hover:bg-black/30"
        }`}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeBackground;

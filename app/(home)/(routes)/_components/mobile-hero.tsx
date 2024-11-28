"use client";
import { motion } from "framer-motion";
import {
  Menu,
  Dumbbell,
  Flame,
  Waves,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileHero = () => {
  const services = [
    {
      icon: Dumbbell,
      text: "TERETANA",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Flame,
      text: "SAUNA",
      color: "from-orange-500/20 to-yellow-500/20",
    },
    { icon: Waves, text: "MASAŽE", color: "from-blue-500/20 to-cyan-500/20" },
    {
      icon: Trophy,
      text: "PRIVATNI TRENIZI",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="mx-auto flex items-center justify-center relative w-full h-fit spacer layer1 sm:hidden">
      <div className="w-full h-full">
        <div className="relative z-20 pt-32 px-4 flex flex-col items-center text-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <p className="text-xl font-medium text-white mb-16 px-8 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
              Kickboxing • Muay Thai • Boxing
            </p>
          </motion.div>
          {/* Service Icons */}
          <motion.div
            className="grid grid-cols-2 gap-4 w-full max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {services.map(({ icon: Icon, text, color }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className={`w-full h-full flex flex-col items-center gap-3 p-6 bg-gradient-to-br ${color} hover:bg-gradient-to-tl backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group overflow-hidden relative`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
                    animate={{
                      x: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <Icon className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors duration-300" />
                  <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {text}
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="-z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
};

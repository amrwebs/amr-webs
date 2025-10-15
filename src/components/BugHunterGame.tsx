import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bug, Code, X, Trophy, Play, RotateCcw } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface BugItem {
  id: number;
  x: number;
  y: number;
  isBug: boolean;
  speed: number;
}

const LEVEL_CONFIG = [
  { level: 1, bugs: 5, speed: 2000, duration: 15 },
  { level: 2, bugs: 8, speed: 1500, duration: 20 },
  { level: 3, bugs: 12, speed: 1200, duration: 25 },
  { level: 4, bugs: 15, speed: 1000, duration: 30 },
  { level: 5, bugs: 20, speed: 800, duration: 35 },
];

export function BugHunterGame() {
  const { t } = useLanguage();
  const [gameState, setGameState] = useState<"idle" | "playing" | "levelComplete" | "gameOver" | "won">("idle");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [bugs, setBugs] = useState<BugItem[]>([]);
  const [bugsHunted, setBugsHunted] = useState(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const levelConfig = LEVEL_CONFIG[currentLevel - 1];

  // Start game
  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setCurrentLevel(1);
    startLevel(1);
  };

  // Start specific level
  const startLevel = (level: number) => {
    const config = LEVEL_CONFIG[level - 1];
    setTimeLeft(config.duration);
    setBugsHunted(0);
    setBugs([]);
    setGameState("playing");
  };

  // Continue to next level
  const nextLevel = () => {
    if (currentLevel < 5) {
      const newLevel = currentLevel + 1;
      setCurrentLevel(newLevel);
      startLevel(newLevel);
    } else {
      setGameState("won");
    }
  };

  // Restart game
  const restartGame = () => {
    setGameState("idle");
    setScore(0);
    setCurrentLevel(1);
    setBugsHunted(0);
    setBugs([]);
  };

  // Timer countdown
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === "playing" && timeLeft === 0) {
      if (bugsHunted >= levelConfig.bugs) {
        setGameState("levelComplete");
      } else {
        setGameState("gameOver");
      }
    }
  }, [gameState, timeLeft, bugsHunted, levelConfig.bugs]);

  // Spawn bugs
  useEffect(() => {
    if (gameState === "playing" && gameAreaRef.current) {
      const interval = setInterval(() => {
        if (bugs.length < 8) {
          const rect = gameAreaRef.current!.getBoundingClientRect();
          const newBug: BugItem = {
            id: Date.now() + Math.random(),
            x: Math.random() * (rect.width - 60),
            y: Math.random() * (rect.height - 60),
            isBug: Math.random() > 0.3, // 70% are bugs, 30% are code (to avoid)
            speed: levelConfig.speed,
          };
          setBugs((prev) => [...prev, newBug]);
        }
      }, levelConfig.speed);

      return () => clearInterval(interval);
    }
  }, [gameState, bugs.length, levelConfig.speed]);

  // Remove bugs after their lifetime
  useEffect(() => {
    if (gameState === "playing") {
      bugs.forEach((bug) => {
        setTimeout(() => {
          setBugs((prev) => prev.filter((b) => b.id !== bug.id));
        }, bug.speed * 2);
      });
    }
  }, [bugs, gameState]);

  // Handle click on item
  const handleClick = (bug: BugItem) => {
    if (bug.isBug) {
      // Correct - clicked on a bug
      setScore((prev) => prev + 10);
      setBugsHunted((prev) => prev + 1);
      setBugs((prev) => prev.filter((b) => b.id !== bug.id));
    } else {
      // Wrong - clicked on code
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm">
              {t("game.badge")}
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">
            {t("game.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("game.subtitle")}
          </p>
        </motion.div>

        {/* Game Container */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Game Stats Header */}
          {gameState !== "idle" && (
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-gray-500 text-sm mb-1">{t("game.level")}</div>
                  <div className="text-cyan-600">{currentLevel} / 5</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-sm mb-1">{t("game.score")}</div>
                  <div className="text-cyan-600">{score}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-sm mb-1">{t("game.bugs")}</div>
                  <div className="text-cyan-600">
                    {bugsHunted} / {levelConfig.bugs}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-500 text-sm mb-1">{t("game.time")}</div>
                  <div className="text-cyan-600">{timeLeft}s</div>
                </div>
              </div>
              <button
                onClick={restartGame}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <RotateCcw className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}

          {/* Game Area */}
          <div
            ref={gameAreaRef}
            className="relative h-96 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Idle State */}
            {gameState === "idle" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-gray-900 mb-4">
                  {t("game.title")}
                </h3>
                <p className="text-gray-600 mb-8 text-center max-w-md">
                  {t("game.description")} <br />
                  {t("game.complete.levels")}
                </p>
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {t("game.start")}
                </button>
              </motion.div>
            )}

            {/* Playing State */}
            {gameState === "playing" && (
              <AnimatePresence>
                {bugs.map((bug) => (
                  <motion.button
                    key={bug.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    style={{
                      left: bug.x,
                      top: bug.y,
                    }}
                    onClick={() => handleClick(bug)}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
                      bug.isBug
                        ? "bg-red-500/20 border-2 border-red-500"
                        : "bg-green-500/20 border-2 border-green-500"
                    }`}
                  >
                    {bug.isBug ? (
                      <Bug className="w-6 h-6 text-red-400" />
                    ) : (
                      <Code className="w-6 h-6 text-green-400" />
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            )}

            {/* Level Complete State */}
            {gameState === "levelComplete" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/95"
              >
                <Trophy className="w-16 h-16 text-cyan-600 mb-4" />
                <h3 className="text-gray-900 mb-2">
                  {t("game.level.complete").replace("{level}", String(currentLevel))}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("game.score")}: {score}
                </p>
                <button
                  onClick={nextLevel}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {currentLevel < 5 ? t("game.next.level") : t("game.view.result")}
                </button>
              </motion.div>
            )}

            {/* Game Over State */}
            {gameState === "gameOver" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/95"
              >
                <X className="w-16 h-16 text-red-500 mb-4" />
                <h3 className="text-gray-900 mb-2">
                  {t("game.time.up")}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t("game.reached.level").replace("{level}", String(currentLevel))}
                </p>
                <p className="text-gray-600 mb-6">
                  {t("game.total.score")} {score}
                </p>
                <button
                  onClick={restartGame}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  {t("game.play.again")}
                </button>
              </motion.div>
            )}

            {/* Won State */}
            {gameState === "won" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/95"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Trophy className="w-20 h-20 text-cyan-600 mb-4" />
                </motion.div>
                <h3 className="text-gray-900 mb-2">
                  {t("game.congratulations")}
                </h3>
                <p className="text-cyan-600 mb-2">
                  {t("game.all.levels")}
                </p>
                <p className="text-gray-600 mb-6">
                  {t("game.final.score")} {score}
                </p>
                <button
                  onClick={restartGame}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  {t("game.play.again")}
                </button>
              </motion.div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">
                  {t("game.instructions.bugs")} <span className="text-green-600">+10</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">
                  {t("game.instructions.code")} <span className="text-red-500">-5</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

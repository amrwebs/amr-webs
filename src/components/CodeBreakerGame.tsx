import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Play, RotateCcw, Trophy, X, Check, Minus } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Attempt {
  code: number[];
  feedback: ("correct" | "present" | "wrong")[];
}

export function CodeBreakerGame() {
  const { t } = useLanguage();
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [secretCode, setSecretCode] = useState<number[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string[]>(["", "", "", ""]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(10);

  const generateSecretCode = () => {
    const code = [];
    for (let i = 0; i < 4; i++) {
      code.push(Math.floor(Math.random() * 10));
    }
    return code;
  };

  const startGame = () => {
    setSecretCode(generateSecretCode());
    setCurrentGuess(["", "", "", ""]);
    setAttempts([]);
    setAttemptsLeft(10);
    setGameState("playing");
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (value !== "" && (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 9)) return;

    const newGuess = [...currentGuess];
    newGuess[index] = value;
    setCurrentGuess(newGuess);

    // Auto focus next input
    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && currentGuess[index] === "" && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const checkCode = () => {
    if (currentGuess.some((digit) => digit === "")) return;

    const guess = currentGuess.map(Number);
    const feedback: ("correct" | "present" | "wrong")[] = [];
    const secretCopy = [...secretCode];
    const guessCopy = [...guess];

    // First pass: mark correct positions
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretCode[i]) {
        feedback[i] = "correct";
        secretCopy[i] = -1;
        guessCopy[i] = -2;
      }
    }

    // Second pass: mark present but wrong position
    for (let i = 0; i < 4; i++) {
      if (feedback[i] === "correct") continue;
      const index = secretCopy.indexOf(guessCopy[i]);
      if (index !== -1) {
        feedback[i] = "present";
        secretCopy[index] = -1;
      } else {
        feedback[i] = "wrong";
      }
    }

    const newAttempt: Attempt = { code: guess, feedback };
    setAttempts([...attempts, newAttempt]);
    setCurrentGuess(["", "", "", ""]);

    // Check win condition
    if (feedback.every((f) => f === "correct")) {
      setGameState("won");
      return;
    }

    // Check lose condition
    if (attemptsLeft - 1 === 0) {
      setGameState("lost");
      return;
    }

    setAttemptsLeft(attemptsLeft - 1);

    // Focus first input
    setTimeout(() => {
      document.getElementById("code-input-0")?.focus();
    }, 100);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
              {t("codebreaker.badge")}
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">{t("codebreaker.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("codebreaker.subtitle")}
          </p>
        </motion.div>

        {/* Game Container */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Idle State */}
          {gameState === "idle" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">{t("codebreaker.title")}</h3>
              <p className="text-gray-600 mb-8 text-center max-w-md">
                {t("codebreaker.subtitle")}
              </p>
              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                {t("codebreaker.start")}
              </button>
            </motion.div>
          )}

          {/* Playing State */}
          {gameState === "playing" && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="flex justify-between items-center">
                <div className="text-gray-600">
                  {t("codebreaker.attempts")}: <span className="text-cyan-600">{attemptsLeft}</span>
                </div>
                <button
                  onClick={() => setGameState("idle")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Current Guess Input */}
              <div className="flex justify-center gap-3">
                {currentGuess.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-16 h-20 text-center bg-white border-2 border-gray-300 rounded-lg text-gray-900 text-2xl focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={checkCode}
                  disabled={currentGuess.some((d) => d === "")}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {t("codebreaker.submit")}
                </button>
              </div>

              {/* Previous Attempts */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {attempts.map((attempt, attemptIndex) => (
                    <motion.div
                      key={attemptIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
                    >
                      <div className="text-gray-500 text-sm w-8">#{attempts.length - attemptIndex}</div>
                      <div className="flex gap-2">
                        {attempt.code.map((digit, digitIndex) => (
                          <div
                            key={digitIndex}
                            className={`w-12 h-12 flex items-center justify-center rounded-lg ${
                              attempt.feedback[digitIndex] === "correct"
                                ? "bg-green-50 border-2 border-green-500 text-green-700"
                                : attempt.feedback[digitIndex] === "present"
                                ? "bg-yellow-50 border-2 border-yellow-500 text-yellow-700"
                                : "bg-gray-100 border-2 border-gray-300 text-gray-600"
                            }`}
                          >
                            {digit}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {attempt.feedback.map((feedback, feedbackIndex) => (
                          <div key={feedbackIndex}>
                            {feedback === "correct" && <Check className="w-5 h-5 text-green-400" />}
                            {feedback === "present" && <Minus className="w-5 h-5 text-yellow-400" />}
                            {feedback === "wrong" && <X className="w-5 h-5 text-slate-500" />}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Legend */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">{t("codebreaker.correct")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600">{t("codebreaker.present")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{t("codebreaker.wrong")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Won State */}
          {gameState === "won" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Trophy className="w-20 h-20 text-cyan-400 mb-4" />
              </motion.div>
              <h3 className="text-white mb-2">{t("codebreaker.won.title")}</h3>
              <p className="text-slate-400 mb-2">
                {t("codebreaker.won.code")} <span className="text-cyan-400">{secretCode.join("")}</span>
              </p>
              <p className="text-slate-400 mb-6">
                {t("codebreaker.won.attempts").replace("{attempts}", String(10 - attemptsLeft))}
              </p>
              <button
                onClick={startGame}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                {t("game.play.again")}
              </button>
            </motion.div>
          )}

          {/* Lost State */}
          {gameState === "lost" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <X className="w-16 h-16 text-red-400 mb-4" />
              <h3 className="text-white mb-2">{t("codebreaker.lost.title")}</h3>
              <p className="text-slate-400 mb-2">
                {t("codebreaker.lost.code")} <span className="text-cyan-400">{secretCode.join("")}</span>
              </p>
              <p className="text-slate-400 mb-6">{t("codebreaker.lost.message")}</p>
              <button
                onClick={startGame}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                {t("game.play.again")}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

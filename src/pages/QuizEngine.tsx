import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TypeScriptQuestions } from '../data/ChallengeSet';
import { ProgressTracker } from '../components/ProgressTracker';
import { CountdownClock } from '../components/CountdownClock';
import { useChallengeVault } from '../hooks/useChallengeVault';

export const QuizEngine = () => {
  const navigate = useNavigate();
  const { currentStep, recordAnswer, score, isComplete } = useChallengeVault();

  useEffect(() => {
    if (isComplete) {
      navigate('/summary', { state: { score } });
    }
  }, [isComplete, score, navigate]);

  const handleAnswer = (selectedOption: string) => {
    const isCorrect = selectedOption === TypeScriptQuestions[currentStep].answer;
    recordAnswer(isCorrect, TypeScriptQuestions.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-4 md:p-10">
      
      <main className="max-w-2xl w-full">
        {/* Header with Timer */}
        <header className="flex justify-between items-end mb-4 px-2">
          <div className="flex flex-col">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Current Vault Path</span>
            <h2 className="text-xl font-bold text-white">Question {currentStep + 1}</h2>
          </div>
          <CountdownClock onExpire={() => navigate('/summary', { state: { score } })} />
        </header>

        {/* PROGRESS BAR MOVED HERE (Horizontal Top) */}
        <ProgressTracker current={currentStep} total={TypeScriptQuestions.length} />

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-900 p-6 md:p-8 rounded-2x1 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow for the Card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full" />
            
            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-tight relative z-10">
              {TypeScriptQuestions[currentStep].text}
            </h2>
            
            <div className="grid gap-3 relative z-10">
              {TypeScriptQuestions[currentStep].options.map((opt) => (
                <button 
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left p-4 md:p-5 rounded-2xl bg-slate-800/50 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-500 transition-all active:scale-[0.98]"
                >
                  <span className="text-slate-300 group-hover:text-cyan-300">
                    {opt}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-slate-600 text-xs mt-8 uppercase tracking-widest">
          Secure Quiz Session Active
        </p>
      </main>
    </div>
  );
};
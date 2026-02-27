import {useLocation, useNavigate} from 'react-router-dom';
import Confetti from 'react-confetti';
import {Trophy, RefreshCcw} from 'lucide-react';

export const Outcome = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const score = state?.score || 0;

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 overflow-hidden">
            {score >= 7 && <Confetti recycle={false} numberOfPieces={500} />}
            <div className="text-center">
                <Trophy className="mx-auto text-yellow-400 mb-6" size={80} />
                <h1 className="text-5x1 font-black text-white mb-2">Challenge Complete</h1>
                <p className="text-6x1 font-bold text-cyan-400 mb-8">{score}/10</p>

                <button 
                onClick={() => {localStorage.clear(); navigate('/');}}
                className="flex items-center gap-2 mx-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors">
                    <RefreshCcw size={20} /> Try Again
                </button>
            </div>
        </div>
    )
}
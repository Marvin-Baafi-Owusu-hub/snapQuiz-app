import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, ShieldCheck } from 'lucide-react';
import { useChallengeVault } from '../hooks/useChallengeVault';

export const SecretVault = () => {
    const [code, setCode] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { grantedAccess } = useChallengeVault();

    // Set your 4-digit secret key here
    const MASTER_KEY = "2026"; 

    const handleUnlock = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (code === MASTER_KEY) {
            grantedAccess(); 
            navigate('/engine'); 
        } else {
            setIsError(true);
            setCode('');
            setTimeout(() => setIsError(false), 500);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className={`w-full max-w-sm bg-slate-900 border-2 rounded-[2.5rem] p-8 transition-all duration-300 ${
                isError ? 'border-red-500' : 'border-slate-800 shadow-2xl'
            }`}>
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-cyan-500/10 rounded-2xl">
                        <LockKeyhole className={isError ? 'text-red-500' : 'text-cyan-400'} size={32} />
                    </div>
                </div>

                <h2 className="text-white text-2xl font-bold text-center mb-2">Secure Entry</h2>
                <p className="text-slate-500 text-center text-sm mb-8">Enter the secret key to begin your session.</p>

                <form onSubmit={handleUnlock} className="space-y-6">
                    <input 
                        type="text" 
                        inputMode="numeric" // Forces number pad on mobile
                        pattern="\d*"
                        maxLength={4}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 text-center text-4xl tracking-[0.5em] text-white focus:border-cyan-500 outline-none transition-all"
                        placeholder="0000"
                        autoFocus
                    />
                    
                    <button 
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        <ShieldCheck size={20} /> ACCESS QUIZ
                    </button>
                </form>
            </div>
        </div>
    );
};
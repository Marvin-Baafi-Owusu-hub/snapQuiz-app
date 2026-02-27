import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, ArrowRight, AlertCircle } from 'lucide-react';
import { useChallengeVault } from '../hooks/useChallengeVault';

export const SecretVault = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { grantedAccess } = useChallengeVault();

    const SECRET_PIN = "6010"; // Set your desired secret code here

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === SECRET_PIN) {
            grantedAccess(); // Finally set the token in localStorage
            navigate('/engine');
        } else {
            setError(true);
            setCode('');
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-sm w-full bg-slate-900 border border-slate-800 p-8 rounded-2x1 shadow-2xl text-center">
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${error ? 'bg-red-500/20' : 'bg-cyan-500/10'}`}>
                    <LockKeyhole className={error ? 'text-red-500' : 'text-cyan-400'} size={32} />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Access Required</h2>
                <p className="text-slate-400 text-sm mb-8">Enter the 4-digit secret key to unlock the quiz session.</p>

                <form onSubmit={handleUnlock} className="space-y-6">
                    <input 
                        type="password"
                        maxLength={4}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="••••"
                        className="w-full bg-slate-950 border-2 border-slate-800 rounded-xl py-4 text-center text-3xl tracking-[1em] text-cyan-400 focus:border-cyan-500 outline-none transition-all"
                        autoFocus
                    />

                    {error && (
                        <div className="flex items-center justify-center gap-2 text-red-500 text-sm animate-bounce">
                            <AlertCircle size={16} /> Invalid Access Code
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full py-4 bg-white text-slate-950 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
                    >
                        UNLOCK VAULT <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};
import React, { useState } from 'react'; // Added React import for the types
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, ShieldCheck, Fingerprint } from 'lucide-react';
import { useChallengeVault } from '../hooks/useChallengeVault';

export const SecretVault = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { grantedAccess } = useChallengeVault();

    const SECRET_KEY = "2026";

    const handleVerify = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (code === SECRET_KEY) {
            grantedAccess();
            navigate('/engine');
        } else {
            setError(true);
            setCode('');
            if (window.navigator.vibrate) window.navigator.vibrate(200);
            setTimeout(() => setError(false), 2000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
            <div className={`w-full max-w-sm p-8 rounded-[2.5rem] bg-slate-900 border-2 transition-all duration-300 ${
                error ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-slate-800 shadow-2xl'
            }`}>
                
                <div className="flex flex-col items-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${error ? 'bg-red-500/10' : 'bg-cyan-500/10'}`}>
                        {error ? <Fingerprint className="text-red-500" size={32} /> : <LockKeyhole className="text-cyan-400" size={32} />}
                    </div>
                    <h2 className="text-white text-2xl font-black italic tracking-tight">VERIFY IDENTITY</h2>
                    <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-[0.2em] text-center">Enter session key to decrypt quiz</p>
                </div>

                <form onSubmit={handleVerify} className="space-y-6">
                    <input 
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={4}
                        placeholder="••••"
                        value={code}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl py-5 text-center text-4xl tracking-[0.6em] text-cyan-400 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-800/50"
                        autoFocus
                    />

                    <button 
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-cyan-500/10"
                    >
                        <ShieldCheck size={20} /> START SESSION
                    </button>
                </form>
            </div>
        </div>
    );
};
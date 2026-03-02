import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Cpu, Smartphone } from 'lucide-react';

export const Gateway = () => {
    const navigate = useNavigate();

    /** * This automatically detects your hosted URL.
     * When live, it will be: https://snap-quiz-app.vercel.app/
     */
    const quizUrl = window.location.origin; 

    const handleStart = () => {
        navigate('/unlock');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full text-center space-y-8 bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">

                <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
                    <ShieldCheck className="text-cyan-400" size={40} />
                </div>

                <h1 className="text-4xl font-black text-white tracking-tight text-center">
                    SNAP <span className="text-cyan-400">QUIZ</span>
                </h1>

                <p className="text-slate-400 text-sm">
                    Scan to access the private session on your mobile device or click below to start here.
                </p>

                {/* THE QR CODE SECTION */}
                <div className="bg-white p-5 rounded-3xl inline-block shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                    <QRCodeSVG
                        value={quizUrl}
                        size={200}
                        level="H"
                        marginSize={4} 
                    />
                </div>

                <div className="space-y-4 pt-4">
                    <button 
                        onClick={handleStart}
                        className="w-full py-4 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-cyan-900/20"
                    >
                        <Cpu size={20} /> Initialize System
                    </button>

                    <div className="flex flex-col items-center justify-center gap-1 text-slate-500 text-[10px] uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                           <Smartphone size={12} />
                           {/* Replaced hardcoded IP with the actual live URL for the user */}
                           <span>Secure Link: snap-quiz-app.vercel.app</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
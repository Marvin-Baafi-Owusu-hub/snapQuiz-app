import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Cpu, Smartphone } from 'lucide-react';

export const Gateway = () => {
    const navigate = useNavigate();

    // Strategy: The QR code now points directly to the PIN entry page
    // Example: https://snap-quiz-app.vercel.app/unlock
    const quizUrl = `${window.location.origin}/unlock`; 

    const handleStart = () => {
        // If someone wants to play on the laptop, they can still click this
        navigate('/unlock');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8 bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                
                <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
                    <ShieldCheck className="text-cyan-400" size={40} />
                </div>

                <h1 className="text-4xl font-black text-white tracking-tight">
                    SNAP <span className="text-cyan-400">QUIZ</span>
                </h1>

                <p className="text-slate-400 text-sm">
                    Scan with your mobile device to enter the <span className="text-cyan-400 font-bold">Secret Key</span> and begin.
                </p>

                {/* The QR Code - Directing to /unlock */}
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
                        className="w-full py-4 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        <Cpu size={20} /> Use This Device
                    </button>

                    <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest">
                        <Smartphone size={12} />
                        <span>Remote Access: {window.location.hostname}/unlock</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
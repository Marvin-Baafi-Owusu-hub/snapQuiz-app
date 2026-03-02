import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check, Share2 } from 'lucide-react';

export const Gateway = () => {
    const [copied, setCopied] = useState(false);
    
    // The link we want the mobile user to open
    const mobileUrl = `${window.location.origin}/unlock`; 

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(mobileUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans">
            <div className="max-w-sm w-full bg-slate-900 border border-slate-800 p-10 rounded-[3rem] shadow-2xl text-center space-y-8">
                
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-white tracking-tighter">
                        SNAP <span className="text-cyan-400">QUIZ</span>
                    </h1>
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">Host Broadcast Mode</p>
                </div>

                {/* THE QR CODE */}
                <div className="bg-white p-6 rounded-[2.5rem] inline-block shadow-[0_0_60px_rgba(34,211,238,0.15)] transform hover:scale-105 transition-transform duration-500">
                    <QRCodeSVG
                        value={mobileUrl}
                        size={220}
                        level="H"
                        marginSize={2} 
                    />
                </div>

                <div className="space-y-4">
                    <p className="text-slate-400 text-sm px-4">
                        Scan with your mobile device or copy the link to share.
                    </p>

                    {/* COPY BUTTON */}
                    <button 
                        onClick={copyToClipboard}
                        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                            copied 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                            : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                        }`}
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'LINK COPIED' : 'COPY SESSION LINK'}
                    </button>
                </div>

                <div className="pt-4 flex items-center justify-center gap-2 text-slate-600">
                    <Share2 size={14} />
                    <span className="text-[10px] font-mono break-all">{mobileUrl}</span>
                </div>
            </div>
        </div>
    );
};
import { CheckCircle2, Circle, PlayCircle } from 'lucide-react';

export const ProgressTracker = ({ current, total }: { current: number, total: number }) => {
  return (
    <div className="w-full flex justify-between items-center gap-2 mb-6 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          {/* Visual Indicator */}
          <div className={`h-1.5 w-full rounded-full transition-all duration-500 ${
            i < current ? "bg-green-500" : 
            i === current ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : 
            "bg-slate-700"
          }`} />
          
          {/* Icon Section (Hidden on small screens to save space) */}
          <div className="hidden sm:block">
            {i < current ? <CheckCircle2 className="text-green-500" size={14}/> : 
             i === current ? <PlayCircle className="text-cyan-400 animate-pulse" size={14}/> : 
             <Circle className="text-slate-600" size={14}/>}
          </div>
        </div>
      ))}
    </div>
  );
};
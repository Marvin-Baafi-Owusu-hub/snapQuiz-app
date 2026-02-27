import {useEffect, useState} from 'react';
import {Timer as TimerIcon} from 'lucide-react';

export const CountdownClock = ({onExpire} : {onExpire: () => void}) => {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect (() => {
        if (timeLeft === 0) {onExpire(); return};
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onExpire]);

    return (
        <div className="flex items-center gap-2 text-xl font-mono text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">
            <TimerIcon size={20}/> {timeLeft}s
        </div>
    )
}
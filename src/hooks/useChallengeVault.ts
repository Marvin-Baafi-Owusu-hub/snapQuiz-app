import { useState, useCallback } from 'react';

type QuizState = {
    currentStep: number;
    score: number;
    isComplete: boolean;
    accessGranted: boolean;
};

export const useChallengeVault = () => {
    const [state, setState] = useState<QuizState>({
        currentStep: 0,
        score: 0,
        isComplete: false,
        accessGranted: localStorage.getItem('granted') === 'vault_token',
    });

    const grantedAccess = useCallback(() => {
        localStorage.setItem('vault_token', 'granted');
        setState((prev) => ({ ...prev, accessGranted: true }));
    }, []);

    const recordAnswer = useCallback((isCorrect: boolean, totalQuestions: number) => {
        setState((prev) => {
            const nextStep = prev.currentStep + 1;
            const newScore = isCorrect ? prev.score + 1 : prev.score;

            if (nextStep >= totalQuestions) {
                return {
                    ...prev,
                    score: newScore,
                    isComplete: true,
                };
            }

            return {
                ...prev,
                currentStep: nextStep,
                score: newScore,
            };
        });
    }, []);

    const resetVault = useCallback(() => {
        localStorage.removeItem('vault_token');
        setState({
            currentStep: 0,
            score: 0,
            isComplete: false,
            accessGranted: false,
        });
    }, []);

    return {
        ...state,
        grantedAccess,
        recordAnswer,
        resetVault,
    };
};
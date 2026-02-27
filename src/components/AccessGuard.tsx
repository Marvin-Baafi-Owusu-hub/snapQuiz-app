import {Navigate} from 'react-router-dom';

export const AccessGuard = ({children}: {children: React.ReactNode}) => {
    const token = localStorage.getItem('vault_token');
    return token === 'granted' ? children : <Navigate to="/" replace />;
};
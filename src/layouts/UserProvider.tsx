import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface UserContextType {
    token: string;
    updateData: (newData: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState('');

    const updateData = useCallback((newData: string) => {
        setToken(newData);
    }, []);

    return (
        <UserContext.Provider value={{ token, updateData }}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext,UserProvider};
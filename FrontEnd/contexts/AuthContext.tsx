import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from "nookies"

import Router, { useRouter } from 'next/router';

const notPrivatesRoutes = [
    "/registerUser",
]

interface AuthProviderProps {
    children: React.ReactNode
}

type User = {
    id?: string;
    name: string;
    email: string;
    message?: string; 
}

type loginData = {
    user: string;
    password: string;
    keepConnected: boolean;
}

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (login: loginData) => Promise<string>;
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
    const base_URL = process.env.API_BASE_URL;
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const isAuthenticated = !!user;

    useEffect(() => {
        const { "sistema_gerenciamento.token": token } = parseCookies();
        if (token) {
            fetch(base_URL + "auth/getUserFromToken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token })
            }).then(response => {
                response.json().then(response => {
                    setUser(response.user)
                })

            })
        } else{

            const { pathname } = router;

            if(notPrivatesRoutes.indexOf(pathname)){
                Router.push('/login');
            }
        }
    }, [])

    async function signIn({ user, password, keepConnected }: loginData): Promise<string> {

        return fetch(base_URL + "auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user, password, keepConnected })
        }).then(response => {
            if (response.status === 200) {
                return response.json().then(data => {

                    let maxAge = 60 * 60 * 1; // 1 hour

                    if(data.keepConnected){
                        maxAge = 60 * 60 * 24 * 30; // 30 days 
                    }
                    console.log(maxAge)
                    setCookie(undefined, "sistema_gerenciamento.token", data.token, {
                        maxAge: maxAge
                    });

                    const userData = {
                        name: data.name,
                        email: data.email
                    };

                    setUser(userData);

                    Router.push("/dashboard");

                    return data.message
                });
            } else if (response.status === 401) {
                return response.json().then(data => {
                    return data.message
                })
            } else {
                return response.json().then(data => {
                    return data.message
                })
            }
        }).catch(error => {
            return error.message || "Erro interno do servidor"
        })
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
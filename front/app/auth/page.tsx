"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {
    const router = useRouter();

    const [isLogin, setIsClass] = useState(true);
    const [isSuccessLogin, setIsSuccessLogin] = useState(true);
    const [isSuccessRegister, setIsSuccessRegister] = useState(true);

    const [email, setEmail] = useState<string>('');
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
    };
    const [username, setUsername] = useState<string>('');
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
};
    const [password, setPassword] = useState<string>('');
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
};


    const clickHandler = () => {
        setIsClass(isLogin => { return !isLogin });
        setIsSuccessLogin(true);
        setIsSuccessRegister(true);
    }

    type SignInResponse = {
        token: string;
        type: string;
        id: number;
        username: string;
        roles: string[]
    };

    const handleLogin = async () => {
        try {
            const { data, status } = await axios.post<SignInResponse>(
                'http://localhost:8080/login',
                {
                    login: username,
                    password: password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
            setIsSuccessLogin(true);
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("user_id", String(data.id));
            console.log(data.token);
            router.push('/problems');
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setIsSuccessLogin(false)
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    };

    type SignUpResponse = {
    };

    const handleRegister = async () => {
        try {
            const { data, status } = await axios.post<SignUpResponse>(
                'http://localhost:8080/signup',
                {
                    email: email,
                    login: username,
                    password: password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
            setIsSuccessRegister(true);
            handleLogin();
            console.log(data);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setIsSuccessRegister(false)
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    };

    return (
        <>
            <div>
                <div className='flex flex-col h-screen items-center justify-center'>
                    <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                            <div className="flex flex-col justify-center">
                                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">Here at Сrazecode we offers a wide range of programming problems, each with varying levels of difficulty, covering topics such as algorithms, data structures, and problem-solving techniques.</p>
                                <a href="#" className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center">Read more about our app
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {isLogin ? "Sign in to Crazecode" : "Sign up to Crazecode"}

                                    </h2>
                                    <div className="mt-8 space-y-6">
                                        <div className={isLogin ? "hidden" : ""}>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                            <input onChange={handleEmail} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900">Your login</label>
                                            <input onChange={handleUsername} value={username} type="login" name="login" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="username" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                            <input onChange={handlePassword} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                        </div>
                                        <p className={isSuccessLogin ? "hidden" : "mt-2 text-sm text-red-700"}><span className="font-medium">Login and password are incorrect!</span></p>
                                        <p className={isSuccessRegister ? "hidden" : "mt-2 text-sm text-red-700"}><span className="font-medium">This user already exists!</span></p>
                                        <div className='flex items-center'>
                                            <button onClick={isLogin ? handleLogin : handleRegister} type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">{isLogin ? "Login to your account" : "Create your account"}</button>
                                            <a href="#" className="cursor-pointer ms-auto text-sm font-medium text-blue-600 hover:underline">Lost Password?</a>
                                        </div>
                                        <div className="text-sm font-medium text-gray-900">
                                            {isLogin ? "Not registered yet?" : "Already registered?"} <a className="text-blue-600 hover:underline cursor-pointer" onClick={clickHandler}>{isLogin ? "Create account" : "Login to your account"}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AuthPage;
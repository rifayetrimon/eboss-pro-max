'use client';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconEye from '@/components/icon/icon-eye';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ComponentLogin = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === '12345') {
            router.push('/auth/first-time-login');
        } else {
            router.push('/');
        }
    };

    return (
        <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
            <div>
                <label htmlFor="Username">Username</label>
                <div className="relative text-white-dark">
                    <input
                        id="Username"
                        type="text"
                        placeholder="Enter username / mobile number"
                        className="form-input ps-10 placeholder:text-white-dark"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="Password">Password</label>
                <div className="relative text-white-dark">
                    <input
                        id="Password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Password"
                        className="form-input ps-10 pe-10 placeholder:text-white-dark"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconLockDots fill={true} />
                    </span>
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute end-4 top-1/2 -translate-y-1/2"
                        tabIndex={-1}
                    >
                        <IconEye />
                    </button>
                </div>
            </div>

            <div>
                <label className="flex cursor-pointer items-center">
                    <input type="checkbox" className="form-checkbox bg-white dark:bg-black" />
                    <span className="text-white-dark">Remember me</span>
                </label>
            </div>

            <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                Sign in
            </button>
        </form>
    );
};

export default ComponentLogin;

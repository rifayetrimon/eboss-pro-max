'use client';

import ComponentLogin from '@/components/(auth)/component-login';
import LanguageDropdown from '@/components/language-dropdown';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Alert from '@/components/ui/alert';
import { useRouter } from 'next/navigation';
import AppCodeGuard from '@/components/guards/AppcodeGurad';

const Login = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const status = searchParams.get('status');

        if (status === 'success') {
            setShowSuccess(true);

            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            const url = new URL(window.location.href);
            url.searchParams.delete('status');
            window.history.replaceState({}, '', url.toString());

            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    return (
        <AppCodeGuard>
            <div className="relative">
                <div className="absolute inset-0">
                    <img src="/assets/images/auth/bg-gradient.png" alt="background" className="h-full w-full object-cover" />
                </div>

                <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <img src="/assets/images/auth/coming-soon-object1.png" alt="object1" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                    <img src="/assets/images/auth/coming-soon-object2.png" alt="object2" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                    <img src="/assets/images/auth/coming-soon-object3.png" alt="object3" className="absolute right-0 top-0 h-[300px]" />
                    <img src="/assets/images/auth/polygon-object.svg" alt="polygon" className="absolute bottom-0 end-[28%]" />

                    <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                        <div className="relative flex flex-col justify-center rounded-md bg-white/60 px-6 py-20 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px]">
                            <div className="absolute end-6 top-6">
                                <LanguageDropdown />
                            </div>

                            <div className="mx-auto w-full max-w-[440px]">
                                {/* ✅ Alerts */}
                                <div className="min-h-[56px] mb-5 space-y-2">
                                    <Alert type="success" message="Password has been set successfully." show={showSuccess} onClose={() => setShowSuccess(false)} />
                                    <Alert type="danger" message={errorMessage} show={!!errorMessage} onClose={() => setErrorMessage('')} />
                                </div>

                                <div className="mb-10">
                                    <h1 className="text-left text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign in</h1>
                                    <p className="text-left text-base font-bold leading-normal text-white-dark">Enter your username and password to login</p>
                                </div>

                                <ComponentLogin setErrorMessage={setErrorMessage} />

                                <div className="relative my-7 text-center md:mb-9">
                                    <Link href="/auth/forgot-password" className="text-sm text-primary transition hover:text-black dark:hover:text-white">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="relative my-7 text-center md:mb-9">
                                    <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#d1d5db] dark:bg-[#4b5563]"></span>
                                    <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">or</span>
                                </div>

                                <div className="text-center dark:text-white">
                                    Don&apos;t have an account?{' '}
                                    <Link href="/auth/boxed-signup" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                        SIGN UP
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppCodeGuard>
    );
};

export default Login;

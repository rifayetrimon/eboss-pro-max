// components/layouts/AuthLayout.tsx
'use client';

import { basePath } from '@/lib/basePath';
import LanguageDropdown from '@/components/language-dropdown';
import { useRouter } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
    showBackButton?: boolean; // show or hide back button
    backToAppCode?: boolean; // true = go to /auth/appcode, false = go back
}

export default function AuthLayout({ children, showBackButton = true, backToAppCode = false }: AuthLayoutProps) {
    const router = useRouter();

    return (
        <div className="relative">
            {/* Background Layer */}
            <div className="absolute inset-0">
                <img src={`${basePath}/assets/images/auth/bg-gradient.png`} alt="background" className="h-full w-full object-cover" />
            </div>

            <div
                className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
                style={{ backgroundImage: `url(${basePath}/assets/images/auth/map.png)` }}
            >
                {/* Decorative Images */}
                <img src={`${basePath}/assets/images/auth/coming-soon-object1.png`} alt="object1" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                <img src={`${basePath}/assets/images/auth/coming-soon-object2.png`} alt="object2" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <img src={`${basePath}/assets/images/auth/coming-soon-object3.png`} alt="object3" className="absolute right-0 top-0 h-[300px]" />
                <img src={`${basePath}/assets/images/auth/polygon-object.svg`} alt="polygon" className="absolute bottom-0 end-[28%]" />

                {/* Main Card */}
                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 px-6 py-20 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px]">
                        {/* Top Bar */}
                        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                            {showBackButton && (
                                <button type="button" onClick={() => (backToAppCode ? router.push('/auth/appcode') : router.back())} className="text-white hover:text-gray-300">
                                    <FaArrowLeftLong className="text-xl text-white-dark" />
                                </button>
                            )}
                            <LanguageDropdown />
                        </div>

                        {/* Page Content */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

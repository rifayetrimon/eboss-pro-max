'use client';

import AppCodeGuard from '@/components/guards/AppcodeGurad';
import LanguageDropdown from '@/components/language-dropdown';
import { basePath } from '@/lib/basePath';
import { useRouter } from 'next/navigation';

const ForgetPassword = () => {
    const router = useRouter();

    const firstTimeLogin = (method: 'sms' | 'email') => {
        router.push(`/auth/otp?method=${method}`);
    };

    return (
        <AppCodeGuard>
            <div>
                <div className="absolute inset-0">
                    <img src={`${basePath}/assets/images/auth/bg-gradient.png`} alt="image" className="h-full w-full object-cover" />
                </div>

                <div
                    className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
                    style={{ backgroundImage: `url(${basePath}/assets/images/auth/map.png)` }}
                >
                    <img src={`${basePath}/assets/images/auth/coming-soon-object1.png`} alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                    <img src={`${basePath}/assets/images/auth/coming-soon-object2.png`} alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                    <img src={`${basePath}/assets/images/auth/coming-soon-object3.png`} alt="image" className="absolute right-0 top-0 h-[300px]" />
                    <img src={`${basePath}/assets/images/auth/polygon-object.svg`} alt="image" className="absolute bottom-0 end-[28%]" />

                    <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                        <div className="relative flex flex-col justify-center rounded-md bg-white/60 px-6 py-20 backdrop-blur-lg dark:bg-black/50 lg:min-h-[500px]">
                            <div className="absolute end-6 top-6">
                                <LanguageDropdown />
                            </div>
                            <div className="mx-auto w-full max-w-[440px]">
                                <div className="mb-7 text-left">
                                    <h1 className="mb-3 text-2xl font-bold !leading-snug dark:text-white">Password Reset</h1>
                                    <p>Choose how you want to receive your OTP</p>
                                </div>

                                <div className="space-y-5">
                                    <button onClick={() => firstTimeLogin('sms')} className="btn btn-gradient w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                        Request SMS OTP
                                    </button>

                                    <button onClick={() => firstTimeLogin('email')} className="btn btn-gradient w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                        Request Email OTP
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppCodeGuard>
    );
};

export default ForgetPassword;

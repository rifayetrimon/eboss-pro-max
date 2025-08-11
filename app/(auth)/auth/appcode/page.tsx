'use client';

import ComponentAppCodeForm from '@/components/(auth)/component-appcode';
import LanguageDropdown from '@/components/language-dropdown';
import Alert from '@/components/ui/alert';
import { assetPath } from '@/utails/url';
import Image from 'next/image';
import { useState } from 'react';

const AppCodePage = () => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleError = (msg: string) => {
        setErrorMessage(msg);
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 3000);
    };

    // Temporary debug - remove in production
    console.log('Asset paths:');
    console.log('Object3:', assetPath('/assets/images/auth/coming-soon-object3.png'));
    console.log('Map:', assetPath('/assets/images/auth/map.png'));

    return (
        <div>
            <div className="absolute inset-0">
                <Image src={assetPath('/assets/images/auth/coming-soon-object3.png')} alt="image" fill className="object-cover" />
            </div>

            <div
                className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16"
                style={{
                    backgroundImage: `url(${assetPath('/assets/images/auth/map.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Image src={assetPath('/assets/images/auth/coming-soon-object1.png')} alt="image" fill className="absolute left-0 top-1/2 -translate-y-1/2 object-contain" />
                <Image src={assetPath('/assets/images/auth/coming-soon-object2.png')} alt="image" width={160} height={160} className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <Image src={assetPath('/assets/images/auth/coming-soon-object3.png')} alt="image" width={300} height={300} className="absolute right-0 top-0" />
                <Image src={assetPath('/assets/images/auth/polygon-object.svg')} alt="image" width={200} height={200} className="absolute bottom-0 end-[28%]" />

                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 px-6 py-20 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px]">
                        <div className="absolute end-6 top-6">
                            <LanguageDropdown />
                        </div>

                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="min-h-[56px] mb-5">
                                <Alert type="danger" message={errorMessage} show={showError} onClose={() => setShowError(false)} />
                            </div>

                            <div className="mb-7">
                                <h1 className="mb-3 text-2xl font-bold !leading-snug dark:text-white">App Code</h1>
                                <p>Enter your app code to access the system</p>
                            </div>

                            <ComponentAppCodeForm onErrorMessage={handleError} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCodePage;

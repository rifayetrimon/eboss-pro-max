'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const LoginGuard = ({ children }: Props) => {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      router.replace('/auth/login'); // redirect to login if not authenticated
    } else {
      setIsAllowed(true); // allow rendering if logged in
    }
  }, [router]);

  if (!isAllowed) return null;

  return <>{children}</>;
};

export default LoginGuard;

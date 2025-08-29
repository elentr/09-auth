'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AuthLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
    setIsLoading(false);
  }, [router]);

  return isLoading ? 'Loading...' : children;
}

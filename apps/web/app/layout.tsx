"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Cookies from "js-cookie";
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppRouterCacheProvider>
            <AuthGuard>{children}</AuthGuard>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/auth");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return <>{children}</>;
}

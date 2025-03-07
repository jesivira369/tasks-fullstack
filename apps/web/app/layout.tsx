"use client";

"use client";

import { usePathname, useRouter } from "next/navigation";
import { Providers } from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en">
      <body>
        <Providers>
          <AppRouterCacheProvider>
            {isAuthPage ? children : <AuthGuard>{children}</AuthGuard>}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token && pathname !== "/auth") {
      router.push("/auth");
    } else {
      setLoading(false);
    }
  }, [router, pathname]);

  if (loading) return <p>Cargando...</p>;

  return <>{children}</>;
}

import Page from "@/components/page";
import ProtectedRoute from "@/components/protectedRoute";
import { AuthContextProvider } from "@/context/authContext";
import { ThemeProvider } from "@/ui-library/themeProvider/themeProvider";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noAuthRequired = ["/", "/[log]"];
  return (
    <AuthContextProvider>
      <ThemeProvider>
        <Page>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Page>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

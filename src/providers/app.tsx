import * as React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "@/components/Elements";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const queryClient = new QueryClient();
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    <Spinner />
                </div>
            }
        >
            <QueryClientProvider client={queryClient}>
                <Router>{children}</Router>
            </QueryClientProvider>
        </React.Suspense>
    );
};

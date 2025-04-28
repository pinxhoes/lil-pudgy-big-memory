"use client";

import { AuthProvider } from '@/app/providers/AuthProvider';

export default function PlayLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider> {/* ✅ wrap here */}
            <div>
                <main>{children}</main>
            </div>
        </AuthProvider>
    )
}
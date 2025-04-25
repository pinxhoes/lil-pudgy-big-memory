'use client';

import { useState } from 'react';

export default function Register({ onClose, onSwitchToRegister }: {
    onClose: () => void; onSwitchToRegister: () => void;
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ username, password });
    };

    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="relative bg-[#4C6377]/90 w-[90%] max-w-md h-[50vh] rounded-[30px] shadow-xl px-6 py-8 overflow-y-auto animate-slide-down sm:animate-none flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-5xl text-center mb-20">WELCOME BACK!</h2>
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full rounded-full px-4 py-2 text-blue-950 bg-amber-50 placeholder:text-sm placeholder:font-bold"
                                required
                            />

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full rounded-full px-4 py-2 text-blue-950 bg-amber-50 placeholder:text-sm placeholder:font-bold"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full mt-4 bg-gradient-to-b from-[#fcd34d] to-[#f59e0b] text-white font-wedges text-lg rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.25)] px-6 py-3 active:scale-95 hover:brightness-110 transition-transform"
                            >
                                LOG IN
                            </button>
                        </form>
                    </div>
                </div>

                <p className="text-center text-sm mt-6">
                    DONT HAVE AN ACCOUNT?{' '}
                    <button
                        onClick={onSwitchToRegister}
                        className="text-[#C3934F] font-wedges transition-transform duration-150 hover:scale-110 active:scale-95"
                    >
                        SIGN UP
                    </button>
                </p>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-5xl drop-shadow-md font-bold text-white z-10 transition-transform duration-150 hover:scale-125 active:scale-90"
                >
                    ×
                </button>
            </div>
        </div>
    );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
            {/* Logo */}
            <div>
                <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3">
                <button className="px-7 py-2 rounded border border-primary text-black flex gap-2 items-center text-lg font-semibold">
                    <span>1800</span> <span>000</span> <span>0299</span>
                </button>
                <button className="px-7 py-2 text-white bg-primary rounded text-lg font-semibold">
                    Contact Sales
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
                className="md:hidden text-black"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full w-full right-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-3 z-50">
                    <button className="px-4 py-2 rounded border border-primary text-black flex gap-2 items-center justify-center text-base font-semibold">
                        <span>1800</span> <span>000</span> <span>0299</span>
                    </button>
                    <button className="px-4 py-2 text-white bg-primary rounded text-base font-semibold">
                        Contact Sales
                    </button>
                </div>
            )}
        </header>
    );
}

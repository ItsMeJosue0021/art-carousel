import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="w-full flex min-h-screen flex-col items-center bg-[#01161e] dark:bg-gray-900">
            {children}
        </div>
    );
}

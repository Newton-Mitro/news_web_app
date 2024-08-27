import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome"/>
            <header className="">
                <nav className="text-red-400 flex gap-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className=""
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className=""
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className=""
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
}

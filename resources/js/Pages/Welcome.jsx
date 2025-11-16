import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen bg-gray-50 text-gray-800">
                {/* Navbar */}
                <header className="border-b bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/build/assets/application-logo.svg"
                                alt="Logo"
                                className="h-8 w-8"
                            />
                            <span className="text-lg font-semibold">
                                Todos App
                            </span>
                        </div>

                        <nav className="flex gap-4 text-sm">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Welcome to Your Todos App
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Manage your tasks, stay productive, and keep
                            everything organized.
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <img
                            src="/build/assets/background.svg"
                            className="w-full max-w-3xl opacity-90"
                            alt="Hero Background"
                        />
                    </div>
                </section>

                {/* Grid Section */}
                <section className="mx-auto max-w-7xl px-6 pb-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-2 font-semibold text-gray-900">
                                <img
                                    src="/build/assets/docs-light.svg"
                                    className="hidden h-6 w-6 dark:block"
                                    alt=""
                                />
                                <img
                                    src="/build/assets/docs-dark.svg"
                                    className="block h-6 w-6 dark:hidden"
                                    alt=""
                                />
                                Documentation
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Everything you need to know about how to use
                                Laravel efficiently.
                            </p>
                            <a
                                href="https://laravel.com/docs"
                                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
                            >
                                Explore docs →
                            </a>
                        </div>

                        <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-2 font-semibold text-gray-900">
                                Ecosystem
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Explore Laravel Jetstream, Livewire, Breeze,
                                Forge, Vapor, and more.
                            </p>
                            <a
                                href="https://laravel.com"
                                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
                            >
                                Learn more →
                            </a>
                        </div>

                        <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-2 font-semibold text-gray-900">
                                Tutorials
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Fast-track your development with high-quality
                                learning resources.
                            </p>
                            <a
                                href="https://laracasts.com"
                                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
                            >
                                Watch tutorials →
                            </a>
                        </div>

                        <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-2 font-semibold text-gray-900">
                                Community
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Join a global community of passionate
                                developers.
                            </p>
                            <a
                                href="https://github.com/laravel"
                                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
                            >
                                Visit community →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

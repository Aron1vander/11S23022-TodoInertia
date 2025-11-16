import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-10">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-10 relative">
                    {/* link register pojok kanan */}

                    {/* Logo + Judul */}
                    <div className="flex flex-col items-center gap-1 mb-10">
                        <div className="h-14 w-14 rounded-xl bg-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
                            TI
                        </div>

                        <h2 className="text-2xl font-semibold text-slate-900 mt-2">
                            Selamat datang 👋
                        </h2>

                        <p className="text-sm text-slate-600">
                            Silakan login untuk melanjutkan
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm text-green-700 bg-green-100 border border-green-200 p-2 rounded-lg text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                autoComplete="username"
                                required
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password + toggle */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm pr-12"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    autoComplete="current-password"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute inset-y-0 right-0 px-3 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Remember + forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="rounded border-slate-300 text-indigo-700 focus:ring-indigo-600/30"
                                />
                                Remember me
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-indigo-700 hover:underline"
                                >
                                    Lupa password?
                                </Link>
                            )}
                        </div>

                        {/* Tombol login */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-xl bg-indigo-700 text-white py-3 font-medium hover:bg-indigo-800 transition shadow-lg disabled:opacity-60"
                        >
                            {processing ? "Masuk..." : "Log in"}
                        </button>
                    </form>

                    {/* Daftar di bawah */}
                    <p className="text-center text-sm text-slate-600 mt-8">
                        Belum punya akun?{" "}
                        <Link
                            href={route("register")}
                            className="text-indigo-700 font-semibold hover:underline"
                        >
                            Daftar
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

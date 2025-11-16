import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-10">
                <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-10">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-2 mb-10">
                        <div className="h-14 w-14 rounded-xl bg-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
                            TI
                        </div>

                        <h2 className="text-2xl font-semibold text-slate-900">
                            Buat Akun Baru ✨
                        </h2>

                        <p className="text-sm text-slate-600">
                            Isi data di bawah ini untuk melanjutkan
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        {/* NAME */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Nama
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                autoComplete="name"
                                className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm"
                                required
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                autoComplete="username"
                                className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm"
                                required
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    autoComplete="new-password"
                                    className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm pr-12"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* PASSWORD CONFIRMATION */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Konfirmasi Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password_confirmation"
                                    type={showPassword2 ? "text" : "password"}
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    autoComplete="new-password"
                                    className="w-full rounded-xl border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/30 shadow-sm pr-12"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword2((v) => !v)}
                                    className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword2 ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            {errors.password_confirmation && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-xl bg-indigo-700 text-white py-3 font-medium hover:bg-indigo-800 transition shadow-lg disabled:opacity-60"
                        >
                            {processing ? "Mendaftar..." : "Daftar"}
                        </button>
                    </form>

                    {/* Link ke login */}
                    <p className="text-center text-sm text-slate-600 mt-8">
                        Sudah punya akun?{" "}
                        <Link
                            href={route("login")}
                            className="text-indigo-700 font-semibold hover:underline"
                        >
                            Masuk
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

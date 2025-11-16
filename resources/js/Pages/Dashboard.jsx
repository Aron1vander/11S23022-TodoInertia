import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                            Modul Praktikum
                        </p>
                        <h2 className="mt-1 text-xl font-semibold text-slate-900">
                            E. Aktivitas Praktikum
                        </h2>
                    </div>

                    <span className="hidden rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white sm:inline-flex">
                        PABWE – Laravel Inertia
                    </span>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
                    {/* HERO */}
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-sky-500 p-8 shadow-md">
                        <div className="space-y-3 text-white">
                            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                                Praktikum 5.1
                            </span>

                            <h1 className="text-3xl font-semibold tracking-tight">
                                5.1 Fitur Todos – Laravel Inertia
                            </h1>

                            <p className="max-w-2xl text-sm text-blue-50 leading-relaxed">
                                Pada tahap{" "}
                                <span className="font-semibold">4.1</span> kamu
                                telah mengimplementasikan fitur autentikasi
                                menggunakan Laravel Inertia. Sekarang lengkapi
                                fitur Todos untuk menambahkan aktivitas yang
                                akan dilakukan oleh pengguna.
                            </p>
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Kolom Kiri */}
                        <div className="space-y-8 lg:col-span-2">
                            {/* Card Kebutuhan Utama */}
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-base font-semibold text-slate-900">
                                            Kebutuhan Utama
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Fitur minimal yang wajib berfungsi.
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                                        Wajib
                                    </span>
                                </div>

                                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                                    {[
                                        "Tambah Data",
                                        "Ubah Data",
                                        "Hapus Data",
                                        "Mengubah Cover",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                                                {i + 1}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Card Lanjutan */}
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="text-base font-semibold text-slate-900">
                                            Kebutuhan Lanjutan
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Untuk nilai & pengalaman
                                            pengembangan yang lebih baik.
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                                        Plus
                                    </span>
                                </div>

                                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                                    <li>Pencarian dan Filter Data</li>
                                    <li>
                                        Pagination maksimal 20 data per halaman
                                    </li>
                                    <li>
                                        Alert tindakan memakai{" "}
                                        <a
                                            href="https://sweetalert2.github.io/"
                                            className="font-medium text-blue-600 underline"
                                            target="_blank"
                                        >
                                            SweetAlert2
                                        </a>
                                    </li>
                                    <li>
                                        Statistik menggunakan{" "}
                                        <a
                                            href="https://apexcharts.com/"
                                            className="font-medium text-blue-600 underline"
                                            target="_blank"
                                        >
                                            ApexCharts
                                        </a>
                                    </li>

                                    <li className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4 leading-relaxed">
                                        <span className="font-semibold text-yellow-900">
                                            Catatan wajib menggunakan Trix
                                            Editor
                                        </span>{" "}
                                        (
                                        <a
                                            href="https://trix-editor.org/"
                                            className="text-blue-700 underline font-medium"
                                        >
                                            https://trix-editor.org/
                                        </a>
                                        )
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Kolom Kanan – Artefak */}
                        <div className="space-y-8">
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                                <h2 className="text-base font-semibold text-slate-900">
                                    5.2 Artefak Dikumpulkan
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Pastikan semua artefak berikut siap sebelum
                                    pengumpulan.
                                </p>

                                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                                    {[
                                        "Repository Github",
                                        "URL hasil deploy",
                                        "Video presentasi (untuk yang tidak bisa deploy)",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                                                {i + 1}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <p className="text-xs text-slate-400">
                                © 2025 Delcom Labs. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

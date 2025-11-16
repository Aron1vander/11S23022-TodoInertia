/* resources/js/Pages/Todos/Index.jsx
   Neo-Modern Dashboard (Glassmorphism + Soft Shadows)
   - Logika tidak diubah (router, post/delete, pagination, charts tetap sama)
   - Hanya styling / markup yang dirombak
*/
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Chart from "react-apexcharts";

export default function Index({
    todos,
    filters,
    stats = { done: 0, pending: 0 },
    flash,
}) {
    useEffect(() => {
        if (flash?.success) {
            Swal.fire("Berhasil", flash.success, "success");
        }
    }, [flash]);

    const onSearch = (e) => {
        e.preventDefault();
        router.get(
            route("todos.index"),
            {
                q: e.target.q.value,
                status: e.target.status.value,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const getNumber = (index) => {
        if (typeof todos.from !== "undefined" && todos.from !== null) {
            return todos.from + index;
        }
        const current = todos.current_page || 1;
        const perPage = todos.per_page || todos.data.length || 1;
        return (current - 1) * perPage + (index + 1);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                            Modul Todos
                        </p>
                        <h2 className="mt-1 text-xl font-bold text-slate-900">
                            Manajemen Aktivitas
                        </h2>
                    </div>

                    <Link
                        href={route("todos.create")}
                        className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-2 text-xs font-medium text-white shadow-lg hover:brightness-95 transition"
                    >
                        + Tambah Todo
                    </Link>
                </div>
            }
        >
            <Head title="Todo List" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
                    {/* FILTER (glass card) */}
                    <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-white/40 p-5 shadow-soft">
                        <form
                            onSubmit={onSearch}
                            className="grid gap-4 md:grid-cols-[1fr,200px,auto,auto] items-end"
                        >
                            <div>
                                <label className="text-xs font-medium text-slate-600">
                                    Pencarian
                                </label>
                                <input
                                    name="q"
                                    defaultValue={filters?.q || ""}
                                    placeholder="Cari judul todo..."
                                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-slate-600">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    defaultValue={filters?.status || ""}
                                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                >
                                    <option value="">Semua status</option>
                                    <option value="done">Selesai</option>
                                    <option value="pending">Belum</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-md hover:scale-[1.01] transition transform"
                            >
                                Terapkan
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    router.get(
                                        route("todos.index"),
                                        {},
                                        { preserveState: true }
                                    )
                                }
                                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
                            >
                                Reset
                            </button>
                        </form>
                    </div>

                    {/* GRID */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* LEFT: List */}
                        <div className="lg:col-span-2 space-y-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        Daftar Todo
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        {todos.total} total todo —{" "}
                                        {todos.data.length} tampil
                                    </p>
                                </div>

                                {/* responsive add button for small screens */}
                                <Link
                                    href={route("todos.create")}
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-3 py-1.5 text-xs font-medium text-white shadow-md sm:hidden"
                                >
                                    + Todo
                                </Link>
                            </div>

                            {/* empty state */}
                            {todos.data.length === 0 && (
                                <div className="rounded-2xl border border-slate-200 bg-white/60 p-8 text-center text-sm text-slate-400 shadow-sm">
                                    Tidak ada todo yang cocok dengan filter.
                                </div>
                            )}

                            {/* list */}
                            {todos.data.map((todo, index) => (
                                <article
                                    key={todo.id}
                                    className="group rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 p-5 shadow-soft flex flex-col sm:flex-row gap-4 justify-between transition hover:shadow-md"
                                >
                                    {/* left */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                                                {getNumber(index)}
                                            </span>

                                            <Link
                                                href={route(
                                                    "todos.show",
                                                    todo.id
                                                )}
                                                className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition"
                                            >
                                                {todo.title}
                                            </Link>
                                        </div>

                                        <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                                            <span>
                                                Dibuat: {todo.created_at}
                                            </span>
                                            <span>•</span>
                                            <span>ID: {todo.id}</span>
                                        </div>
                                    </div>

                                    {/* right */}
                                    <div className="flex flex-col items-end gap-3">
                                        {todo.cover ? (
                                            <img
                                                src={`/storage/${todo.cover}`}
                                                alt={todo.title}
                                                className="h-16 w-16 rounded-lg border border-slate-200 object-cover shadow-sm"
                                            />
                                        ) : (
                                            <div className="h-16 w-16 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-[10px] text-slate-400">
                                                No Cover
                                            </div>
                                        )}

                                        <span
                                            className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                                                todo.is_done
                                                    ? "bg-sky-50 text-sky-700"
                                                    : "bg-slate-100 text-slate-600"
                                            }`}
                                        >
                                            {todo.is_done ? "Selesai" : "Belum"}
                                        </span>

                                        <div className="flex gap-2 text-[11px]">
                                            <Link
                                                href={route(
                                                    "todos.edit",
                                                    todo.id
                                                )}
                                                className="rounded-lg border border-sky-100 px-3 py-1 font-medium text-sky-600 hover:bg-sky-50 transition"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Hapus?",
                                                        text: "Yakin ingin menghapus todo ini?",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonText:
                                                            "Ya, hapus",
                                                        cancelButtonText:
                                                            "Batal",
                                                    }).then((res) => {
                                                        if (res.isConfirmed) {
                                                            router.delete(
                                                                route(
                                                                    "todos.destroy",
                                                                    todo.id
                                                                ),
                                                                {
                                                                    preserveScroll: true,
                                                                }
                                                            );
                                                        }
                                                    });
                                                }}
                                                className="rounded-lg border border-rose-100 px-3 py-1 font-medium text-rose-600 hover:bg-rose-50 transition"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {/* pagination */}
                            {todos.data.length > 0 && (
                                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                    <p>
                                        Halaman {todos.current_page} dari{" "}
                                        {todos.last_page}
                                    </p>

                                    <div className="flex gap-2">
                                        {todos.links.map((link, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    link.url &&
                                                    router.get(link.url)
                                                }
                                                className={`min-w-[36px] rounded-lg px-2 py-1 text-xs font-medium ${
                                                    link.active
                                                        ? "bg-sky-600 text-white"
                                                        : link.url
                                                        ? "bg-white/60 text-slate-700 hover:bg-white"
                                                        : "text-slate-300"
                                                }`}
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Chart + Summary (glass + gradient) */}
                        <aside className="space-y-5">
                            <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-5 shadow-soft border border-white/30">
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Statistik Todos
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Perbandingan selesai & belum
                                </p>

                                <div className="mt-4">
                                    <Chart
                                        type="bar"
                                        height={220}
                                        series={[
                                            {
                                                name: "Jumlah",
                                                data: [
                                                    stats.done,
                                                    stats.pending,
                                                ],
                                            },
                                        ]}
                                        options={{
                                            chart: { toolbar: { show: false } },
                                            plotOptions: {
                                                bar: {
                                                    borderRadius: 8,
                                                    columnWidth: "45%",
                                                },
                                            },
                                            colors: ["#0ea5e9"],
                                            xaxis: {
                                                categories: [
                                                    "Selesai",
                                                    "Belum",
                                                ],
                                                labels: {
                                                    style: { fontSize: "12px" },
                                                },
                                            },
                                            dataLabels: { enabled: true },
                                            grid: { borderColor: "#e6edf3" },
                                            legend: { show: false },
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 text-white shadow-lg">
                                <p className="text-xs font-semibold uppercase tracking-wide opacity-95">
                                    Ringkasan
                                </p>

                                <p className="mt-1 text-3xl font-bold">
                                    {stats.done + stats.pending}
                                </p>
                                <p className="text-xs opacity-90">
                                    Total Todos
                                </p>

                                <div className="mt-4 text-xs space-y-1 opacity-95">
                                    <p>
                                        ✔️ Selesai:{" "}
                                        <span className="font-semibold">
                                            {stats.done}
                                        </span>
                                    </p>
                                    <p>
                                        ⏳ Belum:{" "}
                                        <span className="font-semibold">
                                            {stats.pending}
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href={route("todos.create")}
                                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition"
                                    >
                                        + Tambah Todo
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

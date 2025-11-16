import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import TrixEditor from "@/Components/TrixEditor";

export default function Edit({ todo }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT",
        title: todo.title || "",
        note: todo.note || "",
        is_done: todo.is_done,
        cover: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("todos.update", todo.id), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                        Edit Todo
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {todo.title}
                    </h2>
                </div>
            }
        >
            <Head title="Edit Todo" />

            <div className="bg-gray-50 py-10 min-h-screen">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <form
                        onSubmit={submit}
                        className="space-y-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
                    >
                        {/* TITLE + STATUS */}
                        <div className="grid gap-8 md:grid-cols-3">
                            {/* TITLE */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Judul
                                </label>

                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-400/30 transition"
                                    placeholder="Masukkan judul todo..."
                                />

                                {errors.title && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            {/* STATUS — dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>

                                <select
                                    value={data.is_done ? "1" : "0"}
                                    onChange={(e) =>
                                        setData(
                                            "is_done",
                                            e.target.value === "1"
                                        )
                                    }
                                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-400/30 transition"
                                >
                                    <option value="0">Belum selesai</option>
                                    <option value="1">Selesai</option>
                                </select>

                                {errors.is_done && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.is_done}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* NOTE */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Catatan
                            </label>

                            <div className="mt-2 rounded-xl border border-gray-300 bg-gray-50 p-3 shadow-inner">
                                <TrixEditor
                                    inputName="note"
                                    value={data.note}
                                    onChange={(v) => setData("note", v)}
                                />
                            </div>

                            {errors.note && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.note}
                                </p>
                            )}
                        </div>

                        {/* COVER + PREVIEW */}
                        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Cover (biarkan kosong jika tidak diganti)
                                </label>

                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setData("cover", e.target.files[0])
                                    }
                                    className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 shadow-sm file:mr-3 file:rounded-lg file:border file:border-gray-300 file:bg-white file:px-4 file:py-2 file:text-xs file:font-medium hover:file:bg-gray-50"
                                />

                                {errors.cover && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.cover}
                                    </p>
                                )}
                            </div>

                            {todo.cover && (
                                <div>
                                    <p className="mb-2 text-sm font-medium text-gray-700">
                                        Cover saat ini
                                    </p>

                                    <img
                                        src={`/storage/${todo.cover}`}
                                        className="h-28 w-28 rounded-xl border border-gray-300 object-cover shadow-sm"
                                    />
                                </div>
                            )}
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
                            <Link
                                href={route("todos.index")}
                                className="text-sm font-medium text-gray-500 hover:text-gray-700 transition"
                            >
                                ← Kembali ke daftar
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 disabled:opacity-50"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header className="border border-red-200 bg-red-50 p-5 rounded-xl">
                <h2 className="text-lg font-semibold text-red-700 flex items-center gap-2">
                    ⚠ Hapus Akun
                </h2>

                <p className="mt-1 text-sm text-red-600 leading-relaxed">
                    Menghapus akun akan menghilangkan semua data secara
                    permanen. Pastikan Anda telah mengunduh data yang ingin
                    disimpan.
                </p>
            </header>

            <DangerButton
                onClick={confirmUserDeletion}
                className="px-6 py-2 rounded-lg shadow hover:bg-red-700"
            >
                Hapus Akun
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6 space-y-5">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Konfirmasi Penghapusan Akun
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Aksi ini{" "}
                        <span className="font-semibold text-red-600">
                            tidak dapat dibatalkan
                        </span>
                        . Masukkan password untuk melanjutkan proses
                        penghapusan.
                    </p>

                    <div>
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-full rounded-lg"
                            placeholder="Masukkan password Anda"
                            isFocused
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-3">
                        <SecondaryButton
                            onClick={closeModal}
                            className="rounded-lg px-4 py-2"
                        >
                            Batal
                        </SecondaryButton>

                        <DangerButton
                            className="px-4 py-2 rounded-lg shadow"
                            disabled={processing}
                        >
                            Hapus Akun
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}

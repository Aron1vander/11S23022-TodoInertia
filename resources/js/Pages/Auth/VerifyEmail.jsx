import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Verify Email" />

            <div className="max-w-md mx-auto bg-white shadow-lg border border-gray-100 rounded-2xl p-8 mt-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                    Verifikasi Email Anda
                </h2>
                <p className="text-gray-600 text-sm text-center mb-6">
                    Sebelum melanjutkan, silakan cek email dan klik link
                    verifikasi yang telah kami kirimkan. Jika belum menerima,
                    kamu bisa kirim ulang.
                </p>

                {status === "verification-link-sent" && (
                    <div className="mb-4 text-sm font-medium text-green-600 bg-green-100 border border-green-300 px-3 py-2 rounded-lg">
                        Link verifikasi baru telah dikirim ke email Anda.
                    </div>
                )}

                <form onSubmit={submit} className="space-y-5">
                    <PrimaryButton
                        disabled={processing}
                        className="w-full justify-center rounded-xl py-2.5"
                    >
                        Kirim Ulang Email Verifikasi
                    </PrimaryButton>

                    <div className="text-center">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}

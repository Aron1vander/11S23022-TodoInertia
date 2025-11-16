import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 mt-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                    Reset Your Password
                </h2>
                <p className="text-gray-600 text-sm mb-6 text-center">
                    Masukkan password baru untuk akun Anda.
                </p>

                <form onSubmit={submit} className="space-y-4">
                    {/* EMAIL */}
                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-xl border-gray-300"
                            readOnly
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <InputLabel htmlFor="password" value="Password Baru" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-xl border-gray-300"
                            autoComplete="new-password"
                            isFocused={true}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* CONFIRM */}
                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Konfirmasi Password"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-xl border-gray-300"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-6">
                        <PrimaryButton
                            className="px-6 py-2 rounded-xl"
                            disabled={processing}
                        >
                            Reset Password
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}

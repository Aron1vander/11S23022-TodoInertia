import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-10">
                <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 border border-white/40">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        Forgot Password
                    </h1>

                    <p className="text-sm text-gray-600 text-center mb-6">
                        Enter your email, and we’ll send you a reset link to
                        create a new password.
                    </p>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 text-center bg-green-50 border border-green-200 p-2 rounded-lg">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-2 block w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                                isFocused={true}
                                placeholder="Enter your email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <PrimaryButton
                            className="w-full py-3 text-base rounded-xl shadow-md"
                            disabled={processing}
                        >
                            Send Reset Link
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 py-10 px-4">
                <div className="w-full max-w-md bg-white/80 backdrop-blur shadow-xl rounded-2xl p-8 border border-white/40">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        Confirm Password
                    </h1>
                    <p className="text-gray-600 text-sm text-center mb-6">
                        For security, please confirm your password to continue.
                    </p>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-gray-700"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-2 block w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
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

                        <PrimaryButton
                            className="w-full py-3 text-center text-base rounded-xl shadow-md"
                            disabled={processing}
                        >
                            Confirm Password
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

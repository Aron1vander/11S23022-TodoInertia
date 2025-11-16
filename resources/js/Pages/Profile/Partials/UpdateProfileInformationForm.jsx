import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };

    return (
        <section
            className={`bg-white p-6 rounded-2xl shadow-md border ${className}`}
        >
            <header className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's basic profile details.
                </p>
            </header>

            <form onSubmit={submit} className="space-y-6">
                {/* NAME */}
                <div className="flex flex-col gap-1">
                    <InputLabel
                        htmlFor="name"
                        value="Name"
                        className="text-sm font-medium text-gray-700"
                    />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError
                        className="text-red-500 text-sm"
                        message={errors.name}
                    />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="text-sm font-medium text-gray-700"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError
                        className="text-red-500 text-sm"
                        message={errors.email}
                    />
                </div>

                {/* VERIFY EMAIL */}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-xl">
                        <p className="text-sm text-gray-700">
                            Your email address is unverified.{" "}
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="text-indigo-600 underline hover:text-indigo-800 font-medium"
                            >
                                Click here to re-send verification.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <p className="mt-2 text-sm font-semibold text-green-600">
                                A new verification link has been sent!
                            </p>
                        )}
                    </div>
                )}

                {/* ACTION */}
                <div className="flex items-center gap-4 pt-2">
                    <PrimaryButton
                        disabled={processing}
                        className="px-6 py-2 rounded-xl shadow-sm"
                    >
                        Save
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition-opacity duration-200"
                        enterFrom="opacity-0"
                        leave="transition-opacity duration-500"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-green-600 font-medium">
                            Changes saved!
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                    Profile Settings
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="mx-auto max-w-5xl space-y-8 sm:px-6 lg:px-8">
                    {/* PROFILE INFORMATION */}
                    <div className="bg-white p-6 shadow-md rounded-2xl border border-gray-100">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    {/* UPDATE PASSWORD */}
                    <div className="bg-white p-6 shadow-md rounded-2xl border border-gray-100">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* DELETE ACCOUNT */}
                    <div className="bg-white p-6 shadow-md rounded-2xl border border-gray-100">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

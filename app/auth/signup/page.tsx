import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-6 relative">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </main>
  );
}

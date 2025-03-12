import { LoginForm } from "@/components/loginForm";



export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
            <h1 className="text-4xl font-bold">Login</h1>
            <div className="w-full max-w-sm md:max-w-3xl ">
                <LoginForm />
            </div>
        </div>

    )
}

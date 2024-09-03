import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white p-4 md:p-6" >
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                    <Link href="/">FitBeats AI</Link>
                </h1>
                <div className="space-x-4">
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                        <Link href="/sign-up">Sign Up</Link>
                    </button>
                    <button className="bg-transparent border border-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition duration-300">
                        <Link href="/log-in">Log In</Link>
                    </button>
                </div>
            </nav>
        </header>
    );
}

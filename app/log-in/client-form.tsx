"use client"
import React, { useState } from "react";
import { supabase } from "../utils/supabase-client";
import { useRouter } from 'next/navigation'

interface FormData {
    email: string;
    password: string;
}

export default function ClientForm() {
    const router = useRouter(); // Initialize useRouter

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // does the actual logging in
    async function userSignIn(email: string, password: string) {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        setLoading(false);

        if (error) {
            throw error;
        }

        return data;
    }

    // handles the form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await userSignIn(formData.email, formData.password);
            alert("User logged in successfully!");
            console.log("Data from logging in user into supabase table:", data);
            router.push("/dashboard");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error logging in user:", error.message);
                setError("There was an error logging in. Please check your credentials.");
            } else {
                console.error("An unknown error occurred.", error);
                setError("An unknown error occurred.");
            }
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
             {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                disabled={loading} // disables the button if loading
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
                {loading ? "Loading..." : "Log In"}
            </button>
        </form>
    );
}
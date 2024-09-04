"use client"
import React, { useState } from "react";
import { supabase } from "../utils/supabase-client";
import { useRouter } from 'next/navigation'

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    fitnessLevel: string;
}

export default function ClientForm() {
    const router = useRouter(); // Initialize useRouter

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
        fitnessLevel: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function signUpNewUser(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        //   options: {
        //     emailRedirectTo:'http://localhost:3000/',
        //   },
        })
      }
      
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        signUpNewUser(formData.email, formData.password);

        try {
            const { data, error } = await supabase
                .from("Users")
                .insert([{
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    // password: formData.password,
                    date_of_birth: formData.dateOfBirth,
                    fitness_level: formData.fitnessLevel
                }]);

            if (error) throw error;

            alert("User registered successfully!");
            console.log("Data from registering user into supabase table:", data);
            
            router.push("/dashboard");

        } catch (error) {
            // Type guard to handle unknown error type
            if (error instanceof Error) {
                console.error("Error registering user:", error.message);
                alert("There was an error registering the user.");
            } else {
                console.error("An unknown error occurred.", error);
                alert("An unknown error occurred.");
            }
        }
    };

    return (

        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
            </div>
            <div>
                <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div>
                <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option value="">Select Fitness Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                            Connect Music Services
                        </span>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <i className="fab fa-spotify mr-2 text-green-500"></i> Spotify
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <i className="fab fa-apple mr-2 text-gray-800"></i> Apple Music
                    </button>
                </div>
            </div>

            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">Sign Up</button>
        </form>
    );
}
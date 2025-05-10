// 📄 src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/features/auth/client/authApi";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await login(form);
    setLoading(false);

    if (!res.success) {
      setError(res.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-100 shadow-md rounded p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center text-blue-600">
          Welcome To My World 👋
        </h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex flex-col space-y-1">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500 text-gray-700"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500 text-gray-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

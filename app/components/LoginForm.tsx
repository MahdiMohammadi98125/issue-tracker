"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from ".";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(true);

      if (res?.error) {
        setError("Invalid Credentials");
        setLoading(false);
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="p-5 border-t-4 border-[#6e56cf] rounded-lg shadow-lg">
        <h1 className="my-4 text-xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="lg:w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="lg:w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40"
          />
          <button
            className="px-6 py-2 font-bold text-white bg-[#6e56cf] cursor-pointer"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Login"}
          </button>
          {error && (
            <div className="px-3 py-1 mt-2 text-sm text-white bg-red-400 rounded-md w-fit">
              {error}
            </div>
          )}

          <Link className="mt-3 text-sm text-right" href={"/register"}>
            Dont have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

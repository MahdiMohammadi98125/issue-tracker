import React from "react";
import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

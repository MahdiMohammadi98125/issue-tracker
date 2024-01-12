import React from "react";
import { RegisterForm } from "@/app/components";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

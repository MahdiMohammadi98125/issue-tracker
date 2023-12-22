import { NextRequest, NextResponse } from "next/server";
import zod from "zod";
import prisma from "@/prisma/client";

// create issue schema
const createIssueSchema = zod.object({
  title: zod.string().min(1).max(255),
  description: zod.string().min(1),
});

// POST request
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
};

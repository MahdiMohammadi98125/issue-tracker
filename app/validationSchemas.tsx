import zod from "zod";

// create issue schema
export const IssueSchema = zod.object({
  title: zod.string().min(1, "Title is required").max(255),
  description: zod.string().min(1, "Description is required").max(65535),
});

// create schema for updateing the issue
export const patchIssueSchema = zod.object({
  title: zod.string().min(1, "Title is required").max(255).optional(),
  description: zod
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  assignedToUserId: zod
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .nullable()
    .optional(),
});

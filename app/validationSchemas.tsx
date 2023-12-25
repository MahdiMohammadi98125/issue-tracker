import zod from "zod";

// create issue schema
export const IssueSchema = zod.object({
  title: zod.string().min(1, "Title is required").max(255),
  description: zod.string().min(1, "Description is required"),
});

import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
  Status,
  { color: "red" | "green" | "violet"; label: string }
> = {
  OPEN: { color: "red", label: "Open" },
  CLOSED: { color: "green", label: "Closed" },
  IN_PROGRESS: { color: "violet", label: "In Progress" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

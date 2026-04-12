import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: SignupLayout,
  head: () => ({
    meta: [
      { title: "Sign Up — SalesGen" },
      { name: "description", content: "Create your SalesGen account and join the next-gen affiliate ecosystem." },
    ],
  }),
});

function SignupLayout() {
  return <Outlet />;
}

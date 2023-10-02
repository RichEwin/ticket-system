"use client";

import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    router.push("/login");
    return;
  }

  return children;
}

import LoginForm from "@/app/(WithAuthLayout)/_components/module/auth/LoginForm";
import ScreenContainer from "@/components/ui/wrapper/ScreenContainer";
import React from "react";

export default function index() {
  return (
    <ScreenContainer>
      <LoginForm />
    </ScreenContainer>
  );
}

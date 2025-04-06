import { z } from "zod";
import { tokenResetPasswordSchema } from "@/schemas/index";
import signupSchema from "@/schemas/signup";

export type SignInType = {
  email: string;
  password: string;
}

export type signUpType = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  image?: any;
};

export type TokenType = {
  token: string;
};

export type ResetType = {
  newPassword: string;
  confirmNewPassword: string;
};

export type ForgotPasswordType = {
  email: string;
};

export type UserDataType = {
  token: string;
  message: string;
};

export type TokenResetPasswordType = z.infer<typeof tokenResetPasswordSchema>;
export type SignUpType = z.infer<typeof signupSchema>;

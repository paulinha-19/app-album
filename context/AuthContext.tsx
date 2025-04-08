import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { IAuthProvider, IAuthContext } from "@/interface/auth";
import {
  UserDataType,
  ForgotPasswordType,
  signUpType,
  SignInType
} from "@/types/auth-data";
import {
  forgotPasswordRequest,
  registerRequest,
  signInRequest,
} from "@/services/auth";
import { Alert } from "react-native";

export const AuthContext = createContext({} as IAuthContext);
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [email, setEmail] = useState<ForgotPasswordType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isAuthenticatedUser = !!user;

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      setUser({ token, message: "" });
      console.log("Tem token e user");
    } else {
      console.log("Sem token e user");
      setUser(null);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await getToken();
    };

    checkAuth();
  }, []);

  const signIn = async ({ email, password }: SignInType) => {
    const { data, request } = await signInRequest({
      email,
      password,
    });
    const { token, message } = data;
    await SecureStore.setItemAsync("token", token);
    setUser(data);
  };

  const onRegister = async ({ image, name, username, email, password, confirmPassword }: signUpType) => {
    const { data } = await registerRequest({
      image, name, username, email, password, confirmPassword
    });
    const { message } = data;
    Alert.alert(message);
  };

  const forgotPassword = async ({ email }: ForgotPasswordType) => {
    const { data } = await forgotPasswordRequest({
      email,
    });
    setEmail({ email });
    const { message } = data;
    Alert.alert(message);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        isAuthenticated,
        setIsAuthenticated,
        signIn,
        forgotPassword,
        onRegister,
        signOut,
        getToken,
        isAuthenticatedUser,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

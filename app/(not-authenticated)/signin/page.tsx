import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInType } from "@/types/index";
import { emailPasswordSchema } from "@/schemas/index";
import { useAuth } from "@/hooks/index";
import { ForgotPasswordModal } from "@/components/ContentBaseModal/ForgotPasswordModal";
import PasswordRecovery from "@/components/PasswordRecovery";
import { FormInput } from "@/components";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(emailPasswordSchema),
  });

  const onSubmit = async (data: SignInType) => {
    try {
      setLoading(true);
      await signIn(data);
      router.replace("/(authenticated)/home");
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      return err;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <FormInput
          label="Email"
          name="email"
          placeholder="Digite seu email"
          required={true}
          control={control}
          colorLabel="white"
        />
        <FormInput
          label="Senha"
          name="password"
          placeholder="Mínimo de 6 caracteres"
          required={true}
          control={control}
          paddingTopLabel={20}
          colorLabel="white"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <ForgotPasswordModal
          visible={showForgotPassword}
          onClose={() => setShowForgotPassword(false)}
          onSuccess={() => {
            setShowForgotPassword(false);
            setShowTokenModal(true);
          }}
        />

        <PasswordRecovery
          showTokenModal={showTokenModal}
          setShowTokenModal={setShowTokenModal}
          showResetPasswordModal={showResetPasswordModal}
          setShowResetPasswordModal={setShowResetPasswordModal}
        />

        <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
          <Text style={styles.forgotText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.signupButton} onPress={() => router.push("/(not-authenticated)/signup/page")}>
          <Text style={styles.signupButtonText}>NOVO USUÁRIO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45A9B3",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "85%",
    backgroundColor: "transparent",
  },
  label: {
    color: "white",
    marginBottom: 5,
    marginTop: 15,
    fontSize: 18,
    marginLeft: 8
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    height: 46,
  },
  placeholderTextColor: {
    color: "#888"
  },
  loginButton: {
    backgroundColor: "#D1349B",
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 17
  },
  forgotText: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
    fontSize: 18
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 20,
    opacity: 0.6
  },
  signupButton: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    fontSize: 17
  },
});
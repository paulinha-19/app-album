import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseModal } from "../BaseModal";
import { tokenResetPasswordSchema } from "@/schemas";
import { TokenResetPasswordType } from "@/types/index";
import { FormInput } from "../FormInput";

interface TokenPasswordModalProps {
  visible: boolean;
  onClose: () => void;
  onTokenSubmit: () => void;
}

export const TokenPasswordModal = ({ visible, onClose, onTokenSubmit }: TokenPasswordModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TokenResetPasswordType>({
    mode: "onChange",
    defaultValues: { token: "" },
    resolver: zodResolver(tokenResetPasswordSchema),
  });

  const onSubmit = (data: TokenResetPasswordType) => {
    if (isValid) {
      onTokenSubmit();
      reset();
    }
  };

  return (
    <BaseModal visible={visible} onClose={() => {
      reset();
      onClose();
    }}>
      <Text style={styles.title}>INSIRA O TOKEN DE ACESSO</Text>
      <Text style={styles.description}>
        Foi enviado para o seu email um token de acesso para a troca de senha.
        Insira este token no campo abaixo para continuar.
      </Text>
      <FormInput
        label="Token"
        name="token"
        placeholder="Digite o token"
        keyboardType="numeric"
        error={errors.token?.message}
        required={true}
        control={control}
      />
      <TouchableOpacity
        disabled={!isValid}
        style={[
          styles.buttonSubmit,
          { backgroundColor: isValid ? "#D1349B" : "#EC9FD4" },
        ]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.textButtonSubmit}>CONTINUAR</Text>
      </TouchableOpacity>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#4AACB3",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonSubmit: {
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  textButtonSubmit: {
    color: "#fff",
    fontSize: 17
  },
});

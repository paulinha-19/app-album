import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useForm } from "react-hook-form";
import Ionicons from '@expo/vector-icons/Ionicons';
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/schemas/index";
import { ResetType } from "@/types";
import { BaseModal } from "../BaseModal";
import { FormInput } from "../FormInput";
import { useTogglePassword } from "@/hooks";

interface ResetPasswordModalProps {
    visible: boolean;
    onClose: () => void;
}

export const ResetPasswordModal = ({ visible, onClose }: ResetPasswordModalProps) => {
    const [loading, setLoading] = useState(false);
    //   const { resetPassword } = useAuth();

    const { showPassword,
        showConfirmPassword,
        togglePassword,
        toggleConfirmPassword } = useTogglePassword();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<ResetType>({
        mode: "onChange",
        defaultValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = (data: ResetType) => {
        setLoading(true);
        setLoading(false);
        reset();
        onClose();

    };

    return (
        <BaseModal visible={visible} onClose={() => {
            reset();
            onClose();
        }}>
            <Text style={styles.title}>TROCA DE SENHA</Text>
            <Text style={styles.description}>
                Escolha uma nova senha para sua conta.
            </Text>
            <FormInput
                label="Nova senha"
                name="newPassword"
                placeholder="Digite a nova senha"
                secureTextEntry={!showPassword}
                error={errors.newPassword?.message}
                required={true}
                control={control}
                iconRight={
                    <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={24}
                        onPress={togglePassword}
                    />
                }
            />
            <FormInput
                label="Confirmar nova senha"
                name="confirmNewPassword"
                placeholder="Digite a confirmação da nova senha"
                secureTextEntry={!showConfirmPassword}
                error={errors.confirmNewPassword?.message}
                required={true}
                control={control}
                iconRight={
                    <Ionicons
                        name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                        size={24}
                        onPress={toggleConfirmPassword}
                    />
                }
                paddingTopLabel={20}
            />
            <TouchableOpacity
                disabled={!isValid}
                style={[
                    styles.buttonSubmit,
                    { backgroundColor: isValid ? "#D1349B" : "#EC9FD4" },
                ]}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.textButtonSubmit}>TROCAR SENHA</Text>
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
        fontWeight: "bold",
    },
});

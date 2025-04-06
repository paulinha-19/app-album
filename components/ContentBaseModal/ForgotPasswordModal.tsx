import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { BaseModal, FormInput } from "../index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordType } from "@/types/index";
import { forgotPasswordSchema } from "@/schemas/index";
import { useAuth } from "@/hooks/index"

interface IForgotPasswordModalProps {
    visible: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const ForgotPasswordModal = ({ visible, onClose, onSuccess }: IForgotPasswordModalProps) => {
    const [loading, setLoading] = useState(false);
    const { forgotPassword } = useAuth();
    const {
        handleSubmit,
        formState: { errors, isValid },
        reset,
        control,
    } = useForm<ForgotPasswordType>({
        mode: "onChange",
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = (data: ForgotPasswordType) => {
        setLoading(true);
        setLoading(false);
        reset();
        onClose();
        onSuccess();
    };

    useEffect(() => {
        if (!visible) {
            reset();
        }
    }, [visible]);

    return (
        <BaseModal visible={visible} onClose={onClose}>
            <View style={styles.modal}>
                <Text style={styles.title}>RECUPERAR SENHA</Text>
                <Text style={styles.description}>
                    Insira no campo abaixo o endereço de email usado no aplicativo para
                    receber um token de troca de senha.
                </Text>
                <FormInput
                    label="Email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    error={errors.email?.message}
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
                    <Text style={styles.textButtonSubmit}>ENVIAR EMAIL</Text>
                </TouchableOpacity>
            </View>
        </BaseModal>
    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center'
    },
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
        width: "100%"
    },
    textButtonSubmit: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
});
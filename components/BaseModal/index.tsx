import React, { ReactNode } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

interface BaseModalProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const BaseModal = ({ visible, onClose, children }: BaseModalProps) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <Pressable style={styles.overlay} onPress={onClose}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    style={styles.modalContainer}
                >
                    <Pressable style={styles.modalContent} onPress={() => { }}>
                        {children}
                    </Pressable>
                </KeyboardAvoidingView>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 25,
        width: "100%",
        elevation: 5,
    },
});

import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ConfirmationModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    message: string;
}

export function ConfirmationModal({
    visible,
    onConfirm,
    onCancel,
    title,
    message,
}: ConfirmationModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalText}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={onConfirm}
                        >
                            <Text style={[styles.buttonText]}>
                                CONFIRMAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

        // Shadow (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        // Shadow (Android)
        elevation: 1000, 
    },
    modalBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 24,
        width: '100%',
        maxWidth: "100%",
    },
    modalText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'left',
        color: "#0F0F0F"
    },
    message: {
        fontSize: 15,
        color: '#0F0F0F',
        textAlign: 'left',
    },
    modalButtons: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 18
    },
    cancelButton: {
    },
    confirmButton: {
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4AACB3',
    },
});
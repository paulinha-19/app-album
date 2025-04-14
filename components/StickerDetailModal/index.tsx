import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import { BaseModal } from "../BaseModal";

interface StickerDetailModalProps {
    selectedLink: string | null;
    setSelectedLink: React.Dispatch<React.SetStateAction<string | null>>
}

export function StickerDetailModal({ selectedLink, setSelectedLink }: StickerDetailModalProps) {
    
    const handleOpenLink = () => {
        if (selectedLink) {
            Linking.openURL(selectedLink);
            setSelectedLink(null);
        }
    };

    return (
        <BaseModal visible={!!selectedLink} onClose={() => setSelectedLink(null)}>
            <Text style={styles.modalText}>
                Você deseja abrir o link no navegador?
            </Text>

            <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalBtnCancel} onPress={() => setSelectedLink(null)}>
                    <Text style={styles.modalBtnTextCancel}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalBtnConfirm} onPress={handleOpenLink}>
                    <Text style={styles.modalBtnTextConfirm}>Abrir</Text>
                </TouchableOpacity>
            </View>
        </BaseModal>
    )
}

const styles = StyleSheet.create({
    modalText: {
        fontSize: 16,
        color: "#222",
        textAlign: "center",
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
    },
    modalBtnCancel: {
        flex: 1,
        backgroundColor: "#ccc",
        paddingVertical: 10,
        borderRadius: 8,
    },
    modalBtnConfirm: {
        flex: 1,
        backgroundColor: "#4AACB3",
        paddingVertical: 10,
        borderRadius: 8,
    },
    modalBtnTextCancel: {
        color: "#333",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalBtnTextConfirm: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});

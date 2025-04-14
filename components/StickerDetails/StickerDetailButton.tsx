import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface StickerDetailButtonProps {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    backgroundColor?: string;
}
export function StickerDetailButton({ text, onPress, disabled = false, backgroundColor = "#D1349B" }: StickerDetailButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor, opacity: disabled ? 0.6 : 1 }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}
StickerDetailButton.displayName = 'StickerDetail.Button'

const styles = StyleSheet.create({
    button: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    }
});

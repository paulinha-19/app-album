import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface StickerDetailContentProps {
    text: string;
    style?: TextStyle;
}
export function StickerDetailContent({ text, style }: StickerDetailContentProps) {
    return <Text style={[styles.content, style]}>{text}</Text>;
}
StickerDetailContent.displayName = 'StickerDetail.Content'

const styles = StyleSheet.create({
    content: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 22,
        marginTop: 10,
        marginBottom: 30,
        textAlign: "justify",
    }
});

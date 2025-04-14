import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface StickerDetailSubtitleProps {
    text: string;
    style?: TextStyle;
}
export function StickerDetailSubtitle({ text, style }: StickerDetailSubtitleProps) {
    return <Text style={[styles.subtitle, style]}>{text}</Text>;
}
StickerDetailSubtitle.displayName = 'StickerDetail.Subtitle'

const styles = StyleSheet.create({
    subtitle: {
        color: "#FFF",
        fontSize: 14,
        marginBottom: 18,
    }
});

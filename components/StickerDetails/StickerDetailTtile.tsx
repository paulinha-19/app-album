import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface StickerDetailTitleProps {
    text: string;
    style?: TextStyle;
}
export function StickerDetailTitle({ text, style }: StickerDetailTitleProps) {
    return <Text style={[styles.title, style]}>{text}</Text>;
}
StickerDetailTitle.displayName = 'StickerDetail.Title'

const styles = StyleSheet.create({
    title: {
        color: "#F9AD29",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 6,
        marginBottom: 10
    }
});

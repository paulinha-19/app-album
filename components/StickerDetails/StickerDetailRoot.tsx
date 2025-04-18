import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface StickerDetailRootProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
export function StickerDetailRoot({ children, style }: StickerDetailRootProps) {
    return <View style={[styles.root, style]}>{children}</View>;
}
StickerDetailRoot.displayName = 'StickerDetail.Root'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        padding: 20,
        paddingVertical: 40
    }
});

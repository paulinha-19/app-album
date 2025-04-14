import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface StickerDetailImageProps {
    source: ImageSourcePropType;
}
export function StickerDetailImage({ source }: StickerDetailImageProps) {
    return (
        <View style={styles.stickerBox}>
            <View style={styles.stickerWrapper}>
                <Image source={source} style={styles.stickerImage} resizeMode="cover" />
            </View>
        </View>
    );
}
StickerDetailImage.displayName = 'StickerDetail.Image'

const styles = StyleSheet.create({
    stickerBox: {
        width: "100%",
        aspectRatio: 3 / 4, // mantém proporção padrão vertical
        marginBottom: 5,
    },    
    stickerWrapper: {
        flex: 1,
        borderWidth: 6,
        borderColor: "white",

        // Shadow (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,

        // Shadow (Android)
        elevation: 4,
    },
    stickerImage: {
        width: "100%",
        height: "100%",
    },
});

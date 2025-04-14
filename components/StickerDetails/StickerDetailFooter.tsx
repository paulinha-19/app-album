import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StickerDetailModal } from "../StickerDetailModal";
import { getIconSource } from "@/utils/sticker-details";

interface Link {
    label: string;
    link: string;
}

interface StickerFooterProps {
    icons: Link[];
}

export function StickerDetailFooter({ icons }: StickerFooterProps) {
    const [selectedLink, setSelectedLink] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.iconWrapper}
                    onPress={() => setSelectedLink(icon.link)}
                >
                    <Image source={getIconSource(icon.link)} style={styles.iconImage} />
                    <Text style={styles.label}>{icon.label}</Text>
                </TouchableOpacity>
            ))}
            <StickerDetailModal selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        </View>
    );
}
StickerDetailFooter.displayName = 'StickerDetail.Footer'

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 10
    },
    iconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    iconImage: {
        width: 30,
        height: 30,
        resizeMode: "cover",
    },
    label: {
        fontSize: 14,
        color: "#fff",
    }
});

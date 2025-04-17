import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StickerDetailModal } from "../StickerDetailModal";
import { Entypo, Ionicons } from "@expo/vector-icons";

interface Link {
    label: string;
    link: string;
}

interface StickerFooterProps {
    icons: Link[];
}

const getIcon = (url: string) => {
    if (url.includes("linkedin")) {
      return <Entypo name="linkedin" size={20} color="#0077B5" />;
    }
    if (url.includes("instagram")) {
      return <Entypo name="instagram" size={20} color="#E1306C" />;
    }
    return <Ionicons name="globe-outline" size={20} color="#666" />;
  };

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
                    {getIcon(icon.link)}
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
        gap: 20
    },
    iconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    label: {
        fontSize: 12,
        color: "#fff",
    }
});

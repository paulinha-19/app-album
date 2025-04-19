import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SectionCardProps {
    title: string;
    children: React.ReactNode;
    onSeeAll?: () => void;
}

export default function SectionCard({ title, children, onSeeAll }: SectionCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {children}
            {onSeeAll && (
                <TouchableOpacity onPress={onSeeAll}>
                    <Text style={styles.seeAll}>Ver todos</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#414141",
        paddingStart: 20,
        paddingTop: 12
    },
    seeAll: {
        fontSize: 15,
        color: "#2992C4",
        paddingStart: 20,
        paddingBottom: 12,
        paddingTop: 8
    },
});

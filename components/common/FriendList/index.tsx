import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewStyle } from "react-native";

interface ActionButton {
    label: string;
    onPress: () => void;
    variant?: "primary" | "secondary";
}

interface FriendsListProps {
    avatar: string;
    name: string;
    level: number;
    username?: string;
    style?: ViewStyle;
    actions?: ActionButton[];
    leftComponent?: React.ReactNode;
}

export default function FriendsList({
    avatar,
    name,
    level,
    username,
    actions,
    leftComponent,
    style
}: FriendsListProps) {
    return (
        <View style={[styles.container, style]}>
            {leftComponent}
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.containerUser}>
                <Text style={styles.name}>
                    {name} <Text style={styles.level}>(nível {level})</Text>
                </Text>
                {username && <Text style={styles.username}>{username}</Text>}
                {actions && (
                    <View style={styles.actions}>
                        {actions.map((action, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.actionBtn, action.variant === "primary" ? styles.primaryBtn : styles.secondaryBtn]}
                                onPress={action.onPress}
                            >
                                <Text
                                    style={[styles.actionText, action.variant === "primary" ? styles.primaryText : styles.secondaryText]}
                                >
                                    {action.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    containerUser: {
        flex: 1,
        paddingVertical: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#414141",
    },
    level: {
        fontSize: 16,
        color: "#D1349B",
        fontWeight: "600",
    },
    username: {
        fontSize: 14,
        color: "#707070",
        fontStyle: "italic",
    },
    actions: {
        flexDirection: "row",
        gap: 10,
        marginTop: 6,
    },
    actionBtn: {
        borderWidth: 1.5,
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 14,
    },
    primaryBtn: {
        backgroundColor: "white",
        borderColor: "#D1349B",
    },
    primaryText: {
        color: "#D1349B",
        fontWeight: "600",
    },
    secondaryBtn: {
        backgroundColor: "white",
        borderColor: "#ccc",
    },
    secondaryText: {
        color: "#888",
    },
    actionText: {
        color: "white"
    }
});

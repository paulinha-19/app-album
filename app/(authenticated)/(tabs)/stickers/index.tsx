import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Header, Tabs } from "@/components/common";
import { Ionicons } from "@expo/vector-icons";
import { stickerWidth, stickerHeight, isSmallScreen } from "@/utils/album-screen";
import { getStickerRows, filtersTabs, handleNext, handlePrev } from "@/utils/my-stickers";
import { myStickers } from "@/data/my-stickers-mock";

type TabType = "TODAS" | "NOVAS" | "REPETIDAS";
const TABS: TabType[] = ["TODAS", "NOVAS", "REPETIDAS"];

export default function MyStickersScreen() {
    const [selectedTab, setSelectedTab] = useState<TabType>("TODAS");
    const [page, setPage] = useState(0);
    const router = useRouter();

    const filteredStickers = myStickers.filter(filtersTabs[selectedTab] || (() => true));
    const stickersPerPage = 6;
    const totalPages = Math.ceil(filteredStickers.length / stickersPerPage);
    const paginatedStickers = filteredStickers.slice(page * stickersPerPage, (page + 1) * stickersPerPage);

    const renderSticker = (item: any) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => router.push({ pathname: "/(authenticated)/(tabs)/stickers/details", params: { stickerId: item.id } })}
        >
            <View key={item.id} style={styles.stickerBox}>
                <View style={styles.stickerWrapper}>
                    <Image
                        source={item.source}
                        style={styles.stickerImage}
                        resizeMode="cover"
                    />
                    {item.isNew && (
                        <View style={styles.newBadge}>
                            <Text style={styles.newText}>NOVO</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header
                title={`Minhas Figurinhas`}
                containerStyle={styles.headerText}
                rightComponent={
                    <Image
                        source={require("../../../../assets/images/scan.png")}
                        style={[styles.scanIcon]}
                    />
                }
            />
            <Tabs tabs={TABS} selected={selectedTab} onSelect={(tab) => {
                setSelectedTab(tab as TabType);
                setPage(0);
            }} />

            <View style={styles.gridWithArrows}>
                <TouchableOpacity style={styles.arrowButton} onPress={() => handlePrev(page, setPage)} disabled={page === 0}>
                    <Ionicons name="chevron-back" size={40} color={page === 0 ? "#B4B4B4" : "#4AACB3"} />
                </TouchableOpacity>

                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.stickerGrid}>
                        {getStickerRows(paginatedStickers).map((row, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.stickerRow,
                                    row.length === 1 && { justifyContent: "center" },
                                ]}
                            >
                                {row.map(renderSticker)}
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.arrowButton} onPress={() => handleNext(page, totalPages, setPage)} disabled={page === totalPages - 1}>
                    <Ionicons name="chevron-forward" size={40} color={page === totalPages - 1 ? "#B4B4B4" : "#4AACB3"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F3F4",
        flex: 1
    },
    scrollContainer: {
        paddingBottom: 20,
        paddingTop: 30
    },
    headerText: {
        paddingLeft: 35
    },
    scanIcon: {
        width: 42,
        height: 42
    },
    stickerBox: {
        width: stickerWidth - 30,
        height: stickerHeight - 30,
        position: "relative",
    },
    stickerWrapper: {
        position: "relative",
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
    stickerRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
    },
    stickerGrid: {
        flex: 1,
        justifyContent: "center",
        gap: 16
    },
    stickerImage: {
        width: "100%",
        height: "100%",
    },
    newBadge: {
        position: "absolute",
        top: -8,
        left: -2,
        backgroundColor: "#A3CF44",
        paddingHorizontal: 15,
        paddingVertical: 4,
        transform: [{ rotate: "-15deg" }],
        zIndex: 2000
    },
    newText: {
        fontSize: isSmallScreen ? 10 : 15,
        color: "white",
        fontWeight: "bold"
    },
    gridWithArrows: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    arrowButton: {
        paddingHorizontal: 5
    },
    disabledArrow: {
        color: "#B4B4B4"
    }
});

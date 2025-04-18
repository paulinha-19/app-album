import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { router, useLocalSearchParams  } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/common/Header";
import { flattenedCategorias, prevPageAlbum, nextPageAlbum, getStickerRows, isSmallScreen, stickerHeight, stickerWidth } from "@/utils/album-screen";
import { PopoverMenu } from "@/components/common/PopoverMenu";

export default function AlbumScreen() {
    const { categoryIndex } = useLocalSearchParams();
    const [currentIndex, setCurrentIndex] = useState(Number(categoryIndex) || 0);
    const [menuVisible, setMenuVisible] = useState(false);
    const category = flattenedCategorias[currentIndex];


    const renderSticker = (item: any) => (
        <View key={`${item.id}-${categoryIndex}`} style={styles.stickerBox}>
            {item.colada ? (
                <View style={styles.stickerWrapper}>
                    <Image source={item.imagem} style={styles.sticker} resizeMode="cover" />
                </View>
            ) : (
                <View style={styles.emptySticker}>
                    <View style={styles.containerStickerNumber}>
                        <Text style={styles.stickerNumber}>{item.id}</Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Header
                title={`Álbum | ${category.area}`}
                containerStyle={styles.headerText}
                rightComponent={
                    <TouchableOpacity onPress={() => setMenuVisible(true)}>
                        <Image
                            source={require("../../../../assets/images/kebab-menu.png")}
                            style={[styles.kebabMenu]}
                        />
                    </TouchableOpacity>
                }
            />

            <PopoverMenu
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                items={[
                    { label: "Lista de categorias", onPress: () => router.push("/(authenticated)/(tabs)/album/list-categories") },
                ]}
            />

            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => prevPageAlbum(currentIndex, setCurrentIndex)} style={styles.arrowButton}>
                    <Ionicons name="chevron-back" size={40} color="#4AACB3" />
                </TouchableOpacity>

                <View style={styles.titles}>
                    <Text style={styles.title}>{category.titulo}</Text>
                    {category.subtitulo && <Text style={styles.subtitle}>{category.subtitulo}</Text>}
                </View>

                <TouchableOpacity onPress={() => nextPageAlbum(currentIndex, setCurrentIndex)} style={styles.arrowButton}>
                    <Ionicons name="chevron-forward" size={40} color="#4AACB3" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.stickerGrid}>
                    {getStickerRows(category.figurinhas).map((linha, index) => (
                        <View
                            key={index}
                            style={[
                                styles.stickerRow,
                                linha.length === 1 && { justifyContent: "center" },
                            ]}
                        >
                            {linha.map((item: any) => renderSticker(item))}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4"
    },
    scrollContainer: {
        paddingBottom: 20
    },
    headerText: {
        paddingLeft: 35
    },
    navContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    arrowButton: {
        paddingHorizontal: 5
    },
    kebabMenu: {
        width: 42,
        height: 42
    },
    titles: { flex: 1, alignItems: "center" },
    title: { fontSize: isSmallScreen ? 18 : 22, color: "#F9AD29", fontWeight: "600", textAlign: "center" },
    subtitle: { fontSize: 14, color: "#999999", textAlign: "center", fontWeight: "600", marginTop: 12, marginBottom: 20 },
    stickerGrid: {
        gap: 16
    },
    stickerRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    },
    stickerBox: {
        width: stickerWidth,
        height: stickerHeight,
    },
    stickerWrapper: {
        flex: 1,
        borderWidth: 6,
        borderColor: "white",

        // Shadow (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        // Shadow (Android)
        elevation: 4,
    },
    sticker: {
        width: "100%",
        height: "100%",
    },
    emptySticker: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
    },
    containerStickerNumber: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 2,
        opacity: 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    stickerNumber: {
        fontSize: 25,
        color: "#fff"
    },
});

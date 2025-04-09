import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import { flattenedCategorias, prevPageAlbum, nextPageAlbum, getStickerRows } from "@/utils/album-screen";

export default function AlbumScreen() {
    const [categoryIndex, setCategoryndex] = useState(0);
    const category = flattenedCategorias[categoryIndex];

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
            <View style={styles.headerContainer}>
                <Text style={[styles.header, styles.headerText]}>{`Álbum | ${category.area}`}</Text>
                <Image source={require("../../../../assets/images/kebab-menu.png")} style={styles.kebabMenu} />
            </View>

            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => prevPageAlbum(categoryIndex, setCategoryndex)} style={styles.arrowButton}>
                    <Ionicons name="chevron-back" size={40} color="#4AACB3" />
                </TouchableOpacity>

                <View style={styles.titles}>
                    <Text style={styles.title}>{category.titulo}</Text>
                    {category.subtitulo && <Text style={styles.subtitle}>{category.subtitulo}</Text>}
                </View>

                <TouchableOpacity onPress={() => nextPageAlbum(categoryIndex, setCategoryndex)} style={styles.arrowButton}>
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

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const horizontalPadding = 40;
const stickerWidth = (screenWidth - horizontalPadding - 20) / 2;
const stickerHeight = stickerWidth * (4 / 3);
const isSmallScreen = screenWidth <= 540 && screenHeight <= 960;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4"
    },
    scrollContainer: {
        paddingBottom: 20
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4AACB3",
        paddingVertical: 8,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 5
    },
    header: {
        fontSize: 23,
        color: "white",
    },
    headerText: {
        paddingLeft: 40
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
        borderWidth: 8,
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

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import Header from "@/components/common/Header";
import { Card } from "@/components/common/index";
import StoreCard from "@/components/StoreCard";
import { storeItems } from "@/data/store-items";
import { cardHeight, cardWidth, isSmallScreen } from "@/utils/store-screen";

export default function StoreScreen() {
    const coins = 127;
    return (
        <View style={styles.container}>
            <Header
                title="Loja"
                rightComponent={
                    <View style={styles.coinsContainer}>
                        <Image source={require("../../../../assets/images/moeda.png")} style={styles.coinIcon} />
                        <Text style={styles.coinText}>{coins}</Text>
                    </View>
                }
            />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.tipTitle}>Fica a dica!</Text>
                <Text style={styles.tipText}>
                    Quanto mais pacotes você comprar de uma vez, mais baratos saem cada um! Aproveite!
                </Text>

                <View style={styles.cardsGrid}>
                    <View style={styles.row}>
                        {storeItems.slice(0, 2).map(item => (
                            <Card key={item.id} style={{ width: cardWidth, height: cardHeight }}>
                                <StoreCard image={item.image} quantity={item.quantity} price={item.price} coins={coins} />
                            </Card>
                        ))}
                    </View>

                    <View style={[styles.row, { justifyContent: "center" }]}>
                        <Card style={[styles.fullWidthCard]}>
                            <StoreCard image={storeItems[2].image} quantity={storeItems[2].quantity} price={storeItems[2].price} coins={coins} />
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F0F3F4" },
    scrollContainer: {
        padding: 20,
        flexGrow: 1,
    },
    tipTitle: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 5,
        color: "#333"
    },
    tipText: {
        fontSize: 16,
        color: "#414141",
        marginBottom: 15
    },
    cardsGrid: {
        gap: 40,
        paddingVertical: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    },
    card: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 16,

        // Shadow (iOS)
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,

        // Shadow (Android)
        elevation: 3,
    },
    fullWidthCard: {
        width: "100%",
        height: cardHeight + 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    packImage: {
        width: "100%",
        height: "60%",
    },
    quantity: {
        fontWeight: "600",
        fontSize: 14,
        marginVertical: 8,
    },
    priceTag: {
        backgroundColor: "#D1349B",
        borderRadius: 8,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    },
    priceCoin: {
        width: 20,
        height: 20
    },
    priceText: {
        color: "#fff",
    },
    coinsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    coinIcon: {
        width: 22,
        height: 22
    },
    coinText: {
        color: "white",
        fontSize: isSmallScreen ? 20 : 22,
    }
});

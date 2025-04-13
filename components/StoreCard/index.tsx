import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PurchaseRevealModal from "../PurchaseRevealModal";
import PurchaseStickersModal from "../PurchaseStickersModal";
import { getNumericQuantity, handlePurchase } from "@/utils/store-screen";

interface StoreCardProps {
    image: any;
    quantity: string;
    price: number;
    coins: number;
}

export default function StoreCard({ image, quantity, price, coins }: StoreCardProps) {
    const disabled = price > coins;
    const [showReveal, setShowReveal] = useState(false);
    const [showStickers, setShowStickers] = useState(false);

    const quantityNumber = getNumericQuantity(quantity);

    return (
        <View style={styles.cardContent}>
            <Image source={image} style={styles.packImage} resizeMode="contain" />
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
                onPress={() => handlePurchase(disabled, setShowReveal)}
                style={[
                    styles.priceTag,
                    disabled && styles.disabledPriceTag
                ]}
                disabled={disabled}>
                <Image
                    source={require("@/assets/images/moeda.png")}
                    style={styles.priceCoin}
                />
                <Text style={[styles.priceText, disabled && styles.disabledPriceText]}>{price}</Text>
            </TouchableOpacity>
            {/* Etapa 1: Modal com o pacote */}
            <PurchaseRevealModal
                visible={showReveal}
                quantity={quantityNumber}
                onClose={() => {
                    setShowReveal(false);
                    setTimeout(() => setShowStickers(true), 0); // delay curto para suavidade
                }}
            />


            {/* Etapa 2: Modal com figurinhas */}
            <PurchaseStickersModal
                visible={showStickers}
                quantity={quantityNumber}
                onClose={() => setShowStickers(false)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
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
        gap: 6,
    },
    priceCoin: {
        width: 20,
        height: 20,
    },
    priceText: {
        color: "#fff",
    },
    disabledPriceTag: {
        backgroundColor: "#D1349B",
        opacity: 0.5
    },
    disabledPriceText: {
        color: "white",
    }
});
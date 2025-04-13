import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { screenWidthPurchaseReveal, screenHeightPurchaseReveal } from "@/utils/store-screen";

interface PurchaseRevealModalProps {
  visible: boolean;
  quantity: number;
  onClose: () => void;
}

export default function ({ visible, quantity, onClose }: PurchaseRevealModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.content} activeOpacity={0.9} onPress={onClose}>
          <Text style={styles.title}>SERÁ QUE{"\n"}TEM NOVA?</Text>

          <Image
            source={require("@/assets/images/package-open.png")}
            style={styles.packageImage}
            resizeMode="contain"
          />

          <Text style={styles.quantityText}>{quantity} pacote{quantity > 1 ? 's' : ''}</Text>
          <Text style={styles.ctaText}>Abra para descobrir!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#5AC6CB",
    flex: 1,
    width: screenWidthPurchaseReveal,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFD15C",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30
  },
  packageImage: {
    width: screenWidthPurchaseReveal * 0.6,
    height: screenHeightPurchaseReveal * 0.3,
    marginBottom: 20
  },
  quantityText: {
    color: "white",
    fontSize: 20,
    marginBottom: 12,
  },
  ctaText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  }
});

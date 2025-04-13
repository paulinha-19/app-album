import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated
} from "react-native";
import { nextPage, getStickerStyle, screenHeightNewSticker, screenWidthNewSticker } from "@/utils/store-screen";
import { useStickerAnimation } from "@/hooks";
import { newStickers } from "@/data/store-items";

interface PurchaseStickersModalProps {
  visible: boolean;
  quantity: number;
  onClose: () => void;
}

export default function PurchaseStickersModal({ visible, quantity, onClose }: PurchaseStickersModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const { scaleAnim, opacityAnim, animated } = useStickerAnimation();
  const totalPages = quantity;

  useEffect(() => {
    if (visible) {
      animated();
    }
  }, [visible, currentPage]);

  const renderSticker = (item: { source: any; isNew: boolean }, index: number) => (
    <Animated.View key={index} style={[styles.stickerWrapper, { opacity: opacityAnim }, getStickerStyle(index, styles)]}>
      <Animated.Image source={item.source} style={[styles.sticker, { transform: [{ scale: scaleAnim }] }]} resizeMode="contain" />
      {item.isNew && (
        <Animated.View style={[styles.newBadge, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={[styles.newText]}>NOVO</Text>
        </Animated.View>
      )}
    </Animated.View>
  );

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.stickerArea}>
            {newStickers.map(renderSticker)}
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={() => nextPage(currentPage, totalPages, onClose, setCurrentPage)}>
            <Text style={styles.nextText}>
              {currentPage < totalPages - 1 ? "Próximo" : "Fechar"}
            </Text>
          </TouchableOpacity>
        </View>
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
    width: screenWidthNewSticker,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  stickerArea: {
    width: screenWidthNewSticker,
    height: screenHeightNewSticker * 0.7,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  stickerWrapper: {
    width: "35%",
    aspectRatio: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  sticker: {
    width: "100%",
    height: "100%",
  },
  newBadge: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#A3CF44",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 3,
    transform: [{ rotate: "-10deg" }],
    zIndex: 2
  },
  newText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F5F5F5"
  },
  stickerPos1: {
    top: 30,
    left: 40,
    transform: [{ rotate: "-10deg" }]
  },
  stickerPos2: {
    top: 30,
    right: 40,
    transform: [{ rotate: "10deg" }]
  },
  stickerPos3: {
    bottom: 100,
    left: 40,
    transform: [{ rotate: "-5deg" }]
  },
  stickerPos4: {
    bottom: 100,
    right: 40,
    transform: [{ rotate: "12deg" }]
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#F9AD29",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});

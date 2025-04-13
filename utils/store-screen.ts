import { Dimensions } from "react-native";

const nextPage = (currentPage: number, totalPages: number, onClose: () => void, setCurrentPage: (value: React.SetStateAction<number>) => void) => {
  if (currentPage < totalPages - 1) {
    setCurrentPage(currentPage + 1);
  } else {
    onClose();
    setCurrentPage(0);
  }
};

const getStickerStyle = (index: number, styles: any) => {
  switch (index) {
    case 0: return styles.stickerPos1;
    case 1: return styles.stickerPos2;
    case 2: return styles.stickerPos3;
    case 3: return styles.stickerPos4;
    default: return {};
  }
};

const getNumericQuantity = (quantity: string) => {
  const match = quantity.match(/\d+/);
  return match ? parseInt(match[0], 10) : 1;
};


const handlePurchase = (disabled: boolean, setShowReveal: (value: React.SetStateAction<boolean>) => void) => {
  if (disabled) return;
  setShowReveal(true);
};


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const horizontalPadding = 40;
const cardWidth = (screenWidth - horizontalPadding - 20) / 2;
const cardHeight = cardWidth * (4 / 3);
const isSmallScreen = screenWidth <= 540 && screenHeight <= 960;

const screenHeightNewSticker = Dimensions.get("window").height;
const screenWidthNewSticker = Dimensions.get("window").width;

const screenHeightPurchaseReveal = Dimensions.get("window").height;
const screenWidthPurchaseReveal = Dimensions.get("window").width;


export {
  nextPage, getStickerStyle, getNumericQuantity, handlePurchase, screenHeight, screenWidth, horizontalPadding, cardHeight, cardWidth, isSmallScreen, screenHeightNewSticker, screenWidthNewSticker, screenHeightPurchaseReveal, screenWidthPurchaseReveal
}
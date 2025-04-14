type TabType = "TODAS" | "NOVAS" | "REPETIDAS";

const getStickerRows = (stickers: any[]) => {
    const rows = [];
    for (let i = 0; i < stickers.length; i += 6) {
        const group = stickers.slice(i, i + 6);
        rows.push(group.slice(0, 2));
        rows.push(group.slice(2, 4));
        if (group[4]) rows.push(group.slice(4, 6));
    }
    return rows;
};

const filtersTabs: Record<TabType, (sticker: any) => boolean> = {
    TODAS: () => true,
    NOVAS: (sticker) => sticker.isNew && !sticker.isRepeated,
    REPETIDAS: (sticker) => sticker.isRepeated,
  };
  

const handleNext = (page: number, totalPages: number, setPage: (value: React.SetStateAction<number>) => void) => {
    if (page < totalPages - 1) setPage(prev => prev + 1);
};

const handlePrev = (page: number, setPage: (value: React.SetStateAction<number>) => void) => {
    if (page > 0) setPage(prev => prev - 1);
};

export { getStickerRows, filtersTabs, handleNext, handlePrev }

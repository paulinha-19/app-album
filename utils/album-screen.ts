import { mockAlbum } from "@/data/mockAlbum";

const flattenedCategorias = mockAlbum.flatMap((area) =>
    area.categorias.map((categoria) => ({
        ...categoria,
        area: area.area,
    }))
);

const nextPageAlbum = (categoryIndex: number, setCategoriaIndex: React.Dispatch<React.SetStateAction<number>>) => {
    if (categoryIndex < flattenedCategorias.length - 1) {
        setCategoriaIndex(categoryIndex + 1);
    }
};

const prevPageAlbum = (categoryIndex: number, setCategoriaIndex: React.Dispatch<React.SetStateAction<number>>) => {
    if (categoryIndex > 0) {
        setCategoriaIndex(categoryIndex - 1);
    }
};

const getStickerRows = (stickers: any) => {
    const rows = [];
    for (let i = 0; i < stickers.length; i += 5) {
        const group = stickers.slice(i, i + 5);
        rows.push(group.slice(0, 2)); // Row 1
        rows.push(group.slice(2, 4)); // Row 2
        if (group[4]) rows.push([group[4]]); // Row 3
    }
    return rows;
};


export { flattenedCategorias, nextPageAlbum, prevPageAlbum, getStickerRows }
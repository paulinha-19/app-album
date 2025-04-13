const storeItems = [
    {
        id: 1,
        quantity: "1 pacote",
        price: 50,
        image: require("../assets/images/1-pacote.png")
    },
    {
        id: 3,
        quantity: "3 pacotes",
        price: 120,
        image: require("../assets/images/3-pacotes.png")
    },
    {
        id: 5,
        quantity: "5 pacotes",
        price: 180,
        image: require("../assets/images/5-pacotes.png")
    }
];


const newStickers = [
    { source: require("../assets/images/fig-1.png"), isNew: true },
    { source: require("../assets/images/fig-1.png"), isNew: false },
    { source: require("../assets/images/fig-2.png"), isNew: true },
    { source: require("../assets/images/fig-2.png"), isNew: false }
];


export { storeItems, newStickers }

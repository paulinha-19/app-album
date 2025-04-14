import { useLocalSearchParams } from "expo-router";
import { myStickers } from "@/data/my-stickers-mock";
import { Sticker } from "@/components/StickerDetails/index";
import { ScrollView, View, StyleSheet } from "react-native";

export default function StickerDetailsScreen() {
    const { stickerId } = useLocalSearchParams();
    const sticker = myStickers.find(s => s.id === Number(stickerId));

    if (!sticker) return null;

    return (
        <Sticker.Root>
            <ScrollView style={styles.container}>
                <Sticker.Image source={sticker.source} />
                <Sticker.Title text={sticker.title || `Sticker #${sticker.id}`} />
                <Sticker.Subtitle text={`Total de repetidas: ${sticker.totalRepetidas ?? 0}`} />
                <Sticker.Button text="COLAR" onPress={() => { }} />
                <View style={styles.border}></View>
                <Sticker.Content text={sticker.description || "Sem descrição."} />
                <Sticker.Footer
                    icons={sticker.links || []}
                />
            </ScrollView>
        </Sticker.Root>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,

    },
    border: {
        borderColor: "#707070",
        borderWidth: 0.4,
    }
});


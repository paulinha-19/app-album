import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import { getAlbumProgress } from "@/utils/album-screen";
import { RenderProgressAlbum } from "@/components/common";
import { AreaProgress } from "@/interface/album";

export default function ListCategoriesScreen() {
    const progressData = getAlbumProgress();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {progressData.map((item: AreaProgress, index) => (
                    <View key={index}>
                        <RenderProgressAlbum item={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4",
        padding: 16,
    },
    content: {
        gap: 12
    }
});

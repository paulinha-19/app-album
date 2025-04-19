import { View, StyleSheet, ScrollView } from "react-native"
import { SectionCard, FriendsList } from "@/components/common"
import { UserProfile } from "@/components";
import { getAlbumProgress } from "@/utils/album-screen";
import { mockFriends } from "@/data/friends";
import { router } from "expo-router";

export default function ProfileScreen() {
    const albumProgress = getAlbumProgress();
    const totalStickers = albumProgress.reduce((acc, item) => acc + item.totalStickers, 0);
    const totalGlued = albumProgress.reduce((acc, item) => acc + item.glued, 0);
    const progress = (totalGlued / totalStickers) * 100;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <UserProfile
                    name="Davi Luís"
                    level={6}
                    progress={progress}
                    imageUrl="https://i.imgur.com/hvZL6VQ.png"
                />
                <View style={styles.divisor}></View>
                <SectionCard
                    title="Amigos"
                    onSeeAll={() => router.push("/(authenticated)/(tabs)/profile/friends")}
                >
                    {mockFriends.slice(0, 2).map((friend, index) => (
                        <FriendsList
                            key={index}
                            name={friend.nome}
                            username={friend.username}
                            level={friend.nivel}
                            avatar={friend.imagem}
                        />
                    ))}
                </SectionCard>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4"
    },
    scrollContainer: {
        paddingBottom: 20
    },
    divisor: {
        marginVertical: 10
    }
})
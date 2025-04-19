import { View, StyleSheet, ScrollView } from "react-native"
import { SectionCard, FriendsList, MissionsList, MyTicketsList } from "@/components/common"
import { UserProfile } from "@/components";
import { getAlbumProgress } from "@/utils/album-screen";
import { mockFriends } from "@/data/friends";
import { mockMissions } from "@/data/missions";
import { router } from "expo-router";
import { mockMyTickets } from "@/data/my-tickets";

export default function ProfileScreen() {
    const albumProgress = getAlbumProgress();
    const totalStickers = albumProgress.reduce((acc, item) => acc + item.totalStickers, 0);
    const totalGlued = albumProgress.reduce((acc, item) => acc + item.glued, 0);
    const progress = (totalGlued / totalStickers) * 100;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <View style={styles.divisor}></View>
                <SectionCard title="Missões" onSeeAll={() => router.push("/(authenticated)/(tabs)/profile/missions")}>
                    {mockMissions.slice(0, 2).map((mission) => (
                        <MissionsList
                            key={mission.id}
                            title={mission.title}
                            subtitle={mission.subtitle}
                            image={mission.image}
                            status={mission.status}
                        />
                    ))}
                </SectionCard>
                <View style={styles.divisor}></View>
                <SectionCard title="Meus tickets da sorte" onSeeAll={() => router.push("/(authenticated)/(tabs)/profile/my-tickets")}>
                    {mockMyTickets.slice(0, 2).map((ticket) => (
                        <MyTicketsList
                            key={ticket.id}
                            image={ticket.image}
                            numero={ticket.numero}
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
    divisor: {
        marginVertical: 8
    }
})
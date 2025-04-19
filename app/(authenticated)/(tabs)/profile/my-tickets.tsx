import { View, ScrollView, StyleSheet } from "react-native";
import { MyTicketsList } from "@/components/common";
import { mockMyTickets } from "@/data/my-tickets";

export default function MyTicketsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {mockMyTickets.map((ticket) =>
                    <MyTicketsList
                        key={ticket.id}
                        image={ticket.image}
                        numero={ticket.numero}
                    />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        paddingVertical: 10,
    },
})
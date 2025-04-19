import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Tabs, Toast, ConfirmationModal, FriendsList } from "@/components/common";
import { mockFriends } from "@/data/friends";
import { filterFriendsByTab, handleAccepFriendship, handleModalFriends } from "@/utils/friends-screen";

type FriendsTabType = "AMIZADES" | "PENDENTES";
const TABS: FriendsTabType[] = ["AMIZADES", "PENDENTES"];
type ModalType = "accept" | "reject" | null;

export default function FriendsScreen() {
    const [selectedTab, setSelectedTab] = useState<FriendsTabType>("AMIZADES");
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(null);
    const [selectedFriend, setSelectedFriend] = useState<{ name: string } | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const filterFriends = filterFriendsByTab(mockFriends, selectedTab);

    return (
        <View style={styles.container}>
            <Tabs tabs={TABS} selected={selectedTab} onSelect={(tab) => {
                setSelectedTab(tab as FriendsTabType);
                setPage(0);
            }} />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {filterFriends.map((friend, index) =>
                    selectedTab === "AMIZADES" ? (
                        <FriendsList
                            key={index}
                            name={friend.nome}
                            username={friend.username}
                            level={friend.nivel}
                            avatar={friend.imagem}
                        />
                    ) : (
                        <FriendsList
                            key={index}
                            name={friend.nome}
                            level={friend.nivel}
                            avatar={friend.imagem}
                            actions={[
                                { label: "Recusar", onPress: () => { handleModalFriends("reject", friend.nome, setModalType, setSelectedFriend, setShowModal) }, variant: "secondary" },
                                { label: "Aceitar", onPress: () => { handleModalFriends("accept", friend.nome, setModalType, setSelectedFriend, setShowModal) }, variant: "primary" }
                            ]}
                        />
                    )
                )}
            </ScrollView>
            <ConfirmationModal
                visible={showModal}
                onCancel={() => setShowModal(false)}
                onConfirm={() => handleAccepFriendship(modalType, selectedFriend, setToastMessage, setShowModal, setModalType, setSelectedFriend, setShowToast)}
                title={modalType === "accept" ? "Aceitar amizade" : "Recusar amizade"}
                message={`Tem certeza que deseja ${modalType === "accept" ? "aceitar" : "recusar"} a amizade de ${selectedFriend?.name}?`}
            />
            <Toast
                visible={showToast}
                message={toastMessage}
                onHide={() => setShowToast(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        paddingVertical: 10
    },
})
import { useState } from "react";
import {
    View,
    ScrollView,
    StyleSheet,
} from "react-native";
import { handleUndoFriendship, handleSelectCheckbox } from "@/utils/friends-screen";
import { mockFriends } from "@/data/friends";
import { ConfirmationModal, Toast, FriendsList } from "@/components/common";
import Checkbox from 'expo-checkbox';
import Fab from "@/components/common/Fab";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function UndoingFriendShipScreen() {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const friendsWithId = mockFriends.map((friend, index) => ({ ...friend, id: index }));

    const actions = [
        {
            label: 'CANCELAR',
            icon: <FontAwesome name="undo" size={15} color="black" />,
            onPress: () => setSelectedIds([]),
            bgStyle: styles.cancelButton,
            textStyle: styles.cancelText,
            delay: 100,
            offset: 60,
        },
        {
            label: 'DESFAZER AMIZADE',
            icon: <Feather name="trash" size={15} color="black" />,
            onPress: () => setShowModal(true),
            disabled: selectedIds.length === 0,
            bgStyle: styles.confirmButton,
            textStyle: styles.text,
            delay: 50,
            offset: 130,
        },
    ]

    return (
        <>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {friendsWithId.map((friend) => (
                        <FriendsList
                            avatar={friend.imagem}
                            name={friend.nome}
                            username={friend.username}
                            level={friend.nivel}
                            leftComponent={
                                <Checkbox
                                    value={selectedIds.includes(friend.id)}
                                    onValueChange={() => handleSelectCheckbox(friend.id, selectedIds, setSelectedIds)}
                                    color={selectedIds.includes(friend.id) ? "#D1349B" : undefined}
                                />
                            }
                        />
                    ))}
                </ScrollView>
                <ConfirmationModal
                    visible={showModal}
                    onConfirm={() => handleUndoFriendship(setShowModal, setShowToast, setSelectedIds)}
                    onCancel={() => { setSelectedIds([]); setShowModal(false) }}
                    title="Desfazer amizade"
                    message={`Você tem certeza de que gostaria de desfazer ${selectedIds.length > 1 ? "essas amizades" : "esta amizade"
                        }?`}
                />
                <Toast
                    visible={showToast}
                    message="Amizade(s) desfeita(s)"
                    onHide={() => setShowToast(false)}
                />
            </View>
            <Fab
                actions={actions}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollContainer: {
        paddingVertical: 20,
    },
    text: {
        color: 'white',
        fontSize: 14,
    },
    cancelButton: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#999999',
    },
    cancelText: {
        color: '#999999',
        fontSize: 14,
    },
    confirmButton: {
        backgroundColor: '#D1349B',
    },
});

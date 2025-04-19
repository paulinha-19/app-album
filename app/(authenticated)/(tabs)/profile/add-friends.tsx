import { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import { ConfirmationModal } from '@/components';
import { Toast, Search, FriendsList } from '@/components/common';
import { mockFriends } from '@/data/friends';
import { Friend } from '@/interface/friend';
import { handleAddFriend, handleConfirmAddFriend } from '@/utils/friends-screen';

export default function AddFriendScreen() {
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState<Friend | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const filteredUsers = search
        ? mockFriends.filter((user) =>
            user.username.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    return (
        <View style={styles.container}>
            <Search
                value={search}
                onChangeText={setSearch}
            />
            <ScrollView style={styles.results}>
                {filteredUsers.map((user) => (
                    <FriendsList
                        key={user.id}
                        avatar={user.imagem}
                        name={user.nome}
                        level={user.nivel}
                        actions={[
                            { label: "Adicionar", onPress: () => handleAddFriend(user, setShowModal, setSelectedUser), variant: "primary" }
                        ]}
                    />
                ))}
            </ScrollView>
            <ConfirmationModal
                visible={showModal}
                title="Adicionar amigo"
                message={`Tem certeza que deseja enviar uma solicitação de amizade para ${selectedUser?.nome}?`}
                onConfirm={() => handleConfirmAddFriend(setShowModal, setShowToast)}
                onCancel={() => setShowModal(false)} />

            <Toast
                visible={showToast}
                message="Solicitação de amizade enviada"
                onHide={() => setShowToast(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    results: {
        flex: 1,
    }
});
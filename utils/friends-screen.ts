import { FriendsTabType } from "@/types/friends";
import { Friend } from "@/interface/friend";

type ModalType = "accept" | "reject" | null;

const filterFriendsByTab = (friends: Friend[], tab: FriendsTabType) => {
    return friends.filter((friend) =>
        tab === "AMIZADES" ? friend.status === "accepted" : friend.status === "pending"
    );
};

const handleAddFriend = (user: Friend, setShowModal: (value: React.SetStateAction<boolean>) => void, setSelectedUser: (value: React.SetStateAction<Friend | null>) => void) => {
    setSelectedUser(user);
    setShowModal(true);
};

const handleConfirmAddFriend = (setShowModal: (value: React.SetStateAction<boolean>) => void, setShowToast: (value: React.SetStateAction<boolean>) => void) => {
    setShowModal(false);
    setShowToast(true);
};

const handleModalFriends = (type: ModalType, friendName: string, setModalType: (value: React.SetStateAction<ModalType>) => void, setSelectedFriend: (value: React.SetStateAction<{
    name: string;
} | null>) => void, setShowModal: (value: React.SetStateAction<boolean>) => void) => {
    setModalType(type);
    setSelectedFriend({ name: friendName });
    setShowModal(true);
};

const handleAccepFriendship = (modalType: ModalType, selectedFriend: {
    name: string;
} | null, setToastMessage: (value: React.SetStateAction<string>) => void, setShowModal: (value: React.SetStateAction<boolean>) => void, setModalType: (value: React.SetStateAction<ModalType>) => void, setSelectedFriend: (value: React.SetStateAction<{
    name: string;
} | null>) => void, setShowToast: (value: React.SetStateAction<boolean>) => void) => {
    if (modalType && selectedFriend) {
        const action = modalType === "accept" ? "aceitou" : "recusou";
        setToastMessage(`Você ${action} a amizade de ${selectedFriend.name}`);
    }
    setShowModal(false);
    setModalType(null);
    setSelectedFriend(null);
    setShowToast(true);
};


const handleSelectCheckbox = (id: number, selectedIds: number[], setSelectedIds: (value: React.SetStateAction<number[]>) => void) => {
    if (selectedIds.includes(id)) {
        setSelectedIds((prev) => prev.filter((i) => i !== id));
    } else {
        setSelectedIds((prev) => [...prev, id]);
    }
};

const handleUndoFriendship = (setShowModal: (value: React.SetStateAction<boolean>) => void, setShowToast: (value: React.SetStateAction<boolean>) => void, setSelectedIds: (value: React.SetStateAction<number[]>) => void) => {
    setShowModal(false);
    setShowToast(true);
    setSelectedIds([]);
};

export { filterFriendsByTab, handleAddFriend, handleConfirmAddFriend, handleAccepFriendship, handleModalFriends, handleSelectCheckbox, handleUndoFriendship }
import { useState } from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { PopoverMenu } from "@/components/common";

interface MenuItem {
    label: string;
    onPress: () => void;
}

interface HeaderIconProps {
    items: MenuItem[];
    source?: ImageSourcePropType | undefined
}

export default function HeaderIcon({ items, source }: HeaderIconProps) {
    const [visible, setVisible] = useState(false);
    
    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)} style={{ marginRight: 0 }}>
                <Image
                    source={source}
                    style={{ width: 42, height: 42 }}
                />
            </TouchableOpacity>
            <PopoverMenu
                visible={visible}
                onClose={() => setVisible(false)}
                items={items}
            />
        </>
    );
}

import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFabAnimations } from '@/utils/fab';

interface FabAction {
    label: string;
    icon: React.ReactNode;
    onPress: () => void;
    bgStyle?: object;
    textStyle?: object;
    delay: number;
    offset: number;
    disabled?: boolean;
}

interface FabProps {
    actions: FabAction[];
}

export default function Fab({ actions }: FabProps) {
    const { animatedValues, handlePress, plusIcon, opacity } = useFabAnimations([
        { delay: 100, offset: 60 },
        { delay: 150, offset: 130 },
    ]);

    return (
        <View style={styles.container}>
            {actions.map((action, index) => {
                const { offset, width } = animatedValues[index];
                const animatedOffset = useAnimatedStyle(() => {
                    const scale = interpolate(
                        offset.value,
                        [30, action.offset],
                        [0, 1],
                        Extrapolation.CLAMP
                    );
                    return {
                        bottom: offset.value,
                        transform: [{ scale }],
                        width: width.value,
                    };
                });

                const animatedText = useAnimatedStyle(() => ({
                    opacity: opacity.value,
                }));

                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.fabContainer,
                            styles.actionsContainer,
                            animatedOffset,
                            action.bgStyle,
                        ]}
                    >
                        <Pressable
                            style={styles.rowAction}
                            onPress={action.onPress}
                            disabled={action.disabled}
                        >
                            <View style={styles.actionsIcon}>{action.icon}</View>
                            <Animated.Text style={[action.textStyle, animatedText]}>
                                {action.label}
                            </Animated.Text>
                        </Pressable>
                    </Animated.View>
                );
            })}
            <Pressable style={[styles.fabContainer, styles.plusContainer]} onPress={handlePress}>
                <Animated.View style={[styles.iconContainer, plusIcon, styles.plusIcon]}>
                    <AntDesign name="plus" size={24} color="white" />
                </Animated.View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    fabContainer: {
        backgroundColor: '#4AACB3',
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 11,
    },
    plusContainer: {
        borderRadius: 50,
    },
    plusIcon: {
        padding: 8,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionsContainer: {
        borderRadius: 10,
    },
    rowAction: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionsIcon: {
        padding: 15,
    }
});

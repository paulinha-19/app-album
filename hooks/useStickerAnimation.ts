import { useRef } from "react";
import { Animated } from "react-native";

interface UseStickerAnimationProps {
    scaleDuration?: number;
    opacityDuration?: number;
    delay?: number;
}

export const useStickerAnimation = (options?: UseStickerAnimationProps) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    const {
        scaleDuration = 600,
        opacityDuration = 800,
        delay = 50
    } = options || {};

    const animated = () => {
        // Reset values before starting
        scaleAnim.setValue(0);
        opacityAnim.setValue(0);

        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: scaleDuration,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: opacityDuration,
                useNativeDriver: true,
            })
        ]).start();
    };

    return {
        scaleAnim,
        opacityAnim,
        animated
    };
};

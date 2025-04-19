import {
    Easing,
    withDelay,
    withSpring,
    withTiming,
    useAnimatedStyle,
    useSharedValue,
    useDerivedValue,
} from 'react-native-reanimated';

export function useFabAnimations(actions: { delay: number; offset: number }[]) {
    const animatedValues = actions.map(() => ({
        offset: useSharedValue(30),
        width: useSharedValue(60),
    }));

    const opacity = useSharedValue(0);
    const isOpen = useSharedValue(false);
    const progress = useDerivedValue(() =>
        isOpen.value ? withTiming(1) : withTiming(0)
    );

    const handlePress = () => {
        const config = { easing: Easing.out(Easing.exp), duration: 300 };

        actions.forEach((action, index) => {
            const { offset, width } = animatedValues[index];

            if (isOpen.value) {
                width.value = withTiming(60, { duration: 100 }, (finished) => {
                    if (finished) offset.value = withTiming(30, config);
                });
            } else {
                offset.value = withDelay(action.delay, withSpring(action.offset));
                width.value = withDelay(action.delay, withSpring(200));
            }
        });

        opacity.value = withTiming(isOpen.value ? 0 : 1, { duration: 150 });
        isOpen.value = !isOpen.value;
    };

    const plusIcon = useAnimatedStyle(() => ({
        transform: [{ rotate: `${progress.value * 45}deg` }],
    }));

    return {
        animatedValues,
        handlePress,
        plusIcon,
        opacity,
    };
}
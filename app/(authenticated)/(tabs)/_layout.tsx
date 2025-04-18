import React from "react";
import { Tabs } from "expo-router";
import { TabBarImageIcon } from "@/components/navigation/TabBarImageIcon";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarBackground: () => (
                    <LinearGradient
                        colors={["#fff", "#fff"]}
                        style={{ flex: 1 }}
                    />
                ),
            }}
        >
            <Tabs.Screen
                name="album"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                        focused={focused}
                        activeIcon={require("../../../assets/images/album-active.png")}
                        inactiveIcon={require("../../../assets/images/album.png")}
                    />
                    ),
                }}
            />
            <Tabs.Screen
                name="stickers"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                            focused={focused}
                            activeIcon={require("../../../assets/images/sticker-active.png")}
                            inactiveIcon={require("../../../assets/images/sticker.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="replacement/index"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                            focused={focused}
                            activeIcon={require("../../../assets/images/replacement-active.png")}
                            inactiveIcon={require("../../../assets/images/replacement.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="achievements/index"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                            focused={focused}
                            activeIcon={require("../../../assets/images/ranking-active.png")}
                            inactiveIcon={require("../../../assets/images/ranking.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="store/index"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                            focused={focused}
                            activeIcon={require("../../../assets/images/store-active.png")}
                            inactiveIcon={require("../../../assets/images/store.png")}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarImageIcon
                            focused={focused}
                            activeIcon={require("../../../assets/images/profile-active.png")}
                            inactiveIcon={require("../../../assets/images/profile.png")}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slotContainer: {
        flex: 1,
        position: "relative",
    },
});
import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Tabs, MissionsList } from "@/components/common";
import { filterMissionsByTab } from "@/utils/missions";
import { MissionsTabType } from "@/types/missions";

const TABS: MissionsTabType[] = ["ALCANÇADAS", "PENDENTES", "TODAS"];

export default function MissionsScreen() {
    const [selectedTab, setSelectedTab] = useState<MissionsTabType>("ALCANÇADAS");
    const filteredMissions = filterMissionsByTab[selectedTab]

    return (
        <View style={styles.container}>
            <Tabs tabs={TABS} selected={selectedTab} onSelect={(tab) => {
                setSelectedTab(tab as MissionsTabType);
              
            }} />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {filteredMissions.map((mission) =>
                    <MissionsList
                        key={mission.id}
                        title={mission.title}
                        subtitle={mission.subtitle}
                        image={mission.image}
                        status={mission.status}
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
        paddingVertical: 8
    },
})
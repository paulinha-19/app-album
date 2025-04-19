import { mockMissions } from "@/data/missions";

const filterMissionsByTab = {
    TODAS: mockMissions,
    ALCANÇADAS: mockMissions.filter((m) => m.status === "done"),
    PENDENTES: mockMissions.filter((m) => m.status === "pending"),
  };

export { filterMissionsByTab }

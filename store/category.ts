import {create} from "zustand";

type ActiveId = number

interface State {
  activeId: ActiveId;
  setActiveId: (activeId: ActiveId) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId) => set({ activeId })
}));

import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    mainBGColor: "#0d0d0d", // Default background color
  }),
  getters: {
    getMainBGColor: (state) => state.mainBGColor,
  },
  actions: {
    setBGColor(newColor) {
      this.mainBGColor = newColor;
    },
  },
});

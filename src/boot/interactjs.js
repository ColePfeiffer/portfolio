import { boot } from "quasar/wrappers";
import interact from "interactjs";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default async ({ app }) => {
  app.config.globalProperties.$interact = interact;
};

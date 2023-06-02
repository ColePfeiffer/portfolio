import { boot } from "quasar/wrappers";
import DragSelect from "dragselect";

export default boot(async ({ app }) => {
  // Initialize and configure DragSelect
  const dragSelect = new DragSelect({
    // Configure DragSelect options here
  });

  // Make DragSelect instance available globally
  app.config.globalProperties.$dragSelect = dragSelect;

  // Any other code you want to run during bootstrapping
});

import drag from "v-drag";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.use(drag);
});

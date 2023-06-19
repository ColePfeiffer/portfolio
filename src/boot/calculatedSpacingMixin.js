import { Screen } from "quasar";

export default async ({ app }) => {
  app.mixin({
    computed: {
      calculatedSpacing() {
        switch (true) {
          case Screen.xs:
            return "-5%";
          case Screen.sm:
            return "0%";
          case Screen.lt.md:
            return "5%";
          case Screen.md:
            return "15%";
          default:
            return "24%";
        }
      },
    },
  });
};

// used like $q.calculatedSpacing or this.$q.calculatedSpacing

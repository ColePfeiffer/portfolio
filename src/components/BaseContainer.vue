<template>
  <div
    class="window"
    ref="fullBaseContainer"
    :class="{ expanded: isExpanded }"
    :style="positionStyle"
  >
    <div
      id="title-bar-handler"
      class="title-bar"
      :style="{ backgroundColor: titlebarColor }"
      ref="titleBarHandler"
    >
      <!-- Icon and title of window -->
      <div class="title-bar-text">
        <q-icon :name="icon" class="icon" />
        {{ title }}
      </div>
      <!-- Buttons -->
      <div class="title-bar-controls">
        <button
          v-if="hasExpandButton"
          class="expand"
          @click="toggleExpand"
          :style="{ backgroundColor: titlebarColor }"
        >
          <q-icon :name="expandIcon" size="16px" class="text-black" />
        </button>
        <button
          class="close"
          @click="$emit('close')"
          :style="{ backgroundColor: titlebarColor }"
        >
          <q-icon name="mdi-close" size="16px" class="text-black" />
        </button>
      </div>
    </div>
    <div class="window-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import interact from "interactjs";

export default {
  name: "baseContainer",
  props: {
    title: {
      type: String,
      default: "Window Title",
    },
    icon: {
      type: String,
      default: "",
    },
    titlebarColor: {
      type: String,
      default: "#c0c0c0",
    },
    hasExpandButton: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const baseContainer = this.$refs.fullBaseContainer;
    const titleBarHandler = this.$refs.titleBarHandler;
    const baseContainerRect = baseContainer.getBoundingClientRect();

    console.log("Setting width, height, left, top");
    this.width = baseContainerRect.width;
    this.height = baseContainerRect.height;
    this.left = baseContainerRect.left;
    this.top = baseContainerRect.top;
    console.log(this.width, this.height, this.left, this.top);

    interact(baseContainer)
      .allowFrom(titleBarHandler)
      .draggable({
        // Set the drag options
        modifiers: [
          interact.modifiers.restrict({
            restriction: "#megaTest",
          }),
        ],
        listeners: {
          start: (event) => {
            // Called when dragging starts
            // You can add any necessary logic here
          },
          move: (event) => {
            // Called when the element is being dragged

            console.log(event);
            console.log(event.target);

            const target = event.target;

            const x =
              (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const y =
              (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
          },
          end: (event) => {
            // Called when dragging ends
            // You can add any necessary logic here
          },
        },
      });
  },
  data() {
    return {
      isExpanded: false,
      top: null,
      left: null,
      width: null,
      height: null,
    };
  },
  computed: {
    expandIcon() {
      return this.isExpanded ? "mdi-window-restore" : "mdi-window-maximize";
    },
    positionStyle() {
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
  toggleExpand() {
    if (this.isExpanded) {
      // Restoring window size and position from before toggling full screen
      this.left = this.position.left;
      this.top = this.position.top;
      this.width = this.position.width;
      this.height = this.position.height;
    } else {
      // Saving the current position
      this.position = {
        top: this.$refs.fullBaseContainer.getBoundingClientRect().top,
        left: this.$refs.fullBaseContainer.getBoundingClientRect().left,
        width: this.$refs.fullBaseContainer.getBoundingClientRect().width,
        height: this.$refs.fullBaseContainer.getBoundingClientRect().height,
      };

      // Expanding window to full screen
      this.left = 0;
      this.top = 0;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }

    this.isExpanded = !this.isExpanded;
  },
};
</script>

<style scoped>
.window {
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 3px 3px #000;
  margin: 5px auto;
  position: relative;
  touch-action: none;
}

.window.expanded {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 2002;
}

.title-bar {
  position: relative;
  height: 22px;
  border-bottom: 2px solid #000;
  padding: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-bar-text {
  display: flex;
  align-items: center;
  font-family: "VT323", monospace;
}

.icon {
  height: 16px;
  margin-right: 5px;
}

.title-bar-controls {
  display: flex;
  align-items: center;
}

.close {
  width: 16px;
  height: 16px;
  border: 1.7px solid #181818;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close:hover {
  cursor: pointer;
  background-color: magenta !important;
}

.expand:hover {
  cursor: pointer;
  background-color: yellow !important;
}

.expand {
  width: 16px;
  height: 16px;
  border: 1.7px solid #181818;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.window-body {
  font-size: 14px;
}
</style>

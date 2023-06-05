<template>
  <div class="window" ref="fullBaseContainer" :class="{ expanded: isExpanded }">
    <div id="title-bar-handler" class="title-bar" :style="titleBarStyle" ref="titleBarHandler">
      <!-- Icon and title of window -->
      <div class="title-bar-text">
        <q-icon :name="icon" class="icon" />
        {{ title }}
      </div>
      <!-- Buttons -->
      <div class="title-bar-controls">
        <button v-if="hasExpandButton" class="expand" @click="toggleExpand" :style="{ backgroundColor: titlebarColor }">
          <q-icon :name="expandIcon" size="16px" class="text-black" />
        </button>
        <button class="close" @click="$emit('close')" :style="{ backgroundColor: titlebarColor }">
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
import { ref, reactive } from 'vue';

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
    isDraggable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isExpanded: false,
      isDragging: false,
      positionBeforeExpanding: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      baseComponentRect: ref(null),
    };
  },
  mounted() {
    if (this.isDraggable) {
      const titleBarHandler = this.$refs.titleBarHandler;
      const baseContainer = this.container;

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
              this.isDragging = true;
            },
            move: (event) => {
              if (!this.isExpanded) {
                // Called when the element is being dragged
                const target = event.target;
                // Updates baseComponentRect in order for me to use it's position information
                this.baseComponentRect = event.target.getBoundingClientRect();
                const x =
                  (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
                const y =
                  (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;
                target.setAttribute("data-x", x);
                target.setAttribute("data-y", y);
              }
            },
            end: (event) => {
              // Called when dragging ends
              this.isDragging = false;
            },
          },
        });
    }
  },
  computed: {
    expandIcon() {
      return this.isExpanded ? "mdi-window-restore" : "mdi-window-maximize";
    },
    container() {
      return this.$refs.fullBaseContainer;
    },
    titleBarStyle() {
      return {
        backgroundColor: this.titlebarColor,
        cursor: this.isExpanded
          ? "default"
          : this.isDraggable && this.isDragging
            ? "grabbing"
            : this.isDraggable
              ? "grab"
              : "default",
      };
    },
  },
  methods: {
    toggleExpand() {
      if (this.isExpanded) {
        const { left, top, width, height } = this.positionBeforeExpanding;
        // Restoring window size and position from before toggling full screen
        this.container.style.left = left;
        this.container.style.top = top;
        this.container.style.width = width;
        this.container.style.height = height;
      } else {
        // Saving the current position
        if (this.baseComponentRect === null) {
          // If the base component rect is null, calculate it using getBoundingClientRect() to get the initial values
          const { left, top, width, height } = this.container.getBoundingClientRect();
          this.positionBeforeExpanding = {
            top: top,
            left: left,
            width: width,
            height: height
          };
        } else {
          // Use the already calculated base component rect
          this.positionBeforeExpanding = {
            top: this.baseComponentRect.top,
            left: this.baseComponentRect.left,
            width: this.baseComponentRect.width,
            height: this.baseComponentRect.height,
          };
        }
      }
      this.isExpanded = !this.isExpanded;
    },

  }
}
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
  position: fixed !important;
  top: 0px !important;
  left: 0px !important;
  width: 100% !important;
  transform: translate(0px, 0px) !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 2002 !important;
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

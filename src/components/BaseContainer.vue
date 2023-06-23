<template>
  <div class="window" ref="fullBaseContainer" :class="{ expanded: isExpanded }"
    :style="{ zIndex: updatedZIndex, 'min-width': minWidth }">
    <div id="title-bar-handler" class="title-bar" :style="titleBarStyle" ref="titleBarHandler">
      <!-- Icon and title of window -->
      <div class="title-bar-text" :style="{ color: fontColor }">
        <q-icon :name="icon" class="icon" />
        {{ title }}
      </div>
      <!-- Buttons -->
      <div class="title-bar-controls">
        <button v-if="hasExpandButton" class="expand" @click="toggleExpand" :style="buttonStyle">
          <q-icon :name="expandIcon" size="16px" />
        </button>
        <button class="close" @click="$emit('close')" :style="buttonStyle">
          <q-icon name="mdi-close" size="16px" />
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
import { ref } from "vue";
import { colors } from "quasar";
const { brightness } = colors;

export default {
  name: "BaseContainer",
  props: {
    zIndex: {
      type: Number,
      default: 1,
    },
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
    minWidth: {
      type: String,
      default: "19rem",
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
      // Get a reference to the title bar handler element and baseContainer
      const titleBarHandler = this.$refs.titleBarHandler;
      const baseContainer = this.container;
      // Enable dragging functionality using the interact.js library
      interact(baseContainer)
        .draggable({
          allowFrom: titleBarHandler,
          // Set the drag options
          modifiers: [
            interact.modifiers.restrict({
              restriction: "#megaTest", // Restrict dragging within the specified element
            }),
          ],
          listeners: {
            // Called when dragging starts
            start: (event) => {
              this.isDragging = true;
            },
            // Called when the element is being dragged
            move: (event) => {
              // checks if the component is expanded, if it is, don't allow dragging
              if (!this.isExpanded) {
                const target = event.target;
                // Updates baseComponentRect in order for me to use it's position information
                // when restoring the window size and position from before toggling full screen
                this.baseComponentRect = event.target.getBoundingClientRect();
                // The x and y position is stored in the data-x and data-y attributes
                // of the target element respectively, so we need to get them and
                // add the current drag distance to them to get the new position
                const x =
                  (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
                const y =
                  (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
                // The translate() function takes the x and y position as parameters and applies them to the element
                target.style.transform = `translate(${x}px, ${y}px)`;
                // Update the data-x and data-y attributes with the new position values
                target.setAttribute("data-x", x);
                target.setAttribute("data-y", y);
              }
            },
            // Called when dragging ends
            end: (event) => {
              this.isDragging = false;
            },
          },
        });
    }
  },
  computed: {
    buttonStyle() {
      return this.isBackgroundDark ? { "backgroundColor": this.titlebarColor, "border": '1.7px solid white', "color": "white", "opacity": 0.8 } : { "backgroundColor": this.titlebarColor, "border": '1.7px solid black', "color": "black" };
    },
    isBackgroundDark() {
      if (brightness(this.titlebarColor) <= 75) {
        return true;
      } else {
        return false;
      }
    },
    fontColor() {
      if (this.isBackgroundDark) {
        return '#ffffff';
      } else {
        return '#000000';
      }
    },
    // If the component is expanded, the z-index is set to 2002, otherwise it's set to the default value
    updatedZIndex() {
      return this.isExpanded ? 2002 : this.zIndex;
    },
    // If the component is expanded, the expand icon is set to the restore icon, otherwise it's set to the maximize icon
    expandIcon() {
      return this.isExpanded ? "mdi-window-restore" : "mdi-window-maximize";
    },
    // Get a reference to the base container element
    container() {
      return this.$refs.fullBaseContainer;
    },
    // Set the style of the dialog container
    titleBarStyle() {
      return {
        backgroundColor: this.titlebarColor,
        // Set the cursor style based on different conditions
        cursor: this.isExpanded // If the component is expanded, use the default cursor
          ? "default"
          : this.isDraggable && this.isDragging
            ? "grabbing" // If the component is draggable and currently being dragged, use the grabbing cursor
            : this.isDraggable
              ? "grab" // If the component is draggable but not being dragged, use the grab cursor
              : "default", // If the component is not draggable, use the default cursor
      };
    },
  },
  methods: {
    // Toggles the expanded state of the component and saves the current position in order to restore it later
    toggleExpand() {
      if (this.isExpanded) {
        console.log("Restoring position", this.positionBeforeExpanding);

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
          const { left, top, width, height } =
            this.container.getBoundingClientRect();
          this.positionBeforeExpanding = {
            top: top,
            left: left,
            width: width,
            height: height,
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
  },
};
</script>

<style scoped>
@import "./styles/BaseContainer.css";
</style>

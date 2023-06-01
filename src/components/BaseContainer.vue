<template>
  <div class="window" ref="fullBaseContainer" :class="{ expanded: isExpanded }"
    v-drag="{ axis: 'all', handle: '#title-bar-handler' }" @v-drag-start="handleDragStart" @v-drag-end="handleDragEnd"
    @v-drag-moving='handleDragMoving'>
    <div id="title-bar-handler" class="title-bar" :style="{ backgroundColor: titlebarColor }">
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
  data() {
    return {
      isExpanded: false,
      alteredPosition: null,
      expandingPosition: null,
      isDragging: false,
      offsetX: 0,
      offsetY: 0,
      screenHeight: 0,
      screenWidth: 0,
    };
  },
  computed: {
    expandIcon() {
      return this.isExpanded ? "mdi-window-restore" : "mdi-window-maximize";
    },
  },
  methods: {
    handleDragMovingA(event) {
      const container = this.$refs.fullBaseContainer;
      const containerRect = container.getBoundingClientRect();
      // targetRect.left  works!!
      const targetRect = event.target.getBoundingClientRect();
      const x = targetRect.left - containerRect.left;
      const y = targetRect.top - containerRect.top;
      console.log(x, y, targetRect.left, containerRect.left)

      const parentWidth = container.parentElement.offsetWidth;
      const parentHeight = container.parentElement.offsetHeight;

      // Calculate the maximum allowable coordinates
      const maxX = parentWidth - containerRect.width;
      const maxY = parentHeight - containerRect.height;

      // Adjust the position if it exceeds the boundaries
      const adjustedX = Math.max(0, Math.min(x, maxX));
      const adjustedY = Math.max(0, Math.min(y, maxY));

      // Apply the adjusted position to the element
      container.style.left = `${adjustedX}px`;
      container.style.top = `${adjustedY}px`;
    },

    handleDragStart(event) {
      this.isDragging = true;

      const parentElement = event.target.closest('#megaTest');
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        this.screenHeight = parentRect.width;
        this.screenWidth = parentRect.height;
      }
    },
    handleDragMoving(event) {
      if (this.isDragging) {
        const container = this.$refs.fullBaseContainer;
        const containerRect = container.getBoundingClientRect();

        let x = containerRect.x;
        let y = containerRect.y;

        console.log("xy", x, y)

        // Adjust the coordinates to restrict the movement within the bounds
        if (x < 0) {
          x = 0;
        } else if (containerRect.right > this.screenWidth) {
          console.log("right ", containerRect.right);
          x = this.screenWidth - containerRect.width;
        }

        /*
         if (y < 0) {
          y = 0;
        } else if (y > this.parentHeight - containerRect.height) {
          y = this.parentHeight - containerRect.height;
        }
        */

        // Apply the adjusted position to the element
        container.style.left = `${x}px`;
        // container.style.top = `${y}px`;
      }
    },

    handleDragMovingdasad(event) {
      if (this.isDragging) {
        console.log(this.screenHeight, this.screenWidth, "px");
        const container = this.$refs.fullBaseContainer;
        const containerRect = container.getBoundingClientRect();

        let x = containerRect.x;
        let y = containerRect.y;

        console.log("x, y", x, y);
        if (x < 0) {
          console.log("ALARM!");
          let adjustedX = 10;
          container.style.left = `${adjustedX}px`;
          this.draggableX = adjustedX;
        }



      }
    },

    handleDragEnd(event) {
      this.isDragging = false;
    },
    getPosition() {
      fullBaseContainer;
    },
    toggleExpand() {
      if (this.isExpanded) {
        // Restoring window from full screen
        const { top, left, width, height } = this.alteredPosition;
        this.$el.style.top = `${top}px`;
        this.$el.style.left = `${left}px`;
        this.$el.style.width = `${width}px`;
        this.$el.style.height = `${height}px`;
      } else {
        // Expanding window to full screen
        // saving the altered position
        this.alteredPosition = {
          top: this.$refs.fullBaseContainer.getBoundingClientRect().top,
          left: this.$refs.fullBaseContainer.getBoundingClientRect().left,
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight,
        };

        this.$el.style.top = "0";
        this.$el.style.left = "0";
        this.$el.style.width = "100%";
        this.$el.style.height = "100%";
      }
      this.isExpanded = !this.isExpanded;
    },
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

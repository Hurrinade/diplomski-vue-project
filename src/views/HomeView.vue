<template>
  <div class="main container" ref="mainElement">
    <div class="backdrop" v-if="chartType">
      <chart-component
        class="chart-modal"
        ref="chartElement"
        :chartType.prop="chartType"
      />
    </div>
    <div class="main-panes">
      <data-pane :location.prop="'Vrapce'" />
      <chart-buttons @chart="openChart" />
      <data-pane
        :location.prop="'Mlinovi'"
        :styles.prop="[
          '/src/assets/dataPane.css',
          '/src/assets/simplePane.css',
        ]"
      >
        <button>Some extra data that user wants</button>
      </data-pane>
      <radars-pane />
    </div>
    <forecast-pane></forecast-pane>
    <ensi-pane></ensi-pane>
  </div>
</template>

<script>
import { onUnmounted, ref } from "vue";

export default {
  setup() {
    const chartType = ref("");
    const modalActive = ref(false);
    const mainElement = ref(null);
    const chartElement = ref(null);

    /* Set type chart */
    const openChart = (emit) => {
      chartType.value = emit.detail[0];
    };

    /* Hide chart when clicked outside of it */
    const handleClickOutside = (event) => {
      if (
        modalActive.value &&
        chartType.value &&
        mainElement.value &&
        mainElement.value.contains(event.target) &&
        chartElement.value &&
        !chartElement.value.contains(event.target)
      ) {
        chartType.value = "";
        modalActive.value = false;
      } else if (chartType.value && !modalActive.value) {
        modalActive.value = true;
      }
    };

    document.addEventListener("click", handleClickOutside);

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      mainElement,
      chartElement,
      chartType,
      openChart,
    };
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-panes {
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
}

.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background overlay */
}

.chart-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202328;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 60%; /* Set your desired width */
  height: 50%; /* Set your desired height */
}
</style>

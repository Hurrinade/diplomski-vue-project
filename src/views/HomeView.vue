<template>
  <div class="main">
    <data-pane :location.prop="'Vrapce'" />
    <data-pane :location.prop="'Mlinovi'" />
  </div>
</template>

<style>
.main {
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
}
</style>

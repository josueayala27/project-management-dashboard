<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <LayoutNav />
    <div class="flex flex-1 overflow-hidden">
      <LayoutAside />
      <main class="flex-1 overflow-hidden">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

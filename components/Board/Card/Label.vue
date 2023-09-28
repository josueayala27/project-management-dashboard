<template>
  <div class="flex items-center gap-2 text-sm">
    <div
      :style="{
        backgroundColor: `#${color}`,
      }"
      class="h-2.5 aspect-square rounded-full"
    />
    <p class="uppercase text-slate-500">
      {{ name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { TaskLabel } from "@/types/Board";

defineProps<TaskLabel>();
</script>

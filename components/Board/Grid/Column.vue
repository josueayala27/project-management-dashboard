<template>
  <div
    class="w-96 flex-shrink-0 border-l border-slate-200 first:border-l-0 last:border-r flex flex-col flex-1"
  >
    <BoardGridColumnHeader :status="column.status" />
    <div class="bg-slate-50 flex-1 flex flex-col gap-4 p-4">
      <BoardCard
        v-for="(task, index) in column.tasks"
        v-bind="{ task }"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Column } from "@/types/Board";

defineProps<{ column: Column }>();
</script>

<template>
  <div class="p-4 flex justify-between bg-white">
    <BaseTag> {{ status.label }} </BaseTag>
    <div class="flex items-center gap-1 text-slate-500">
      <BaseButton>
        <Icon size="24px" name="material-symbols:add" />
      </BaseButton>
      <BaseButton>
        <Icon size="24px" name="material-symbols:more-horiz" />
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BoardColumnStatus } from "@/types/Board";

defineProps<{ status: BoardColumnStatus }>();
</script>

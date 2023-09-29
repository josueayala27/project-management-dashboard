<template>
  <div class="header">
    <BaseTag> {{ status.label }} </BaseTag>
    <div class="header__actions">
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

<!-- I'm testing BEM -->
<style lang="postcss" scoped>
.header {
  @apply p-4 flex justify-between bg-white;
  &__actions {
    @apply flex items-center gap-1 text-slate-500;
  }
}
</style>

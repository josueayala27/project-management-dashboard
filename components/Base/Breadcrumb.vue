<template>
  <div class="flex items-center gap-2 text-sm text-slate-500">
    <template v-for="(element, index) in elements" :key="index">
      <p
        :class="[
          {
            'cursor-pointer hover:underline': element.isLink,
          },
        ]"
      >
        {{ element.title }}
      </p>
      <p v-if="index + 1 < elements.length">/</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface BreadcrumbElement {
  title: string;
  isLink: boolean;
}

withDefaults(defineProps<{ elements: BreadcrumbElement[] }>(), {});
</script>

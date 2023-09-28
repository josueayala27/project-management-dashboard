<template>
  <div
    class="rounded-lg ring-1 ring-slate-200 p-4 bg-white cursor-pointer hover:shadow-lg shadow-slate-500/10 duration-300 flex flex-col gap-4"
  >
    <div class="flex justify-between">
      <BoardCardLabel :color="task.label.color" :name="task.label.name" />
      <Icon size="24px" name="material-symbols:more-horiz" />
    </div>

    <div class="flex items-center -mt-4">
      <p class="font-semibold">Component Library Update</p>
    </div>

    <div
      v-if="task.image"
      class="rounded-2xl bg-slate-100 h-32 overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        :src="task.image"
        :alt="`${task.title} image.`"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex -space-x-2">
        <div
          v-for="(person, index) in task.people"
          :key="index"
          class="h-7 aspect-square rounded-full bg-slate-100 overflow-hidden"
        >
          <img
            class="h-full w-full object-cover"
            :src="person.photo"
            :alt="`${person.full_name} profile photo.`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Task } from "@/types/Board";

defineProps<{ task: Task }>();
</script>

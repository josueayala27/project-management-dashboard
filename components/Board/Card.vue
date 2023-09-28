<template>
  <div
    class="rounded-lg ring-1 ring-slate-200 p-4 bg-white cursor-pointer hover:shadow-lg shadow-slate-500/10 duration-300 flex flex-col gap-4 group"
  >
    <div class="flex justify-between">
      <BoardCardLabel :color="task.label.color" :name="task.label.name" />
      <BaseButton>
        <Icon size="24px" name="material-symbols:more-horiz" />
      </BaseButton>
    </div>

    <div class="flex items-center -mt-4">
      <p class="font-semibold">{{ task.title }}</p>
    </div>

    <div
      v-if="task.image"
      class="rounded-2xl bg-slate-100 h-32 overflow-hidden"
    >
      <img
        class="w-full h-full object-cover group-hover:scale-110 duration-300"
        :src="task.image"
        :alt="`${task.title} image.`"
      />
    </div>

    <div v-if="task.people.length > 0" class="flex flex-col gap-2">
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

    <div v-if="task.comments || task.reports" class="flex items-center gap-2">
      <BaseButton v-if="task.comments">
        <Icon size="20px" name="material-symbols:mode-comment-outline" />
        {{ task.comments }} comments
      </BaseButton>

      <BaseButton v-if="task.reports" class="text-red-500">
        <Icon
          size="20px"
          name="material-symbols:error-circle-rounded-outline-sharp"
        />
        {{ task.reports }} reports
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Task } from "@/types/Board";

defineProps<{ task: Task }>();
</script>

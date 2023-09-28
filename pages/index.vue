<template>
  <div class="flex flex-col h-full">
    <BoardFilters />
    <div class="flex flex-1 overflow-auto">
      <BoardGridColumn
        v-for="(column, index) in columns"
        :key="index"
        v-bind="{ column }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Column } from "@/types/Board";

const columns = reactive<Column[]>([
  {
    status: { label: "To do", color: "gray" },
    tasks: [
      {
        title: "Component Library Update",
        label: {
          name: "Design System",
          color: "FBCA04",
        },
        files: [],
        due_date: null,
        comments: 0,
        reports: 0,
        image:
          "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
        people: [
          {
            full_name: "Josué Ayala",
            photo:
              "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
          },
          {
            full_name: "Elizabeth Valencia",
            photo:
              "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
          },
          {
            full_name: "Alvaro Lopez",
            photo:
              "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
          },
        ],
      },
    ],
  },
  {
    status: { label: "In progress", color: "orange" },
    tasks: [
      {
        title: "Design System Redesign",
        label: {
          name: "Design System	",
          color: "FBCA04",
        },
        files: [],
        due_date: null,
        image: null,
        comments: 8,
        reports: 0,
        people: [
          {
            full_name: "Josué Ayala",
            photo:
              "https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80",
          },
        ],
      },
    ],
  },
  {
    status: { label: "Done", color: "green" },
    tasks: [
      {
        label: {
          color: "0DDC3A",
          name: "UI Design",
        },
        comments: 0,
        reports: 1,
        due_date: null,
        files: [],
        image: null,
        people: [],
        title: "Table Design",
      },
    ],
  },
  {
    status: { label: "Need review", color: "purple" },
    tasks: [],
  },
]);
</script>

<!-- {
  label: {
    color: "0DDC3A",
    name: "UI Design",
  },
  comments: 0,
  reports: 1,
  due_date: null,
  files: [],
  image: null,
  people: [],
  title: "",
}, -->

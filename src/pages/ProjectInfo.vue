<script setup>

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '../JSONs/project.json';

const route = useRoute();

const projectId = computed(() => parseInt(route.params.id, 10));
const projectData = computed(() => sourceData.projects.find((project) => project.id === projectId.value));
const tempList = computed(() => projectData.value.elements.map((el) => ({ [el.name]: el['__class__'] })));

const groupByType = tempList.value.reduce((acc, obj) => {
  const [label, type] = Object.entries(obj)[0];
  if (!acc[type]) {
    acc[type] = { label: type, children: [] };
  }
  acc[type].children.push({ label });
  return acc;
}, {});

const formTreeData = computed(() => Object.values(groupByType));

</script>

<template>
<h2>Project: {{projectData.name}}</h2>
  <div class="q-pa-md">
    <q-tree
      color="dark"
      text-color="dark"
      :nodes="formTreeData"
      node-key="label"
      dark
    />
  </div>
</template>

<style scoped>

</style>

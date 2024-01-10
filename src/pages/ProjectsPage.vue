<script setup>
import sourceData from '../JSONs/project.json';
</script>

<template>
  <div class="project-list">
  <h2>Projects</h2>
  <q-card v-for="project in sourceData.projects" dark bordered class="bg-grey-9 my-card" :key="project.id">
  <router-link :to="{name: 'projects.show', params: {id: project.id, slug: project.name}}">
      <q-card-section class="col-2">
        <div class="text-h6">{{project.name}}</div>
        <div class="text-subtitle2">{{project.elements.length}} elements</div>
      </q-card-section>
  </router-link>
  </q-card>
  </div>
</template>

<style scoped>

.project-list{
  width: 100%;
  max-width: 250px;
  margin-left: 25px;
}

</style>

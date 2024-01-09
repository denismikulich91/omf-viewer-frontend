<script setup>
import { ref } from 'vue';

const links = ref([
  {
    pageName: 'Home',
    pageLink: '/',
    icon: 'home',
  },
  {
    pageName: 'Projects',
    pageLink: '/projects',
    icon: 'folder',
  },
  {
    pageName: 'About',
    pageLink: '/about',
    icon: 'info',
  },
]);
</script>

<template>
  <div v-for="link in links" :key="link.pageName" class="text-h6 q-py-sm">
    <router-link :to="link.pageLink">
      <q-icon class="q-pr-sm"  :name="link.icon" />
      {{link.pageName}}
    </router-link>
  </div>
</template>

<style scoped>

</style>

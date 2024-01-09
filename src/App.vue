<script setup>
import { useLogInStore } from 'stores/example-store';
import { computed } from 'vue';
import LoggedInLayout from 'layouts/LoggedInLayout.vue';
import LoggedOutLayout from 'layouts/LoggedOutLayout.vue';

const loginStatus = useLogInStore();

const layoutComponent = computed(() => (loginStatus.isLoggedIn ? LoggedInLayout : LoggedOutLayout));

</script>

<template>
  <component :is="layoutComponent" />
<!--  <router-v/iew />-->
</template>
<style>
a {
  all: unset;
  color: #9DA5AA;
}
a:hover {
  all: unset;
  color: #9DA5AA;
  cursor: pointer;
}
.router-link-active {
  color: #FFFFFF;
  }
</style>

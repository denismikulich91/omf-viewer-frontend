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
  color: #FFFFFF;
  cursor: pointer;
}
.router-link-active {
  color: #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
}
.icon-btn {
  color: #9DA5AA;
}
.icon-btn:hover {
  cursor: pointer;
  color: #FFFFFF;
}
</style>

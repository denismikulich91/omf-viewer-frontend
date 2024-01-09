<script setup>
import { ref } from 'vue';
import MenuElements from 'components/MenuElements.vue';
import { useLogInStore } from 'stores/example-store';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const loginStatus = useLogInStore();
const logOut = () => {
  loginStatus.logOut();
  console.log('User login status: ', loginStatus.isLoggedIn);
};

</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-secondary text-accent q-py-sm" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h5">
          OMF Viewer App
        </q-toolbar-title>

        <div class="login">
          <q-avatar>
            <img src="../../avatar/photo.jpg">
          </q-avatar>
          <q-btn
            round
            flat
            icon="logout"
            aria-label="Menu"
            @click="logOut"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="bg-primary text-positive"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="q-pa-md">
        <q-item-label class="text-h5 q-py-md">
          Essential Links
        </q-item-label>
        <MenuElements />
      </q-list>
    </q-drawer>
    <div class="bg-positive window-height text-dark">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

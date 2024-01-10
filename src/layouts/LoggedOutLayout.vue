<script setup>
import { useLogInStore } from 'stores/example-store';

const loginStatus = useLogInStore();

const logIn = () => {
  loginStatus.logIn();
  console.log('User login status: ', loginStatus.isLoggedIn);
};

</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-secondary text-accent q-py-sm" elevated>
      <q-toolbar>

        <q-toolbar-title class="text-h5">
          OMF Viewer App
        </q-toolbar-title>
          <q-icon class="icon-btn q-px-md" name="login" size="md" @click="logIn"></q-icon>
      </q-toolbar>
    </q-header>
    <div class="bg-positive window-height text-dark">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

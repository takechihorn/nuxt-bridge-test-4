import Vuetify from 'vuetify/lib';
import {  defineNuxtPlugin } from '@nuxt/bridge/dist/runtime';
import { Framework } from 'vuetify';
export default defineNuxtPlugin((nuxtApp: { provide: (arg0: string, arg1: Framework) => void; }) => {
  const vuetify = new Vuetify({
    theme: {
      dark: true
    }
  });
  nuxtApp.provide('vuetify', vuetify.framework);
});


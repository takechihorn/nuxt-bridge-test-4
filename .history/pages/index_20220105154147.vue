<script setup lang="ts">
import { computed, ref } from '@vue/composition-api'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const handleClick = () => {
  count.value++
}
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">タイトル</v-card-title>
        <v-card-text>
          <ul>
            <li>カウント: {{ count }}</li>
            <li>カウント2倍: {{ doubleCount }}</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="handleClick">カウントアップ</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

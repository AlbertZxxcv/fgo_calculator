<script setup>
import ServantSelectSelectionSlot from '@/pages/np/ServantSelectSelectionSlot.vue';
import { useServantStore } from '@/views/apps/servant/useServantStore';

const store = useServantStore();
const allServants = ref(null)

// Fetch emails
const fetchServants = async () => {
  await store.fetchServants({q: ''})
  allServants.value = store.servants
}

fetchServants()

</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <!-- 👉 Selection slot -->
      <ServantSelectSelectionSlot v-bind:servant="allServants" />
    </VCol>

    <VCol>
    </VCol>
  </VRow>
</template>

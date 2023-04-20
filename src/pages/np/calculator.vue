<script setup>
import ServantSelectSelectionSlot from '@/pages/np/ServantSelectSelectionSlot.vue';
import { useEmailStore } from '@/views/apps/email/useEmailStore';
import { useServantStore } from '@/views/apps/servant/useServantStore';

const store = useServantStore();
const Estore = useEmailStore()

// Fetch emails
const fetchServants = async () => {
  await store.fetchServants({})
}

// Fetch emails
const fetchEmails = async () => {
  await Estore.fetchEmails({
  })
}


fetchEmails()
fetchServants()

</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <!-- 👉 Selection slot -->
    <ServantSelectSelectionSlot/>
    </VCol>

    <VCol>
      <!-- {{ Estore.emails }} -->
      {{ store.servants }}
    </VCol>
  </VRow>
</template>

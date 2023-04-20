<script setup>
const props = defineProps({
    servant: {
      type: Object,
      required: false,
    },
    supporter:{
        type: Object,
        required: false,
    },
})
</script>

<template>
    <h1>
        {{ servant }}
        {{ supporter }}
    </h1>
</template>
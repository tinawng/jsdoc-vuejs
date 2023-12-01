<template>
  <div>
    {{ counter }}
  </div>
</template>

<script setup>
  /**
   * @module test/CounterSetup
   * @vue-prop {Number} [initialCounter=1] - Counter default value
   * @vue-slot #header This is a header slot
   */
  defineProps({
    initialCounter: number,
  })
</script>

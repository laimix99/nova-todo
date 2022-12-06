<script lang="ts" setup>
const { todos } = useTodo();
</script>

<template>
  <div>
    <pre>{{ todos }}</pre>
  </div>
</template>

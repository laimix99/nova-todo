<script lang="ts" setup></script>

<template>
  <div class="white" style="padding: 8px">
    <h4 class="black-text">NOVA-TODO</h4>
    <Creator />
    <TodosList status="new" />
    <TodosList status="completed" />
  </div>
</template>

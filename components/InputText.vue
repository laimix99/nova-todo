<script lang="ts" setup>
const logger = useLogger('InputText');

const props = defineProps({
  modelValue: { type: String },
  inputProps: { type: Object },
  status: { type: String },
});
const emit = defineEmits(['update:model-value']);
const refInput = ref(null);

onMounted(() => {
  logger.log(':onMounted');
});
</script>

<template>
  <input
    :value="props.modelValue"
    v-bind="props.inputProps"
    @input="emit('update:model-value', $event.target.value)"
    type="text"
    class="validate"
    ref="refInput"
    :style="[
      props.status === 'completed'
        ? 'text-decoration: line-through'
        : 'text-decoration: none',
    ]"
  />
</template>

<style>
.input-completed {
  text-decoration: line-through;
}
</style>

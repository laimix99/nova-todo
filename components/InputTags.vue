<script lang="ts" setup>
const logger = useLogger('InputTags');

const props = defineProps({
  modelValue: { type: String },
  inputProps: { type: Object },
});
const emit = defineEmits(['update:model-value']);
const refInput = ref(null);
const MChips = ref(null);

onMounted(() => {
  // logger.log(':onMounted');
  MChips.value = M.Chips.init(refInput.value, {
    data: props.modelValue,
    placeholder: 'Enter tags',
    onChipAdd(e) {
      logger.log(':onChipAdd', this.chipsData);
      emit('update:model-value', this.chipsData);
    },
    onChipSelect(e) {
      logger.log(':onChipSelect', this.chipsData);
      emit('update:model-value', this.chipsData);
    },
    onChipDelete(e) {
      logger.log(':onChipDelete', this.chipsData);
      emit('update:model-value', this.chipsData);
    },
  });
  // logger.log(':MChips.value', MChips.value);
});
</script>

<template>
  <div ref="refInput" class="chips" placeholder="Enter tags"></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: { type: Object },
});

const { removeTodo, editTodo, completeTodo, undoTodo } = useTodo();
</script>

<template>
  <div class="todo-item grey lighten-4">
    <InputText v-model="item.name" :status="item.status" />
    <InputDate v-model="item.deadline" />
    <InputTags v-model="item.tags" />
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      "
    >
      <button
        v-if="item.status === 'new'"
        class="btn waves-effect waves-light"
        @click="completeTodo(item.id)"
      >
        Complete
      </button>
      <button
        v-if="item.status === 'completed'"
        class="btn waves-effect waves-light"
        @click="undoTodo(item.id)"
      >
        Undo
      </button>

      <button class="btn waves-effect waves-light" @click="removeTodo(item.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<style>
.todo-item {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid #333; */
  padding: 8px;
  border-radius: 8px;
}
</style>

<script lang="ts" setup>
const {
  todos,
  todosNew,
  todosCompleted,
  newTodo,
  addTodo,
  removeTodo,
  editTodo,
  undoTodo,
  completedTodo,
} = useTodo();
</script>

<template>
  <div>
    <h1>NOVA-TODO</h1>
    <input type="text" v-model="newTodo.name" @keyup.enter="addTodo()" />
    <button @click="addTodo()">add</button>
    <div
      v-for="t in todos"
      :key="t.id"
      style="
        display: flex;
        flex-direction: column;
        align-items: start;
        border: 1px solid black;
        padding: 6px;
        margin-top: 10px;
      "
    >
      <h1 style="font-size: 15px">{{ t.name }}</h1>
      <span>status: {{ t.status }}</span>
      <button v-if="t.status === 'new'" @click="completedTodo(t.id)">
        completed
      </button>
      <button v-if="t.status === 'completed'" @click="undoTodo(t.id)">
        undo
      </button>
      <button @click="removeTodo(t.id)">remove</button>
    </div>
  </div>
</template>

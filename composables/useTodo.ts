import { useStorage } from '@vueuse/core';
export const useTodo = () => {
  const todos = useStorage('todos', [
    {
      id: '1',
      status: 'new',
      name: 'My first todo',
      tags: ['works', 'urgent'],
      deadline: null,
    },
  ]) as any;

  const todosNew = computed(() => {
    return todos.value.filter((t: any) => {
      return t.status === 'new';
    });
  });

  const todosComplated = computed(() => {
    return todos.value.filter((t: any) => {
      return t.status === 'complated';
    });
  });

  const newTodo = ref({
    // id: null,
    // status: 'new',
    deadline: null,
    name: '',
    tags: [],
  });

  function _handleError(e: eny) {
    console.log('_handleError', e);
  }

  function _getTodoById(id: string) {
    const todo = todos.value.find((t: any) => t.id === id);
    if (!todo) throw new Error('No such todo found!');
    return todo;
  }

  function addTodo() {
    const payload = {
      id: Date.now().toString(),
      name: newTodo.value.name,
      tags: newTodo.value.tags,
      deadline: newTodo.value.deadline,
      status: 'new',
    };
    todos.value.unshift(payload);
    newTodo.value.name = '';
    newTodo.value.tags = [];
    newTodo.value.deadline = null;
  }

  function undoTodo(id: string) {
    try {
      console.log(':undoTodo', id);
      const todo = _getTodoById(id);
      todo.status = 'new';
    } catch (e) {
      _handleError(e);
    }
  }

  function completedTodo(id: string) {
    try {
      console.log('completeTodo', id);
      const todo = _getTodoById(id);
      todo.status = 'completed';
    } catch (e) {
      _handleError(e);
    }
  }

  function removeTodo(id: string) {
    try {
      console.log('removeTodo', id);
      const todo = _getTodoById(id);
      if (confirm('Remove todo?')) {
        todos.value = todos.value.filter((t: any) => t.id !== todo.id);
      }
    } catch (e) {
      _handleError(e);
    }
  }

  function editTodo(id: string, payloud: any) {
    try {
      console.log('editTodo', id);
      const todo = _getTodoById(id);
      Object.assing(todo, payloud);
    } catch (e) {
      _handleError(e);
    }
  }

  return {
    todos,
    todosNew,
    todosComplated,

    newTodo,
    addTodo,
    removeTodo,
    editTodo,
    undoTodo,
    completedTodo,
  };
};

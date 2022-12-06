export const useTodo = () => {
  const todos = ref([
    {
      id: '1',
      name: 'My first todo',
      tags: ['works', 'urgent'],
      deadline: null,
    },
  ]);
  return { todos };
};

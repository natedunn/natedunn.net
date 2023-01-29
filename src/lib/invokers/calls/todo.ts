import { fetcher } from '@fetcher';

export default {
  async query() {
    // Define type
    type Todo = { userId: number; id: number; title: string; completed: boolean };

    // Fetch data
    return await fetcher.rest<Todo>('https://jsonplaceholder.typicode.com/todos/1');
  },
};

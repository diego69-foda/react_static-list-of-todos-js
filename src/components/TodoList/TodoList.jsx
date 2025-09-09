import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos, users }) => (
  <>
    {todos.map(todo => (
      <TodoInfo key={todo.id} todos={todo} users={users} />
    ))}
  </>
);

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = (todos, users) => (
  <section className="TodoList">
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todos.title}</h2>
      <UserInfo todos={todos} users={users} />
    </article>
  </section>
);

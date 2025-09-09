export const TodoInfo = (todos, users) => (
  <section className="TodoList">
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todos.title}</h2>
      <a className="UserInfo" href="mailto:Sincere@april.biz">
        {users[todos.userId - 1].name}
      </a>
    </article>
  </section>
);

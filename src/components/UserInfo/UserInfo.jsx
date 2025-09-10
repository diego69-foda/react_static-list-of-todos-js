export const UserInfo = (todos, users) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {users[todos.userId - 1].name}
  </a>
);

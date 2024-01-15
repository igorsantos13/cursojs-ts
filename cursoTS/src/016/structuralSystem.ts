type verifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'aaa', password: '123' };
const sentUser = { username: 'aaa', password: '123' };

console.log(verifyUser(bdUser, sentUser));

/* [
  {
    id: "1234567890",
    name: "sartre",
    room: "13",
  },
]; */

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  getUserList(room) {
    let users = this.users.filter((user) => {
      user.room === room;
    });
    let namesAray = users.map((user) => {
      user.name;
    });

    return namesAray;
  }

  getUser(id) {
    return this.users.filter((user) => {
      user.id === id;
    })[0];
  }

  removeUser(id) {
    let user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => {
        user.id !== id;
      });
    }
    return user;
  }
}

module.exports = {
  Users,
};

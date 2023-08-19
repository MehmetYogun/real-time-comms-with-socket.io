const expect = require("expect");

const Users = require("./users");

describe("Users", () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "a",
        room: "A",
      },
      {
        id: "2",
        name: "b",
        room: "B",
      },
      {
        id: "3",
        name: "c",
        room: "A",
      },
    ];
  });

  it("should add new users", () => {
    let users = new Users();
    let user = {
      id: "asdfghjkl",
      name: "sartre",
      room: "1957",
    };

    let reUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should return names for room A", () => {
    let userList = users.getUserList("A");

    expect(userList).toEqual(["a", "c"]);
  });

  it("should return names for room B", () => {
    let userList = users.getUserList("B");

    expect(userList).toEqual(["b"]);
  });

  it("should find user", () => {
    let userID = "2",
      user = users.getUser(userID);

    expect(user.id).toBe(userID);
  });

  it("should not  find user", () => {
    let userID = "6317",
      user = users.getUser(userID);

    expect(user).toBeUndefined();
  });

  it("should not remove a user", () => {
    let userID = "6317",
      user = users.romeveUser(userID);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it("should remove a user", () => {
    let userID = "1",
      user = users.romeveUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });
});

const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


// Implement 1 test for the *add* function that verifies a user that is not in the users' list.
test('add user to userController', () => {    
  let user = new User(1235,"ashman", "ashrr@AshCodedIt.com");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});



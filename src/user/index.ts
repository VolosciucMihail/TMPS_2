import { TodoListProxy } from "../main";

export class User {
  run() {
    const mySystem = TodoListProxy.getInstance();

    const unregisteredUser = "invalidToken";
    const registeredUser = "validToken";

    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.setTodoSource({
        university: "Universitatea Tehnica",
        work: "Uber Driver",
        life: "Life",
      })
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToEat("Snacks", "Need to put something in my mouth")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToGetGrocery("Eggs", "I need to buy eggs")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToWork(
        "License B+",
        "I need to get license B+"
      )
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToRead(
        "Fahrenheit 451",
        "I need to to read this book to stay entertained "
      )
    );
  }
}

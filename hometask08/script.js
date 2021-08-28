class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name);
  }
}

class Box extends Entity {
  constructor(name, owner, content) {
    super(name);
    this.owner = owner;
    this.content = content;
  };

}

class User extends Entity {
  constructor(name, age, position) {
    super(name);
    this.age = age;
    this.position = position;
  }

  getAge() {
    return this.age;
  }

  getPos() {
    return this.position;
  }

}

const user1 = new User('Stan', 33, 'developer');
const user2 = new User('Michel', 23, 'designer');
const user3 = new User('Samantha', 27, 'manager');
const st1 = new Stuff('pencil');
const st2 = new Stuff('pen');
const st3 = new Stuff('eraser');
const st4 = new Stuff('calculator');
const st5 = new Stuff('paper');
const box1 = new Box('Old sneaker box', user1.name, [st1.name, st2.name, st5.name]);
const box2 = new Box('Box of chocolates', user2.name, [st1.name, st3.name, st5.name]);
const box3 = new Box('Handmade box', user3.name, [st2.name, st4.name, st5.name]);

function showInfo(user, box) {
  return `${box.owner} is ${user.getAge()} years old on position` + 
  `${user.getPos()} has ${box.name} with ${(box.content).join(', ')}.`;
}

console.log(showInfo(user1, box1));
// console.log(showInfo(user2, box2));
// console.log(showInfo(user3, box3));

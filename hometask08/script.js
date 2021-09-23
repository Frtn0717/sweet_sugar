class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

class Box extends Entity {
  constructor(name, content, owner) {
    super(name);
    this.content = content.map(item => {
      if (item.color) {
        return {name: item.name, color: item.color}
      } else {
        return {name: item.name}
      }
    });
    this.ownerName = owner.name;
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

  setBoxesNames(box) {
    return this.boxesNames = [box];
  }

}

const user1 = new User('Stan', 33, 'developer');
const user2 = new User('Michael', 23, 'designer');
const user3 = new User('Samantha', 27, 'manager');

const box1 = new Box(
  'Old sneaker box', 
  [new Stuff('pencil', 'grey'), new Stuff('pen', 'blue'), new Stuff('paper', 'white')],
  new User('Stan', 33, 'developer')
  );

  user1.setBoxesNames(box1.name);

const box2 = new Box(
  'Box of chocolates', 
  [new Stuff('pencil', 'black'), new Stuff('eraser'), new Stuff('paper', 'white')],
  new User('Michael', 23, 'designer')
  );

  user2.setBoxesNames(box2.name);

const box3 = new Box(
  'Handmade box', 
  [new Stuff('pen', 'red'), new Stuff('calculator', 'black'), new Stuff('paper')],
  new User('Samantha', 27, 'manager')
  );

  user3.setBoxesNames(box3.name);


function showInfo(box, user) {
  return `${box.ownerName} is ${user.getAge()} years old on position ` + 
  `${user.getPos()} has ${box.name} with` + 
  `${box.content.map(item => {
    if (item.color) {
      return ` ${item.color} ${item.name}`;
    } else {
      return ` ${item.name}`;
    }
  })}.`
};


  // console.log(box1);
  // console.log(box2);
  // console.log(box3);

  // console.log(user1);
  // console.log(user2);
  // console.log(user3);

console.log(showInfo(box1, user1));
console.log(showInfo(box2, user2));
console.log(showInfo(box3, user3));

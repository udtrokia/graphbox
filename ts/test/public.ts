class Animal{
  name: string
  constructor(name: string){
    this.name = name;
  }
  cs() {
    return console.log(this.name);
  }
}

let a = new Animal("hello");
a.cs()

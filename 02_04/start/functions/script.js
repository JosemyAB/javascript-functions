var speak = function(what) {
  console.log(what);
  //console.log(this.normal);
  console.log(this.love);
}

var saySomething = {normal: "meow", love: "purr"}
//speak.call(saySomething, saySomething.normal);
speak.apply(saySomething, ['meouff']);

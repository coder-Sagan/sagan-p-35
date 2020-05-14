
var peopleCount = 0;
var database;

function setup() {
  canvas = createCanvas(600, 600);
  database = firebase.database();
  form = new Form()
  user = new User();
}

function draw(){
  background(255);
  form.display();
}

let recipes = [
  {
    "name": "Chocolate cake",
    "portions": 6,
    "category": ["cocolate", "raspberry"],
    "allergies": ["vegan", "lactose"],
    "url": "http://www.cake.com"
  },
  {
    "name": "Vanilla cake",
    "portions": 6,
    "category": ["vanilla", "raspberry"],
    "allergies": [],
    "url": "http://www.morecake.com"
  }
]

let div = document.getElementById("recipes");

let test = document.createElement("div");

for(let i=0; i<recipes.length; i++){
  let name = document.createElement("h3");
  name.innerHTML = recipes[i].name;
  test.appendChild(name);

  let portions = document.createElement("h3");
  portions.innerHTML = "Portioner: " + recipes[i].portions;
  test.appendChild(portions);

  let category = document.createElement("h3");
  category.innerHTML = "Smak: " + recipes[i].category;
  test.appendChild(name);

  let allergies = document.createElement("h3");
  name.innerHTML = recipes[i].name;
  test.appendChild(name);

  let url = document.createElement("h3");
  name.innerHTML = recipes[i].name;
  test.appendChild(name);
}
div.appendChild(test);



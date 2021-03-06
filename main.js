let recipes = [
  {
    "name": "Vegansk chokladtårta",
    "portions": "",
    "info": "Supergod vegansk tårta med choklad, som har serverats på många kalas här! I receptet har man en chokladganache som fyllning, men ett tips om man tycker det blir för mycket choklad är att byta ut det mot hallonmousse. Istället för ägg används här linfrömjöl, vilket är svårt att få tag på i Sverige, men man kan fixa eget genom att mixa/mortla linfrön.",
    "allergies": ["vegansk", "laktosfri"],
    "url": "https://www.howtocookthat.net/public_html/best-vegan-chocolate-cake-recipe/"
  },
  {
    "name": "Citron- och blåbärstårta",
    "portions": "",
    "info": "En tårta som verkar hur god som helst men som jag tyvärr aldrig haft tillfälle att göra! I smeten har man citron och blåbär, och som fyllning är det en creme cheese-frosting, även den med citron.",
    "allergies": "",
    "url": "https://thecakeblog.com/2016/06/lemon-blueberry-cake.html"
  },
  {
    "name": "Mirror glaze-tårta med hallonmousse/passionfruktsmousse",
    "portions": "",
    "info": "Fantastisk mirror glaze-tårta med härlig mousse i! Tycker man det är för mycket med både hallonmousse och passionfruktsmousse går det utmärkt att bara ha den ena, och det går även bra att byt ut glazen om man skulle vilja det! ",
    "allergies": "",
    "url": "http://www.mandibakar.se/glaserad-tarta-med-hallonmousse-passionsfruktsmousse-glazed-mirror-cake/"
  },
  {
    "name": "Mirror glaze-tårta med vit chokladmousse/svatvinbärsmousse",
    "portions": "",
    "info": "Ytterligare en mirror glaze-tårta med mousse i! Precis som den andra kan man välja själv vilken mousse man vill ha i.",
    "allergies": "",
    "url": "https://sverigesradio.se/artikel/6786803"
  },
  {
    "name": "Vegansk morotskaka",
    "portions": "12 bitar",
    "info": "Kanske är tårta inte riktigt din grej, men morotskaka är väl alltid gott? Den här är dessutom vegansk!",
    "allergies": ["vegansk", "laktosfri"],
    "url": "https://www.koket.se/saftig-vegansk-morotskaka-med-cream-cheese-frosting"
  },
  {
    "name": "Sockerfri chokladtårta",
    "portions": "2",
    "info": "Inte nog med att den här tårtan är socker- och glutenfri, den är dessutom liten! Perfekt om man inte är så många.",
    "allergies": ["sockerfri", "glutenfri"],
    "url": "https://bakasockerfritt.se/item/chokladgraddtarta-med-vanilj#comments"
  }
]

let content = document.getElementById("recipes");

let div = document.createElement("div");

for(let i=0; i<recipes.length; i++){
  let name = document.createElement("h3");
  name.innerHTML = recipes[i].name;
  div.appendChild(name);

  let info = document.createElement("p");
  info.innerHTML = recipes[i].info;
  div.appendChild(info);

  if(recipes[i].portions){
    let portions = document.createElement("p");
    portions.innerHTML = "Portioner: " + recipes[i].portions;
    div.appendChild(portions);
  }

  if(recipes[i].allergies){
    let allergies = document.createElement("p");
    allergies.innerHTML = "Specialkost: " + recipes[i].allergies;
    div.appendChild(allergies);
  }

  let url = document.createElement("a");
  url.innerHTML = "Länk till receptet" 
  url.href = recipes[i].url;
  div.appendChild(url);
}
content.appendChild(div);



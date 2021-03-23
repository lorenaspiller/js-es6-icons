// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const iconsHtml = $(".icons");

// icons.forEach((icon) => {
//   const {name, family, prefix} = icon;
//   const elementHtml = `
//   <div>
//     <i class="${family} ${prefix}${name}"></i>
//     <div class="title">${name}</div>
//   </div>
//   `;
//   iconsHtml.append(elementHtml);
// });





// Milestone 2
// Coloriamo le icone per tipo

const colorsMap = [
  {
    category : "food",
    color: "lightblue"
  },
  {
    category : "beverage",
    color: "orange"
  },
  {
    category : "animal",
    color: "lime"
  }
];


const iconsColored = icons.map((icon) => {
  let itemColor = "";

  colorsMap.forEach((item, i) => {
    if (icon.category == item.category) {
      itemColor = item.color;
    }
  });

  icon.color = itemColor;

  return icon;
});

console.log(icons);

iconsColored.forEach((icon, i) => {
  const {name, family, prefix, color} = icon;
  const elementHtml = `
  <div>
    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
    <div class="title">${name}</div>
  </div>
  `;
  iconsHtml.append(elementHtml);
});






// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


const categories = [];

icons.forEach((icon, i) => {
  if (categories.includes(icon.category) == false) {
    categories.push(icon.category);
  }
});

console.log(categories);

const select = $("#type");
categories.forEach((item, i) => {
  select.append(`<option value="${item}">${item}</option>`);
});

select.change(function() {
  const selected = $(this).val();


  let itemsFiltered = iconsColored.filter((item) => selected == item.category);

  if (itemsFiltered.length == 0) {
    itemsFiltered = iconsColored;
  }


  iconsHtml.html("");

  itemsFiltered.forEach((icon, i) => {
    const {name, family, prefix, color} = icon;
    const elementHtml = `
    <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
    </div>
    `;
    iconsHtml.append(elementHtml);
  });

});

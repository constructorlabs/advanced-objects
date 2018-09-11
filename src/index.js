const teaBagsLeft = teaBags => {
  return Object.values(teaBags).reduce((acc,item) =>{
    return acc+item;
  })
  // function receives an object where keys are names of tea types
  // and values are the number of teaBags we have of that type.

  // return the total number teabags we have left
}

const shoppingList = (previousShoppingList, newShoppingList) => {
  return Object.assign({},previousShoppingList, newShoppingList);

  // function receives two shopping list objects
  // a shopping list has items names as keys and the number of items required as values

  // return a new shopping list which has properties from both shopping lists
  // properties from newShoppingList should overwrite properties from previousShoppingList
  // previousShoppingList and newShoppingList should not be mutated
}

const footballResults = (results) => {
  const teams=Object.keys(results);
  return teams.map( item =>{
    return `${item} has ${results[item]} points`;

  })
  // function receives an object called results
  // results has football team names as keys and their number of points as values
  // {
  //   arsenal: 7,
  //   tottenham: 3,
  //   chelsea: 2
  // }

  // return an array of strings containing the results,
  // which follows the format '<teamname> has <points> points'
  // for above input it would be

  // [
  //   'arsenal has 7 points',
  //   'tottenham has 3 points',
  //   'chelsea has 2 points'
  // ]
}

const convertBookArrayToMap = books => {

  const booksMap = {};
  books.forEach(item => booksMap[item.id] = item);
  return booksMap;
  // the function receives an array of books where each book has an id, author, title and year

  // for example
  // {
  //   id:1,
  //   author: "Alexander Dumas",
  //   title: "The count of Monte Christo",
  //   year: 1884
  // }

  // convert the array of books into a map, where each key is a book id and the corresponding value
  // is the object with that id from the array

  // for example
  // {
  //   1: {
  //     id:1,
  //     author: "Alexander Dumas",
  //     title: "The count of Monte Christo",
  //     year: 1884
  //   }
  // }

  // hint: create a new output object and assign new properties with id as key and the book as value
}

const dogCount = dogs => {
  const dogLoc={};
  dogs.forEach(item => {
    dogLoc[item.location]===undefined? dogLoc[item.location]=1:dogLoc[item.location]++
    })
  return dogLoc;
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // the number of dogs at that location as values

  // hint: create a new output object and loop over dogs array.
  // For each dog increment the value corresponding to the location key.
}

const dogNames = dogs => {
  const dogNameArray = {};
  dogs.forEach(item => {
    dogNameArray[item.location]===undefined ? dogNameArray[item.location] = [item.name] :
    dogNameArray[item.location].push(item.name);})
  return dogNameArray;
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // as values an array which contains the names of the dogs
  // at that location
}

const fruitMarket = boxes => {
  const fruitTotal={};
  boxes.forEach(item => {
    fruitTotal[item.contents]===undefined ? fruitTotal[item.contents] = item.number :
    fruitTotal[item.contents] += item.number;
  })
  return fruitTotal;
  // function receives an array of fruit box objects.
  // each fruit box object has a name and number of contents
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the total for that
  // fruit in all boxes as values.
}

const averageFruitPerBox = boxes => {
  const fruitTotal={};
  boxes.forEach(item => {
    if (fruitTotal[item.contents]===undefined) {
      fruitTotal[item.contents] = [item.number,1];
    }
    else {
      fruitTotal[item.contents][0] += item.number;
      fruitTotal[item.contents][1]++;
    }
  });
  const fruitNames = Object.keys(fruitTotal);
  const fruitTotalAvg = {};
  fruitNames.forEach(item => {
    fruitTotalAvg[item] = fruitTotal[item][0]/fruitTotal[item][1];
  });
  return fruitTotalAvg;

  // function receives an array of fruit box objects.
  // each fruit box object has a contents and number property
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the average number of
  // fruit per box for that fruit type as value
}

/* STRETCH GOALS */

const footballResultsWithObject = (teams, results) => {
  const newObj = {};
  const keys = Object.keys(teams);
  keys.forEach(item => {
    newObj[teams[item]] = results[item];
  })
  return newObj;
  // function receives two parameters:
  // 1. an object where which contains football team ids as keys and team names as values
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
}

const footballResultsWithArray = (teams, results) => {
  const kateTeam={};
  const ids=Object.keys(results);
  ids.forEach(item => {
    const myObj = teams.find(item2 => item2.id==item);
    kateTeam[myObj.name]=results[item];
  });
  return kateTeam;
  // function receives two parameters:
  // 1. array of football team objects
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
}

const stockMarket = prices => {
  const result = {};
  prices.forEach( item => {
    if (result[item.ticker]===undefined) {result[item.ticker]=[item.price];}
    else {result[item.ticker].push(item.price);}
  });
  const minMax = {};
  const tickers = Object.keys(result);
  tickers.forEach(item => {
    minMax[item] = {min: Math.min(...result[item]), max: Math.max(...result[item])};
  })
  return minMax;
  // function receives an array of share prices produced during the day
  // each share price is an object which has a ticker and a price property.

  // { ticker: 'GOOG', price: 99}

  // return an object which has ticker as key another object as value,
  // the value object should have two properties: min and max which each contain
  // the min and max price achieved during the day
}

const calculateOrderPrice = (menu, order) => {
  const orders = Object.keys(order);
  let total=0;
  orders.forEach(item => {
    total+=menu[item]*order[item];

  })
  return total;

  // function receives two parameters: `menu` and `order`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
}


const calculateOrderPriceWithType = (menu, order, type) => {
  const orders = Object.keys(order);
  let total=0;
  orders.forEach(item => {
    total+=menu[item]*order[item];

  })
  const calc = {
    eatIn() {
      return 1.1*total;
    },
    takeAway() {
      return 5+total;
    }
  };
  return calc[type]();

  // function receives three parameters: `menu`, `order` and `type`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values
  // type is a string whose value is either `eatIn` or `takeAway`

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
  // add 10% service charge for `eatIn` orders and a fixed delivery charge of 5 to `takeAway` orders

  // try to implement the service charge and delivery charge calculation without using if/else
  // hint: you can create an object with methods that calculate the charges and call the relevant one using
  // the order type provided
}

module.exports = {
  teaBagsLeft,
  shoppingList,
  footballResults,
  convertBookArrayToMap,
  dogCount,
  dogNames,
  fruitMarket,
  averageFruitPerBox,
  footballResultsWithObject,
  footballResultsWithArray,
  stockMarket,
  calculateOrderPrice,
  calculateOrderPriceWithType
}

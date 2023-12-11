/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpends = {};

  for (let i = 0; i < transactions.length; i++) {
    if (totalSpends[transactions[i]["category"]] == undefined) {
      totalSpends[transactions[i]["category"]] = transactions[i]["price"]
    }
    else {
      totalSpends[transactions[i]["category"]] += transactions[i]["price"]
    }
  }

  let totalSpendsArray = []
  for (const category in totalSpends) {
    totalSpendsArray.push({["category"]: category, totalSpent: totalSpends[category]});
  }
  return totalSpendsArray;
}

// let transaction = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 50,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656076800000,
//     price: 100,
//     category: 'Travel',
//     itemName: 'Bus',
//   },
//   {
//     id: 3,
//     timestamp: 1656076800000,
//     price: 50,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ]

// console.log(calculateTotalSpentByCategory(transaction));

module.exports = calculateTotalSpentByCategory;

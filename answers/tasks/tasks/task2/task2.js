/**
 У нас есть набор билетов вида:

 [
   { from: 'London', to: 'Moscow' },
   { from: 'NY', to: 'London' },
   { from: 'Moscow', to: 'SPb' },
   ...
 ]

 Из этих билетов можно построить единственный, неразрывный маршрут.
 Петель и повторов в маршруте нет.

 Нужно написать функцию, которая возвращает билеты
 в порядке следования по маршруту.
 **/

function getRoute(tickets = []) {
  const to = [], from = [];
  tickets.forEach((item) => {
    to.push(item.from);
    from.push(item.to);
  });
  const reference = to.filter((item) => from.indexOf(item) === -1);
  let member, result = [];
  for (let x = 0; x < tickets.length; x++) {
    tickets.forEach((item) => {
      if (!member && item.from === reference[0]) {
        result.push(item);
        member = item.to;
      } else if (item.from === member) {
        result.push(item);
        member = item.to;
      }
    })
  }
  return result;
}

/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [
        { from: 'London', to: 'Moscow' },
        { from: 'New-York', to: 'London' },
        { from: 'Moscow', to: 'SPb' },
        { from: 'San-Francisco', to: 'New-York' }
      ]
    ],
    result:
      [
        { from: 'San-Francisco', to: 'New-York' },
        { from: 'New-York', to: 'London' },
        { from: 'London', to: 'Moscow' },
        { from: 'Moscow', to: 'SPb' }
      ]
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = getRoute;

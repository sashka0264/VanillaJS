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
  const obj = {},
    to = [],
    from = [],
    result = [];

  tickets.forEach((item) => obj[item.from] = item.to);
  for (let key in obj) {
    to.push(key);
    from.push(obj[key]);
  }
  const start = to.filter((item) => from.indexOf(item) === -1)[0],
    end = from.filter((item) => to.indexOf(item) === -1)[0];

  function search(from) {
    result.push({
      from: from,
      to: obj[from]
    });
    if (obj[from] !== end) search(obj[from]);
  }
  search(start)
  return result;
}

/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [{
  args: [
    [{
        from: 'London',
        to: 'Moscow'
      },
      {
        from: 'New-York',
        to: 'London'
      },
      {
        from: 'Moscow',
        to: 'SPb'
      },
      {
        from: 'San-Francisco',
        to: 'New-York'
      }
    ]
  ],
  result: [{
      from: 'San-Francisco',
      to: 'New-York'
    },
    {
      from: 'New-York',
      to: 'London'
    },
    {
      from: 'London',
      to: 'Moscow'
    },
    {
      from: 'Moscow',
      to: 'SPb'
    }
  ]
}];

module.exports['testcases'] = testcases;
module.exports['solution'] = getRoute;
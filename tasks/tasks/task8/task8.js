/**
 Необходимо написать функцию, которая принимает объект и строку - путь в объекте
 и возвращает значение, находящееся по этому пути

 const obj = {a: {b: {c: 4}}}
 get(obj, 'a.b.c') => 4
 get(obj, 'a.b') => {c: 4}

 **/

function get(obj, path) {
  const arr = path.split('.');
   return arr.reduce((lastFuncRes, nowItem) => {
    if (!lastFuncRes) {
      return obj[nowItem];
    }
    return lastFuncRes[nowItem];
  }, null);
} 


/*------------------*/
/*    Test cases    */
/*------------------*/


const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};
const testcases = [
  {
    args: [
      obj,
      'a.b.c'
    ],
    result: 'd'
  },
  {
    args: [
      obj,
      'a.b'
    ],
    result: {c: 'd'}
  },
  {
    args: [
      obj,
      'a.e'
    ],
    result: 'f'
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = get;

/**
 Необходимо написать функцию создающую пространство имен.
 На вход подается строка вида: "a.b.c.d.e",
 на выходе ожидаем получить вложенные друг в друга объекты.

 namespace('a.b.c.d.e') -> "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

 **/

function helper(member) {
  if (member) {
    return member;
  } 
  return {}
}

function namespace(str) {
  const arr = str.split('.').reverse();
  let member = null;

  arr.forEach((item, i, arr) => {
    let elem = {[item] : helper(member)}
    member = elem;
  });

  return member;
}
namespace('a.b.c.d.e');

/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      'a.b.c.d.e'
    ],
    result: {a: {b: {c: {d: {e: {}}}}}}
  },
  {
    args: [
      'ab.cd.e'
    ],
    result: {ab: {cd: {e: {}}}}
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = namespace;

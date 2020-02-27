/**
 Необходимо написать функцию, которая на вход принимает API call (вызов fetch),
 и вызывает его.
 Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 Если в итоге выполнить API call не удалось, бросить ошибку.
 **/

function get(call, n = 5) {
  return call()
    .then(res => res)
    .catch(() => n > 1 ? get(call, n - 1) : Promise.reject(new Error()));
}


module.exports['solution'] = get;
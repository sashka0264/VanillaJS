document.addEventListener('DOMContentLoaded', () => {
  const cards = document.getElementById("cards");

  fetch('https://api.punkapi.com/v2/beers/1')
    .then((res) => res.json())
    .then((res) => {
      let arr = res.map((item) => {
        console.log(item)
        return item;
      });
      // console.log(arr);
      
    });
});

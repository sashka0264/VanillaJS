let query = `{
	directors {
    id
	}
}`;
fetch("https://powerful-savannah-78956.herokuapp.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
})
 .then(res => res.json())
 .then(res => console.log(res.data));
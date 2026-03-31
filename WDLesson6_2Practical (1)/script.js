function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = "";
  build += `<div class = "card">
    <h3>"${school.name}"</h3>
    <img src="${school.name}"></img>
    <h3>"${school.address}"</h3>
  </div>`
output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Childish Gambino",
    "image":"https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Childish-gambino-because-the-internet.gif/250px-Childish-gambino-because-the-internet.gif",
    "album":"Because The Internet",
    "url":"https://genius.com/albums/Childish-gambino/Because-the-internet"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
   let build = "";
  build += `
    <div class="card">
      <h3>${artist.name}</h3>
      <a href="${artist.url}">
        <img src="${artist.image}">
      <p>${artist.album}</p>
    </div>`;

  output.innerHTML = build;
}






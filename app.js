


$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:blackbear&type=album"
}).done(function(res){
	console.log(res);
  var i;
	let count = res.albums.total;
	let html=`<div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${res.albums.items[0].images[1].url}" style="width:150px" style="height:150px">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${res.albums.items[0].name}</p>
        </div>
      </div>
    </div>
  </div>`;

  for(i=1; i<count; i++){
    html += `<div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${res.albums.items[i].images[1].url}" style="width:150px" style="height:150px">
      </div>
     <div class="card-stacked">
       <div class="card-content">
          <p>${res.albums.items[i].name}</p>
        </div>
      </div>
    </div>
  </div>`;
  }
	document.querySelector('#lul').innerHTML = html;
});

$.ajax({
    url:"https://api.spotify.com/v1/albums/717ryge05ohaVKGzbNykeQ"
  }).done(function(album){
      console.log(album);
});


// document.getElementById("app").innerHTML=html;



$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:blackbear&type=album"
}).done(function(res){
	console.log(res);
  var i;
	let count = res.albums.total;
	let html=``;

  for(i=0; i<count; i++){
    html += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${res.albums.items[i].images[1].url}" style="width:100px" style="height:100px">
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
      var j;
      let count2 = album.tracks.items.length;
      let html2 = `>`;

      for(j=0; j<count2; j++){
        html2 += `
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${album.images[1].url}" style="width:100px" style="height:100px">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${album.tracks.items[j].name}</p>
          <p><audio controls>
          <source src="${album.tracks.items[j].preview_url}" type="audio/ogg">
          </audio>
        </div>
      </div>
    </div>
  </div>`;
      }

  document.querySelector('#lel').innerHTML = html2;
});


// document.getElementById("app").innerHTML=html;
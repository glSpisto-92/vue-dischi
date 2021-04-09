let app = new Vue (
  {
    el: '#app',
    data: {
      albums: [],
      genres: [], //array generi
      genreSelect: '' //collegamento alla select per generi
    },
    mounted: function(){

      let self = this;

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function (response) {

        self.albums = response.data.response;
        // filtro in ordine gli album dal  piu vecchio
        self.albums.sort((a, b) => {return a.year - b.year});

        // ciclo gli albums per genere e poi pusho nel nuovo array
        self.albums.forEach((item, i) => {
          if(self.genres.includes(item.genre) == false){
            self.genres.push(item.genre);
          }
        });
      });
    },
  }
);

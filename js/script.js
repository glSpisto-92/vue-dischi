let app = new Vue (
  {
    el: '#app',
    data: {
      albums: []
    },
    mounted: function(){

      let self = this;

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function (response) {

        self.albums = response.data.response;
        // filtro in ordine gli album dal  piu vecchio
        self.albums.sort((a, b)=>{return a.year - b.year});
      });
    },
    methods: {

    }
  }
);

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
        self.albums.sort(function(a, b){return a-b});
      });
    },
    methods: {
      orderedAlbums: function(){
            this.albums.sort((a, b) => {
                return a.year - b.year;
            });


    }
  }
);

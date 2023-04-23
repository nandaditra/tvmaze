<script>
import Footer from '@/components/Footer.vue';
import ListFilmItem from '@/components/ListFilmItem.vue';
import api from '../api/index'

export default {
    name: 'DaftarSaya',
    components : {
    ListFilmItem,
    Footer
    },
    data() {
        return {
            movies : [],
            isLoading: false,
            error: null
        }
    },
    methods: {
        fetchMovies(){
            api.get('search/shows?q=girls')
             .then(response =>  (
               this.isLoading = true,
               this.movies = response.data
               ))
             .catch(e => {
                  this.error = e 
                  this.isLoading = false
             })  
        },

    },
    mounted() {
        this.fetchMovies()
    }
}
</script>

<template>
   <div class="bg-black">
      <div class="mx-6 py-5 lg:mx-36 lg:py-10">
        <h3 class="text-1xl lg:text-2xl font-bold mb-10">Total Video : {{ movies.length }}</h3>

        <div v-for="(item, index) in movies" :key="item.score">
            <ListFilmItem 
                :id = "index"
                :url= "item.show.image.medium"
                :title = "item.show.name" 
                :link = "item.show.url"
                :status = "item.show.status"
                :genre = "item.show.genres" 
                :primiered = "item.show.premiered"
                :type = "item.show.type"
             />
        </div>

        
      </div>
   </div>
   
   <Footer />
</template>
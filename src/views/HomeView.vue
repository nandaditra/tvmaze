<script>
import Footer from '@/components/Footer.vue';
import api from '../api/index'
import ItemFilm from '@/components/ItemFilm.vue';
import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });

export default {
    name: 'HomeView',
    components: {
        ItemFilm,
        Footer
    },
    data() {
        return {
            movies :[],
            photo : null,
            isLoading: false,
            error: null
        }
    },
    methods: {
        fetchMovies(){
            api.get('/search/shows?q=girls')
             .then(response =>  (this.movies = response.data))
             .catch(e => {
                  this.error = e 
             })  
        }
    },
    mounted() {
        this.fetchMovies()
    }
}


</script>

<template>
     <!-- <Header /> -->

     <div class="bg-black">
        
          <div class="bg-black pb-10">
            <div class="mx-6 lg:mx-32 sm:mx-16 pt-5">
                <span class="bg-red rounded-full lg:text-2xl px-4 py-1 mt-4">Show Film</span>     
                <div class="grid md:grid-cols-5 grid-cols-2 md:gap-4 lg:gap-6 gap-3 mt-5 lg:mt-10">
                     <div v-for="(item, index) in movies" :key="item.score" >
                        <ItemFilm v-if="item.show.image != null"
                            :id = "index"
                            :url= "item.show.image.medium"
                            :title = "item.show.name" 
                            :status = "item.show.status"
                            :link = "item.show.url"
                            :genre = "item.show.genres" 
                            :primiered = "item.show.premiered"
                            :type = "item.show.type"
                            :summary="item.show.summary"/>
                     </div>
                </div>
            </div>
          </div>
     </div>

     <Footer />
</template>


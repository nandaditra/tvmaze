<script>
import Footer from '@/components/Footer.vue';
import ItemFilm from '@/components/ItemFilm.vue';

export default {
    name: 'Search',
    components : {
    Footer,
    ItemFilm
    }
}
</script>

<template>

   <div class="bg-black">
      <div class="mx-6 py-5 lg:mx-36 lg:py-10">
        <h3 class="text-1xl lg:text-2xl font-bold mb-10">Total Video : 10</h3>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
           <ItemFilm />
       </div>
      </div>
   </div>
   
   <Footer />
</template>
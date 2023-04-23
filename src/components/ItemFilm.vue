<template>
    <div class="drop-shadow-md hover:block rounded-md bg-black
      transition ease-in-out hover:-translate-y-1 delay-150 duration-200 " 
         @click="open=true"
         >
       <img class="w-72 hover:w-full  hover:opacity-50 rounded-t-lg" :src="url">
       <h5 class="text-lg z-0 lg:text-2xl py-1">{{ title }}</h5>
       <span class="absolute hidden hover:block ms-auto  md-48 text-3xl 
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    play_circle
       </span>
    </div>
    
     <Transition name="bounce">
        <div v-if="open" class="modal-background">
           <div v-if="open" class="modal bg-blue grid grid-cols-4 lg:grid-cols-7"> 
             <div class="col-span-1 lg:col-span-2">
                <img :src="url" class="w-full"/>
              </div>
              <div class="col-span-3 lg:col-span-5 pr-1">
                  <span class="material-icons-outlined absolute 
                               hover:font-bold float-right top-5 right-5"
                                @click="open = false">
                         close 
                  </span>
                  <table class="text-[10px] lg:text-xl m-2 lg:m-7">
                      <tr>
                          <td>Name</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ title }}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ genre.join(',')}}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ status }}</td>
                        </tr>
                        <tr>
                            <td>Premiered</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ primiered == null ? 'kosong' : primiered }}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ type }}</td>
                        </tr>
                    </table>
                    
                    <div class="my-1 lg:my-5 mx-3 lg:mx-7 text-[11px] lg:text-xl">
                      <span> Description</span>
                      <p class="py-2 text-justify">
                           {{ summary == null ? 'kosong' : summary.substring(0,300).replace('<p>','') }}
                       ...</p>
                       <a :href="link"><button class="float-right bg-red rounded-md px-2 text-[8px]  hover:font-extrabold lg:text-lg lg:px-7 py-1 lg:py-2 lg:absolute bottom-10 right-10 ">
                        <span class="material-icons-outlined float-left text-[10px] lg:text-lg pr-1 ">
                            open_in_browser
                          </span>
                          Visit
                      </button></a>
                    </div>
            </div>
          </div>
      </div>
    </Transition>
</template>

<script>
export default {
    name : 'ItemFilm',
    props: {
        url:String,
        title : String,
        genre : Array,
        status : String,
        link : String,
        primiered : String , 
        type : String,
        summary: String,
    },
    data() {
      return {
        open : false
     }
  }
}
</script>

<style>
.material-icons .md-18 { font-size: 18px; }
.material-icons .md-24 { font-size: 24px; }
.material-icons .md-36 { font-size: 36px; }
.material-icons .md-48 { font-size: 48px; }


.modal-background {
  display: block;
  position: fixed; 
  z-index: 20; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal {
  border-radius: 5px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 20%;
  width: 1200px;
  transition: opacity 0.3s ease;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



</style>
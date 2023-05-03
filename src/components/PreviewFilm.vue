<script>

export default {
  name: "PreviewFilm",
  data() {
    return {
      open : false
    }
  }
}
</script>

<template>
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

<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  background-color: aquamarine;
  margin-left: -150px;
}
</style>
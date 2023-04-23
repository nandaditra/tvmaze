<template>
    <header class="bg-blue z-10 sticky top-0">
       <nav class="py-4 lg:py-10 relative mx-6 lg:mx-32 flex flex-wrap lg:flex-row justify-between">
            <h3 class="float-left py-2 lg:py-2 text-white lg:text-3xl font-extrabold"><RouterLink to="/tvmaze">TVMaze</RouterLink></h3>

            <button 
                @click="show = !show"
                data-te-collapse-init
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                type="button"
                class="float-right inline-flex items-center p-2 ml-3 text-sm text-gray-500 
                       rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                       focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="material-icons-outlined text-right basis">
                     menu
                </span>
            </button>

                <Transition name="slide-fade">
                   <div 
                    class="!visible mt-2 hidden flex flex-col lg:flex-row lg:block basis-[100%] lg:mt-0  lg:basis-auto  transition-all ease-in duration-500" 
                    id="collapseExample" data-te-collapse-item
                     >
                        <form class="w-6/6 py-3 lg:py-0 mx-1 lg:mx-0 lg:ms-auto lg:mr-10 lg:grow content-center float-left">
                            <div class="border border-white rounded-full bg-white flex flex-row">
                                <span class="material-icons-outlined float-left px-3 py-2 rounded-l-full bg-blue">search</span>
                                <input type="text" class="bg-blue w-10/12 py-2 focus:outline-none" />
                                <button class="px-4 py-1 bg-white text-blue rounded-r-full hover:text-red hover:font-bold">Search</button>
                            </div>
                        </form>
                        <ul class="flex flex-col lg:flex-row">
                                <li class="text-[16px] py-2 lg:text-[20px] float-left px-2 lg:px-4 hover:text-red hover:font-bold"><RouterLink to="/daftarsaya">Daftar Saya</RouterLink></li>
                                <li class="text-[16px] py-2 lg:text-[20px] float-left px-2 lg:px-4 hover:text-red hover:font-bold"><RouterLink :to="{path:'/register'}">Register</RouterLink></li>
                                <li class="text-[16px] py-2 lg:text-[20px] float-left px-2 lg:px-4 hover:text-red hover:font-bold"><RouterLink :to="{path:'/login'}">Log In</RouterLink></li>
                        </ul>
                </div>
            </Transition>
        </nav>
        
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });

export default {
    name: "Header",
    components: { RouterLink },
    data() {
        return {
            show: false
        }
    },
    methods: {
        
    }
}
</script>

<style>

.slide-fade-enter-active {
  transition: height 1s ease-in;
}

.slide-fade-leave-active {
  transition: height 1s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 600px)  {
    #content {
    display: none;
    }   
}
</style>
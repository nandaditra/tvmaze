<template>
     <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 bg-black">
        <div class="hidden md:block lg:block">
            <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/06/18/IMG-20240618-WA0081-1086567727.jpg"/>
        </div>
        <div>
            <div class="mx-10 lg:mx-36 my-10 lg:my-18">
                <form class="pb-20 lg:pb-0">
                    <h3 class="text-center text-3xl font-bold">Sign In</h3>

                    <div class="mt-12">
                        <label for="email" class="text-sm lg:text-lg">Name</label><br/>
                        <input type="text" name="name" class="w-full  my-2 lg:my-3 bg-black text-white px-3 lg:px-4 py-3 lg:py-4 border border-white rounded-lg focus:outline-red" />
                    </div>

                    <div class="mt-4">
                        <label for="email" class="text-sm lg:text-lg">Email</label><br/>
                        <input type="text" name="email" class="w-full  my-2 lg:my-3 bg-black text-white px-3 lg:px-4 py-3 lg:py-4 border border-white rounded-lg focus:outline-red" />
                    </div>
                    <div class="mt-4">
                        <label for="email" class="text-sm lg:text-lg">Password</label><br/>
                        <input type="text" name="password" class="w-full  my-2 lg:my-3 bg-black text-white px-3 lg:px-4 py-3 lg:py-4 border border-white rounded-lg focus:outline-red"/>
                    </div>

                    <div class="mt-20">
                        <p class="float-left text-sm lg:text-lg my-2">Do You have Account ?<a href="/login"><b class="hover:text-red hover:font-extrabold">Login</b></a> </p>
                        <button class="bg-red px-6 lg:px-10 py-2 lg:py-3 float-right text-sm lg:text-lg rounded-lg transition ease-in-out hover:-translate-y-1 delay-150 duration-300 ">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    name : "SignIn",
    components : {
         Footer
    }
}
</script>
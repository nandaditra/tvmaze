<template>
     <div class="grid grid-cols-7 my-5">
                 <div class="col-span-2 lg:col-span-1">
                    <img class="w-full" :src="url">
                 </div>
                 <div class="col-span-5 lg:col-span-6 bg-blue">
                    <table class="text-sm lg:text-lg m-2 lg:m-5">
                        <tr>
                            <td>Name</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ title }}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td class="px-2 lg:px-5"> : </td>
                            <td>{{ genre.join(', ') }}</td>
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
                    <div class="m-2 lg:m-5">
                        <button class="px-3 lg:px-5 py-1 lg:py-2 text-md lg:text-lg bg-red rounded mr-2 lg:mr-5 transition ease-in-out hover:-translate-y-1 delay-150 duration-300 "><span class="material-icons-outlined float-left mr-2"> smart_display</span>Watch</button>
                        <button class="px-3 lg:px-5 py-1 lg:py-2 text-md lg:text-lg bg-green rounded"><span class="material-icons-outlined float-left mr-2"> dvr</span>Detail</button>
                    </div>
                 </div>
            </div>
</template>

<script>
export default {
    name: 'ListFilmItem',
    props: {
        url:String,
        title : String,
        genre : Array,
        status : String,
        primiered : String , 
        type : String
    }
}
</script>
<template>
  <div class="flex ml-1 px-2 border-b border-gray-100 py-3 justify-between  hover:bg-gray-50" >
          <!-- <input type="checkbox"/> -->
          <div class="ml-3">
            <span class="font-bold text-lg">{{index+1}}</span>
            <span class="mr-2">.</span>
            <span class="font-bold text-gray-800 text-sm border border-gray-800 rounded-sm px-3 py-1">{{todo.type}}</span>
            <span class="text-blue-500 ml-3 font-bold text-lg">{{todo.title}}</span>
          </div>
          
          <div>
            <button class="bg-green-400 rounded-md text-white px-3 py-1 text-sm">완료</button>
            <button class="bg-blue-400 rounded-md text-white px-3 py-1 text-sm ml-3">삭제</button>
          </div>
    </div> 
</template>

<script>
export default {
    props: ['todo','index']

}
</script>

<style>

</style>
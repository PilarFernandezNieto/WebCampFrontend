<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div
    class="flex justify-center flex-col bg-gray-50 dark:bg-gray-900 selection:bg-blue-500 selection:text-white"
  >
    <!-- <div class="sm:absolute sm:top-0 sm:left-0 p-6 text-right">
      <div
        class="font-semibold text-gray-600 dark:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 flex items-center gap-1"
      >
        <span>Backend Status :</span>
        <div v-if="laravelVersion" class="text-green-500">Connected</div>
        <div v-else class="text-red-500">Disconnected</div>
      </div>
    </div> -->
    <Header />
    <section class="contenedor w-11/12 py-20">
      <h2 class="font-black text-center">DevWebCamp</h2>
      <p class="my-4 text-center text-4xl">Conoce la conferencia más importante de Europa</p>
      <div class="lg:grid lg:grid-cols-2 gap-10 mt-10 items-center">
        <img src="img/sobre_devwebcamp.jpg" alt="Sobre DevWebCamp" />
        <div class="space-y-4 mt-8 lg:mt-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla, nunc et
            pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
            Vivamus non libero suscipit, faucibus enim nec, interdum mauris. Maecenas quis nulla at
            arcu facilisis gravida. Curabitur ut sapien nec leo efficitur tincidunt. Nullam euismod,
            nisi vel consectetur interdum, nisl nisi aliquet nunc, quis dictum erat nisl nec libero.

          </p>
          <p>
            neque maxime dolorem similique cupiditate eveniet repellendus assumenda deleniti porro,
            vero cumque blanditiis fugiat temporibus commodi debitis rem nesciunt deserunt velit. A
            illum ad impedit labore ex, laborum commodi minima. Excepturi repellat commodi porro
            voluptates dolorem quam earum. Necessitatibus voluptatem illo aliquid voluptates,
            tempora ex dolorum aliquam fuga sed eum fugiat maxime! Corporis quo provident similique
            deserunt doloremque. Error, voluptatem maiores odio libero aliquam eligendi dicta
            nostrum quam optio. Repellendus magnam consequuntur obcaecati odio facilis ipsa dolores
            magni nam debitis reiciendis tempore mollitia ullam at fugit.
          </p>
        </div>
      </div>
    </section>
    <footer class="bg-blue-950 grid grid-cols-3 items-center p-10 mt-20 font-bold text-2xl" >
      <div>texto aquí</div>
      <div class="text-center">DevWebCamp</div>
      <div class="text-right">texto aqui</div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  min-height: 25rem;
  color: #FFF;
}
</style>

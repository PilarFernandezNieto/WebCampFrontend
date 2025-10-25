<script setup>
import Titulares from './Titulares.vue'
</script>
<template>
  <section class="contenedor w-11/12 py-10">
    <Titulares>
      <template #titulo>DevWebCamp</template>
      <template #subtitulo>La conferencia para desarrolladores más importante de Europa</template>
    </Titulares>

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
          voluptates dolorem quam earum. Necessitatibus voluptatem illo aliquid voluptates, tempora
          ex dolorum aliquam fuga sed eum fugiat maxime! Corporis quo provident similique deserunt
          doloremque. Error, voluptatem maiores odio libero aliquam eligendi dicta nostrum quam
          optio. Repellendus magnam consequuntur obcaecati odio facilis ipsa dolores magni nam
          debitis reiciendis tempore mollitia ullam at fugit.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

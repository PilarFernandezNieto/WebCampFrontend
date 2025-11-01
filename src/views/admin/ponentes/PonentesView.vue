<script setup>
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import ActionLink from '@/components/ActionLink.vue';

</script>
<template>
  <AuthenticatedLayout>
    <template #header>
    <ApplicationLogo class="text-4xl text-center md:text-left"/>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 flex justify-between items-center">
            <div class="text-blue-950">Listado de Ponentes</div>
            <ActionLink :to="{name: 'nuevo-ponente'}">Añadir Ponente</ActionLink>
          </div>

        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>



<style lang="scss" scoped>

</style>
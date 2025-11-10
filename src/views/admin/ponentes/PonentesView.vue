<script setup>
import { onMounted, ref, computed } from 'vue'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import ActionLink from '@/components/ActionLink.vue'
import Ponente from '../../../components/ui/Ponente.vue'
import { usePonenteStore } from '../../../stores/ponenteStore'

const ponenteStore = usePonenteStore()


onMounted(async () => {
  await ponenteStore.getPonentes()
})
</script>

<template>
  <AuthenticatedLayout>
    <template #header>
      <ApplicationLogo class="text-4xl text-center md:text-left" />
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 flex justify-between items-center">
            <div class="text-blue-950 font-bold">Listado de Ponentes</div>
            <ActionLink :to="{ name: 'nuevo-ponente' }">Añadir Ponente</ActionLink>
          </div>
          <section class="p-6">
            <table
              id="ponentes-table"
              class="w-full table-auto border-collapse border border-gray-200"
            >
              <thead class="bg-gray-100 text-gray-700 text-left">
                <tr>
                  <th class="w-[5%] px-2 py-2 border">ID</th>
                  <th class="w-[10%] px-2 py-2 border">Imagen</th>
                  <th class="w-[20%] px-2 py-2 border">Ponente</th>
                  <th class="w-[20%] px-2 py-2 border">Origen</th>
                  <th class="w-[10%] px-2 py-2 border">Acciones</th>
                </tr>
              </thead>

              <tbody>
                <Ponente v-for="ponente in ponenteStore.ponentes" :ponente="ponente" :key="ponente.id" />
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>

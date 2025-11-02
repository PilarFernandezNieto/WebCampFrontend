<script setup>
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import ActionLink from '@/components/ActionLink.vue'
import InputLabel from '@/components/InputLabel.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import InputError from '@/components/InputError.vue'
import SummernoteEditor from '@/components/SummernoteEditor.vue'
</script>
<template>
  <AuthenticatedLayout>
    <template #header>
      <ApplicationLogo class="text-4xl text-center md:text-left" />
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 text-blue-950">Nuevo Paquete</div>
          <div class="formulario p-6">
            <form @submit.prevent="handleSubmitPonente()" class="flex flex-col">
              <div>
                <InputLabel for="nombre" value="Nombre" />
                <TextInput
                  id="nombre"
                  type="text"
                  class="mt-1 block w-full"
                  required
                  autofocus
                  autocomplete="nombre"
                />
                <!-- <InputError class="mt-2" :message="errors.nombre?.[0]" /> -->
              </div>
              <div class="mt-4">
                <InputLabel for="precio" value="Precio" />
                <TextInput
                  id="precio"
                  type="text"
                  class="mt-1 block w-full"
                  required
                  autocomplete="precio"
                />
                <!-- <InputError class="mt-2" :message="errors.password?.[0]" /> -->
              </div>

              <div class="mt-4">
                <InputLabel for="ventajas" value="ventajas" />
                <SummernoteEditor v-model="ventajas" placeholder="Añade el listado de ventajas para este paquete"/>
              </div>

              <PrimaryButton
                class="mt-4 justify-center"
                :class="{ 'opacity-25': processing }"
                :disabled="processing"
              >
                Nuevo
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
.formulario {
  width: 70%;
  margin: 0 auto;
}
textarea {
  width: 100%;
  height: 150px;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* Tailwind's gray-300 */
  border-radius: 0.375rem; /* Tailwind's rounded-md */
  font-size: 1rem;
  font-family: inherit;
}
</style>

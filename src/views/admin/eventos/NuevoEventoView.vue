<script setup>
import { onMounted } from 'vue'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import ActionLink from '@/components/ActionLink.vue'
import InputLabel from '@/components/InputLabel.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import InputError from '@/components/InputError.vue'
import Hora from '../../../components/ui/Hora.vue'
import SummernoteEditor from '@/components/SummernoteEditor.vue'
import { useCategoriasStore } from '@/stores/categoriaStore'
import { useHorasStore } from '@/stores/horaStore'

const categoriaStore = useCategoriasStore()
const horaStore = useHorasStore()

onMounted(async () => {
  await categoriaStore.cargaCategorias()
  await horaStore.cargaHoras()
})
</script>
<template>
  <AuthenticatedLayout>
    <template #header>
      <ApplicationLogo class="text-4xl text-center md:text-left" />
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white shadow-sm sm:rounded-lg">
          <div class="p-6 text-blue-950 text-center font-bold uppercase text-2xl">Nuevo Evento</div>
          <div class="formulario p-4 md:p-6">
            <form @submit.prevent="handleSubmitEvento()" class="flex flex-col">
              <fieldset>
                <legend class="text-blue-950 mb-4 text-xl">Información Evento</legend>

                <div>
                  <InputLabel for="nombre" value="Nombre Evento" />
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
                  <InputLabel for="descripcion" value="Descripción" />
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    placeholder="Escribe la descripción aquí..."
                    class="mt-1 w-full h-32 p-3 border border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md shadow-sm placeholder-gray-600 resize-none text-gray-700"
                  ></textarea>

                  <!-- <InputError class="mt-2" :message="errors.descripcion?.[0]" /> -->
                </div>

                <div class="mt-4">
                  <InputLabel for="categoria" value="Categoría" />
                  <select
                    id="categoria"
                    class="mt-1 block w-full border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md shadow-sm"
                  >
                    <option value="" disabled selected>-- Selecciona una categoría --</option>
                    <option
                      v-for="categoria in categoriaStore.categorias"
                      :key="categoria.id"
                      :value="categoria.id"
                    >
                      {{ categoria.nombre }}
                    </option>
                  </select>
                </div>

                <div class="mt-4">
                  <InputLabel for="dia" value="Selecciona día" />
                  <div class="dias mt-2 flex items-center gap-6">
                    <div class="flex gap-4 items-center">
                      <InputLabel for="viernes" value="Viernes" class="capitalize" />
                      <input
                        type="radio"
                        id="viernes"
                        name="dia"
                        value="1"
                        class="text-blue-950 focus:ring-blue-900"
                      />
                    </div>
                    <div class="flex gap-4 items-center">
                      <InputLabel for="sabado" value="Sábado" class="capitalize" />
                      <input
                        type="radio"
                        id="sabado"
                        name="dia"
                        value="2"
                        class="text-blue-950 focus:ring-blue-900"
                      />
                    </div>
                  </div>
                  <!-- <InputError class="mt-2" :message="errors.pais?.[0]" /> -->
                </div>

                <div class="mt-4">
                  <InputLabel for="hora" value="Selecciona Hora" />
                  <ul class="horas grid grid-cols-2 gap-2 items-center mt-1">
                    <Hora v-for="hora in horaStore.horas" :key="hora.id" :hora="hora" />
                  </ul>
                </div>
              </fieldset>
              <fieldset class="mt-8">
                <legend class="text-blue-950 mb-4 text-xl">Información Extra</legend>
                <div class="">
                  <InputLabel for="ponente" value="Ponentes" />
                  <TextInput
                    id="ponente"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="ponente"
                  />
                  <!-- <InputError class="mt-2" :message="errors.ponente?.[0]" /> -->
                </div>
                <div class="mt-4">
                  <InputLabel for="disponibilidad" value="Plazas disponibles" />
                  <TextInput
                    id="disponibilidad"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="disponibilidad"
                    placeholder="Ej. 20"
                  />
                  <!-- <InputError class="mt-2" :message="errors.disponibilidad?.[0]" /> -->
                </div>
              </fieldset>

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
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 991px) {
  .formulario {
    width: 70%;
  }
}
.icono {
  display: flex;
  align-items: center;
  background-color: #162556;
  justify-content: center;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  padding: 0.5rem;
  margin: 0;
  border: 1px solid #162556;
}
i {
  color: #fff;
  font-size: 1.5rem;
}
</style>

<script setup>
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import ApplicationLogo from '@/components/ApplicationLogo.vue'
import ActionLink from '@/components/ActionLink.vue'
import InputLabel from '@/components/InputLabel.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import InputError from '@/components/InputError.vue'
</script>
<template>
  <AuthenticatedLayout>
    <template #header>
      <ApplicationLogo class="text-4xl text-center md:text-left" />
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 text-blue-950">Nuevo Ponente</div>
          <div class="formulario w-6/12 mx-auto py-6">
            <form @submit.prevent="handleSubmitPonente()" class="flex flex-col">
              <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-4">
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
                  <div class="col-span-8">
                    <InputLabel for="apellidos" value="Apellidos" />
                    <TextInput
                      id="apellidos"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autocomplete="apellidos"
                    />
                    <!-- <InputError class="mt-2" :message="errors.password?.[0]" /> -->
                  </div>
              </div>
                <div class="mt-4">
                    <InputLabel for="ubicacion" value="Ubicación" />
                    <TextInput
                    id="ubicacion"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autocomplete="ubicacion"
                    />
                    <!-- <InputError class="mt-2" :message="errors.ubicacion?.[0]" /> -->   
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

<style lang="scss" scoped></style>

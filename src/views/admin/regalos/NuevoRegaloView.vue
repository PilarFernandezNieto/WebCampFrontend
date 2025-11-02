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
        <div class="bg-white shadow-sm sm:rounded-lg">
          <div class="p-6 text-blue-950 text-center font-bold uppercase">Nuevo Regalo</div>
          <div class="formulario p-4 md:p-6" >
            <form @submit.prevent="handleSubmitCategoría()" class="flex flex-col">
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
</style>

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
          <div class="p-6 text-blue-950 text-center font-bold uppercase text-2xl">
            Nuevo Ponente
          </div>
          <div class="formulario p-4 md:p-6">
            <form @submit.prevent="handleSubmitPonente()" class="flex flex-col">
              <fieldset>
                <legend class="text-blue-950 mb-4 text-xl">Información personal</legend>
                <div class="grid grid-cols-2 gap-8">
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
                  <div class="">
                    <InputLabel for="apellidos" value="Apellidos" />
                    <TextInput
                      id="apellidos"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autocomplete="apellidos"
                    />
                    <!-- <InputError class="mt-2" :message="errors.apellidos?.[0]" /> -->
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-8 mt-4">
                  <div>
                    <InputLabel for="ciudad" value="Ciudad" />
                    <TextInput
                      id="ciudad"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autocomplete="ciudad"
                    />
                    <!-- <InputError class="mt-2" :message="errors.ciudad?.[0]" /> -->
                  </div>
                  <div>
                    <InputLabel for="pais" value="País" />
                    <TextInput
                      id="pais"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autocomplete="pais"
                    />
                    <!-- <InputError class="mt-2" :message="errors.pais?.[0]" /> -->
                  </div>
                </div>
                <div class="mt-4">
                  <InputLabel for="imagen" value="Imagen" />
                  <input type="file" class="mt-1" />
                </div>
                <fieldset class="mt-8">
                  <legend class="text-blue-950 mt-4 text-xl">Información extra</legend>
                  <div class="mt-4">
                    <InputLabel for="areas" value="Áreas de experiencia (separadas por comas)" />
                    <TextInput
                      id="areas"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autocomplete="areas"
                    />
                  </div>
                  <!-- <InputError class="mt-2" :message="errors.areas?.[0]" /> -->
                </fieldset>
                <fieldset class="mt-8">
                  <legend class="text-blue-950 mt-4 text-xl">Redes Sociales</legend>

                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-facebook"></i></div>
                      <TextInput
                        id="facebook"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="facebook"
                        placeholder="Facebook"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.facebook?.[0]" /> -->
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-x-twitter"></i></div>
                      <TextInput
                        id="twitter"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="twitter"
                        placeholder="Twitter"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.twitter?.[0]" /> -->
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-youtube"></i></div>
                      <TextInput
                        id="youtube"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="youtube"
                        placeholder="YouTube"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.youtube?.[0]" /> -->
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-instagram"></i></div>
                      <TextInput
                        id="instagram"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="instagram"
                        placeholder="Instagram"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.instagram?.[0]" /> -->
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-tiktok"></i></div>
                      <TextInput
                        id="tiktok"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="tiktok"
                        placeholder="TikTok"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.tiktok?.[0]" /> -->
                  </div>
                  <div class="mt-4">
                    <div class="flex items-center justify-center mt-1">
                      <div class="icono"><i class="fa-brands fa-github"></i></div>
                      <TextInput
                        id="github"
                        type="text"
                        class="block w-full rounded-l-none"
                        autocomplete="github"
                        placeholder="GitHub"
                      />
                    </div>
                    <!-- <InputError class="mt-2" :message="errors.github?.[0]" /> -->
                  </div>
                </fieldset>
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

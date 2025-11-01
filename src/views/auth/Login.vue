<script setup>
import GuestLayout from '../../layouts/GuestLayout.vue'
import Checkbox from '../../components/Checkbox.vue'
import InputError from '../../components/InputError.vue'
import InputLabel from '../../components/InputLabel.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import TextInput from '../../components/TextInput.vue'
import { useAuthStore } from '../../stores/auth'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const processing = ref(false)
const errors = ref({})
const status = ref(null)

const route = useRoute()

watchEffect(() => {
  if (route.query.reset && route.query.reset?.length > 0) {
    status.value = atob(route.query?.reset)
  } else {
    status.value = null
  }
})

const { login } = useAuthStore()

const handleLogin = async () => await login(processing, errors, form.value)
</script>

<template>
  <GuestLayout>
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="handleLogin()" class="flex flex-col">
      <div>
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="username"
        />

        <InputError class="mt-2" :message="errors.email?.[0]" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
        />

        <InputError class="mt-2" :message="errors.password?.[0]" />
      </div>

      <div class="block mt-4">
        <label class="flex items-center">
          <Checkbox name="remember" v-model:checked="form.remember" />
          <span class="ml-2 text-sm text-gray-600">Recuérdame</span>
        </label>
      </div>

      <div class="flex items-center justify-between mt-4">
        <RouterLink
          :to="{ name: 'forgot-password' }"
          class="text-sm text-gray-600 hover:text-gray-900 hover:underline rounded-md focus:outline-none"
        >
          ¿Has olvidado tu contraseña?
        </RouterLink>
        <RouterLink
          :to="{ name: 'register' }"
          class="text-sm text-gray-600 hover:text-gray-900 hover:underline rounded-md focus:outline-none"
        >
          ¿Todavía no tienes cuenta?
        </RouterLink>
      </div>

      <PrimaryButton class="mt-4 justify-center" :class="{ 'opacity-25': processing }" :disabled="processing">
        Inicia sesión
      </PrimaryButton>
    </form>
  </GuestLayout>
</template>

<style scoped></style>

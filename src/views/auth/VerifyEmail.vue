<script setup>
import GuestLayout from '../../layouts/GuestLayout.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import { useAuthStore } from '../../stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { user, resendEmailVerification, logout } = useAuthStore()

const router = useRouter()

if (user?.email_verified_at) {
  router.push('/dashboard')
}

const processing = ref(false)
const status = ref(null)

const handleResendEmailVerification = async () => await resendEmailVerification(processing, status)
</script>

<template>
  <GuestLayout>
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
      ¡Gracias por registrarte! Antes de comenzar, ¿podrías verificar tu dirección de correo
      electrónico haciendo clic en el enlace que te acabamos de enviar? Si no recibiste el correo,
      con gusto te enviaremos otro.
    </div>

    <div
      class="mb-4 font-medium text-sm text-green-700 bg-green-100 px-4 py-2 rounded dark:text-green-400"
      v-if="status"
    >
      Un nuevo enlace de verificación ha sido enviado a la dirección de correo electrónico que proporcionaste durante el registro.
    </div>

    <form @submit.prevent="handleResendEmailVerification()">
      <div class="mt-4 flex items-center justify-between">
        <PrimaryButton :class="{ 'opacity-25': processing }" :disabled="processing">
          Reenviar correo de verificación
        </PrimaryButton>

        <button
          @click="logout()"
          class="underline text-xl text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
        >
          Cerrar sesión
        </button>
      </div>
    </form>
  </GuestLayout>
</template>

<style scoped></style>

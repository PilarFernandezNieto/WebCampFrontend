<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])

const textarea = ref(null)

onMounted(() => {
  if (textarea.value.hasAttribute('autofocus')) {
    textarea.value.focus()
  }
})

defineExpose({ focus: () => textarea.value.focus() })
</script>

<template>
  <textarea
    class="border-gray-300 focus:border-blue-900 focus:ring-blue-900 rounded-md shadow-sm placeholder-gray-400"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  ></textarea>
</template>

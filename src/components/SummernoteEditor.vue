<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])
const editor = ref(null)
let $instance = null

onMounted(() => {
  $instance = $(editor.value)
  $instance.summernote({
    placeholder: props.placeholder || 'Escribe aquí...',
    height: 250,
    fullscreen: true,
    dialogsInBody: true,
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'picture']],
      ['view', ['fullscreen', 'codeview', 'help']],
    ],
    callbacks: {
      onChange(contents) {
        emit('update:modelValue', contents)
      },
    },
  })

  // Inicializa con contenido si existe
  if (props.modelValue) {
    $instance.summernote('code', props.modelValue)
  }
})

watch(
  () => props.modelValue,
  (newValue) => {
    if ($instance && $instance.summernote('code') !== newValue) {
      $instance.summernote('code', newValue)
    }
  }
)

onBeforeUnmount(() => {
  if ($instance) {
    $instance.summernote('destroy')
  }
})
</script>
<template>
  <div class="summernote-container">
    <div ref="editor"></div>
  </div>
</template>



<style scoped>
.summernote-container {
  margin-top: 1rem;
}
/* Forzar bullets y números visibles */


</style>

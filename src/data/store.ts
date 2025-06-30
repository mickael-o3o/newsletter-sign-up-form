import { ref } from 'vue'

const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)

const formData = ref({
  emaiAddress: '',
})

export { showErrorMessage, showSuccessMessage, formData }

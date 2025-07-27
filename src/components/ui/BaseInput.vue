<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>
    <div class="input-container">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InputProps } from '@/types'

interface Props extends InputProps {
  id?: string
  label?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  value: '',
  disabled: false,
  error: '',
  required: false,
  id: '',
  label: '',
  modelValue: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [event: Event]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const inputClasses = computed(() => {
  const baseClasses = 'base-input w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const stateClasses: Record<string, string> = {
    default: 'border-gray-300 focus:border-primary focus:ring-primary/20',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
    disabled: 'bg-gray-100 cursor-not-allowed opacity-60'
  }
  
  if (props.disabled) {
    return `${baseClasses} ${stateClasses.disabled}`
  }
  
  if (props.error) {
    return `${baseClasses} ${stateClasses.error}`
  }
  
  return `${baseClasses} ${stateClasses.default}`
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

.required-mark {
  color: #ef4444;
  margin-left: 0.25rem;
}

.input-container {
  position: relative;
}

.base-input {
  font-size: 1rem;
  line-height: 1.5;
}

.base-input::placeholder {
  color: #9ca3af;
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.error-message::before {
  content: '⚠';
  font-size: 0.875rem;
}

/* 애니메이션 효과 */
.base-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .base-input {
    font-size: 16px; /* iOS에서 줌 방지 */
  }
}
</style> 
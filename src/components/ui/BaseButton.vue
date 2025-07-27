<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
    type="button"
  >
    <div v-if="loading" class="loading-spinner"></div>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '@/types'

interface Props extends ButtonProps {
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false
})

const emit = defineEmits<{
  click: []
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'base-button inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary'
  }
  
  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  }
  
  const stateClasses = {
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
    fullWidth: 'w-full'
  }
  
  return [
    baseClasses,
    variantClasses[props.variant || 'primary'],
    sizeClasses[props.size || 'md'],
    props.disabled && stateClasses.disabled,
    props.loading && stateClasses.loading,
    props.fullWidth && stateClasses.fullWidth
  ].filter(Boolean).join(' ')
})

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
    props.onClick?.()
  }
}
</script>

<style scoped>
.base-button {
  position: relative;
  overflow: hidden;
}

.base-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.base-button:hover::before {
  left: 100%;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* CSS 변수 정의 */
:root {
  --color-primary: #1a365d;
  --color-primary-dark: #0f2444;
  --color-secondary: #2d3748;
  --color-secondary-dark: #1a202c;
}
</style> 
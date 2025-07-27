<template>
  <div :class="cardClasses" @click="handleClick">
    <div v-if="image" class="card-image">
      <img :src="image" :alt="title || 'Card image'" />
      <div v-if="hover" class="image-overlay">
        <slot name="overlay" />
      </div>
    </div>
    
    <div class="card-content">
      <div v-if="title || subtitle" class="card-header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
        <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
      </div>
      
      <div class="card-body">
        <slot />
      </div>
      
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '@/types'

interface Props extends CardProps {
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  image: '',
  hover: false,
  shadow: 'md'
})

const emit = defineEmits<{
  click: []
}>()

const cardClasses = computed(() => {
  const baseClasses = 'base-card bg-white rounded-xl overflow-hidden transition-all duration-300'
  
  const shadowClasses: Record<string, string> = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  }
  
  const hoverClasses = props.hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
  
  return `${baseClasses} ${shadowClasses[props.shadow || 'md']} ${hoverClasses}`
})

const handleClick = () => {
  if (props.hover) {
    emit('click')
    props.onClick?.()
  }
}
</script>

<style scoped>
.base-card {
  position: relative;
  overflow: hidden;
}

.card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.base-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-card:hover .image-overlay {
  opacity: 1;
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.card-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

.card-body {
  color: #374151;
  line-height: 1.6;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.125rem;
  }
  
  .card-image {
    height: 150px;
  }
}

/* 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
  .base-card {
    background-color: #1f2937;
  }
  
  .card-title {
    color: #f9fafb;
  }
  
  .card-subtitle {
    color: #9ca3af;
  }
  
  .card-body {
    color: #d1d5db;
  }
  
  .card-footer {
    border-top-color: #374151;
  }
}
</style> 
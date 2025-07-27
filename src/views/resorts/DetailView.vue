<template>
  <div class="detail-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">{{ resort?.name || '별장 상세' }}</h1>
        <p class="page-description">
          {{ resort?.location || '별장 정보를 확인하세요' }}
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div v-if="resort" class="resort-detail">
          <div class="resort-info">
            <h2>{{ resort.name }}</h2>
            <p class="location">{{ resort.location }}</p>
            <p class="description">{{ resort.description }}</p>
            
            <div class="amenities">
              <h3>시설</h3>
              <div class="amenity-tags">
                <span v-for="amenity in resort.amenities" :key="amenity" class="amenity-tag">
                  {{ amenity }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="not-found">
          <h2>별장을 찾을 수 없습니다</h2>
          <p>요청하신 별장 정보가 존재하지 않습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RESORTS } from '@/constants'

const route = useRoute()

const resort = computed(() => {
  const id = route.params.id as string
  return RESORTS.find(r => r.id === id)
})
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.page-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e2e8f0;
  max-width: 800px;
  margin: 0 auto;
}

.page-content {
  padding: 4rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resort-detail {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.resort-info h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.location {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.amenities h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.amenity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.amenity-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.95rem;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.not-found h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.not-found p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .resort-detail {
    padding: 2rem;
  }
  
  .resort-info h2 {
    font-size: 1.5rem;
  }
}
</style> 
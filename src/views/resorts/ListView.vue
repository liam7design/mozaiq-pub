<template>
  <div class="list-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">별장 목록</h1>
        <p class="page-description">
          전국 최고급 별장들을 둘러보세요.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="resorts-grid">
          <div v-for="resort in RESORTS" :key="resort.id" class="resort-card">
            <h2>{{ resort.name }}</h2>
            <p class="location">{{ resort.location }}</p>
            <p>{{ resort.description }}</p>
            <div class="amenities">
              <span v-for="amenity in resort.amenities" :key="amenity" class="amenity-tag">
                {{ amenity }}
              </span>
            </div>
            <BaseButton variant="primary" size="md">
              자세히 보기
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RESORTS } from '@/constants'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style scoped>
.list-page {
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

.resorts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.resort-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.resort-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.location {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.resort-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.amenity-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .resorts-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
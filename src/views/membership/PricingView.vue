<template>
  <div class="pricing-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">가격 안내</h1>
        <p class="page-description">
          투명하고 합리적인 가격으로 서비스를 제공합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="pricing-grid">
          <div v-for="membership in MEMBERSHIP_TYPES" :key="membership.id" class="pricing-card">
            <h2>{{ membership.name }}</h2>
            <div class="price">{{ formatPrice(membership.price) }}</div>
            <p>{{ membership.description }}</p>
            <ul>
              <li v-for="benefit in membership.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
            <BaseButton variant="primary" size="lg" full-width>
              신청하기
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MEMBERSHIP_TYPES } from '@/constants'
import { formatPrice } from '@/utils'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style scoped>
.pricing-page {
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.pricing-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 1rem;
}

.pricing-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.pricing-card li {
  padding: 0.5rem 0;
  color: #374151;
  position: relative;
  padding-left: 1.5rem;
}

.pricing-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
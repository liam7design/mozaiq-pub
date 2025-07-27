<template>
  <div class="briefing-page">
    <div class="briefing-header">
      <div class="container">
        <h1 class="page-title">브리핑 신청</h1>
        <p class="page-description">
          프리미엄 별장 회원권에 대한 상세한 안내를 받아보세요.<br>
          전문 상담사가 직접 방문하여 맞춤형 서비스를 제공해드립니다.
        </p>
      </div>
    </div>
    
    <div class="briefing-content">
      <div class="container">
        <BriefingForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BriefingForm from '@/components/forms/BriefingForm.vue'
</script>

<style scoped>
.briefing-page {
  min-height: 100vh;
}

.briefing-header {
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

.briefing-content {
  padding: 4rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .briefing-header {
    padding: 3rem 0;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-description {
    font-size: 1.1rem;
  }
  
  .briefing-content {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 
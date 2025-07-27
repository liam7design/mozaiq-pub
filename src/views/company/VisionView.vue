<template>
  <div class="vision-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">비전</h1>
        <p class="page-description">
          프리미엄 휴식 문화의 새로운 기준을 제시합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="vision-content">
          <h2>우리의 비전</h2>
          <p>전국 최고급 별장에서 특별한 휴식을 경험할 수 있는 프리미엄 서비스를 제공하여, 고객들에게 잊을 수 없는 추억을 만들어드립니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 비전 페이지 로직
</script>

<style scoped>
.vision-page {
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

.vision-content {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.vision-content h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1.5rem;
}

.vision-content p {
  font-size: 1.2rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .vision-content {
    padding: 2rem;
  }
}
</style> 
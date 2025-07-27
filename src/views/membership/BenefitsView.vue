<template>
  <div class="benefits-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">혜택 안내</h1>
        <p class="page-description">
          회원권으로 받을 수 있는 다양한 혜택을 소개합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit-card">
            <h2>별장 이용</h2>
            <p>전국 최고급 별장들을 자유롭게 이용할 수 있습니다.</p>
          </div>
          
          <div class="benefit-card">
            <h2>24시간 예약</h2>
            <p>연중무휴 24시간 언제든지 예약할 수 있습니다.</p>
          </div>
          
          <div class="benefit-card">
            <h2>프리미엄 서비스</h2>
            <p>전용 라운지와 VIP 서비스를 이용할 수 있습니다.</p>
          </div>
          
          <div class="benefit-card">
            <h2>가족 이용</h2>
            <p>가족과 함께 이용할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 혜택 안내 페이지 로직
</script>

<style scoped>
.benefits-page {
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

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.benefit-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
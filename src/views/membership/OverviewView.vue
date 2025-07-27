<template>
  <div class="overview-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">회원권 개요</h1>
        <p class="page-description">
          프리미엄 별장 회원권의 특징과 혜택을 소개합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-card">
            <h2>회원권이란?</h2>
            <p>전국 최고급 별장들을 자유롭게 이용할 수 있는 프리미엄 서비스입니다.</p>
          </div>
          
          <div class="overview-card">
            <h2>주요 특징</h2>
            <ul>
              <li>전국 50개 이상 별장 이용</li>
              <li>연중무휴 24시간 예약</li>
              <li>프리미엄 고객 서비스</li>
              <li>가족과 함께 이용 가능</li>
            </ul>
          </div>
          
          <div class="overview-card">
            <h2>이용 방법</h2>
            <ol>
              <li>회원권 구매</li>
              <li>모바일 앱 다운로드</li>
              <li>원하는 별장 선택</li>
              <li>날짜 선택 후 예약</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 회원권 개요 페이지 로직
</script>

<style scoped>
.overview-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.page-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.overview-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.overview-card h2 {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.overview-card p,
.overview-card li {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.overview-card ul,
.overview-card ol {
  padding-left: 1.5rem;
}

.overview-card li {
  margin-bottom: 0.5rem;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .overview-card {
    padding: 1.5rem;
  }
}

/* 대형 화면 최적화 */
@media (min-width: 1440px) {
  .container {
    max-width: 1600px;
  }
  
  .overview-grid {
    max-width: 1400px;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
  }
  
  .overview-grid {
    max-width: 1600px;
  }
}
</style> 
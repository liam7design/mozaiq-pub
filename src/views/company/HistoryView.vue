<template>
  <div class="history-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">연혁</h1>
        <p class="page-description">
          Mozaiq Resort의 성장 과정을 소개합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="timeline">
          <div class="timeline-item">
            <div class="year">2020</div>
            <div class="content">
              <h3>회사 설립</h3>
              <p>Mozaiq Resort 설립</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2021</div>
            <div class="content">
              <h3>첫 번째 파트너십</h3>
              <p>제주도 별장과 첫 파트너십 체결</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2022</div>
            <div class="content">
              <h3>서비스 확장</h3>
              <p>전국 20개 별장 파트너십 확대</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2023</div>
            <div class="content">
              <h3>고객 만족도 달성</h3>
              <p>고객 만족도 99% 달성</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2024</div>
            <div class="content">
              <h3>시장 선도</h3>
              <p>프리미엄 별장 회원권 시장 선도</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 연혁 페이지 로직
</script>

<style scoped>
.history-page {
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1a365d;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.year {
  background: #1a365d;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  min-width: 120px;
  text-align: center;
  z-index: 10;
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  flex: 1;
}

.content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.content p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .timeline::before {
    left: 2rem;
  }
  
  .timeline-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 2rem;
  }
  
  .year {
    margin-bottom: 1rem;
  }
  
  .content {
    margin: 0;
    width: 100%;
  }
}
</style> 
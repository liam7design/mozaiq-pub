<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">회사개요</h1>
        <p class="page-description">
          Mozaiq Resort는 프리미엄 별장 회원권 서비스의 선두주자입니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <div class="content-section">
            <h2>회사 소개</h2>
            <p>
              Mozaiq Resort는 2020년 설립된 프리미엄 별장 회원권 전문 기업입니다. 
              전국 최고급 별장들과의 파트너십을 통해 고객들에게 특별한 휴식 경험을 제공합니다.
            </p>
          </div>
          
          <div class="content-section">
            <h2>핵심 가치</h2>
            <ul>
              <li>고객 중심의 서비스</li>
              <li>품질과 신뢰성</li>
              <li>지속적인 혁신</li>
              <li>사회적 책임</li>
            </ul>
          </div>
          
          <div class="content-section">
            <h2>주요 실적</h2>
            <div class="achievements">
              <div class="achievement-item">
                <h3>50+</h3>
                <p>전국 별장 파트너십</p>
              </div>
              <div class="achievement-item">
                <h3>10,000+</h3>
                <p>만족한 회원</p>
              </div>
              <div class="achievement-item">
                <h3>99%</h3>
                <p>고객 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 회사개요 페이지 로직
</script>

<style scoped>
.about-page {
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

.content-grid {
  display: grid;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.content-section {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1.5rem;
}

.content-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content-section ul {
  list-style: none;
  padding: 0;
}

.content-section li {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.content-section li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.achievement-item {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
}

.achievement-item h3 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.achievement-item p {
  color: #6b7280;
  font-weight: 500;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .achievements {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .content-section {
    padding: 2rem;
  }
  
  .achievements {
    grid-template-columns: 1fr;
  }
}

/* 대형 화면 최적화 */
@media (min-width: 1440px) {
  .container {
    max-width: 1600px;
  }
  
  .content-grid {
    max-width: 1400px;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1800px;
  }
  
  .content-grid {
    max-width: 1600px;
  }
}
</style> 
<template>
  <div class="organization-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">조직도</h1>
        <p class="page-description">
          Mozaiq Resort의 조직 구조를 소개합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="org-chart">
          <div class="ceo">
            <div class="position">CEO</div>
            <div class="name">홍길동</div>
          </div>
          
          <div class="departments">
            <div class="department">
              <h3>경영지원팀</h3>
              <div class="members">
                <div class="member">김영희 팀장</div>
                <div class="member">박철수 대리</div>
              </div>
            </div>
            
            <div class="department">
              <h3>영업팀</h3>
              <div class="members">
                <div class="member">이민수 팀장</div>
                <div class="member">최지영 대리</div>
                <div class="member">정수진 사원</div>
              </div>
            </div>
            
            <div class="department">
              <h3>고객서비스팀</h3>
              <div class="members">
                <div class="member">한소영 팀장</div>
                <div class="member">윤태호 대리</div>
                <div class="member">송미영 사원</div>
              </div>
            </div>
            
            <div class="department">
              <h3>IT개발팀</h3>
              <div class="members">
                <div class="member">강동현 팀장</div>
                <div class="member">임서연 대리</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 조직도 페이지 로직
</script>

<style scoped>
.organization-page {
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

.org-chart {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ceo {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #1a365d;
  color: white;
  border-radius: 1rem;
}

.ceo .position {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.ceo .name {
  font-size: 1.2rem;
}

.departments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.department {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.department h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
  text-align: center;
}

.members {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.member {
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  text-align: center;
  color: #374151;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .org-chart {
    padding: 2rem;
  }
  
  .departments {
    grid-template-columns: 1fr;
  }
}
</style> 
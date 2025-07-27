<template>
  <div class="not-found-view">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">페이지를 찾을 수 없습니다</h1>
        <p class="error-message">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br>
          URL을 다시 확인해주시거나 아래 링크를 이용해주세요.
        </p>
        
        <div class="action-buttons">
          <router-link to="/" class="btn btn-primary">
            홈으로 돌아가기
          </router-link>
          <button @click="goBack" class="btn btn-secondary">
            이전 페이지로
          </button>
        </div>
        
        <div class="quick-links">
          <h3>자주 찾는 페이지</h3>
          <div class="links-grid">
            <router-link to="/company/about" class="quick-link">
              회사 소개
            </router-link>
            <router-link to="/membership/overview" class="quick-link">
              회원권 안내
            </router-link>
            <router-link to="/resorts/list" class="quick-link">
              별장 목록
            </router-link>
            <router-link to="/briefing" class="quick-link">
              브리핑 신청
            </router-link>
            <router-link to="/notice" class="quick-link">
              공지사항
            </router-link>
            <router-link to="/sitemap" class="quick-link">
              사이트맵
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found-view {
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.not-found-content {
  text-align: center;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #007bff;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  font-size: 1rem;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

.quick-links {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.quick-links h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.quick-link {
  display: block;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  text-decoration: none;
  color: #555;
  transition: all 0.2s;
  border: 1px solid #e9ecef;
}

.quick-link:hover {
  background: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
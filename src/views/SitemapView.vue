<template>
  <div class="sitemap-view">
    <div class="container">
      <h1 class="page-title">사이트맵</h1>
      
      <div class="sitemap-content">
        <section class="sitemap-section">
          <h2>회사소개</h2>
          <ul class="sitemap-list">
            <li><router-link to="/company/about">회사 소개</router-link></li>
            <li><router-link to="/company/vision">비전</router-link></li>
            <li><router-link to="/company/history">연혁</router-link></li>
            <li><router-link to="/company/organization">조직도</router-link></li>
          </ul>
        </section>

        <section class="sitemap-section">
          <h2>회원권 안내</h2>
          <ul class="sitemap-list">
            <li><router-link to="/membership/overview">회원권 개요</router-link></li>
            <li><router-link to="/membership/types">회원권 종류</router-link></li>
            <li><router-link to="/membership/benefits">회원 혜택</router-link></li>
            <li><router-link to="/membership/pricing">요금 안내</router-link></li>
          </ul>
        </section>

        <section class="sitemap-section">
          <h2>별장 안내</h2>
          <ul class="sitemap-list">
            <li><router-link to="/resorts/list">별장 목록</router-link></li>
            <li><router-link to="/resorts/map">별장 지도</router-link></li>
            <li><router-link to="/resorts/amenities">편의시설</router-link></li>
          </ul>
        </section>

        <section class="sitemap-section">
          <h2>서비스</h2>
          <ul class="sitemap-list">
            <li><router-link to="/briefing">브리핑 신청</router-link></li>
            <li><router-link to="/notice">공지사항</router-link></li>
          </ul>
        </section>

        <section class="sitemap-section">
          <h2>고객지원</h2>
          <ul class="sitemap-list">
            <li><router-link to="/privacy">개인정보처리방침</router-link></li>
            <li><router-link to="/terms">이용약관</router-link></li>
          </ul>
        </section>

        <section class="sitemap-section">
          <h2>기타</h2>
          <ul class="sitemap-list">
            <li><router-link to="/">홈</router-link></li>
            <li><router-link to="/about">소개</router-link></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 사이트맵 페이지는 정적 콘텐츠이므로 별도의 스크립트 로직이 필요하지 않습니다.
</script>

<style scoped>
.sitemap-view {
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.sitemap-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.sitemap-section {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sitemap-section h2 {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
}

.sitemap-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-list li {
  margin-bottom: 0.75rem;
}

.sitemap-list a {
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  transition: color 0.2s;
  display: block;
  padding: 0.5rem 0;
}

.sitemap-list a:hover {
  color: #007bff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .sitemap-content {
    grid-template-columns: 1fr;
  }
}
</style> 
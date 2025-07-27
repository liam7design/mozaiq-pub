<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- 메인 푸터 영역 -->
      <div class="footer-main">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/images/logo.svg" alt="Mozaiq Resort" class="logo-image" />
            <span class="logo-text">Mozaiq Resort</span>
          </div>
          <p class="company-description">
            프리미엄 별장 회원권으로 최고의 휴식을 경험하세요.
            전국 최고급 별장에서 특별한 순간을 만들어드립니다.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98.196-1.353.569-.373.373-.569.863-.569 1.353s.196.98.569 1.353c.373.373.863.569 1.353.569s.98-.196 1.353-.569c.373-.373.569-.863.569-1.353s-.196-.98-.569-1.353c-.373-.373-.863-.569-1.353-.569z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">회사소개</h3>
          <ul class="footer-links">
            <li><router-link to="/company/about" class="footer-link">회사개요</router-link></li>
            <li><router-link to="/company/vision" class="footer-link">비전</router-link></li>
            <li><router-link to="/company/history" class="footer-link">연혁</router-link></li>
            <li><router-link to="/company/organization" class="footer-link">조직도</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">회원권 안내</h3>
          <ul class="footer-links">
            <li><router-link to="/membership/overview" class="footer-link">회원권 개요</router-link></li>
            <li><router-link to="/membership/types" class="footer-link">회원권 종류</router-link></li>
            <li><router-link to="/membership/benefits" class="footer-link">혜택 안내</router-link></li>
            <li><router-link to="/membership/pricing" class="footer-link">가격 안내</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">별장 안내</h3>
          <ul class="footer-links">
            <li><router-link to="/resorts/list" class="footer-link">별장 목록</router-link></li>
            <li><router-link to="/resorts/map" class="footer-link">별장 지도</router-link></li>
            <li><router-link to="/resorts/amenities" class="footer-link">시설 안내</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">고객지원</h3>
          <ul class="footer-links">
            <li><router-link to="/briefing" class="footer-link">브리핑 신청</router-link></li>
            <li><router-link to="/notice" class="footer-link">공지사항</router-link></li>
            <li><a href="tel:1588-1234" class="footer-link">1588-1234</a></li>
            <li><a href="mailto:info@mozaiq.com" class="footer-link">info@mozaiq.com</a></li>
          </ul>
        </div>
      </div>

      <!-- 하단 푸터 영역 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-info">
            <p class="company-info">
              <span>주식회사 모자이크리조트</span>
              <span>대표이사: 홍길동</span>
              <span>사업자등록번호: 123-45-67890</span>
              <span>주소: 서울특별시 강남구 테헤란로 123</span>
            </p>
            <p class="copyright">
              © 2024 Mozaiq Resort. All rights reserved.
            </p>
          </div>
          
          <div class="footer-legal">
            <a href="/privacy" class="legal-link">개인정보처리방침</a>
            <a href="/terms" class="legal-link">이용약관</a>
            <a href="/sitemap" class="legal-link">사이트맵</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 푸터 컴포넌트 로직
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 0 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section:first-child {
  grid-column: 1;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-image {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.company-description {
  color: #cbd5e0;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: white;
}

.footer-bottom {
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.company-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #a0aec0;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.copyright {
  color: #a0aec0;
  font-size: 0.875rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.legal-link {
  color: #cbd5e0;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.legal-link:hover {
  color: white;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0 2rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .company-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-legal {
    gap: 1rem;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
  
  .logo-image {
    width: 32px;
    height: 32px;
  }
}

/* 애니메이션 효과 */
.footer-link,
.legal-link {
  position: relative;
}

.footer-link::after,
.legal-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s ease;
}

.footer-link:hover::after,
.legal-link:hover::after {
  width: 100%;
}
</style> 
<template>
  <div class="home-page">
    <!-- 히어로 섹션 -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            프리미엄 별장 회원권으로<br>
            <span class="highlight">특별한 휴식</span>을 경험하세요
          </h1>
          <p class="hero-description">
            전국 최고급 별장에서 프리미엄 서비스와 함께하는<br>
            특별한 순간을 만들어드립니다
          </p>
          <div class="hero-actions">
            <BaseButton 
              variant="primary" 
              size="lg"
              @click="scrollToMembership"
              class="hero-btn primary"
            >
              회원권 안내
            </BaseButton>
            <BaseButton 
              variant="outline" 
              size="lg"
              @click="scrollToResorts"
              class="hero-btn secondary"
            >
              별장 둘러보기
            </BaseButton>
          </div>
        </div>
        <div class="hero-image">
          <img src="/images/hero-resort.jpg" alt="프리미엄 별장" />
        </div>
      </div>
    </section>

    <!-- 회원권 소개 섹션 -->
    <section id="membership" class="membership-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">프리미엄 회원권</h2>
          <p class="section-description">
            다양한 혜택과 서비스를 제공하는 회원권을 선택하세요
          </p>
        </div>
        
        <div class="membership-grid">
          <BaseCard
            v-for="membership in MEMBERSHIP_TYPES"
            :key="membership.id"
            :title="membership.name"
            :subtitle="formatPrice(membership.price)"
            :image="membership.image"
            hover
            shadow="lg"
            class="membership-card"
            :class="{ popular: membership.isPopular }"
            @click="goToMembership(membership.id)"
          >
            <template #overlay>
              <BaseButton variant="primary" size="md">
                자세히 보기
              </BaseButton>
            </template>
            
            <div class="membership-content">
              <p class="membership-description">{{ membership.description }}</p>
              <ul class="benefits-list">
                <li v-for="benefit in membership.benefits.slice(0, 3)" :key="benefit">
                  {{ benefit }}
                </li>
              </ul>
            </div>
            
            <template #footer>
              <div class="membership-footer">
                <span v-if="membership.isPopular" class="popular-badge">
                  인기
                </span>
                <BaseButton 
                  variant="outline" 
                  size="sm"
                  @click.stop="goToMembership(membership.id)"
                >
                  상세 정보
                </BaseButton>
              </div>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 별장 소개 섹션 -->
    <section id="resorts" class="resorts-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">전국 최고급 별장</h2>
          <p class="section-description">
            아름다운 자연 속에서 프리미엄 휴식을 경험하세요
          </p>
        </div>
        
        <div class="resorts-grid">
          <BaseCard
            v-for="resort in RESORTS"
            :key="resort.id"
            :title="resort.name"
            :subtitle="resort.location"
            :image="resort.images[0]"
            hover
            shadow="lg"
            class="resort-card"
            @click="goToResort(resort.id)"
          >
            <template #overlay>
              <BaseButton variant="primary" size="md">
                둘러보기
              </BaseButton>
            </template>
            
            <div class="resort-content">
              <p class="resort-description">{{ resort.description }}</p>
              <div class="amenities">
                <span 
                  v-for="amenity in resort.amenities.slice(0, 3)" 
                  :key="amenity"
                  class="amenity-tag"
                >
                  {{ amenity }}
                </span>
              </div>
            </div>
          </BaseCard>
        </div>
        
        <div class="resorts-actions">
          <BaseButton 
            variant="primary" 
            size="lg"
            @click="$router.push('/resorts/list')"
          >
            모든 별장 보기
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- 브리핑 신청 섹션 -->
    <section class="briefing-section">
      <div class="container">
        <div class="briefing-content">
          <div class="briefing-text">
            <h2 class="briefing-title">맞춤형 브리핑 신청</h2>
            <p class="briefing-description">
              프리미엄 별장 회원권에 대한 상세한 안내를 받아보세요.<br>
              전문 상담사가 직접 방문하여 맞춤형 서비스를 제공해드립니다.
            </p>
            <BaseButton 
              variant="primary" 
              size="lg"
              @click="$router.push('/briefing')"
              class="briefing-btn"
            >
              브리핑 신청하기
            </BaseButton>
          </div>
          <div class="briefing-image">
            <img src="/images/briefing.jpg" alt="브리핑 상담" />
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="contact-title">문의하기</h2>
            <p class="contact-description">
              궁금한 사항이 있으시면 언제든 연락주세요.<br>
              전문 상담사가 친절하게 안내해드립니다.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">📞</div>
                <div class="contact-details">
                  <h3>전화 문의</h3>
                  <p>1588-1234</p>
                  <span>평일 09:00 - 18:00</span>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="contact-icon">✉️</div>
                <div class="contact-details">
                  <h3>이메일 문의</h3>
                  <p>info@mozaiq.com</p>
                  <span>24시간 접수 가능</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h3>빠른 문의</h3>
            <form @submit.prevent="handleContactSubmit" class="quick-contact-form">
              <BaseInput
                v-model="contactForm.name"
                label="이름"
                placeholder="이름을 입력해주세요"
                required
              />
              <BaseInput
                v-model="contactForm.phone"
                type="tel"
                label="연락처"
                placeholder="연락처를 입력해주세요"
                required
              />
              <BaseInput
                v-model="contactForm.message"
                label="문의사항"
                placeholder="문의사항을 입력해주세요"
                required
              />
              <BaseButton 
                type="submit"
                variant="primary"
                size="lg"
                full-width
                :loading="isSubmitting"
              >
                {{ isSubmitting ? '전송 중...' : '문의하기' }}
              </BaseButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { MEMBERSHIP_TYPES, RESORTS } from '@/constants'
import { formatPrice } from '@/utils'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const router = useRouter()
const isSubmitting = ref(false)

const contactForm = reactive({
  name: '',
  phone: '',
  message: ''
})

const scrollToMembership = () => {
  const element = document.getElementById('membership')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToResorts = () => {
  const element = document.getElementById('resorts')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const goToMembership = (id: string) => {
  router.push(`/membership/types#${id}`)
}

const goToResort = (id: string) => {
  router.push(`/resorts/${id}`)
}

const handleContactSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 폼 초기화
    contactForm.name = ''
    contactForm.phone = ''
    contactForm.message = ''
    
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  } catch (error) {
    console.error('문의 전송 실패:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* 히어로 섹션 */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #fbbf24;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-btn {
  font-weight: 600;
  font-size: 1.1rem;
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  height: clamp(400px, 50vh, 600px);
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* 섹션 공통 스타일 */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
}

.section-description {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  color: #6b7280;
  line-height: 1.6;
}

/* 회원권 섹션 */
.membership-section {
  padding: 6rem 0;
  background: white;
}

.membership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.membership-card {
  position: relative;
}

.membership-card.popular {
  border: 2px solid #fbbf24;
}

.popular-badge {
  background: #fbbf24;
  color: #1a365d;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.membership-content {
  margin: 1rem 0;
}

.membership-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  padding: 0.25rem 0;
  color: #374151;
  position: relative;
  padding-left: 1.5rem;
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.membership-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 별장 섹션 */
.resorts-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.resorts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.resort-card {
  position: relative;
}

.resort-content {
  margin: 1rem 0;
}

.resort-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.amenity-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.resorts-actions {
  text-align: center;
}

/* 브리핑 섹션 */
.briefing-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%);
  color: white;
}

.briefing-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.briefing-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.briefing-description {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e2e8f0;
}

.briefing-btn {
  font-weight: 600;
  font-size: 1.1rem;
}

.briefing-image img {
  width: 100%;
  height: clamp(300px, 40vh, 500px);
  object-fit: cover;
  border-radius: 1rem;
}

/* 문의 섹션 */
.contact-section {
  padding: 6rem 0;
  background: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5rem;
}

.contact-description {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: grid;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
}

.contact-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-details h3 {
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.contact-details p {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
}

.contact-details span {
  font-size: 0.875rem;
  color: #6b7280;
}

.contact-form h3 {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1.5rem;
}

.quick-contact-form {
  display: grid;
  gap: 1rem;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: clamp(2rem, 6vw, 3rem);
  }
  
  .briefing-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .membership-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .resorts-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .membership-grid,
  .resorts-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-method {
    flex-direction: column;
    text-align: center;
  }
}

/* 대형 화면 최적화 */
@media (min-width: 1440px) {
  .hero-content {
    max-width: 1600px;
    gap: 6rem;
  }
  
  .container {
    max-width: 1600px;
  }
  
  .membership-grid,
  .resorts-grid {
    max-width: 1400px;
  }
  
  .briefing-content,
  .contact-content {
    max-width: 1400px;
  }
  
  .section-header {
    max-width: 1000px;
  }
}

@media (min-width: 1920px) {
  .hero-content {
    max-width: 1800px;
  }
  
  .container {
    max-width: 1800px;
  }
  
  .membership-grid,
  .resorts-grid {
    max-width: 1600px;
  }
  
  .briefing-content,
  .contact-content {
    max-width: 1600px;
  }
}
</style> 
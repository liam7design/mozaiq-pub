<template>
  <header :class="headerClasses">
    <div class="header-container">
      <!-- 로고 영역 -->
      <div class="logo-section">
        <router-link to="/" class="logo">
          <img src="/images/logo.svg" alt="Mozaiq Resort" class="logo-image" />
          <span class="logo-text">Mozaiq Resort</span>
        </router-link>
      </div>

      <!-- 데스크톱 네비게이션 -->
      <nav class="desktop-nav" v-show="!isMobileMenuOpen">
        <ul class="nav-list">
          <li v-for="item in menuItems" :key="item.id" class="nav-item">
            <div class="nav-link-wrapper">
              <router-link 
                :to="item.path" 
                class="nav-link"
                :class="{ active: isActiveRoute(item.path) }"
              >
                {{ item.title }}
              </router-link>
              
              <!-- 서브메뉴 -->
              <div v-if="item.children" class="submenu">
                <div class="submenu-content">
                  <router-link
                    v-for="child in item.children"
                    :key="child.id"
                    :to="child.path"
                    class="submenu-link"
                  >
                    {{ child.title }}
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- 우측 액션 버튼들 -->
      <div class="header-actions">
        <BaseButton 
          variant="outline" 
          size="sm" 
          class="contact-btn"
          @click="scrollToContact"
        >
          문의하기
        </BaseButton>
        
        <BaseButton 
          variant="primary" 
          size="sm" 
          class="briefing-btn"
          @click="goToBriefing"
        >
          브리핑 신청
        </BaseButton>
      </div>

      <!-- 모바일 메뉴 버튼 -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- 모바일 메뉴 -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <ul class="mobile-nav-list">
          <li v-for="item in menuItems" :key="item.id" class="mobile-nav-item">
            <router-link 
              :to="item.path" 
              class="mobile-nav-link"
              @click="closeMobileMenu"
            >
              {{ item.title }}
            </router-link>
            
            <!-- 모바일 서브메뉴 -->
            <ul v-if="item.children" class="mobile-submenu">
              <li v-for="child in item.children" :key="child.id">
                <router-link 
                  :to="child.path" 
                  class="mobile-submenu-link"
                  @click="closeMobileMenu"
                >
                  {{ child.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        
        <div class="mobile-actions">
          <BaseButton 
            variant="outline" 
            size="md" 
            full-width
            @click="scrollToContact"
          >
            문의하기
          </BaseButton>
          
          <BaseButton 
            variant="primary" 
            size="md" 
            full-width
            @click="goToBriefing"
          >
            브리핑 신청
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MENU_ITEMS } from '@/constants'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { MenuItem } from '@/types'

const router = useRouter()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = MENU_ITEMS

const headerClasses = computed(() => {
  return [
    'app-header',
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled.value ? 'scrolled' : ''
  ].join(' ')
})

const isActiveRoute = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToContact = () => {
  closeMobileMenu()
  // 문의하기 섹션으로 스크롤
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const goToBriefing = () => {
  closeMobileMenu()
  router.push('/briefing')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.app-header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo-section {
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a365d;
  letter-spacing: -0.025em;
}

.desktop-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link-wrapper {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: all 0.2s ease;
  border-radius: 0.5rem;
}

.nav-link:hover,
.nav-link.active {
  color: #1a365d;
  background: rgba(26, 54, 93, 0.05);
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu-content {
  padding: 0.5rem;
}

.submenu-link {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #374151;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.submenu-link:hover {
  background: rgba(26, 54, 93, 0.05);
  color: #1a365d;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact-btn,
.briefing-btn {
  font-weight: 500;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: #374151;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 40;
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  background: white;
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #e5e7eb;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  font-size: 1.125rem;
}

.mobile-submenu {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1rem;
}

.mobile-submenu-link {
  display: block;
  padding: 0.75rem 0;
  text-decoration: none;
  color: #6b7280;
  font-size: 1rem;
}

.mobile-actions {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .header-actions {
    display: none;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
    height: 70px;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
  
  .logo-image {
    width: 32px;
    height: 32px;
  }
  
  .mobile-menu {
    top: 70px;
  }
}
</style> 
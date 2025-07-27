import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    // 회사소개 페이지들
    {
      path: '/company',
      name: 'company',
      redirect: '/company/about'
    },
    {
      path: '/company/about',
      name: 'company-about',
      component: () => import('../views/company/AboutView.vue')
    },
    {
      path: '/company/vision',
      name: 'company-vision',
      component: () => import('../views/company/VisionView.vue')
    },
    {
      path: '/company/history',
      name: 'company-history',
      component: () => import('../views/company/HistoryView.vue')
    },
    {
      path: '/company/organization',
      name: 'company-organization',
      component: () => import('../views/company/OrganizationView.vue')
    },
    
    // 회원권 안내 페이지들
    {
      path: '/membership',
      name: 'membership',
      redirect: '/membership/overview'
    },
    {
      path: '/membership/overview',
      name: 'membership-overview',
      component: () => import('../views/membership/OverviewView.vue')
    },
    {
      path: '/membership/types',
      name: 'membership-types',
      component: () => import('../views/membership/TypesView.vue')
    },
    {
      path: '/membership/benefits',
      name: 'membership-benefits',
      component: () => import('../views/membership/BenefitsView.vue')
    },
    {
      path: '/membership/pricing',
      name: 'membership-pricing',
      component: () => import('../views/membership/PricingView.vue')
    },
    
    // 별장 안내 페이지들
    {
      path: '/resorts',
      name: 'resorts',
      redirect: '/resorts/list'
    },
    {
      path: '/resorts/list',
      name: 'resorts-list',
      component: () => import('../views/resorts/ListView.vue')
    },
    {
      path: '/resorts/map',
      name: 'resorts-map',
      component: () => import('../views/resorts/MapView.vue')
    },
    {
      path: '/resorts/amenities',
      name: 'resorts-amenities',
      component: () => import('../views/resorts/AmenitiesView.vue')
    },
    {
      path: '/resorts/:id',
      name: 'resort-detail',
      component: () => import('../views/resorts/DetailView.vue')
    },
    
    // 브리핑 신청
    {
      path: '/briefing',
      name: 'briefing',
      component: () => import('../views/BriefingView.vue')
    },
    
    // 공지사항
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticeView.vue')
    },
    {
      path: '/notice/:id',
      name: 'notice-detail',
      component: () => import('../views/NoticeDetailView.vue')
    },
    
    // 기타 페이지들
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: () => import('../views/SitemapView.vue')
    },
    
    // 404 페이지
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router 
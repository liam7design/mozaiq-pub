<template>
  <div class="notice-detail-view">
    <div class="container">
      <div v-if="notice" class="notice-content">
        <div class="notice-header">
          <h1 class="notice-title">{{ notice.title }}</h1>
          <div class="notice-meta">
            <span class="notice-date">{{ formatDate(notice.date) }}</span>
            <span class="notice-id">번호: {{ notice.id }}</span>
          </div>
        </div>
        
        <div class="notice-body">
          <p>{{ notice.content }}</p>
        </div>
        
        <div class="notice-actions">
          <router-link to="/notice" class="btn btn-secondary">
            목록으로 돌아가기
          </router-link>
        </div>
      </div>
      
      <div v-else class="not-found">
        <h2>공지사항을 찾을 수 없습니다.</h2>
        <router-link to="/notice" class="btn btn-primary">
          목록으로 돌아가기
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Notice {
  id: number
  title: string
  excerpt: string
  date: string
  content: string
}

const route = useRoute()
const notice = ref<Notice | null>(null)

const notices = [
  {
    id: 1,
    title: '모자이크 퍼블릭 서비스 오픈 안내',
    excerpt: '모자이크 퍼블릭 서비스가 정식으로 오픈되었습니다. 많은 관심과 이용 부탁드립니다.',
    date: '2024-01-15',
    content: '모자이크 퍼블릭 서비스가 정식으로 오픈되었습니다. 많은 관심과 이용 부탁드립니다.'
  },
  {
    id: 2,
    title: '회원권 이용 안내',
    excerpt: '회원권 이용에 관한 중요 안내사항을 확인해주세요.',
    date: '2024-01-10',
    content: '회원권 이용에 관한 중요 안내사항을 확인해주세요.'
  },
  {
    id: 3,
    title: '시스템 점검 안내',
    excerpt: '정기 시스템 점검으로 인한 서비스 일시 중단 안내드립니다.',
    date: '2024-01-05',
    content: '정기 시스템 점검으로 인한 서비스 일시 중단 안내드립니다.'
  }
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR')
}

onMounted(() => {
  const noticeId = parseInt(route.params.id as string)
  notice.value = notices.find(n => n.id === noticeId) || null
})
</script>

<style scoped>
.notice-detail-view {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.notice-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notice-header {
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.notice-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #333;
}

.notice-meta {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.notice-body {
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
}

.notice-actions {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  text-align: center;
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

.not-found {
  text-align: center;
  padding: 3rem 0;
}

.not-found h2 {
  color: #666;
  margin-bottom: 1rem;
}
</style> 
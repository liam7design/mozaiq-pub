<template>
  <div class="notice-view">
    <div class="container">
      <h1 class="page-title">공지사항</h1>
      
      <div class="notice-list">
        <div v-for="notice in notices" :key="notice.id" class="notice-item">
          <router-link :to="`/notice/${notice.id}`" class="notice-link">
            <div class="notice-header">
              <h3 class="notice-title">{{ notice.title }}</h3>
              <span class="notice-date">{{ formatDate(notice.date) }}</span>
            </div>
            <p class="notice-excerpt">{{ notice.excerpt }}</p>
          </router-link>
        </div>
      </div>
      
      <div class="pagination">
        <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">
          이전
        </button>
        <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
        <button class="pagination-btn" :disabled="currentPage === totalPages" @click="nextPage">
          다음
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Notice {
  id: number
  title: string
  excerpt: string
  date: string
  content: string
}

const notices = ref<Notice[]>([
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
])

const currentPage = ref(1)
const itemsPerPage = 10

const totalPages = computed(() => Math.ceil(notices.value.length / itemsPerPage))

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR')
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<style scoped>
.notice-view {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
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

.notice-list {
  margin-bottom: 2rem;
}

.notice-item {
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
}

.notice-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.notice-link:hover {
  color: #007bff;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.notice-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.notice-date {
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  margin-left: 1rem;
}

.notice-excerpt {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-btn:hover:not(:disabled) {
  background: #f8f9fa;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-weight: 500;
}
</style> 
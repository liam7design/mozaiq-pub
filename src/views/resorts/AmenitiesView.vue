<template>
  <div class="amenities-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">시설 안내</h1>
        <p class="page-description">
          별장에서 이용할 수 있는 다양한 시설들을 소개합니다.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="amenities-grid">
          <div class="amenity-card">
            <h2>골프장</h2>
            <p>전문 골프장에서 라운드를 즐기실 수 있습니다.</p>
          </div>
          
          <div class="amenity-card">
            <h2>스파</h2>
            <p>편안한 스파 시설에서 휴식을 취하실 수 있습니다.</p>
          </div>
          
          <div class="amenity-card">
            <h2>레스토랑</h2>
            <p>최고급 레스토랑에서 맛있는 식사를 즐기실 수 있습니다.</p>
          </div>
          
          <div class="amenity-card">
            <h2>수영장</h2>
            <p>실내외 수영장에서 수영을 즐기실 수 있습니다.</p>
          </div>
          
          <div class="amenity-card">
            <h2>피트니스</h2>
            <p>최신 피트니스 시설을 이용하실 수 있습니다.</p>
          </div>
          
          <div class="amenity-card">
            <h2>온천</h2>
            <p>천연 온천에서 힐링을 경험하실 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 시설 안내 페이지 로직
</script>

<style scoped>
.amenities-page {
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

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.amenity-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.amenity-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.amenity-card p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .amenities-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
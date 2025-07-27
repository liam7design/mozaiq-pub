<template>
  <div class="map-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">별장 지도</h1>
        <p class="page-description">
          전국 별장들의 위치를 확인하세요.
        </p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="map-container">
          <div class="map-placeholder">
            <h2>지도가 여기에 표시됩니다</h2>
            <p>Google Maps API를 연동하여 실제 지도를 표시할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 별장 지도 페이지 로직
</script>

<style scoped>
.map-page {
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

.map-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.map-placeholder {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  color: #6b7280;
  text-align: center;
}

.map-placeholder h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.map-placeholder p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .map-placeholder {
    height: 300px;
  }
}
</style> 
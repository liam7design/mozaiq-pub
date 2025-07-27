<template>
  <div class="about">
    <h1>Mozaiq Pub 소개</h1>
    <div class="content">
      <p>
        Mozaiq Pub은 Vue 3, TypeScript, Vite를 기반으로 구축된 현대적인 웹 애플리케이션입니다.
      </p>
      <div class="features">
        <h2>주요 기능</h2>
        <ul>
          <li>Vue 3 Composition API</li>
          <li>TypeScript 타입 안전성</li>
          <li>Vite 빠른 개발 환경</li>
          <li>Vue Router 라우팅</li>
          <li>Pinia 상태 관리</li>
          <li>ESLint + Prettier 코드 품질</li>
        </ul>
      </div>
      <div class="tech-stack">
        <h2>기술 스택</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <h3>Frontend</h3>
            <p>Vue 3, TypeScript, Vite</p>
          </div>
          <div class="tech-item">
            <h3>State Management</h3>
            <p>Pinia</p>
          </div>
          <div class="tech-item">
            <h3>Routing</h3>
            <p>Vue Router 4</p>
          </div>
          <div class="tech-item">
            <h3>Code Quality</h3>
            <p>ESLint, Prettier</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  color: #42b883;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.6;
}

.content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  margin: 2rem 0;
}

.features h2 {
  color: #42b883;
  margin-bottom: 1rem;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.features li:before {
  content: "✓";
  color: #42b883;
  font-weight: bold;
  margin-right: 0.5rem;
}

.tech-stack {
  margin: 2rem 0;
}

.tech-stack h2 {
  color: #42b883;
  margin-bottom: 1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.tech-item h3 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.tech-item p {
  color: #666;
  margin: 0;
}
</style> 
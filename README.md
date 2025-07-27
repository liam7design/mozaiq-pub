# Mozaiq Pub

Vue 3 + TypeScript + Vite로 구축된 현대적인 웹 애플리케이션입니다.

## 기술 스택

- **Vue 3** - Composition API와 최신 Vue 기능들
- **TypeScript** - 타입 안전성을 보장하는 개발 환경
- **Vite** - 빠른 개발 서버와 빌드 성능
- **Vue Router 4** - 클라이언트 사이드 라우팅
- **Pinia** - Vue 3의 공식 상태 관리 라이브러리
- **ESLint + Prettier** - 코드 품질과 포맷팅

## 프로젝트 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 코드 포맷팅
npm run format

# 린팅
npm run lint

# 타입 체크
npm run type-check
```

## 프로젝트 구조

```
mozaiq-pub/
├── public/                 # 정적 파일들
├── src/
│   ├── assets/            # 이미지, 폰트 등 정적 자산
│   ├── components/        # 재사용 가능한 Vue 컴포넌트
│   ├── router/            # Vue Router 설정
│   ├── stores/            # Pinia 스토어
│   ├── views/             # 페이지 컴포넌트
│   ├── App.vue            # 루트 컴포넌트
│   └── main.ts            # 애플리케이션 진입점
├── index.html             # HTML 템플릿
├── package.json           # 프로젝트 설정 및 의존성
├── vite.config.ts         # Vite 설정
├── tsconfig.json          # TypeScript 설정
└── README.md              # 프로젝트 문서
```

## 개발 가이드

### 컴포넌트 작성
- Composition API 사용
- TypeScript 타입 정의
- Props와 Emits 타입 안전성 보장

### 상태 관리
- Pinia 스토어 사용
- 반응형 상태 관리
- 컴포넌트 간 데이터 공유

### 라우팅
- Vue Router 4 사용
- 라우트 가드 구현
- 코드 스플리팅 지원

## 라이센스

MIT License
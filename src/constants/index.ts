// 네비게이션 메뉴
export const MENU_ITEMS = [
  {
    id: 'company',
    title: '회사소개',
    path: '/company',
    children: [
      { id: 'about', title: '회사개요', path: '/company/about' },
      { id: 'vision', title: '비전', path: '/company/vision' },
      { id: 'history', title: '연혁', path: '/company/history' },
      { id: 'organization', title: '조직도', path: '/company/organization' }
    ]
  },
  {
    id: 'membership',
    title: '회원권 안내',
    path: '/membership',
    children: [
      { id: 'overview', title: '회원권 개요', path: '/membership/overview' },
      { id: 'types', title: '회원권 종류', path: '/membership/types' },
      { id: 'benefits', title: '혜택 안내', path: '/membership/benefits' },
      { id: 'pricing', title: '가격 안내', path: '/membership/pricing' }
    ]
  },
  {
    id: 'resorts',
    title: '별장 안내',
    path: '/resorts',
    children: [
      { id: 'list', title: '별장 목록', path: '/resorts/list' },
      { id: 'map', title: '별장 지도', path: '/resorts/map' },
      { id: 'amenities', title: '시설 안내', path: '/resorts/amenities' }
    ]
  },
  {
    id: 'briefing',
    title: '브리핑 신청',
    path: '/briefing'
  },
  {
    id: 'notice',
    title: '공지사항',
    path: '/notice'
  }
]

// 회원권 종류
export const MEMBERSHIP_TYPES = [
  {
    id: 'premium',
    name: '프리미엄 회원권',
    price: 50000000,
    description: '최고급 별장 이용권과 프리미엄 서비스를 제공합니다.',
    benefits: [
      '전국 50개 별장 무제한 이용',
      '프리미엄 고객 서비스',
      '전용 라운지 이용',
      'VIP 이벤트 초대',
      '24시간 전용 콘시어지'
    ],
    image: '/images/membership-premium.jpg',
    isPopular: true
  },
  {
    id: 'gold',
    name: '골드 회원권',
    price: 30000000,
    description: '고급 별장 이용권과 다양한 혜택을 제공합니다.',
    benefits: [
      '전국 30개 별장 이용',
      '골드 고객 서비스',
      '전용 라운지 이용',
      'VIP 이벤트 초대'
    ],
    image: '/images/membership-gold.jpg'
  },
  {
    id: 'silver',
    name: '실버 회원권',
    price: 15000000,
    description: '기본 별장 이용권과 편리한 서비스를 제공합니다.',
    benefits: [
      '전국 15개 별장 이용',
      '실버 고객 서비스',
      '기본 라운지 이용'
    ],
    image: '/images/membership-silver.jpg'
  }
]

// 별장 목록
export const RESORTS = [
  {
    id: 'jeju-grand',
    name: '제주 그랜드 리조트',
    location: '제주특별자치도 서귀포시',
    description: '제주의 아름다운 자연 속에서 프리미엄 휴식을 경험하세요.',
    images: [
      '/images/resort-jeju-1.jpg',
      '/images/resort-jeju-2.jpg',
      '/images/resort-jeju-3.jpg'
    ],
    amenities: ['골프장', '스파', '레스토랑', '수영장', '피트니스'],
    coordinates: { lat: 33.4996, lng: 126.5312 }
  },
  {
    id: 'gangwon-luxury',
    name: '강원 럭셔리 빌라',
    location: '강원도 평창군',
    description: '설악산의 웅장한 자연과 함께하는 고급스러운 휴식 공간입니다.',
    images: [
      '/images/resort-gangwon-1.jpg',
      '/images/resort-gangwon-2.jpg',
      '/images/resort-gangwon-3.jpg'
    ],
    amenities: ['스키장', '온천', '레스토랑', '카페', '야외 테라스'],
    coordinates: { lat: 37.3705, lng: 128.3902 }
  }
]

// 브리핑 시간 옵션
export const BRIEFING_TIMES = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
]

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  fadeIn: { duration: 600, easing: 'ease-out' },
  slideUp: { duration: 800, easing: 'ease-out' },
  scaleIn: { duration: 400, easing: 'ease-out' }
} 
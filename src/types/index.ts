// 회원권 타입
export interface Membership {
  id: string
  name: string
  price: number
  description: string
  benefits: string[]
  image: string
  isPopular?: boolean
}

// 별장 타입
export interface Resort {
  id: string
  name: string
  location: string
  description: string
  images: string[]
  amenities: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

// 공지사항 타입
export interface Notice {
  id: string
  title: string
  content: string
  date: string
  isImportant: boolean
  category: string
}

// 브리핑 신청 타입
export interface BriefingRequest {
  name: string
  email: string
  phone: string
  company?: string
  position?: string
  preferredDate: string
  preferredTime: string
  message?: string
}

// 네비게이션 메뉴 타입
export interface MenuItem {
  id: string
  title: string
  path: string
  children?: MenuItem[]
}

// UI 컴포넌트 Props 타입
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number'
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: string
  required?: boolean
}

export interface CardProps {
  title?: string
  subtitle?: string
  image?: string
  hover?: boolean
  shadow?: 'sm' | 'md' | 'lg'
}

// 애니메이션 타입
export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
} 
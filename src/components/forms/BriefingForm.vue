<template>
  <div class="briefing-form">
    <div class="form-header">
      <h2 class="form-title">브리핑 신청</h2>
      <p class="form-description">
        프리미엄 별장 회원권에 대한 상세한 안내를 받아보세요.
        전문 상담사가 직접 방문하여 맞춤형 서비스를 제공해드립니다.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="form-content">
      <div class="form-grid">
        <!-- 기본 정보 섹션 -->
        <div class="form-section">
          <h3 class="section-title">기본 정보</h3>
          
          <div class="form-row">
            <BaseInput
              v-model="formData.name"
              label="이름"
              placeholder="이름을 입력해주세요"
              required
              :error="errors.name"
            />
            
            <BaseInput
              v-model="formData.email"
              type="email"
              label="이메일"
              placeholder="이메일을 입력해주세요"
              required
              :error="errors.email"
            />
          </div>

          <div class="form-row">
            <BaseInput
              v-model="formData.phone"
              type="tel"
              label="연락처"
              placeholder="연락처를 입력해주세요"
              required
              :error="errors.phone"
            />
            
            <BaseInput
              v-model="formData.company"
              label="회사명 (선택)"
              placeholder="회사명을 입력해주세요"
            />
          </div>

          <BaseInput
            v-model="formData.position"
            label="직책 (선택)"
            placeholder="직책을 입력해주세요"
          />
        </div>

        <!-- 브리핑 일정 섹션 -->
        <div class="form-section">
          <h3 class="section-title">브리핑 일정</h3>
          
          <div class="form-row">
            <div class="date-input-wrapper">
              <label class="input-label">
                희망 날짜 <span class="required-mark">*</span>
              </label>
              <input
                v-model="formData.preferredDate"
                type="date"
                :min="minDate"
                class="date-input"
                required
              />
              <div v-if="errors.preferredDate" class="error-message">
                {{ errors.preferredDate }}
              </div>
            </div>
            
            <div class="time-select-wrapper">
              <label class="input-label">
                희망 시간 <span class="required-mark">*</span>
              </label>
              <select
                v-model="formData.preferredTime"
                class="time-select"
                required
              >
                <option value="">시간을 선택해주세요</option>
                <option
                  v-for="time in BRIEFING_TIMES"
                  :key="time"
                  :value="time"
                >
                  {{ time }}
                </option>
              </select>
              <div v-if="errors.preferredTime" class="error-message">
                {{ errors.preferredTime }}
              </div>
            </div>
          </div>
        </div>

        <!-- 추가 정보 섹션 -->
        <div class="form-section">
          <h3 class="section-title">추가 정보</h3>
          
          <div class="textarea-wrapper">
            <label class="input-label">
              문의사항 (선택)
            </label>
            <textarea
              v-model="formData.message"
              class="message-textarea"
              placeholder="추가로 궁금한 사항이 있으시면 자유롭게 작성해주세요."
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- 개인정보 동의 -->
      <div class="privacy-agreement">
        <label class="checkbox-wrapper">
          <input
            v-model="formData.privacyAgreed"
            type="checkbox"
            class="privacy-checkbox"
            required
          />
          <span class="checkbox-custom"></span>
          <span class="checkbox-text">
            <a href="/privacy" target="_blank" class="privacy-link">
              개인정보처리방침
            </a>에 동의합니다. <span class="required-mark">*</span>
          </span>
        </label>
        <div v-if="errors.privacyAgreed" class="error-message">
          {{ errors.privacyAgreed }}
        </div>
      </div>

      <!-- 제출 버튼 -->
      <div class="form-actions">
        <BaseButton
          type="submit"
          variant="primary"
          size="lg"
          :loading="isSubmitting"
          full-width
          class="submit-btn"
        >
          {{ isSubmitting ? '신청 중...' : '브리핑 신청하기' }}
        </BaseButton>
      </div>
    </form>

    <!-- 성공 메시지 -->
    <div v-if="isSuccess" class="success-message">
      <div class="success-icon">✓</div>
      <h3>신청이 완료되었습니다!</h3>
      <p>입력해주신 연락처로 상담사가 연락드리겠습니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { BRIEFING_TIMES } from '@/constants'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import type { BriefingRequest } from '@/types'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const formData = reactive<BriefingRequest & { privacyAgreed: boolean }>({
  name: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
  privacyAgreed: false
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  privacyAgreed: ''
})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const validateForm = () => {
  let isValid = true
  
  // 에러 초기화
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  // 이름 검증
  if (!formData.name.trim()) {
    errors.name = '이름을 입력해주세요.'
    isValid = false
  }

  // 이메일 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = '이메일을 입력해주세요.'
    isValid = false
  } else if (!emailRegex.test(formData.email)) {
    errors.email = '올바른 이메일 형식을 입력해주세요.'
    isValid = false
  }

  // 연락처 검증
  const phoneRegex = /^[0-9-+\s()]+$/
  if (!formData.phone.trim()) {
    errors.phone = '연락처를 입력해주세요.'
    isValid = false
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = '올바른 연락처 형식을 입력해주세요.'
    isValid = false
  }

  // 날짜 검증
  if (!formData.preferredDate) {
    errors.preferredDate = '희망 날짜를 선택해주세요.'
    isValid = false
  }

  // 시간 검증
  if (!formData.preferredTime) {
    errors.preferredTime = '희망 시간을 선택해주세요.'
    isValid = false
  }

  // 개인정보 동의 검증
  if (!formData.privacyAgreed) {
    errors.privacyAgreed = '개인정보처리방침에 동의해주세요.'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSuccess.value = true
    
    // 폼 초기화
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.company = ''
    formData.position = ''
    formData.preferredDate = ''
    formData.preferredTime = ''
    formData.message = ''
    formData.privacyAgreed = false
    
  } catch (error) {
    console.error('브리핑 신청 실패:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.briefing-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
}

.form-description {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.form-content {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.form-grid {
  display: grid;
  gap: 2rem;
}

.form-section {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
}

.form-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.date-input-wrapper,
.time-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.date-input,
.time-select {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.date-input:focus,
.time-select:focus {
  outline: none;
  border-color: #1a365d;
  box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.1);
}

.textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.message-textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: all 0.2s ease;
}

.message-textarea:focus {
  outline: none;
  border-color: #1a365d;
  box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.1);
}

.privacy-agreement {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.privacy-checkbox {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.2s ease;
}

.privacy-checkbox:checked + .checkbox-custom {
  background: #1a365d;
  border-color: #1a365d;
}

.privacy-checkbox:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.checkbox-text {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.5;
}

.privacy-link {
  color: #1a365d;
  text-decoration: underline;
}

.privacy-link:hover {
  color: #0f2444;
}

.form-actions {
  margin-top: 2rem;
}

.submit-btn {
  font-weight: 600;
  font-size: 1.1rem;
}

.success-message {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.success-icon {
  width: 60px;
  height: 60px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
}

.success-message h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 1rem;
}

.success-message p {
  color: #6b7280;
  font-size: 1.1rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .briefing-form {
    padding: 1rem;
  }
  
  .form-content {
    padding: 1.5rem;
  }
  
  .form-title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .form-description {
    font-size: 1rem;
  }
}
</style> 
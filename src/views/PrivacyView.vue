<template>
  <div class="privacy-view">
    <div class="container">
      <h1 class="page-title">개인정보처리방침</h1>
      
      <div class="privacy-content">
        <section class="privacy-section">
          <h2>1. 개인정보의 처리 목적</h2>
          <p>모자이크 퍼블릭(이하 '회사')은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
          <ul>
            <li>회원가입 및 관리</li>
            <li>서비스 제공 및 운영</li>
            <li>고객 상담 및 문의 응대</li>
            <li>마케팅 및 광고 활용</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>2. 개인정보의 처리 및 보유기간</h2>
          <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
          <ul>
            <li>회원정보: 회원탈퇴 시까지</li>
            <li>서비스 이용기록: 3년</li>
            <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>3. 개인정보의 제3자 제공</h2>
          <p>회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
        </section>

        <section class="privacy-section">
          <h2>4. 정보주체의 권리·의무 및 그 행사방법</h2>
          <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
          <ul>
            <li>개인정보 열람요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제요구</li>
            <li>처리정지 요구</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>5. 개인정보의 안전성 확보 조치</h2>
          <p>회사는 개인정보보호법 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
          <ul>
            <li>개인정보의 암호화</li>
            <li>해킹 등에 대비한 기술적 대책</li>
            <li>개인정보에 대한 접근 제한</li>
            <li>개인정보 취급 직원의 최소화 및 교육</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>6. 개인정보 보호책임자</h2>
          <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          <div class="contact-info">
            <p><strong>개인정보 보호책임자</strong></p>
            <p>성명: [책임자명]</p>
            <p>직책: [직책]</p>
            <p>연락처: [연락처]</p>
            <p>이메일: [이메일]</p>
          </div>
        </section>

        <section class="privacy-section">
          <h2>7. 개인정보 처리방침 변경</h2>
          <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          <p><strong>시행일자:</strong> 2024년 1월 1일</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 개인정보처리방침 페이지는 정적 콘텐츠이므로 별도의 스크립트 로직이 필요하지 않습니다.
</script>

<style scoped>
.privacy-view {
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

.privacy-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.privacy-section {
  margin-bottom: 2rem;
}

.privacy-section:last-child {
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
}

.privacy-section p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

.privacy-section ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.privacy-section li {
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.5rem;
}

.contact-info {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-info strong {
  color: #333;
}
</style> 
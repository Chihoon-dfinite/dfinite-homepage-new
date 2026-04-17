export function HomePage() {
  return (
    <main className="landing">
      <header className="landing__nav">
        <div className="landing__brand">DFINITE</div>
        <nav className="landing__menu">
          <a href="#features">기능</a>
          <a href="#pricing">요금제</a>
          <a href="/login" className="landing__menu-cta">
            로그인
          </a>
        </nav>
      </header>

      <section className="landing__hero">
        <span className="landing__eyebrow">AI Infrastructure</span>
        <h1 className="landing__title">
          데이터를 의사결정으로,
          <br />
          <span className="landing__title-accent">즉시 연결합니다.</span>
        </h1>
        <p className="landing__lead">
          DFINITE는 복잡한 파이프라인 없이도 AI 워크플로우를 구축하고
          운영할 수 있는 인프라를 제공합니다.
        </p>
        <div className="landing__cta">
          <a href="/login" className="landing__btn landing__btn--primary">
            시작하기
          </a>
          <a href="#features" className="landing__btn landing__btn--ghost">
            더 알아보기
          </a>
        </div>
      </section>

      <section id="features" className="landing__features">
        <h2 className="landing__section-title">왜 DFINITE인가요?</h2>
        <div className="landing__grid">
          <article className="landing__feature">
            <div className="landing__feature-icon">⚡</div>
            <h3>빠른 실행</h3>
            <p>
              몇 초 안에 모델을 배포하고, 요청당 지연 없이 응답을
              처리합니다.
            </p>
          </article>
          <article className="landing__feature">
            <div className="landing__feature-icon">🔒</div>
            <h3>보안 우선</h3>
            <p>
              엔드투엔드 암호화와 SOC2 준수 인프라로 데이터를 안전하게
              보호합니다.
            </p>
          </article>
          <article className="landing__feature">
            <div className="landing__feature-icon">🧩</div>
            <h3>유연한 통합</h3>
            <p>
              기존 스택에 SDK 한 줄로 연결하고, 원하는 도구와 매끄럽게
              결합합니다.
            </p>
          </article>
        </div>
      </section>

      <section id="pricing" className="landing__final">
        <h2 className="landing__section-title">지금 바로 시작해보세요.</h2>
        <p className="landing__lead">
          14일 무료 체험. 신용카드 등록 없이 시작할 수 있습니다.
        </p>
        <a href="/login" className="landing__btn landing__btn--primary">
          무료로 시작하기
        </a>
      </section>

      <footer className="landing__footer">
        © {new Date().getFullYear()} DFINITE. All rights reserved.
      </footer>
    </main>
  )
}

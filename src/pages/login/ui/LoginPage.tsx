import { useState, type FormEvent } from 'react'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      return
    }

    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 600))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="login">
      <section className="login__card">
        <h1 className="login__title">로그인</h1>
        <p className="login__subtitle">DFINITE 계정으로 로그인하세요.</p>

        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login__field">
            <span className="login__label">이메일</span>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="login__input"
            />
          </label>

          <label className="login__field">
            <span className="login__label">비밀번호</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="login__input"
            />
          </label>

          {error && <p className="login__error">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="login__submit"
          >
            {submitting ? '로그인 중…' : '로그인'}
          </button>
        </form>

        <p className="login__footer">
          계정이 없으신가요? <a href="/signup">회원가입</a>
        </p>
      </section>
    </main>
  )
}

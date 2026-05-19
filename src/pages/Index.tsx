import Icon from '@/components/ui/icon';

const features = [
  {
    icon: "Zap",
    title: "Мемы в плейлисте",
    desc: "Создавай подборки любимых мемов и слушай их по кругу, как любимый альбом.",
  },
  {
    icon: "Users",
    title: "Совместный вайб",
    desc: "Слушай с друзьями в реальном времени. Кто первый оценил — тот и автор.",
  },
  {
    icon: "TrendingUp",
    title: "Тренды 24/7",
    desc: "Алгоритм знает, что залетело час назад. Ты всегда в теме.",
  },
  {
    icon: "Radio",
    title: "Мем-радио",
    desc: "Бесконечный поток контента под твоё настроение. Переключайся — не застревай.",
  },
];

const plans = [
  {
    name: "Бесплатно",
    price: "0 ₽",
    period: "навсегда",
    perks: ["20 мемов в день", "Общие плейлисты", "Стандартное качество", "Реклама между мемами"],
    accent: false,
  },
  {
    name: "spotIRA Plus",
    price: "299 ₽",
    period: "в месяц",
    perks: ["Безлимит мемов", "Эксклюзивные треки", "Без рекламы", "Офлайн-мемы", "Ранний доступ"],
    accent: true,
  },
  {
    name: "Студенческий",
    price: "99 ₽",
    period: "в месяц",
    perks: ["Всё из Plus", "Скидка 66%", "Студенческие мемы", "Групповой вайб"],
    accent: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden noise-overlay">

      {/* Фоновые блобы */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.06) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* Навигация */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="font-montserrat font-black text-2xl tracking-tight">
          spot<span className="neon-text">IRA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-ibm text-sm text-white/50">
          <a href="#features" className="hover:text-white transition-colors cursor-pointer">Возможности</a>
          <a href="#plans" className="hover:text-white transition-colors cursor-pointer">Тарифы</a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">О нас</a>
        </div>
        <button className="font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full neon-btn">
          Войти
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-24 max-w-5xl mx-auto">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 font-ibm text-xs font-medium tracking-widest uppercase"
          style={{ background: 'rgba(29,185,84,0.1)', border: '1px solid rgba(29,185,84,0.25)', color: '#1DB954' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse inline-block" />
          Стриминг нового поколения
        </div>

        <h1 className="font-montserrat font-black text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tighter mb-6 animate-fade-up-delay-1">
          spot<span className="animate-pulse-neon" style={{ color: '#1DB954' }}>IRA</span>
        </h1>

        <p className="font-ibm font-light text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/60 max-w-2xl leading-relaxed mb-4 animate-fade-up-delay-2">
          Мемы, которые ты и так смотришь каждый день,<br />
          теперь в одном плейлисте
        </p>

        <p className="font-ibm text-sm text-white/30 mb-12 animate-fade-up-delay-2">
          Потому что хаос тоже заслуживает порядка
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
          <button className="font-montserrat font-bold text-base px-8 py-4 rounded-full neon-btn">
            Слушать бесплатно
          </button>
          <button className="font-montserrat font-semibold text-base px-8 py-4 rounded-full text-white/70 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
            Как это работает
          </button>
        </div>

        {/* Визуализатор */}
        <div className="mt-20 animate-fade-up-delay-3 w-full max-w-lg">
          <div className="relative mx-auto w-64 h-64 animate-float">
            <div className="absolute inset-0 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, rgba(29,185,84,0.6), rgba(29,185,84,0.1), rgba(29,185,84,0.6))', filter: 'blur(1px)' }}
            />
            <div className="absolute inset-[3px] rounded-full bg-[#0f0f0f] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle at 40% 35%, rgba(29,185,84,0.12), transparent 65%)' }}
              />
              <div className="relative text-center">
                <div className="font-montserrat font-black text-4xl mb-1">
                  spot<span style={{ color: '#1DB954' }}>IRA</span>
                </div>
                <div className="font-ibm text-xs text-white/30 tracking-widest uppercase">Now Playing</div>
                <div className="flex justify-center gap-1 mt-4">
                  {[3, 5, 7, 5, 3, 7, 4, 6, 8, 5].map((h, i) => (
                    <div key={i}
                      className="w-1 rounded-full"
                      style={{
                        height: `${h * 4}px`,
                        background: '#1DB954',
                        animation: `pulse-neon ${0.4 + i * 0.15}s ease-in-out infinite alternate`,
                        opacity: 0.7 + i * 0.03
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Возможности */}
      <section id="features" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-ibm text-xs tracking-widest uppercase mb-4" style={{ color: '#1DB954' }}>Почему spotIRA</p>
          <h2 className="font-montserrat font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Не просто смешно.<br />
            <span style={{ color: '#1DB954' }}>Это культура.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 cursor-default transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(29,185,84,0.12)', border: '1px solid rgba(29,185,84,0.2)' }}>
                <Icon name={f.icon} size={22} style={{ color: '#1DB954' }} />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2">{f.title}</h3>
              <p className="font-ibm text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Стата */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto neon-border rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: "2.4М", label: "мемов в базе" },
              { num: "840К", label: "активных слушателей" },
              { num: "∞", label: "часов контента" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-montserrat font-black text-5xl mb-2 neon-text">{s.num}</div>
                <div className="font-ibm text-sm text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="plans" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-ibm text-xs tracking-widest uppercase mb-4" style={{ color: '#1DB954' }}>Тарифы</p>
          <h2 className="font-montserrat font-black text-[clamp(2rem,5vw,3.5rem)]">
            Выбери свой <span style={{ color: '#1DB954' }}>вайб</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl p-8 transition-all duration-300 ${p.accent ? '' : 'card-dark hover:border-white/10'}`}
              style={p.accent ? {
                background: 'linear-gradient(135deg, rgba(29,185,84,0.15), rgba(29,185,84,0.05))',
                border: '1px solid rgba(29,185,84,0.4)',
                boxShadow: '0 0 40px rgba(29,185,84,0.1)'
              } : {}}>
              {p.accent && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-montserrat font-semibold mb-4"
                  style={{ background: '#1DB954', color: '#000' }}>
                  <Icon name="Star" size={10} />
                  Популярный
                </div>
              )}
              <h3 className="font-montserrat font-bold text-xl mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-montserrat font-black text-4xl">{p.price}</span>
              </div>
              <p className="font-ibm text-sm text-white/40 mb-6">{p.period}</p>
              <ul className="space-y-3 mb-8">
                {p.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-2.5 font-ibm text-sm">
                    <Icon name="Check" size={14} style={{ color: '#1DB954', flexShrink: 0 }} />
                    <span className="text-white/70">{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 ${p.accent ? 'neon-btn' : 'hover:bg-white/10'}`}
                style={!p.accent ? { border: '1px solid rgba(255,255,255,0.12)', color: '#fff', background: 'transparent' } : {}}>
                {p.accent ? 'Подключить Plus' : 'Начать'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="relative z-10 px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="font-montserrat font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
          Готов слушать<br />
          <span className="animate-pulse-neon" style={{ color: '#1DB954' }}>по-новому?</span>
        </h2>
        <p className="font-ibm text-white/40 text-lg mb-10">
          Регистрация занимает 10 секунд.<br />Мемы уже ждут.
        </p>
        <button className="font-montserrat font-bold text-lg px-12 py-5 rounded-full neon-btn">
          Начать слушать
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-montserrat font-black text-xl">
            spot<span className="neon-text">IRA</span>
          </div>
          <p className="font-ibm text-xs text-white/25">© 2026 spotIRA.ru — Мемы это серьёзно</p>
          <div className="flex gap-6 font-ibm text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Политика</a>
            <a href="#" className="hover:text-white/60 transition-colors">Поддержка</a>
            <a href="#" className="hover:text-white/60 transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
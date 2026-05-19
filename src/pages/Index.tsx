import { useState, useEffect, useRef } from 'react';

const TRACKS = {
  slide1: 'https://files.catbox.moe/27j8s6.mp3',
  slide2: 'https://files.catbox.moe/tszmmb.mp3',
  slide3: 'https://files.catbox.moe/el8tgu.mp3',
  slide4: 'https://files.catbox.moe/f2iogt.mp3',
  slide5: 'https://files.catbox.moe/5rzyhq.mp3',
};

function Circles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/5"
          style={{
            width: `${180 + i * 120}px`,
            height: `${180 + i * 120}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `spin-slow ${18 + i * 6}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            opacity: 0.06 + i * 0.01,
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <div
          key={`blob-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${80 + i * 60}px`,
            height: `${80 + i * 60}px`,
            background: 'rgba(29,185,84,0.07)',
            top: `${15 + i * 17}%`,
            left: `${10 + i * 19}%`,
            animation: `float-blob ${6 + i * 2}s ease-in-out infinite alternate`,
            filter: 'blur(30px)',
          }}
        />
      ))}
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-06-27T17:30:00');
    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-6">
      {[
        { v: time.days, l: 'дней' },
        { v: time.hours, l: 'часов' },
        { v: time.minutes, l: 'минут' },
        { v: time.seconds, l: 'секунд' },
      ].map(({ v, l }) => (
        <div key={l} className="flex flex-col items-center">
          <div
            className="text-3xl font-black font-montserrat w-16 h-16 flex items-center justify-center rounded-xl"
            style={{ background: 'rgba(29,185,84,0.12)', border: '1px solid rgba(29,185,84,0.25)', color: '#1DB954' }}
          >
            {String(v).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-white/30 mt-1 font-ibm uppercase tracking-wider">{l}</span>
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [songStarted, setSongStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const trackKeys = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'] as const;

  const playTrack = (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = TRACKS[trackKeys[index]];
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {});
      // fade in
      let vol = 0;
      const fadeIn = setInterval(() => {
        vol = Math.min(vol + 0.05, 1);
        if (audioRef.current) audioRef.current.volume = vol;
        if (vol >= 1) clearInterval(fadeIn);
      }, 80);
    }
  };

  const fadeOutAndNext = (nextSlide: number) => {
    if (!audioRef.current) {
      goTo(nextSlide);
      return;
    }
    let vol = audioRef.current.volume;
    const fadeOut = setInterval(() => {
      vol = Math.max(vol - 0.07, 0);
      if (audioRef.current) audioRef.current.volume = vol;
      if (vol <= 0) {
        clearInterval(fadeOut);
        goTo(nextSlide);
      }
    }, 60);
  };

  const goTo = (nextSlide: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setSlide(nextSlide);
      setTransitioning(false);
      playTrack(nextSlide);
    }, 500);
  };

  const handleStart = () => {
    if (!songStarted) {
      setSongStarted(true);
      playTrack(0);
    }
  };

  const handleNext = (nextSlide: number) => {
    fadeOutAndNext(nextSlide);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-ibm overflow-hidden relative flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=IBM+Plex+Sans:wght@300;400;500&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-ibm { font-family: 'IBM Plex Sans', sans-serif; }
        .neon { color: #1DB954; text-shadow: 0 0 20px rgba(29,185,84,0.5); }
        .neon-btn {
          background: #1DB954; color: #000;
          font-weight: 700; border-radius: 9999px;
          box-shadow: 0 0 24px rgba(29,185,84,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .neon-btn:hover { transform: scale(1.04); box-shadow: 0 0 40px rgba(29,185,84,0.6); }
        .ghost-btn {
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff; border-radius: 9999px;
          background: rgba(255,255,255,0.04);
          transition: border-color 0.2s, background 0.2s;
        }
        .ghost-btn:hover { border-color: rgba(29,185,84,0.4); background: rgba(29,185,84,0.06); }
        @keyframes spin-slow { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes float-blob { from { transform: translateY(0) scale(1); } to { transform: translateY(-30px) scale(1.1); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.15s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.3s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.45s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.6s ease both; }
        @keyframes pageFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes pageFadeOut { from { opacity:1; } to { opacity:0; } }
        .page-in { animation: pageFadeIn 0.5s ease forwards; }
        .page-out { animation: pageFadeOut 0.5s ease forwards; }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(29,185,84,0.15);
          border-radius: 16px; padding: 20px;
        }
      `}</style>

      <audio ref={audioRef} loop />
      <Circles />

      <div className={`relative z-10 w-full max-w-sm mx-auto px-6 py-10 flex flex-col items-center text-center min-h-screen justify-center ${transitioning ? 'page-out' : 'page-in'}`}>

        {/* ───────── СЛАЙД 0 ───────── */}
        {slide === 0 && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="fade-up text-xs tracking-widest uppercase font-montserrat" style={{ color: 'rgba(29,185,84,0.6)' }}>
              2026
            </div>
            <div className="fade-up-1 font-montserrat font-black text-6xl tracking-tight">
              spot<span className="neon">IRA</span>
            </div>
            <div className="fade-up-2 text-lg font-light text-white/60 leading-relaxed max-w-xs">
              не просто музыкальные итоги —<br />
              <span className="text-white font-medium">а приглашение отметить мои 30</span>
            </div>
            <div className="fade-up-3 text-base text-white/50">
              Привет, Игорёк — это для тебя 🤍
            </div>

            <div className="fade-up-3 w-full">
              <Countdown />
            </div>

            <div className="fade-up-4 flex flex-col gap-3 w-full mt-2">
              {!songStarted ? (
                <button
                  className="neon-btn w-full py-4 font-montserrat text-base"
                  onClick={handleStart}
                >
                  ▶ Нажми сюда
                </button>
              ) : (
                <button
                  className="neon-btn w-full py-4 font-montserrat text-base"
                  onClick={() => handleNext(1)}
                >
                  Смотреть итоги →
                </button>
              )}
            </div>
          </div>
        )}

        {/* ───────── СЛАЙД 1 ───────── */}
        {slide === 1 && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="fade-up text-xs tracking-widest uppercase font-montserrat" style={{ color: 'rgba(29,185,84,0.6)' }}>
              Трек, который ассоциируется у меня с тобой
            </div>

            <div className="fade-up-1 relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, rgba(29,185,84,0.7), rgba(29,185,84,0.05), rgba(29,185,84,0.7))', animation: 'spin-slow 6s linear infinite' }} />
              <div className="absolute inset-[3px] rounded-full bg-[#0f0f0f] flex items-center justify-center">
                <div className="text-4xl">🎵</div>
              </div>
            </div>

            <div className="fade-up-2 text-base text-white/60 leading-relaxed max-w-xs">
              Мы знакомы, кажется, целую вечность, и ты для меня как младший брат.
              Спасибо тебе за все моменты — и давай продолжать жить нашу лучшую жизнь.
            </div>

            <div className="fade-up-3 w-full mt-2">
              <button
                className="ghost-btn w-full py-4 font-montserrat text-base"
                onClick={() => handleNext(2)}
              >
                Далее →
              </button>
            </div>
          </div>
        )}

        {/* ───────── СЛАЙД 2 ───────── */}
        {slide === 2 && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="fade-up text-xs tracking-widest uppercase font-montserrat" style={{ color: 'rgba(29,185,84,0.6)' }}>
              Момент с тобой
            </div>

            <div className="fade-up-1 text-5xl">✨</div>

            <div className="fade-up-2 text-base text-white/70 leading-relaxed max-w-xs space-y-3">
              <p>Помнишь, как я покупала вам алкоголь, когда вы этого не могли делать?</p>
              <p>Или как мы здорово жили в Девяткино, постоянно что‑то новое придумывая?</p>
              <p>И как ездили в Сортавалу?</p>
              <p className="text-white/40 italic">Спасибо тебе за эти моменты.</p>
            </div>

            <div className="fade-up-3 w-full mt-2">
              <button
                className="ghost-btn w-full py-4 font-montserrat text-base"
                onClick={() => handleNext(3)}
              >
                Что там дальше?
              </button>
            </div>
          </div>
        )}

        {/* ───────── СЛАЙД 3 ───────── */}
        {slide === 3 && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="fade-up text-xs tracking-widest uppercase font-montserrat" style={{ color: 'rgba(29,185,84,0.6)' }}>
              Наша статистика
            </div>

            <div className="fade-up-1 font-montserrat font-black text-5xl tracking-tight">
              spot<span className="neon">IRA</span>
            </div>

            <div className="fade-up-2 flex flex-col gap-3 w-full">
              {[
                { label: 'Сколько мы дружим', value: '4 636 дней' },
                { label: 'Сколько раз ты был на моём дне рождения', value: 'Не сосчитать — очень много' },
                { label: 'Как сильно я дорожу тобой', value: 'Настолько, насколько это возможно' },
              ].map(({ label, value }) => (
                <div key={label} className="stat-card text-left">
                  <div className="text-xs text-white/35 font-ibm mb-1">{label}</div>
                  <div className="text-lg font-montserrat font-bold" style={{ color: '#1DB954' }}>{value}</div>
                </div>
              ))}
            </div>

            <div className="fade-up-3 text-sm text-white/40 leading-relaxed max-w-xs">
              И далее я хочу разделить с тобой свои 30 лет и переход в новое десятилетие.
            </div>

            <div className="fade-up-4 w-full mt-1">
              <button
                className="neon-btn w-full py-4 font-montserrat text-base"
                onClick={() => handleNext(4)}
              >
                Подробности →
              </button>
            </div>
          </div>
        )}

        {/* ───────── СЛАЙД 4 ───────── */}
        {slide === 4 && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="fade-up font-montserrat font-black text-5xl tracking-tight">
              spot<span className="neon">IRA</span>
            </div>

            <div className="fade-up-1 text-base text-white/60 leading-relaxed max-w-xs">
              Жду тебя <span className="text-white font-semibold">27 июня в 17:30</span>
            </div>

            <div className="fade-up-2 stat-card w-full text-left space-y-2">
              <div className="text-sm text-white/80">📍 Московский проспект 139А</div>
              <div className="text-sm text-white/50">м. Электросила</div>
              <div className="text-xs text-white/35">вход с торца здания через железную калитку</div>
            </div>

            <div className="fade-up-3 stat-card w-full text-left">
              <div className="text-xs text-white/35 mb-2 uppercase tracking-wider">Тематика праздника</div>
              <a
                href="https://docs.google.com/document/d/19nD4DwoFk2GaUhR5G1j0_YAmeqTiTXoMtmebOjLU_JA/edit?tab=t.0"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-montserrat font-bold underline decoration-dotted"
                style={{ color: '#1DB954' }}
              >
                Eurovision 🎤
              </a>
              <div className="text-xs text-white/30 mt-1">нажми, чтобы узнать подробности</div>
            </div>

            <div className="fade-up-3 stat-card w-full text-left space-y-2">
              <div className="text-xs text-white/35 mb-1 uppercase tracking-wider">Что тебя ждёт?</div>
              {[
                '17:30–18:30 — сбор, лёгкий перекус, первые тосты',
                '18:30–20:30 — вкусно кушаем, вкусно пьём и проходим квиз по Иришке',
                '20:30–22:00 — слушаем музыку, общаемся',
              ].map((item) => (
                <div key={item} className="text-sm text-white/60 flex gap-2">
                  <span style={{ color: '#1DB954', flexShrink: 0 }}>▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="fade-up-4 text-sm text-white/40">
              Мой номер знаешь! 🤍
            </div>

            <div className="fade-up-4 flex flex-col gap-3 w-full">
              <a
                href="https://docs.google.com/spreadsheets/d/1Ku3rdanulnFMoDGRRYnycAnj4sJThtFrm7mCLC-oufE/edit?gid=0#gid=0"
                target="_blank"
                rel="noreferrer"
                className="neon-btn w-full py-4 font-montserrat text-base text-center block"
              >
                🎁 Wishlist
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

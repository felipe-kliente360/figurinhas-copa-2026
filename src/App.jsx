import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {
  Search, Share2, Trophy, ChevronDown, ChevronRight,
  Plus, Minus, X, Copy, CheckCircle,
} from 'lucide-react'
import { GROUPS_DATA, FWC_STICKERS, CC_STICKERS, TOTAL_STICKERS } from './data'

// ── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'album-miguel-2026'
const C = {
  bg:        '#1a5c2e',
  bgPattern: 'repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,0.025) 20px,rgba(255,255,255,0.025) 40px)',
  cardDark:  '#0f2d1a',
  cardMed:   '#1a4029',
  green:     '#22c55e',
  gold:      '#fbbf24',
  red:       '#ef4444',
  blue:      '#3b82f6',
  cream:     '#fefce8',
}

const MILESTONE_MSGS = {
  25:  '25%! Miguel tá voando! ✈️⚽',
  50:  'METADE DO ÁLBUM! Incrível, Miguel! 🎯',
  75:  '75%! Quase lá, campeão! 🏆',
  100: 'ÁLBUM COMPLETO! MIGUEL É O CAMPEÃO! 🎆🥇🎆',
}

function getStickerName(team, num) {
  if (num === 1) return 'Escudo'
  if (num === 13) return 'Foto do time'
  return num <= 12 ? team.players[num - 2] : team.players[num - 3]
}

// ── Storage ────────────────────────────────────────────────────────────────
function loadStickers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}
function saveStickers(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch {}
}

// ── StickerCard ────────────────────────────────────────────────────────────
function StickerCard({ stickerKey, number, name, status, qty, onCycle, onAdjust }) {
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    onCycle(stickerKey)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 400)
  }

  const isTenho    = status === 'tenho'
  const isRepetida = status === 'repetida'
  const isFalta    = status === 'falta'

  return (
    <div
      role="button"
      aria-label={`Figurinha ${number}: ${name}`}
      onClick={handleClick}
      style={{
        background:    isTenho ? '#14532d' : isRepetida ? '#1e3a5f' : C.cardDark,
        border:        `2px solid ${isTenho ? C.green : isRepetida ? C.blue : '#374151'}`,
        borderRadius:  8,
        padding:       '6px 4px',
        cursor:        'pointer',
        userSelect:    'none',
        WebkitUserSelect: 'none',
        minHeight:     80,
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        justifyContent: 'space-between',
        gap:           2,
        transition:    'border-color 0.2s, background 0.2s',
        boxShadow:     isTenho ? '0 0 8px rgba(34,197,94,0.35)' : isRepetida ? '0 0 8px rgba(59,130,246,0.35)' : 'none',
        animation:     animating && isTenho ? 'stamp 0.35s cubic-bezier(0.36,0.07,0.19,0.97)' : 'none',
        opacity:       isFalta ? 0.65 : 1,
      }}
    >
      <span style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 13, lineHeight: 1 }}>
        #{number}
      </span>

      <span style={{
        color:          isFalta ? '#6b7280' : C.cream,
        fontFamily:     'Nunito',
        fontSize:       10,
        fontWeight:     700,
        textAlign:      'center',
        lineHeight:     1.2,
        overflow:       'hidden',
        display:        '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        width:          '100%',
        wordBreak:      'break-word',
      }}>
        {name}
      </span>

      {isFalta && (
        <span style={{ color: '#6b7280', fontSize: 10, fontFamily: 'Nunito', fontWeight: 600 }}>falta</span>
      )}
      {isTenho && (
        <span style={{ fontSize: 14 }}>✅</span>
      )}
      {isRepetida && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => onAdjust(stickerKey, -1)}
            style={{ background: 'rgba(59,130,246,0.3)', border: 'none', borderRadius: 4, color: C.cream, width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}
          ><Minus size={10} /></button>
          <span style={{ color: C.blue, fontFamily: 'Boogaloo', fontSize: 13, minWidth: 20, textAlign: 'center' }}>×{qty}</span>
          <button
            onClick={() => onAdjust(stickerKey, 1)}
            style={{ background: 'rgba(59,130,246,0.3)', border: 'none', borderRadius: 4, color: C.cream, width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}
          ><Plus size={10} /></button>
        </div>
      )}
    </div>
  )
}

// ── TeamSection ────────────────────────────────────────────────────────────
function TeamSection({ team, stickers, onCycle, onAdjust }) {
  const [open, setOpen] = useState(false)

  const owned = useMemo(() => {
    let n = 0
    for (let i = 1; i <= 20; i++) {
      if ((stickers[`${team.code}-${i}`]?.status || 'falta') !== 'falta') n++
    }
    return n
  }, [stickers, team.code])

  const pct = Math.round((owned / 20) * 100)
  const complete = owned === 20

  return (
    <div style={{
      background: C.cardMed, borderRadius: 10, marginBottom: 8,
      border: `2px solid ${complete ? C.gold : '#1f4a30'}`,
      boxShadow: complete ? '0 0 12px rgba(251,191,36,0.3)' : 'none',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <span style={{ fontSize: 26 }}>{team.flag}</span>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: C.cream, fontFamily: 'Boogaloo', fontSize: 17 }}>{team.name}</span>
            {complete && <span>⭐</span>}
          </div>
          <div style={{ background: '#0f2d1a', borderRadius: 4, height: 6, marginTop: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: complete ? C.gold : C.green, borderRadius: 4, transition: 'width 0.4s ease' }} />
          </div>
        </div>
        <span style={{ color: complete ? C.gold : C.green, fontFamily: 'Boogaloo', fontSize: 15, whiteSpace: 'nowrap' }}>
          {owned}/20
        </span>
        {open ? <ChevronDown size={18} color={C.cream} /> : <ChevronRight size={18} color={C.cream} />}
      </button>

      {open && (
        <div style={{ padding: '0 10px 10px' }}>
          <div className="sticker-grid">
            {Array.from({ length: 20 }, (_, i) => {
              const num = i + 1
              const key = `${team.code}-${num}`
              const s = stickers[key] || { status: 'falta', qty: 0 }
              return (
                <StickerCard
                  key={key}
                  stickerKey={key}
                  number={num}
                  name={getStickerName(team, num)}
                  status={s.status}
                  qty={s.qty || 2}
                  onCycle={onCycle}
                  onAdjust={onAdjust}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ── SpecialSection ─────────────────────────────────────────────────────────
function SpecialSection({ items, prefix, label, icon, accentColor, borderColor, stickers, onCycle, onAdjust }) {
  const [open, setOpen] = useState(false)

  const owned = useMemo(() => {
    let n = 0
    for (const item of items) {
      if ((stickers[`${prefix}-${item.id}`]?.status || 'falta') !== 'falta') n++
    }
    return n
  }, [stickers, items, prefix])

  const total = items.length
  const pct = Math.round((owned / total) * 100)
  const complete = owned === total

  return (
    <div style={{
      background: C.cardMed, borderRadius: 10, marginBottom: 8,
      border: `2px solid ${complete ? C.gold : borderColor}`,
      boxShadow: complete ? '0 0 12px rgba(251,191,36,0.3)' : `0 0 8px ${borderColor}33`,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <span style={{ fontSize: 26 }}>{icon}</span>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: accentColor, fontFamily: 'Boogaloo', fontSize: 17 }}>{label}</span>
            {complete && <span>🏆</span>}
          </div>
          <div style={{ background: '#0f2d1a', borderRadius: 4, height: 6, marginTop: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: accentColor, borderRadius: 4, transition: 'width 0.4s ease' }} />
          </div>
        </div>
        <span style={{ color: accentColor, fontFamily: 'Boogaloo', fontSize: 15, whiteSpace: 'nowrap' }}>{owned}/{total}</span>
        {open ? <ChevronDown size={18} color={C.cream} /> : <ChevronRight size={18} color={C.cream} />}
      </button>

      {open && (
        <div style={{ padding: '0 10px 10px' }}>
          <div className="sticker-grid">
            {items.map(item => {
              const key = `${prefix}-${item.id}`
              const s = stickers[key] || { status: 'falta', qty: 0 }
              return (
                <StickerCard
                  key={key}
                  stickerKey={key}
                  number={item.id}
                  name={item.nome}
                  status={s.status}
                  qty={s.qty || 2}
                  onCycle={onCycle}
                  onAdjust={onAdjust}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ── AlbumView ──────────────────────────────────────────────────────────────
function AlbumView({ stickers, onCycle, onAdjust, searchQuery }) {
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null
    const q = searchQuery.toLowerCase()
    const results = []

    for (const group of GROUPS_DATA) {
      const groupMatch = team =>
        team.name.toLowerCase().includes(q) ||
        team.code.toLowerCase().includes(q) ||
        `grupo ${group.group}`.toLowerCase().includes(q)

      for (const team of group.teams) {
        const fullTeamMatch = groupMatch(team)
        for (let i = 1; i <= 20; i++) {
          const key = `${team.code}-${i}`
          const name = getStickerName(team, i)
          if (
            fullTeamMatch ||
            name.toLowerCase().includes(q) ||
            key.toLowerCase().includes(q) ||
            String(i) === q.replace('#', '')
          ) {
            results.push({ key, num: i, name, team })
          }
        }
      }
    }

    for (const item of FWC_STICKERS) {
      const key = `FWC-${item.id}`
      if (item.nome.toLowerCase().includes(q) || key.toLowerCase().includes(q) || String(item.id) === q.replace('#', '')) {
        results.push({ key, num: item.id, name: item.nome, team: null })
      }
    }
    for (const item of CC_STICKERS) {
      const key = `CC-${item.id}`
      if (item.nome.toLowerCase().includes(q) || key.toLowerCase().includes(q) || String(item.id) === q.replace('#', '')) {
        results.push({ key, num: item.id, name: item.nome, team: null })
      }
    }

    return results
  }, [searchQuery])

  if (searchResults !== null) {
    if (searchResults.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#6b7280', fontFamily: 'Nunito' }}>
          <div style={{ fontSize: 40 }}>🔍</div>
          <p style={{ marginTop: 8 }}>Nada encontrado para "{searchQuery}"</p>
        </div>
      )
    }
    return (
      <div style={{ padding: '8px 0' }}>
        <p style={{ color: C.gold, fontFamily: 'Nunito', fontWeight: 700, marginBottom: 10, fontSize: 14 }}>
          {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} para "{searchQuery}"
        </p>
        <div className="sticker-grid">
          {searchResults.map(({ key, num, name, team }) => {
            const s = stickers[key] || { status: 'falta', qty: 0 }
            return (
              <div key={key}>
                <div style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 11, textAlign: 'center', marginBottom: 2 }}>
                  {team ? `${team.flag} ${team.code}` : key.startsWith('FWC') ? '🏆 FWC' : '🥤 CC'}
                </div>
                <StickerCard stickerKey={key} number={num} name={name} status={s.status} qty={s.qty || 2} onCycle={onCycle} onAdjust={onAdjust} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      {GROUPS_DATA.map(group => (
        <div key={group.group} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ background: C.gold, color: C.cardDark, fontFamily: 'Boogaloo', fontSize: 16, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {group.group}
            </div>
            <span style={{ color: C.cream, fontFamily: 'Boogaloo', fontSize: 18 }}>Grupo {group.group}</span>
          </div>
          {group.teams.map(team => (
            <TeamSection key={team.code} team={team} stickers={stickers} onCycle={onCycle} onAdjust={onAdjust} />
          ))}
        </div>
      ))}
      <SpecialSection items={FWC_STICKERS} prefix="FWC" label="FWC — Copa 2026" icon="🏆" accentColor={C.gold} borderColor="#7c3aed" stickers={stickers} onCycle={onCycle} onAdjust={onAdjust} />
      <SpecialSection items={CC_STICKERS} prefix="CC" label="Coca-Cola Stars" icon="🥤" accentColor="#ef4444" borderColor="#ef4444" stickers={stickers} onCycle={onCycle} onAdjust={onAdjust} />
    </div>
  )
}

// ── FaltamView ─────────────────────────────────────────────────────────────
function FaltamView({ stickers, onCycle, onAdjust }) {
  const groups = useMemo(() => {
    const result = []
    for (const group of GROUPS_DATA) {
      for (const team of group.teams) {
        const missing = []
        for (let i = 1; i <= 20; i++) {
          const key = `${team.code}-${i}`
          if ((stickers[key]?.status || 'falta') === 'falta') {
            missing.push({ key, num: i, name: getStickerName(team, i) })
          }
        }
        if (missing.length > 0) result.push({ team, missing })
      }
    }
    const missingFwc = []
    for (const item of FWC_STICKERS) {
      const key = `FWC-${item.id}`
      if ((stickers[key]?.status || 'falta') === 'falta') missingFwc.push({ key, num: item.id, name: item.nome })
    }
    if (missingFwc.length > 0) result.push({ team: { code: 'FWC', name: 'FWC — Copa 2026', flag: '🏆' }, missing: missingFwc })
    const missingCc = []
    for (const item of CC_STICKERS) {
      const key = `CC-${item.id}`
      if ((stickers[key]?.status || 'falta') === 'falta') missingCc.push({ key, num: item.id, name: item.nome })
    }
    if (missingCc.length > 0) result.push({ team: { code: 'CC', name: 'Coca-Cola Stars', flag: '🥤' }, missing: missingCc })
    return result
  }, [stickers])

  const total = groups.reduce((acc, g) => acc + g.missing.length, 0)

  if (total === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: 60 }}>🎆</div>
        <p style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 24, marginTop: 12 }}>ÁLBUM COMPLETO! MIGUEL É O CAMPEÃO!</p>
      </div>
    )
  }

  return (
    <div>
      <p style={{ color: C.cream, fontFamily: 'Nunito', fontWeight: 700, marginBottom: 12, fontSize: 15 }}>
        ❌ Faltam <strong style={{ color: C.red }}>{total}</strong> figurinhas
      </p>
      {groups.map(({ team, missing }) => (
        <div key={team.code} style={{ marginBottom: 12, background: C.cardMed, borderRadius: 10, padding: '10px 12px', border: '1px solid #1f4a30' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 22 }}>{team.flag}</span>
            <span style={{ color: C.cream, fontFamily: 'Boogaloo', fontSize: 16 }}>{team.name}</span>
            <span style={{ color: C.red, fontFamily: 'Nunito', fontSize: 13, marginLeft: 'auto', fontWeight: 700 }}>{missing.length} faltando</span>
          </div>
          <div className="sticker-grid">
            {missing.map(({ key, num, name }) => (
              <StickerCard key={key} stickerKey={key} number={num} name={name} status="falta" qty={0} onCycle={onCycle} onAdjust={onAdjust} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── RepetidaView ───────────────────────────────────────────────────────────
function RepetidaView({ stickers, onCycle, onAdjust }) {
  const groups = useMemo(() => {
    const result = []
    for (const group of GROUPS_DATA) {
      for (const team of group.teams) {
        const dupes = []
        for (let i = 1; i <= 20; i++) {
          const key = `${team.code}-${i}`
          const s = stickers[key]
          if (s?.status === 'repetida') dupes.push({ key, num: i, name: getStickerName(team, i), qty: s.qty || 2 })
        }
        if (dupes.length > 0) result.push({ team, dupes })
      }
    }
    const fwcDupes = []
    for (const item of FWC_STICKERS) {
      const key = `FWC-${item.id}`
      const s = stickers[key]
      if (s?.status === 'repetida') fwcDupes.push({ key, num: item.id, name: item.nome, qty: s.qty || 2 })
    }
    if (fwcDupes.length > 0) result.push({ team: { code: 'FWC', name: 'FWC — Copa 2026', flag: '🏆' }, dupes: fwcDupes })
    const ccDupes = []
    for (const item of CC_STICKERS) {
      const key = `CC-${item.id}`
      const s = stickers[key]
      if (s?.status === 'repetida') ccDupes.push({ key, num: item.id, name: item.nome, qty: s.qty || 2 })
    }
    if (ccDupes.length > 0) result.push({ team: { code: 'CC', name: 'Coca-Cola Stars', flag: '🥤' }, dupes: ccDupes })
    return result
  }, [stickers])

  const total = groups.reduce((acc, g) => acc + g.dupes.length, 0)
  const totalQty = groups.reduce((acc, g) => acc + g.dupes.reduce((a, d) => a + (d.qty || 2), 0), 0)

  if (total === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: 50 }}>😄</div>
        <p style={{ color: C.cream, fontFamily: 'Boogaloo', fontSize: 22, marginTop: 12 }}>Sem repetidas por enquanto...</p>
        <p style={{ color: '#6b7280', fontFamily: 'Nunito', marginTop: 6 }}>Abre mais pacotinhos!</p>
      </div>
    )
  }

  return (
    <div>
      <p style={{ color: C.cream, fontFamily: 'Nunito', fontWeight: 700, marginBottom: 12, fontSize: 15 }}>
        🔵 {total} tipo{total !== 1 ? 's' : ''} repetida{total !== 1 ? 's' : ''} · <strong style={{ color: C.blue }}>{totalQty}</strong> pra trocar!
      </p>
      {groups.map(({ team, dupes }) => (
        <div key={team.code} style={{ marginBottom: 12, background: C.cardMed, borderRadius: 10, padding: '10px 12px', border: '1px solid #1e3a5f' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 22 }}>{team.flag}</span>
            <span style={{ color: C.cream, fontFamily: 'Boogaloo', fontSize: 16 }}>{team.name}</span>
          </div>
          <div className="sticker-grid">
            {dupes.map(({ key, num, name, qty }) => (
              <StickerCard key={key} stickerKey={key} number={num} name={name} status="repetida" qty={qty} onCycle={onCycle} onAdjust={onAdjust} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── StatsView ──────────────────────────────────────────────────────────────
function StatsView({ stickers, owned, progress }) {
  const groupStats = useMemo(() => GROUPS_DATA.map(group => {
    let n = 0
    const total = group.teams.length * 20
    for (const team of group.teams)
      for (let i = 1; i <= 20; i++)
        if ((stickers[`${team.code}-${i}`]?.status || 'falta') !== 'falta') n++
    return { group: group.group, owned: n, total, pct: Math.round((n / total) * 100) }
  }), [stickers])

  const dupQty = useMemo(() => Object.values(stickers).reduce((acc, v) => v.status === 'repetida' ? acc + (v.qty || 2) : acc, 0), [stickers])
  const packets = Math.floor(owned / 7)

  const motiv =
    progress >= 100 ? 'ÁLBUM COMPLETO! MIGUEL É O CAMPEÃO! 🎆🥇🎆'
    : progress >= 75 ? 'Quase lá, campeão! Falta pouquinho! 🏆🔥'
    : progress >= 50 ? 'Mais da metade! Incrível, Miguel! 🎯⚽'
    : progress >= 25 ? 'Indo muito bem! Você é craque nisso! 🌟'
    : progress >= 10 ? 'Bom começo! Continua abrindo pacotinhos! 💪'
    : 'Vamos lá, Miguel! Abre mais pacotinhos! 📦⚽'

  const fwcOwned = useMemo(() => FWC_STICKERS.filter(item => (stickers[`FWC-${item.id}`]?.status || 'falta') !== 'falta').length, [stickers])
  const ccOwned  = useMemo(() => CC_STICKERS.filter(item => (stickers[`CC-${item.id}`]?.status || 'falta') !== 'falta').length, [stickers])
  const fwcPct = Math.round((fwcOwned / FWC_STICKERS.length) * 100)
  const ccPct  = Math.round((ccOwned  / CC_STICKERS.length)  * 100)

  return (
    <div>
      <div style={{ background: C.cardMed, borderRadius: 12, padding: '20px 16px', marginBottom: 16, border: `2px solid ${C.gold}`, textAlign: 'center' }}>
        <div style={{ fontFamily: 'Boogaloo', color: C.gold, fontSize: 20, marginBottom: 4 }}>🏆 Progresso Total</div>
        <div style={{ fontFamily: 'Boogaloo', color: C.cream, fontSize: 52 }}>{progress}%</div>
        <div style={{ background: '#0f2d1a', borderRadius: 8, height: 20, margin: '10px 0', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${C.green}, ${C.gold})`, borderRadius: 8, transition: 'width 0.6s ease' }} />
        </div>
        <div style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 15 }}>
          <strong style={{ color: C.green }}>{owned}</strong> / {TOTAL_STICKERS} figurinhas
        </div>
        <div style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 16, marginTop: 10, padding: '8px 12px', background: 'rgba(251,191,36,0.1)', borderRadius: 8 }}>
          {motiv}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        <div style={{ background: C.cardMed, borderRadius: 10, padding: '14px 12px', border: '1px solid #1e3a5f', textAlign: 'center' }}>
          <div style={{ color: C.blue, fontFamily: 'Boogaloo', fontSize: 36 }}>{dupQty}</div>
          <div style={{ color: '#9ca3af', fontFamily: 'Nunito', fontSize: 13 }}>🔵 pra trocar</div>
        </div>
        <div style={{ background: C.cardMed, borderRadius: 10, padding: '14px 12px', border: '1px solid #1f4a30', textAlign: 'center' }}>
          <div style={{ color: C.green, fontFamily: 'Boogaloo', fontSize: 36 }}>{packets}</div>
          <div style={{ color: '#9ca3af', fontFamily: 'Nunito', fontSize: 13 }}>📦 pacotes estimados</div>
        </div>
      </div>

      <div style={{ background: C.cardMed, borderRadius: 12, padding: '16px 14px', border: '1px solid #1f4a30' }}>
        <div style={{ fontFamily: 'Boogaloo', color: C.cream, fontSize: 18, marginBottom: 12 }}>Por Grupo</div>
        {groupStats.map(g => (
          <div key={g.group} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 15 }}>Grupo {g.group}{g.pct === 100 ? ' ⭐' : ''}</span>
              <span style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 13, fontWeight: 700 }}>{g.owned}/{g.total} ({g.pct}%)</span>
            </div>
            <div style={{ background: '#0f2d1a', borderRadius: 4, height: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${g.pct}%`, background: g.pct === 100 ? C.gold : C.green, borderRadius: 4, transition: 'width 0.5s ease' }} />
            </div>
          </div>
        ))}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 15 }}>🏆 FWC{fwcPct === 100 ? ' ⭐' : ''}</span>
            <span style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 13, fontWeight: 700 }}>{fwcOwned}/{FWC_STICKERS.length} ({fwcPct}%)</span>
          </div>
          <div style={{ background: '#0f2d1a', borderRadius: 4, height: 10, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${fwcPct}%`, background: C.gold, borderRadius: 4, opacity: 0.85, transition: 'width 0.5s ease' }} />
          </div>
        </div>
        <div style={{ marginBottom: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ color: '#ef4444', fontFamily: 'Boogaloo', fontSize: 15 }}>🥤 Coca-Cola{ccPct === 100 ? ' ⭐' : ''}</span>
            <span style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 13, fontWeight: 700 }}>{ccOwned}/{CC_STICKERS.length} ({ccPct}%)</span>
          </div>
          <div style={{ background: '#0f2d1a', borderRadius: 4, height: 10, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${ccPct}%`, background: '#ef4444', borderRadius: 4, opacity: 0.85, transition: 'width 0.5s ease' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── ShareModal ─────────────────────────────────────────────────────────────
function ShareModal({ stickers, owned, onClose, onImport }) {
  const [tab, setTab] = useState('share')
  const [importText, setImportText] = useState('')
  const [copied, setCopied] = useState(false)

  const shareText = useMemo(() => {
    const today = new Date().toLocaleDateString('pt-BR')
    const repeated = [], missing = []

    for (const group of GROUPS_DATA) {
      for (const team of group.teams) {
        for (let i = 1; i <= 20; i++) {
          const key = `${team.code}-${i}`
          const s = stickers[key]
          if (s?.status === 'repetida') repeated.push(`${key}×${s.qty || 2}`)
          else if (!s || s.status === 'falta') missing.push(key)
        }
      }
    }
    for (const item of FWC_STICKERS) {
      const key = `FWC-${item.id}`
      const s = stickers[key]
      if (s?.status === 'repetida') repeated.push(`${key}×${s.qty || 2}`)
      else if (!s || s.status === 'falta') missing.push(key)
    }
    for (const item of CC_STICKERS) {
      const key = `CC-${item.id}`
      const s = stickers[key]
      if (s?.status === 'repetida') repeated.push(`${key}×${s.qty || 2}`)
      else if (!s || s.status === 'falta') missing.push(key)
    }

    const lines = [`🏆 Álbum Copa 2026 — Miguel`, `📅 ${today} | ${owned}/${TOTAL_STICKERS} figurinhas`, ``]
    if (repeated.length > 0) { lines.push(`✅ TENHO (repetidas pra trocar):`); lines.push(repeated.join(' ')); lines.push(``) }
    if (missing.length > 0) {
      lines.push(`❌ FALTAM:`)
      for (let i = 0; i < missing.length; i += 20) lines.push(missing.slice(i, i + 20).join(' '))
      lines.push(``)
    }
    lines.push(`📲 Para importar: cole no app e toque em "Importar"`)
    return lines.join('\n')
  }, [stickers, owned])

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500) })
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{ background: C.cardMed, borderRadius: '16px 16px 0 0', width: '100%', maxWidth: 600, maxHeight: '90vh', overflow: 'auto', padding: '20px 16px 32px', animation: 'fadeInUp 0.3s ease' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontFamily: 'Boogaloo', color: C.cream, fontSize: 20 }}>📤 Compartilhar / Importar</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: C.cream, cursor: 'pointer', padding: 4 }}><X size={22} /></button>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['share', 'import'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '8px 0', borderRadius: 8, background: tab === t ? C.green : '#0f2d1a', color: tab === t ? C.cardDark : C.cream, border: 'none', fontFamily: 'Boogaloo', fontSize: 15, cursor: 'pointer' }}>
              {t === 'share' ? '📤 Compartilhar' : '📥 Importar'}
            </button>
          ))}
        </div>

        {tab === 'share' && (
          <div>
            <textarea readOnly value={shareText} style={{ width: '100%', minHeight: 200, background: C.cardDark, color: C.cream, border: '1px solid #374151', borderRadius: 8, padding: '10px 12px', fontFamily: 'Nunito', fontSize: 16, lineHeight: 1.6, resize: 'none', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <button onClick={handleCopy} style={{ flex: 1, padding: '12px 0', borderRadius: 10, background: copied ? C.green : '#374151', color: C.cream, border: 'none', fontFamily: 'Boogaloo', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {copied ? <><CheckCircle size={18} /> Copiado!</> : <><Copy size={18} /> Copiar</>}
              </button>
              <button
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank')}
                style={{ flex: 1, padding: '12px 0', borderRadius: 10, background: '#25d366', color: '#fff', border: 'none', fontFamily: 'Boogaloo', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
              >
                <Share2 size={18} /> WhatsApp
              </button>
            </div>
          </div>
        )}

        {tab === 'import' && (
          <div>
            <p style={{ color: '#9ca3af', fontFamily: 'Nunito', fontSize: 14, marginBottom: 10 }}>Cole aqui uma mensagem do app para importar:</p>
            <textarea value={importText} onChange={e => setImportText(e.target.value)} placeholder="Cole a mensagem aqui..." style={{ width: '100%', minHeight: 180, background: C.cardDark, color: C.cream, border: '1px solid #374151', borderRadius: 8, padding: '10px 12px', fontFamily: 'Nunito', fontSize: 16, lineHeight: 1.6, resize: 'none', boxSizing: 'border-box' }} />
            <button
              onClick={() => onImport(importText)}
              disabled={!importText.trim()}
              style={{ width: '100%', marginTop: 12, padding: '12px 0', borderRadius: 10, background: importText.trim() ? C.green : '#374151', color: importText.trim() ? C.cardDark : '#6b7280', border: 'none', fontFamily: 'Boogaloo', fontSize: 18, cursor: importText.trim() ? 'pointer' : 'default' }}
            >
              📥 Importar Figurinhas
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Notification ───────────────────────────────────────────────────────────
function Notification({ message, onDismiss }) {
  return (
    <div
      onClick={onDismiss}
      style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', background: C.cardDark, border: `2px solid ${C.gold}`, borderRadius: 14, padding: '14px 20px', zIndex: 200, maxWidth: '90vw', boxShadow: '0 8px 32px rgba(0,0,0,0.6)', animation: 'bounce-in 0.4s ease-out', cursor: 'pointer' }}
    >
      <p style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 17, margin: 0, textAlign: 'center' }}>{message}</p>
    </div>
  )
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [stickers, setStickers]           = useState({})
  const [loading, setLoading]             = useState(true)
  const [view, setView]                   = useState('album')
  const [search, setSearch]               = useState('')
  const [debouncedSearch, setDebounced]   = useState('')
  const [notification, setNotification]   = useState(null)
  const [showShare, setShowShare]         = useState(false)
  const milestoneRef                      = useRef(0)
  const saveTimer                         = useRef(null)
  const notifTimer                        = useRef(null)

  useEffect(() => { setStickers(loadStickers()); setLoading(false) }, [])

  useEffect(() => {
    if (loading) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => saveStickers(stickers), 500)
    return () => clearTimeout(saveTimer.current)
  }, [stickers, loading])

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 200)
    return () => clearTimeout(t)
  }, [search])

  const { owned, progress } = useMemo(() => {
    let owned = 0
    for (const group of GROUPS_DATA)
      for (const team of group.teams)
        for (let i = 1; i <= 20; i++)
          if ((stickers[`${team.code}-${i}`]?.status || 'falta') !== 'falta') owned++
    for (const item of FWC_STICKERS)
      if ((stickers[`FWC-${item.id}`]?.status || 'falta') !== 'falta') owned++
    for (const item of CC_STICKERS)
      if ((stickers[`CC-${item.id}`]?.status || 'falta') !== 'falta') owned++
    return { owned, progress: Math.round((owned / TOTAL_STICKERS) * 100) }
  }, [stickers])

  const showNotif = useCallback((msg, duration = 3500) => {
    setNotification(msg)
    clearTimeout(notifTimer.current)
    notifTimer.current = setTimeout(() => setNotification(null), duration)
  }, [])

  useEffect(() => {
    for (const m of [25, 50, 75, 100]) {
      if (progress >= m && milestoneRef.current < m) {
        milestoneRef.current = m
        showNotif(MILESTONE_MSGS[m], 5000)
        break
      }
    }
  }, [progress, showNotif])

  const cycleSticker = useCallback((key) => {
    setStickers(prev => {
      const cur = prev[key]?.status || 'falta'
      const next = cur === 'falta' ? 'tenho' : cur === 'tenho' ? 'repetida' : 'falta'
      return { ...prev, [key]: { status: next, qty: next === 'repetida' ? (prev[key]?.qty || 2) : 0 } }
    })
  }, [])

  const adjustQty = useCallback((key, delta) => {
    setStickers(prev => {
      const cur = prev[key] || { status: 'repetida', qty: 2 }
      return { ...prev, [key]: { ...cur, qty: Math.max(2, (cur.qty || 2) + delta) } }
    })
  }, [])

  const handleImport = useCallback((text) => {
    const regex = /([A-Z]{2,4})-(\d+)(?:×(\d+))?/g
    let match
    const updates = {}
    while ((match = regex.exec(text)) !== null) {
      const [, code, num, qty] = match
      updates[`${code}-${num}`] = { status: qty !== undefined ? 'repetida' : 'tenho', qty: qty ? parseInt(qty) : 0 }
    }
    const count = Object.keys(updates).length
    if (count === 0) { showNotif('Nenhuma figurinha encontrada 🤔'); return }
    if (window.confirm(`Isso vai atualizar ${count} figurinha${count !== 1 ? 's' : ''}. Confirmar?`)) {
      setStickers(prev => ({ ...prev, ...updates }))
      setShowShare(false)
      showNotif(`${count} figurinhas atualizadas! ✅`)
    }
  }, [showNotif])

  if (loading) {
    return (
      <div style={{ background: C.bg, backgroundImage: C.bgPattern, minHeight: '100svh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🦫 🐦 🐻</div>
        <div style={{ color: C.gold, fontFamily: 'Boogaloo', fontSize: 28 }}>Carregando o álbum...</div>
        <div style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 16, marginTop: 6, opacity: 0.7 }}>Cola, troca e vai pro hexa!</div>
      </div>
    )
  }

  const VIEWS = [
    { id: 'album',     label: '📖 Álbum' },
    { id: 'faltam',   label: '❌ Faltam' },
    { id: 'repetidas', label: '🔵 Repetidas' },
    { id: 'stats',    label: '📊 Stats' },
  ]

  return (
    <div style={{ background: C.bg, backgroundImage: C.bgPattern, minHeight: '100svh' }}>
      {/* Header */}
      <header style={{ background: C.cardDark, borderBottom: `3px solid ${C.gold}`, position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px 6px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Trophy size={20} color={C.gold} />
              <span style={{ fontFamily: 'Boogaloo', color: C.gold, fontSize: 20 }}>ÁLBUM DO MIGUEL</span>
            </div>
            <div style={{ background: '#1a4029', borderRadius: 6, height: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${C.green}, ${C.gold})`, borderRadius: 6, transition: 'width 0.5s ease' }} />
            </div>
            <div style={{ color: C.cream, fontFamily: 'Nunito', fontSize: 11, marginTop: 3, opacity: 0.8 }}>
              {owned}/{TOTAL_STICKERS} · {progress}%
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} color={C.cream} style={{ position: 'absolute', left: 7, top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar..."
                style={{ background: C.cardMed, border: `1px solid #374151`, borderRadius: 8, color: C.cream, fontFamily: 'Nunito', fontSize: 16, padding: '7px 26px 7px 26px', outline: 'none', width: 110 }}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 5, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: C.cream, padding: 0, display: 'flex' }}>
                  <X size={13} />
                </button>
              )}
            </div>
            <button onClick={() => setShowShare(true)} style={{ background: C.green, border: 'none', borderRadius: 8, padding: '8px 10px', color: C.cardDark, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Share2 size={16} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', borderTop: '1px solid #1f4a30', overflowX: 'auto' }}>
          {VIEWS.map(v => (
            <button
              key={v.id}
              onClick={() => { setView(v.id); setSearch('') }}
              style={{ flex: 1, minWidth: 'max-content', padding: '9px 12px', background: view === v.id ? C.green : 'none', color: view === v.id ? C.cardDark : C.cream, border: 'none', borderBottom: view === v.id ? `3px solid ${C.gold}` : '3px solid transparent', fontFamily: 'Boogaloo', fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {v.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '12px 10px 40px' }}>
        {view === 'album'     && <AlbumView     stickers={stickers} onCycle={cycleSticker} onAdjust={adjustQty} searchQuery={debouncedSearch} />}
        {view === 'faltam'   && <FaltamView    stickers={stickers} onCycle={cycleSticker} onAdjust={adjustQty} />}
        {view === 'repetidas' && <RepetidaView  stickers={stickers} onCycle={cycleSticker} onAdjust={adjustQty} />}
        {view === 'stats'    && <StatsView     stickers={stickers} owned={owned} progress={progress} />}
      </main>

      {notification && <Notification message={notification} onDismiss={() => setNotification(null)} />}
      {showShare && <ShareModal stickers={stickers} owned={owned} onClose={() => setShowShare(false)} onImport={handleImport} />}
    </div>
  )
}

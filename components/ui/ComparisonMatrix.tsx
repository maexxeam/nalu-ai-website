import { useTranslations } from 'next-intl'
import { IconCheck, IconMinus, IconX } from '@tabler/icons-react'

const COLS = [
  { key: 'nalu', tkey: 'colNalu', highlight: true },
  { key: 'bi', tkey: 'colBi', highlight: false },
  { key: 'sap', tkey: 'colSap', highlight: false },
  { key: 'fabric', tkey: 'colFabric', highlight: false },
  { key: 'saas', tkey: 'colSaas', highlight: false },
  { key: 'excel', tkey: 'colExcel', highlight: false },
] as const

// y = ja/stark · p = teilweise/mit Aufwand · n = nein/nicht dafür gedacht
const ROWS: { tkey: string; cells: ('y' | 'p' | 'n')[] }[] = [
  { tkey: 'rowForecast', cells: ['y', 'n', 'y', 'p', 'y', 'n'] },
  { tkey: 'rowE2e', cells: ['y', 'n', 'y', 'n', 'n', 'p'] },
  { tkey: 'rowOnprem', cells: ['y', 'n', 'p', 'n', 'n', 'y'] },
  { tkey: 'rowConfig', cells: ['y', 'p', 'p', 'p', 'p', 'p'] },
  { tkey: 'rowGenai', cells: ['y', 'p', 'p', 'p', 'n', 'n'] },
  { tkey: 'rowWeeks', cells: ['y', 'y', 'n', 'n', 'p', 'y'] },
  { tkey: 'rowMidmarket', cells: ['y', 'p', 'n', 'p', 'p', 'p'] },
]

function Cell({ v }: { v: 'y' | 'p' | 'n' }) {
  if (v === 'y') return <IconCheck size={18} stroke={2.5} className="mx-auto text-emerald-600" />
  if (v === 'p') return <IconMinus size={18} stroke={2.5} className="mx-auto text-amber-500" />
  return <IconX size={16} stroke={2.5} className="mx-auto text-[var(--color-text-tertiary)] opacity-50" />
}

export function ComparisonMatrix() {
  const t = useTranslations('Warum')

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border-primary)]">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-border-primary)]">
              <th className="p-3" />
              {COLS.map((c) => (
                <th
                  key={c.key}
                  className={`p-3 text-center align-bottom font-display text-xs font-bold md:text-sm ${
                    c.highlight
                      ? 'bg-coral text-white'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  {t(c.tkey)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, r) => (
              <tr
                key={row.tkey}
                className={r % 2 === 1 ? 'bg-[#F8FAFB]' : 'bg-white'}
              >
                <td className="p-3 text-sm font-medium text-[var(--color-text-primary)]">
                  {t(row.tkey)}
                </td>
                {row.cells.map((v, i) => (
                  <td
                    key={COLS[i].key}
                    className={`p-3 text-center ${COLS[i].highlight ? 'bg-coral/5' : ''}`}
                  >
                    <Cell v={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-[var(--color-text-tertiary)]">
        <span className="flex items-center gap-1.5">
          <IconCheck size={14} stroke={2.5} className="text-emerald-600" /> {t('legendYes')}
        </span>
        <span className="flex items-center gap-1.5">
          <IconMinus size={14} stroke={2.5} className="text-amber-500" /> {t('legendPartial')}
        </span>
        <span className="flex items-center gap-1.5">
          <IconX size={13} stroke={2.5} className="text-[var(--color-text-tertiary)] opacity-50" /> {t('legendNo')}
        </span>
      </div>
    </div>
  )
}

'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { Search, Building2, ChevronDown, ChevronRight, Copy, Mail, Key, MapPin, Phone } from 'lucide-react'
import { courthouses, Courthouse, CourtLevel } from '@/data/courts'

export default function Home() {
  const [query, setQuery] = useState('')
  const [expandedCourts, setExpandedCourts] = useState<Set<string>>(new Set())
  const [copiedField, setCopiedField] = useState<string | null>(null)

  // Set up fuzzy search
  const fuse = useMemo(() => new Fuse(courthouses, {
    keys: [
      { name: 'name', weight: 2 },
      { name: 'city', weight: 1.5 },
      { name: 'region', weight: 1 },
      { name: 'hub_name', weight: 0.8 },
    ],
    threshold: 0.3,
    includeScore: true,
  }), [])

  // Get filtered results
  const filteredCourts = useMemo(() => {
    if (!query.trim()) {
      return courthouses.filter(c => !c.is_circuit) // Show non-circuit courts by default
    }
    const results = fuse.search(query)
    return results.map(r => r.item)
  }, [query, fuse])

  // Separate into courthouses and circuits
  const regularCourts = filteredCourts.filter(c => !c.is_circuit)
  const circuits = filteredCourts.filter(c => c.is_circuit)

  const toggleCourt = (id: string) => {
    setExpandedCourts(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const copyToClipboard = async (text: string, fieldId: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedField(fieldId)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 mb-3">BC Legal Directory</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courts, cities, regions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Results */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {query && (
          <p className="text-sm text-gray-500">
            Found {filteredCourts.length} results for &quot;{query}&quot;
          </p>
        )}

        {/* Regular Courts */}
        {regularCourts.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="text-blue-600" size={20} />
              <h2 className="font-semibold text-gray-900">Courthouses ({regularCourts.length})</h2>
            </div>
            <div className="space-y-3">
              {regularCourts.map(court => (
                <CourthouseCard
                  key={court.id}
                  court={court}
                  isExpanded={expandedCourts.has(court.id)}
                  onToggle={() => toggleCourt(court.id)}
                  onCopy={copyToClipboard}
                  copiedField={copiedField}
                />
              ))}
            </div>
          </section>
        )}

        {/* Circuit Courts */}
        {circuits.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-orange-600" size={20} />
              <h2 className="font-semibold text-gray-900">Circuit Courts ({circuits.length})</h2>
            </div>
            <div className="bg-white rounded-xl border overflow-hidden">
              {circuits.map((court, idx) => (
                <div
                  key={court.id}
                  className={`px-4 py-3 flex items-center justify-between ${idx !== circuits.length - 1 ? 'border-b' : ''}`}
                >
                  <div>
                    <p className="font-medium text-gray-900">{court.name}</p>
                    <p className="text-sm text-gray-500">{court.region}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Hub:</p>
                    <p className="text-sm font-medium text-blue-600">{court.hub_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredCourts.length === 0 && query && (
          <div className="text-center py-12">
            <p className="text-gray-500">No results found for &quot;{query}&quot;</p>
            <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </main>
  )
}

interface CourthouseCardProps {
  court: Courthouse
  isExpanded: boolean
  onToggle: () => void
  onCopy: (text: string, fieldId: string) => void
  copiedField: string | null
}

function CourthouseCard({ court, isExpanded, onToggle, onCopy, copiedField }: CourthouseCardProps) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{court.name}</h3>
            <p className="text-sm text-gray-500">{court.region}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {court.levels.map(level => (
            <span
              key={level.level}
              className={`text-xs px-2 py-1 rounded-full ${
                level.level === 'Provincial' ? 'bg-blue-100 text-blue-700' :
                level.level === 'Supreme' ? 'bg-purple-100 text-purple-700' :
                'bg-green-100 text-green-700'
              }`}
            >
              {level.level}
            </span>
          ))}
          {court.access_code && (
            <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
              <Key size={12} />
              {court.access_code}
            </span>
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t">
          {court.levels.map(level => (
            <CourtLevelSection
              key={level.level}
              level={level}
              courtId={court.id}
              onCopy={onCopy}
              copiedField={copiedField}
            />
          ))}
          {court.access_code_notes && (
            <p className="text-xs text-gray-500 mt-2">
              Access note: {court.access_code_notes}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

interface CourtLevelSectionProps {
  level: CourtLevel
  courtId: string
  onCopy: (text: string, fieldId: string) => void
  copiedField: string | null
}

function CourtLevelSection({ level, courtId, onCopy, copiedField }: CourtLevelSectionProps) {
  const contactFields = [
    { key: 'crown_email', label: 'Crown' },
    { key: 'jcm_scheduling_email', label: 'JCM Scheduling' },
    { key: 'scheduling_email', label: 'Scheduling' },
    { key: 'registry_email', label: 'Registry' },
    { key: 'criminal_registry_email', label: 'Crim Registry' },
    { key: 'bail_crown_email', label: 'Bail Crown' },
    { key: 'bail_jcm_email', label: 'Bail JCM' },
    { key: 'interpreter_request_email', label: 'Interpreter' },
    { key: 'fax_filing', label: 'Fax Filing' },
  ]

  const activeFields = contactFields.filter(f => level[f.key as keyof CourtLevel])

  if (activeFields.length === 0) return null

  return (
    <div className="mt-4">
      <h4 className={`text-sm font-semibold mb-2 ${
        level.level === 'Provincial' ? 'text-blue-700' :
        level.level === 'Supreme' ? 'text-purple-700' :
        'text-green-700'
      }`}>
        {level.level} Court
      </h4>
      <div className="space-y-2">
        {activeFields.map(field => {
          const value = level[field.key as keyof CourtLevel] as string
          const fieldId = `${courtId}-${level.level}-${field.key}`
          const isCopied = copiedField === fieldId
          const isPhone = field.key === 'fax_filing'

          return (
            <div key={field.key} className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-gray-50">
              <span className="text-sm text-gray-500 flex-shrink-0 w-24">{field.label}</span>
              <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                <span className="text-sm text-gray-800 truncate" title={value}>
                  {value.length > 30 ? value.substring(0, 27) + '...' : value}
                </span>
                <button
                  onClick={() => onCopy(value, fieldId)}
                  className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
                    isCopied ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100 text-gray-400'
                  }`}
                  title={isCopied ? 'Copied!' : 'Copy'}
                >
                  <Copy size={14} />
                </button>
                {!isPhone ? (
                  <a
                    href={`mailto:${value}`}
                    className="p-1.5 hover:bg-blue-100 rounded-lg text-blue-500 flex-shrink-0"
                    title="Send email"
                  >
                    <Mail size={14} />
                  </a>
                ) : (
                  <a
                    href={`tel:${value}`}
                    className="p-1.5 hover:bg-green-100 rounded-lg text-green-500 flex-shrink-0"
                    title="Call"
                  >
                    <Phone size={14} />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

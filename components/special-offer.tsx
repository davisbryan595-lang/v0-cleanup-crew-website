"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "specialOfferDismissedAt"
const DAY_MS = 24 * 60 * 60 * 1000

export default function SpecialOffer() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      const last = v ? Number(v) : 0
      if (!last || Date.now() - last > DAY_MS) {
        const t = setTimeout(() => setOpen(true), 800)
        return () => clearTimeout(t)
      }
    } catch {}
  }, [])

  const close = () => {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())) } catch {}
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70">
      <div className="relative w-[90%] max-w-md rounded-2xl bg-gray-900 text-white p-6 border border-gray-800 shadow-2xl animate-slide-down">
        <button aria-label="Close" onClick={close} className="absolute top-3 right-3 text-gray-400 hover:text-white">✕</button>
        <div className="text-center">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-2">Limited Time</p>
          <h3 className="text-2xl font-extrabold mb-2">
            <span className="accent-text hero-emphasis-glow">Special Offer</span>
          </h3>
          <p className="text-gray-300 mb-4">Book today and get <span className="accent-text font-semibold">10% off</span> on Standard & Premium cleans.</p>
          <div className="flex gap-3 justify-center">
            <a href="#pricing" onClick={close} className="px-5 py-2 rounded-full font-semibold text-black accent-bg hover:opacity-90 transition">View Pricing</a>
            <a href="#contact" onClick={close} className="px-5 py-2 rounded-full font-semibold accent-text accent-border border-2 hover:bg-white/5 transition">Claim Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

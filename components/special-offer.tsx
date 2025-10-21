"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "specialOfferDismissedAt"
const DAY_MS = 24 * 60 * 60 * 1000

export default function SpecialOffer() {
  const [open, setOpen] = useState(false)
  const [showLauncher, setShowLauncher] = useState(false)

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      const last = v ? Number(v) : 0
      if (!last || Date.now() - last > DAY_MS) {
        const t = setTimeout(() => setOpen(true), 800)
        return () => clearTimeout(t)
      } else {
        setShowLauncher(true)
      }
    } catch {
      setShowLauncher(true)
    }
  }, [])

  const close = () => {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())) } catch {}
    setOpen(false)
    setShowLauncher(true)
  }

  const openFromLauncher = () => {
    setOpen(true)
    setShowLauncher(false)
  }

  return (
    <>
      {open && (
        <div className="fixed right-6 bottom-6 z-[60] w-[90%] max-w-sm">
          <div className="relative rounded-2xl bg-gray-900 text-white p-5 border border-gray-800 shadow-2xl offer-slide-in">
            <button aria-label="Close" onClick={close} className="absolute top-2.5 right-2.5 text-gray-400 hover:text-white">✕</button>
            <div>
              <p className="uppercase tracking-widest text-[10px] text-gray-400 mb-1">Limited Time</p>
              <h3 className="text-xl font-extrabold mb-1">
                <span className="accent-text hero-emphasis-glow">Special Offer</span>
              </h3>
              <p className="text-gray-300 mb-3">
                Book today and get <span className="accent-text font-semibold">10% off</span> on Standard & Premium cleans.
              </p>
              <div className="flex gap-2">
                <a href="#pricing" onClick={close} className="px-4 py-2 rounded-full font-semibold text-black accent-bg hover:opacity-90 transition">View Pricing</a>
                <a href="#contact" onClick={close} className="px-4 py-2 rounded-full font-semibold accent-text accent-border border-2 hover:bg-white/5 transition">Claim</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLauncher && !open && (
        <button
          onClick={openFromLauncher}
          className="fixed right-6 bottom-6 z-[59] px-4 py-3 rounded-full font-semibold text-black accent-bg shadow-lg hover:shadow-xl transition"
        >
          Special Offer
        </button>
      )}
    </>
  )
}

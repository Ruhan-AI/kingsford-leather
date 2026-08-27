'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Configure GSAP defaults
    gsap.config({
      autoSleep: 60,
      nullTargetWarn: false,
    })
  }, [])

  return <>{children}</>
}

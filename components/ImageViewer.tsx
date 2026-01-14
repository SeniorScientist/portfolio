'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react'

type ImageViewerProps = {
  src: string
  onClose: () => void
}

export default function ImageViewer({ src, onClose }: ImageViewerProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isSpacePressed, setIsSpacePressed] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        setIsSpacePressed(true)
      }
      if (e.code === 'Escape') {
        onClose()
      }
      // Zoom with + and -
      if (e.code === 'Equal' || e.code === 'NumpadAdd') {
        setScale(s => Math.min(s + 0.25, 5))
      }
      if (e.code === 'Minus' || e.code === 'NumpadSubtract') {
        setScale(s => Math.max(s - 0.25, 0.25))
      }
      // Reset with 0
      if (e.code === 'Digit0') {
        setScale(1)
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false)
        setIsDragging(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [onClose])

  // Handle mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setScale(s => Math.min(Math.max(s + delta, 0.25), 5))
  }, [])

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isSpacePressed || e.button === 1) { // Space + left click or middle mouse button
      e.preventDefault()
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Get cursor style
  const getCursor = () => {
    if (isDragging) return 'grabbing'
    if (isSpacePressed) return 'grab'
    return 'default'
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/95 overflow-hidden"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: getCursor() }}
    >
      {/* Controls */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => setScale(s => Math.max(s - 0.25, 0.25))}
          className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
          title="Zoom Out (-)"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <span className="text-white text-sm font-medium min-w-[60px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={() => setScale(s => Math.min(s + 0.25, 5))}
          className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
          title="Zoom In (+)"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-white/30 mx-2" />
        <button
          onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }) }}
          className="px-3 py-1 hover:bg-white/10 rounded-full text-white text-sm transition-colors"
          title="Reset (0)"
        >
          Reset
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        title="Close (Esc)"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Help text */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 text-white/60 text-xs bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="flex items-center gap-1">
          <Move className="w-4 h-4" />
          Space + ドラッグで移動
        </span>
        <span>スクロールでズーム</span>
        <span>Escで閉じる</span>
      </div>

      {/* Image */}
      <div 
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <img
          src={src}
          alt="Diagram"
          className="max-w-none select-none"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
          draggable={false}
        />
      </div>
    </div>
  )
}

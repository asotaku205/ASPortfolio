import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type HlsVideoProps = {
  src: string
  className?: string
  flipped?: boolean
}

/**
 * Background video over HLS. Uses hls.js when supported, falls back to
 * native HLS (Safari) when the browser can play it directly.
 */
export default function HlsVideo({ src, className = '', flipped = false }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let hls: Hls | null = null
    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }
    return () => {
      hls?.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${flipped ? 'scale-y-[-1]' : ''} ${className}`}
    />
  )
}

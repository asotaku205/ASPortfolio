import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type HlsVideoProps = {
  src: string
  className?: string
  flipped?: boolean
  /**
   * Where the visible window sits inside the video frame. The video is
   * cropped with object-cover, so '50% 50%' centers it and a larger second
   * value (for example '50% 72%') shows more of the lower part of the frame.
   */
  position?: string
}

/**
 * Background video over HLS. Uses hls.js when supported, falls back to
 * native HLS (Safari) when the browser can play it directly.
 */
export default function HlsVideo({ src, className = '', flipped = false, position = '50% 50%' }: HlsVideoProps) {
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
      style={{ objectPosition: position }}
      className={`absolute inset-0 h-full w-full object-cover ${flipped ? 'scale-y-[-1]' : ''} ${className}`}
    />
  )
}

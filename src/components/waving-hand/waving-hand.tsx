import './style.css'

import { memo, useMemo, CSSProperties } from 'react'

import { positiveNumberSchema, romanize } from './lib'
import { FSP, MixedProps } from './type'

const WavingHand = ({
  size = '1rem',
  type = 3,
  motion = false,
  loop = 0,
  style,
  className,
  ...restAttributes
}: MixedProps) => {
  const computedStyle = useMemo<CSSProperties>(() => {
    const animationIterationCount = loop !== 0 && motion ? positiveNumberSchema(loop) : 'infinite'

    return {
      fontSize: size,
      ...(motion && { animationIterationCount }),
      ...style
    }
  }, [size, motion, loop, style])

  const computedClassName = useMemo<string>(
    () => [motion ? 'motion' : '', className].filter(Boolean).join(' '),
    [motion, className]
  )

  const content = useMemo<FSP>(() => FSP[romanize(type)], [type])

  return (
    <span style={computedStyle} className={computedClassName} {...restAttributes}>
      {content}
    </span>
  )
}

const MemoizedWavingHand = memo(WavingHand)
export { MemoizedWavingHand as WavingHand }

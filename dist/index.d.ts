import * as react from 'react';
import { HTMLAttributes } from 'react';

type NumericPhototype = 1 | 2 | 3 | 4 | 5 | 6;
interface Props {
    size?: string;
    type?: NumericPhototype;
    motion?: boolean;
    loop?: number;
}
type MixedProps = Props & HTMLAttributes<HTMLSpanElement>;

declare const MemoizedWavingHand: react.MemoExoticComponent<({ size, type, motion, loop, style, className, ...restAttributes }: MixedProps) => JSX.Element>;

export { MemoizedWavingHand as WavingHand };

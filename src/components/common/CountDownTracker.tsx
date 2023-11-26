"use client"

import React, { useState, useEffect, useRef } from 'react';
import ZeroFillFilter from '@/utils/zeroFillFilter';
import { TrackerProps } from '@/types';


export default function CountdownTracker({ property, time }: TrackerProps): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [previous, setPrevious] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleTime = (newValue: Record<string, any>): void => {
      if (newValue[property] === undefined) {
        setShow(false);
        return;
      }

      let val: number = newValue[property];
      setShow(true);
      val = val < 0 ? 0 : val;

      if (val !== current) {
        setPrevious(current);
        setCurrent(val);

        if (elementRef.current) {
          elementRef.current.classList.remove('flip');
          void elementRef.current.offsetWidth;
          elementRef.current.classList.add('flip');
        }
      }
    };

    time && handleTime(time);
  }, [current, previous, property, time]);

  return (
    <>
      <span ref={elementRef} className='timer'>
        <h6>{ZeroFillFilter(current)}</h6>
        <h6 data-value={ZeroFillFilter(current)}></h6>
        <h6 data-value={ZeroFillFilter(previous)}></h6>
        <h6 data-value={ZeroFillFilter(previous)}></h6>
      </span>
      <span className='colon font-black'>:</span>
    </>
  );
}
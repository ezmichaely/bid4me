"use client"

import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { CountdownTracker } from '@/components';
import { CountdownProps } from '@/types';


export default function Countdown({ dateStart, dateEnd }: CountdownProps): JSX.Element {
  const [time, setTime] = useState<Record<string, any>>({});
  const trackers: string[] = ['Days', 'Hours', 'Minutes', 'Seconds'];
  const frameRef = useRef<number | null>(null);
  let i: number = 0;
  let countdown: moment.Moment | undefined;

  useEffect(() => {
    return () => {
      setCountdown(dateEnd);
      update();
    };

  }, [dateEnd]);

  const setCountdown = (newDate: string): void => {
    if (newDate) {
      countdown = moment(newDate, 'YYYY-MM-DD HH:mm:ss');
    } else {
      countdown = moment().endOf('day');
    }
  };

  const update = (): void => {
    frameRef.current = requestAnimationFrame(update);
    if (++i % 10 !== 0) {
      return;
    }
    let t: moment.Moment = moment();

    if (countdown) {
      let diff: number = countdown.diff(t);
      setTime({
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / 1000 / 60) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
        Total: diff,
      });
    } else {
      setTime({
        Days: undefined,
        Hours: t.hours() % 13,
        Minutes: t.minutes(),
        Seconds: t.seconds(),
      });
    }
  };

  return (
    <div className="timerClock" data-date={dateStart} onClick={update}>
      {trackers.map((tracker) => (
        <CountdownTracker key={tracker} property={tracker} time={time} />
      ))}
    </div>
  );
}

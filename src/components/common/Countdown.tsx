"use client"

import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import '@/styles/countdown.css'

function ZeroFillFilter(value: number): string {
  return (value < 10 && value > -1 ? '0' : '') + value;
}

interface TrackerProps {
  property: string;
  time: Record<string, any>;
}

function Tracker({ property, time }: TrackerProps): JSX.Element {
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
    <span className="flip-clock__piece">
      <span ref={elementRef} className="flip-clock__card flip-card">
        <b className="flip-card__top">{ZeroFillFilter(current)}</b>
        <b className="flip-card__bottom" data-value={ZeroFillFilter(current)}></b>
        <b className="flip-card__back" data-value={ZeroFillFilter(previous)}></b>
        <b className="flip-card__back-bottom" data-value={ZeroFillFilter(previous)}></b>
      </span>
      <span className="flip-clock__slot">{property}</span>
    </span>
  );
}

interface CountdownProps {
  dateStart: string;
  dateEnd: string;
}

function Countdown({ dateStart, dateEnd }: CountdownProps): JSX.Element {
  const [time, setTime] = useState<Record<string, any>>({});
  const trackers: string[] = ['Days', 'Hours', 'Minutes', 'Seconds'];
  const frameRef = useRef<number | null>(null);
  let i: number = 0;
  let countdown: moment.Moment | undefined;

  useEffect(() => {
    if (window.requestAnimationFrame) {
      setCountdown(dateEnd);
      update();
    }

    return () => {
      if (window.cancelAnimationFrame && frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
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
    <div className="flip-clock" data-date={dateStart} onClick={update}>
      {trackers.map((tracker) => (
        <Tracker key={tracker} property={tracker} time={time} />
      ))}
    </div>
  );
}

export default Countdown;

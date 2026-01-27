"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform, useInView, motion } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  // useSpring rende il movimento più "organico"
  const springValue = useSpring(count, { stiffness: 60, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
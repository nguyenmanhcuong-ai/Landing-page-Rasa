"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const inView = () => {
      const rect = element.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    const reveal = () => setVisible(true);

    if (inView()) {
      reveal();
      return;
    }

    const onScroll = () => {
      if (!inView()) return;
      reveal();
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      },
      { threshold: 0 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

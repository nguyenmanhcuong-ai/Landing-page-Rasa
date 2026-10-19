"use client";

import { useState } from "react";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = { title, url: window.location.href };

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(data.url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }
    } catch {
      // Người dùng đóng bảng chia sẻ — không cần hiển thị lỗi.
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition active:bg-cream"
      aria-label={copied ? "Đã sao chép liên kết" : "Chia sẻ"}
      title={copied ? "Đã sao chép liên kết" : "Chia sẻ"}
    >
      {copied ? (
        <span className="text-lg" aria-hidden>
          ✓
        </span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
        </svg>
      )}
    </button>
  );
}

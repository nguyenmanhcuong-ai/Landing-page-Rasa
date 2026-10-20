"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { Vegetable } from "@/data/vegetables";
import VegetableCard from "./VegetableCard";

const ALL = "Tất cả";

const mobileCategories = [
  { label: "Tất cả 60+", value: ALL },
  { label: "Rau xanh", value: "Rau" },
  { label: "Nấm", value: "Nấm" },
  { label: "Củ quả", value: "Củ" },
];

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function searchableText(v: Vegetable) {
  return normalize(
    [v.name, v.scientificName, v.family, v.nutrients, ...(v.nutrientTags ?? []), v.suitableFor]
      .filter(Boolean)
      .join(" "),
  );
}

export default function VegetableExplorer({ items }: { items: Vegetable[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(ALL);
  const deferredQuery = useDeferredValue(query);

  const types = useMemo(() => {
    const set = new Set(items.map((v) => v.type).filter((t): t is string => Boolean(t)));
    return [ALL, ...set];
  }, [items]);

  const indexed = useMemo(() => items.map((v, i) => ({ v, i, text: searchableText(v) })), [items]);

  const results = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    return indexed.filter(({ v, text }) => (type === ALL || v.type === type) && (!q || text.includes(q)));
  }, [indexed, deferredQuery, type]);

  return (
    <div>
      <div className="mb-5 md:hidden">
        <h2 className="text-center font-serif text-2xl font-semibold text-forest">Danh mục thực phẩm</h2>
        <div
          className="mt-4 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Lọc theo nhóm thực phẩm"
        >
          {mobileCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              role="tab"
              aria-selected={type === category.value}
              onClick={() => setType(category.value)}
              className={`shrink-0 rounded-full px-4 py-3 text-sm font-medium transition ${
                type === category.value ? "bg-forest text-white" : "bg-[#e8ebdf] text-forest"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-md">
          <span className="sr-only">Tìm kiếm</span>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-forest/50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm rau, vitamin, công dụng…"
            className="w-full rounded-full border border-sand bg-white py-3 pl-12 pr-5 text-base text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          />
        </label>

        {types.length > 2 && (
          <div
            className="hidden gap-2 md:flex md:flex-wrap"
            role="tablist"
            aria-label="Lọc theo nhóm"
          >
            {types.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={type === t}
                onClick={() => setType(t)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  type === t
                    ? "bg-forest text-white"
                    : "border border-sand bg-white text-forest hover:border-forest"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4 flex items-end justify-between md:hidden">
        <h3 className="font-serif text-xl font-semibold text-forest">Các loại rau nấm</h3>
        <span className="text-sm text-forest/60">60+ thực phẩm</span>
      </div>

      {results.length ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {results.map(({ v, i }) => (
            <VegetableCard key={v.slug} veg={v} index={i} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-sand py-16 text-center text-forest/60">
          Không tìm thấy loại rau củ nấm phù hợp.
        </p>
      )}

      <button
        type="button"
        onClick={() => {
          setType(ALL);
          setQuery("");
        }}
        className="mt-4 flex w-full items-center justify-center rounded-xl border border-forest/25 bg-transparent px-5 py-4 font-semibold text-forest transition active:bg-white md:hidden"
      >
        Xem tất cả rau củ nấm <span className="ml-2">→</span>
      </button>
    </div>
  );
}

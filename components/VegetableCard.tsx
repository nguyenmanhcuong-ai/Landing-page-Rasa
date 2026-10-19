import Image from "next/image";
import Link from "next/link";
import type { Vegetable } from "@/data/vegetables";

export default function VegetableCard({ veg, index }: { veg: Vegetable; index: number }) {
  const hasContent = Boolean(veg.description || veg.benefits?.length);

  return (
    <Link
      href={`/rau/${veg.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 active:scale-[0.98] sm:rounded-2xl sm:border sm:border-sand/50 sm:hover:-translate-y-1 sm:hover:border-sand sm:hover:shadow-xl sm:hover:shadow-forest/10"
    >
      <div className="relative m-2 aspect-[4/3] overflow-hidden rounded-lg border border-sand/30 bg-cream sm:m-0 sm:rounded-none sm:border-0">
        {veg.images[0] && (
          <Image
            src={veg.images[0]}
            alt={veg.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={index < 4}
          />
        )}
        <span className="absolute left-2 top-2 hidden rounded-full bg-forest/90 px-2 py-0.5 font-serif text-[11px] text-white sm:left-3 sm:top-3 sm:block sm:px-2.5 sm:py-1 sm:text-xs">
          {String(index + 1).padStart(2, "0")}
        </span>
        {veg.type && (
          <span className="absolute right-2 top-2 hidden rounded-full bg-cream/95 px-2 py-0.5 text-[11px] font-medium text-forest sm:right-3 sm:top-3 sm:block sm:px-2.5 sm:py-1 sm:text-xs">
            {veg.type}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-3 pt-0 sm:p-5">
        <h3 className="font-serif text-[17px] font-semibold leading-snug text-forest sm:text-xl">{veg.name}</h3>
        {veg.scientificName && (
          <p className="mt-0.5 hidden line-clamp-2 text-xs italic text-forest/60 sm:block sm:text-sm">
            {veg.scientificName}
          </p>
        )}

        {veg.nutrientTags?.length ? (
          <>
            <p className="mt-1 truncate text-xs text-forest/60 sm:hidden">
              {veg.nutrientTags.slice(0, 2).join(" · ")}
            </p>
            <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
            {veg.nutrientTags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-sand bg-cream px-2.5 py-0.5 text-xs text-forest"
              >
                {tag}
              </li>
            ))}
            {veg.nutrientTags.length > 4 && (
              <li className="px-1 py-0.5 text-xs text-forest/60">+{veg.nutrientTags.length - 4}</li>
            )}
            </ul>
          </>
        ) : null}

        <span className="mt-auto pt-2 text-xs font-semibold text-forest sm:pt-5 sm:text-sm">
          {hasContent ? (
            <>
              Xem dinh dưỡng <span className="inline-block transition group-hover:translate-x-1">→</span>
            </>
          ) : (
            <span className="font-normal text-forest/50">Đang cập nhật</span>
          )}
        </span>
      </div>
    </Link>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CreativePost = {
  title: string;
  type: string;
  description: string;
  image: string;
};

type CreativePortfolioProps = {
  posts: CreativePost[];
};

export default function CreativePortfolio({ posts }: CreativePortfolioProps) {
  const [selectedPost, setSelectedPost] = useState<CreativePost | null>(null);

  useEffect(() => {
    if (!selectedPost) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  return (
    <>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-lg border border-[#15130F]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/5] bg-[#EAF2EE]">
              {post.image ? (
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  aria-label={`Preview ${post.title}`}
                  className="group/preview relative h-full w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F3B712]/70"
                >
                  <Image
                    src={post.image}
                    alt={`${post.title} portfolio piece`}
                    fill
                    sizes="(min-width: 1280px) 18rem, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-4 bottom-4 translate-y-2 rounded bg-[#15130F]/80 px-3 py-2 text-center text-sm font-bold text-white opacity-0 shadow-lg backdrop-blur transition group-hover/preview:translate-y-0 group-hover/preview:opacity-100 group-focus-visible/preview:translate-y-0 group-focus-visible/preview:opacity-100">
                    View larger
                  </span>
                </button>
              ) : (
                <div className="flex h-full flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FFF3BF] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#725500]">
                      {post.type}
                    </span>
                    <span className="text-sm font-black text-[#2F7D74]/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-5xl font-black leading-none text-[#2F7D74]/20 sm:text-6xl">
                      {post.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </p>
                    <div className="mt-5 h-2 w-20 rounded-full bg-[#F3B712]" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9A7200]">
                {post.type}
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#15130F]">
                {post.title}
              </h3>
              <p className="mt-4 leading-7 text-[#5C5548]">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {selectedPost ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#15130F]/85 px-4 py-6 backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="creative-preview-title"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-lg bg-[#FAF9F5] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#15130F]/10 px-4 py-3 sm:px-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7200]">
                  {selectedPost.type}
                </p>
                <h3
                  id="creative-preview-title"
                  className="mt-1 text-lg font-black text-[#15130F] sm:text-xl"
                >
                  {selectedPost.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#15130F]/15 bg-white text-2xl leading-none text-[#15130F] transition hover:border-[#15130F]/30"
              >
                &times;
              </button>
            </div>
            <div className="relative h-[72vh] min-h-[20rem] bg-[#11100D]">
              <Image
                src={selectedPost.image}
                alt={`${selectedPost.title} full preview`}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

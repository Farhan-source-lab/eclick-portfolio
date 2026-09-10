import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { teamData } from '../data/team';

export interface GalleryItem {
  id: number;
  title: string;
  role: string;
  department: string;
  url: string;
  description: string;
  tags: string[];
}

export const teamGalleryItems: GalleryItem[] = teamData.map((member, index) => ({
  id: index + 1,
  title: member.name,
  role: member.role,
  department: member.department,
  url: `/team/${member.id}.png`,
  description: member.bio || `${member.role} at Eclick Tech Solutions leading ${member.department}.`,
  tags: [member.department, 'Leadership Core'],
}));

const VISIBLE_ITEMS = teamGalleryItems;

function preloadImage(src: string): void {
  const img = new window.Image();
  img.src = src;
}

export function UnsplashGrid() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loadedIds, setLoadedIds] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((id: number) => {
    setLoadedIds((prev) => new Set(prev).add(id));
  }, []);

  return (
    <>
      <div className="container mx-auto sm:p-4 px-0">
        {/* Clean, perfectly aligned 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VISIBLE_ITEMS.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
              isLoaded={loadedIds.has(item.id)}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}

interface ImageItemProps {
  item: GalleryItem;
  index: number;
  setSelected: (item: GalleryItem | null) => void;
  isLoaded: boolean;
  onLoad: (id: number) => void;
}

function ImageItem({ item, setSelected, isLoaded, onLoad }: ImageItemProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [imgError, setImgError] = useState(false);

  const handleClick = useCallback(() => setSelected(item), [item, setSelected]);
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelected(item);
      }
    },
    [item, setSelected]
  );

  return (
    <motion.figure
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
      className="group w-full aspect-[3/4] rounded-2xl relative overflow-hidden bg-neutral-900 border border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-300 before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t before:from-black/90 before:from-5% before:to-transparent before:to-70% cursor-pointer z-10 flex flex-col justify-end"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {!isLoaded && !imgError && (
        <div className="w-full h-full bg-neutral-800 animate-pulse rounded-2xl" />
      )}
      {imgError ? (
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500 text-sm rounded-2xl">
          Failed to load
        </div>
      ) : (
        <motion.img
          layoutId={`card-${item.id}`}
          whileHover={{ scale: isLoaded ? 1.03 : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          src={item.url}
          alt={item.title}
          className={`w-full h-full object-cover object-center rounded-2xl cursor-pointer ${isLoaded ? 'block' : 'hidden'}`}
          onLoad={() => onLoad(item.id)}
          onError={() => setImgError(true)}
        />
      )}
      <div className="flex flex-col absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-100 opacity-90 sm:opacity-0 group-hover:translate-y-0 translate-y-1 transition-all duration-300 text-white z-20 pointer-events-none">
        <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
          {item.title}
        </h3>
        <span className="text-xs sm:text-sm font-medium text-neutral-200 drop-shadow-md">
          {item.role}
        </span>
      </div>
    </motion.figure>
  );
}

interface ModalProps {
  selected: GalleryItem | null;
  setSelected: (item: GalleryItem | null) => void;
}

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, y: 20 },
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  }),
};

function trapFocus(element: HTMLElement, event: KeyboardEvent) {
  const focusable = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function Modal({ selected, setSelected }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [[, direction], setSlideState] = useState<[number | null, number]>([null, 0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedIndex = selected ? VISIBLE_ITEMS.findIndex((i) => i.id === selected.id) : -1;

  const handleClose = useCallback(() => setSelected(null), [setSelected]);

  // Infinite loop navigation
  const navigate = useCallback(
    (delta: number) => {
      if (selectedIndex === -1) return;
      const total = VISIBLE_ITEMS.length;
      const nextIndex = (selectedIndex + delta + total) % total;

      setSlideState([VISIBLE_ITEMS[nextIndex].id, delta]);
      const next = VISIBLE_ITEMS[nextIndex];
      setSelected(next);

      const preloadNext = (nextIndex + 1) % total;
      const preloadPrev = (nextIndex - 1 + total) % total;
      preloadImage(VISIBLE_ITEMS[preloadNext].url);
      preloadImage(VISIBLE_ITEMS[preloadPrev].url);

      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [selectedIndex, setSelected]
  );

  const goNext = useCallback(() => navigate(1), [navigate]);
  const goPrev = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    if (selected) setSlideState([selected.id, 0]);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    document.body.classList.add('overflow-hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
      else if (event.key === 'ArrowRight') goNext();
      else if (event.key === 'ArrowLeft') goPrev();
      if (dialogRef.current) trapFocus(dialogRef.current, event);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected, handleClose, goNext, goPrev]);

  if (!selected) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 cursor-pointer overflow-y-auto flex items-center justify-center p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={selected.title}
        ref={dialogRef}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-${selected.id}`}
          className="w-full max-w-[700px] relative overflow-hidden my-auto cursor-default bg-[#000000] text-white rounded-3xl border border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
        >
          {/* Top Controls */}
          <div className="flex items-center justify-between absolute top-4 right-4 gap-2 z-30">
            <button
              className="p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-neutral-700/60 transition-all cursor-pointer shadow-lg active:scale-95"
              onClick={goPrev}
              aria-label="Previous member (loop)"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-neutral-700/60 transition-all cursor-pointer shadow-lg active:scale-95"
              onClick={goNext}
              aria-label="Next member (loop)"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              className="p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-neutral-700/60 transition-all cursor-pointer shadow-lg active:scale-95 ml-1"
              onClick={handleClose}
              aria-label="Close modal"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Image Container: Perfectly fits from top to bottom without harsh zoom */}
          <div
            className="relative w-full h-[52vh] sm:h-[58vh] bg-[#000000] overflow-hidden flex items-center justify-center p-2"
            ref={scrollRef}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={selected.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full flex items-center justify-center bg-[#000000]"
              >
                <img
                  alt={selected.title}
                  src={selected.url}
                  className="h-full w-auto max-w-full object-contain rounded-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Loop Counter Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 border border-neutral-800 text-white text-xs px-3.5 py-1 rounded-full font-mono shadow-md z-20">
              {selectedIndex + 1} / {VISIBLE_ITEMS.length}
            </div>
          </div>

          {/* Details Section: Pure black background with clean typography */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 sm:p-8 bg-[#000000] text-white border-t border-neutral-800/80"
          >
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <motion.h3 variants={itemVariants} className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {selected.title}
              </motion.h3>
              <span className="text-sm font-semibold text-blue-400 tracking-wide">
                {selected.role}
              </span>
            </div>

            <motion.div variants={itemVariants} className="flex gap-2 flex-wrap mb-4">
              {selected.tags?.map((tag: string) => (
                <span
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full font-medium"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
              {selected.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="Eclick Tech Solutions"
                  className="h-6 w-auto object-contain brightness-0 invert opacity-85"
                />
              </div>
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-medium tracking-wider uppercase transition-colors"
                href={selected.url}
                download={`${selected.title.toLowerCase().replace(/\s+/g, '-')}.png`}
              >
                <span>Download Photo</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UnsplashGrid;

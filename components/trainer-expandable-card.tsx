'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import React, { useEffect, useId, useRef, useState } from 'react';
import { sectionContainer, sectionItem } from '@/utils/animations';
import { CloseIcon } from '@/app/(home)/(routes)/_components/close-icon';

export function ExpandableTrainerCard({
  cards,
}: {
  cards: TrainerItemProps[];
}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0  grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className='w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white sm:rounded-3xl overflow-hidden'
            >
              <motion.div
                className='w-full grid place-items-center'
                layoutId={`image-${active.id}-${id}`}
              >
                <Image
                  priority
                  width={800}
                  height={600}
                  src={active.avatar}
                  alt={active.name}
                  className='w-fit h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-center'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className='font-medium text-neutral-700 text-base'
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className='text-neutral-600 text-base'
                    >
                      {active.title}
                    </motion.p>
                  </div>
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2 text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <motion.ul
        variants={sectionContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-6 sm:gap-8'
      >
        {cards.map((card, _) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={card.id}
            variants={sectionItem}
            onClick={() => setActive(card)}
            className='flex flex-col hover:bg-neutral-50 rounded-xl cursor-pointer'
          >
            <div className='flex gap-4 flex-col w-full'>
              <motion.div layoutId={`image-${card.id}-${id}`}>
                <Image
                  width={800}
                  height={600}
                  src={card.avatar}
                  alt={card.name}
                  className='h-[24rem] w-full rounded-lg object-cover object-center'
                />
              </motion.div>
              <div className='flex justify-center items-center flex-col'>
                <motion.h3
                  layoutId={`title-${card.id}-${id}`}
                  className='font-medium text-neutral-800 text-center md:text-left text-base'
                >
                  {card.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}-${id}`}
                  className='text-neutral-600 text-center md:text-left text-base'
                >
                  {card.title}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.ul>
    </>
  );
}

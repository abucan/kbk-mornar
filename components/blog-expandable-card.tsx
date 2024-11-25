'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import React, { useEffect, useId, useRef, useState } from 'react';
import { sectionContainer, sectionItem } from '@/utils/animations';
import { CloseIcon } from '@/app/(home)/(routes)/_components/close-icon';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Collapse } from 'react-collapse';

export function BlogExpandableCard({ cards }: { cards: BlogCardProps[] }) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  console.log(cards[0].full_picture);

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
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const [expandedCards, setExpandedCards] = useState<Map<string, boolean>>(
    new Map()
  );

  const MAX_LENGTH = 150;

  const toggleExpand = (cardId: string) => {
    setExpandedCards((prev) => {
      const newMap = new Map(prev);
      newMap.set(cardId, !newMap.get(cardId));
      return newMap;
    });
  };

  const isExpanded = (cardId: string) => {
    return expandedCards.get(cardId) || false;
  };

  const truncateText = (text: string, cardId: string) => {
    if (!text) return '';
    if (text.length <= MAX_LENGTH) return text;

    return isExpanded(cardId) ? text : `${text.slice(0, MAX_LENGTH)}...`;
  };

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand2 = (cardId: string) => {
    setExpanded(expanded === cardId ? null : cardId);
  };

  // write me a long message
  const msg =
    'Just finished reading an amazing book! Highly recommend The Alchemist by Paulo Coelho. Has anyone else read it? Just finished reading an amazing book! Highly recommend The Alchemist by Paulo Coelho. Has anyone else read it? Just finished reading an amazing book! Highly recommend The Alchemist by Paulo Coelho. Has anyone else read it? Just finished reading an amazing book! Highly recommend The Alchemist by Paulo Coelho. Has anyone else read it? Just finished reading an amazing book! Highly recommend The Alchemist by Paulo Coelho. Has anyone else read it?';

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
              className='w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={600}
                  src={active.full_picture}
                  unoptimized
                  alt={'facebook post image'}
                  className='w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className='space-y-4'>
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className='font-medium text-neutral-700 dark:text-neutral-200 text-base'
                    >
                      {'Title'}
                    </motion.h3>
                    <motion.div
                      layoutId={`description-${active.id}-${id}`}
                      className='max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2'
                    >
                      <p className='text-neutral-600 dark:text-neutral-400 text-base whitespace-pre-line'>
                        {active.message}
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className='pt-4 relative px-4'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                  ></motion.div>
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
        className='w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-4'
      >
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.id}-${id}`}
            key={card.id}
            variants={sectionItem}
            //  onClick={() => setActive(card)}
            // className='flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer'
          >
            <Card className='flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer'>
              <motion.div layoutId={`image-${card.id}-${id}`}>
                <CardHeader className='flex flex-row items-center gap-4'>
                  <Avatar>
                    {/*   <AvatarImage src={userAvatar} alt={userName} /> */}
                    <AvatarFallback>{'A'}</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{'ante'}</span>
                    <span className='text-sm text-muted-foreground'>
                      {'3d'}
                    </span>
                  </div>
                </CardHeader>
              </motion.div>
              <CardContent className='space-y-4'>
                <p>{truncateText(msg, card.id)}</p>
                {msg.length > MAX_LENGTH && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(card.id);
                    }}
                    className='text-blue-500 hover:underline text-sm'
                  >
                    {isExpanded(card.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
                {card.full_picture && (
                  <Image
                    width={800}
                    height={600}
                    src={card.full_picture}
                    unoptimized
                    alt={'facebook post image'}
                    className='h-60 w-full  rounded-lg object-cover object-top'
                  />
                )}
                <div className='flex justify-between text-sm text-muted-foreground'>
                  <span>{5} Likes</span>
                  <div className='space-x-2'>
                    <span>{10} Comments</span>
                    <span>{5} Shares</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.ul>
    </>
  );
}

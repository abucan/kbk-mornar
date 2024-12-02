"use client";
import Image from "next/image";
import { hr } from "date-fns/locale";
import { motion } from "framer-motion";
import facebook from "@/public/facebook.svg";
import { usePathname } from "next/navigation";
import { cx } from "class-variance-authority";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { sectionContainer, sectionItem } from "@/utils/animations";
import { FooterSocialButton } from "@/app/(home)/(routes)/_components/footer-social-button";

export function BlogExpandableCard() {
  const [expandedCards, setExpandedCards] = useState<Map<string, boolean>>(
    new Map()
  );

  const [data, setData] = useState<BlogCardProps[]>([]);
  const [error, setError] = useState(null);

  const ref = useRef(null);
  const pathname = usePathname();

  const toggleExpand = (cardId: string) => {
    setExpandedCards((prev) => {
      const newMap = new Map(prev);
      newMap.set(cardId, !newMap.get(cardId));
      return newMap;
    });
  };

  const formatRelativeTime = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: hr,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fb");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        if (pathname === "/") {
          setData(result?.data.slice(0, 3));
        } else {
          setData(result?.data);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.ul
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-6 sm:gap-8"
      >
        {data?.map((card: BlogCardProps, _: number) => (
          <motion.div variants={sectionItem} key={card.id}>
            <Card className="flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg min-h-[550px]">
              <div className="flex flex-row items-center justify-between pr-6">
                <div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={"/logo.svg"} alt={"kbk mornar logo"} />
                      <AvatarFallback>{"K"}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {"KBK Mornar Split"}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {formatRelativeTime(card?.created_time || "")}
                      </span>
                    </div>
                  </CardHeader>
                </div>
                <FooterSocialButton
                  src={facebook}
                  alt="Facebook"
                  href="https://www.facebook.com/kbkmornar"
                />
              </div>
              <CardContent className="space-y-4">
                <p
                  ref={ref}
                  className={cx(
                    "line-clamp-3 break-words",
                    expandedCards.get(card.id) && "line-clamp-none"
                  )}
                >
                  {card.message}
                </p>
                <span
                  className="font-bold text-[14px] cursor-pointer"
                  onClick={() => toggleExpand(card.id)}
                >
                  {expandedCards.get(card.id)
                    ? "Pročitaj manje"
                    : "Pročitaj više"}
                </span>
                <Image
                  width={800}
                  height={600}
                  src={card?.full_picture || "/placeholder.svg"}
                  unoptimized
                  alt={"facebook post image"}
                  className="h-60 w-full  rounded-lg object-cover object-center"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{card.likes?.summary.total_count} Likes</span>
                  <div className="space-x-2">
                    <span>{card.comments?.summary.total_count} Comments</span>
                    <span>{0} Shares</span>
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

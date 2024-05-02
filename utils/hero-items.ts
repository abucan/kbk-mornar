import {
  Aperture,
  Dumbbell,
  LucideIcon,
  Sun,
  Trophy,
} from 'lucide-react';

interface HeroItem {
  title: string;
  image: LucideIcon;
}

export const heroItems: HeroItem[] = [
  {
    title: 'Teretana',
    image: Dumbbell,
  },
  {
    title: 'Sauna',
    image: Sun,
  },
  {
    title: 'Masaže',
    image: Aperture,
  },
  {
    title: 'Privatni trenizi',
    image: Trophy,
  },
];

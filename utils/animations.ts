const heroContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.25,
      duration: 0.75,
    },
  },
};

const heroItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const trainerContainer = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.25,
      duration: 0.75,
    },
  },
};

const trainerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const buttonHover = {
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: '360deg',
    scale: 1.2,
    transition: {
      type: 'tween',
      duration: 0.45,
    },
  },
};

const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.75,
        delay: delay,
      },
    },
  };
};

export {
  heroContainer,
  heroItem,
  buttonHover,
  trainerContainer,
  trainerItem,
  fadeIn,
};

import { motion, AnimatePresence } from 'framer-motion';
import { TrainerItem, TrainerItemProps } from './trainer-item';
import { Dispatch, SetStateAction } from 'react';

interface AnimatedTrainersProps {
  selectedId: TrainerItemProps | null;
  setSelectedId: Dispatch<SetStateAction<TrainerItemProps | null>>;
}

export const AnimatedTrainers = ({
  selectedId,
  setSelectedId,
}: AnimatedTrainersProps) => {
  return (
    <AnimatePresence mode='wait'>
      {selectedId?.name && (
        <motion.button onClick={() => setSelectedId(null)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            layoutId={selectedId.title}
            className='w-[100vw] h-[100vh] fixed top-0 left-0 flex items-center justify-center z-50 bg-black/80 p-12 sm:p-0'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className='bg-white p-4 rounded-md shadow-lg top-0 left-0 right-0 w-full h-full relative'
            >
              <TrainerItem
                avatar={selectedId.avatar}
                name={selectedId.name}
                desc={selectedId.desc}
                title={selectedId.title}
                isDialog={true}
              />
            </motion.div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

import { motion, AnimatePresence } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { BlogCardDetails } from './blog-card-details';

interface BlogAnimatedProps {
  selectedId: any | null;
  setSelectedId: Dispatch<SetStateAction<any | null>>;
}

export const BlogAnimated = ({
  selectedId,
  setSelectedId,
}: BlogAnimatedProps) => {
  return (
    <AnimatePresence>
      {selectedId?.title && (
        <motion.button onClick={() => setSelectedId(null)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            layoutId={selectedId.title + '1'}
            className='fixed inset-0 flex items-center justify-center z-50 bg-black/80 p-12 sm:p-0'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className='max-w-4xl'
            >
              <BlogCardDetails
                title={selectedId.title}
                info={selectedId.info}
                image={selectedId.img}
              />
            </motion.div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

import { motion } from 'framer-motion';

export const hocTransition = (OurComponent) => {
    return () => (
        <>
            <OurComponent />
            <motion.div
                className="flip-up"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY:1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
                className="flip-out"
                initial={{ scaleY: -1 }}
                animate={{ scaleY: -0 }}
                exit={{ scaleY:0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </>
    )
}
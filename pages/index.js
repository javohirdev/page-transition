import Link from "next/link";
import styles from '../styles/Home.module.css'
import { hocTransition } from '../HOC/hocTransition';
import { motion } from 'framer-motion';

function Home() {
    const whileHover = { scale: 1.1 };
    const whileTap = { scale: 0.9 };

    return (
        <div className={styles.cards}>
            <Link href="/uzb">
                <motion.a className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
                    <img src="../uzbekistan.jpg" className={styles.cardsImage} />
                </motion.a>
            </Link>
            <Link href="/france">
                <motion.a className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
                    <img src="../france.jpg" className={styles.cardsImage} />
                </motion.a>
            </Link>
            <Link href="/japan">
                <motion.a className={styles.cardsLink} whileHover={whileHover} whileTap={whileTap}>
                    <img src="../japan.jpg" className={styles.cardsImage} />
                </motion.a>
            </Link>
        </div>
    )
}
export default hocTransition(Home);
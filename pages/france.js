import Link from "next/link";
import styles from '../styles/Home.module.css'
import { hocTransition } from '../HOC/hocTransition';
import { motion } from 'framer-motion';

function France() {
    return (
        <div className="content">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -50
                }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
            >
                <h1 className={styles.title}>France</h1>
            </motion.div>
            <div className={styles.contentArea}>
                <img src="/france.jpg" className={styles.image} />
                <div className={styles.aboutText}>
                    <p className={styles.texts}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className={styles.texts}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <Link href="/">
                    <a className={styles.pagination}>...Main menu</a>
                </Link>
                <Link href="/uzb">
                    <a className={styles.pagination}>Uzbekistan</a>
                </Link>
                <Link href="/japan">
                    <a className={styles.pagination}>Japan</a>
                </Link>
            </div>
        </div>
    )
}
export default hocTransition(France);
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SidebarLayout.module.css";

const SidebarLayout = () => {
    return (
        <div className={styles.container}>

            <nav className={styles.sidebar}>
                <header className={styles.header}>
                    <Link href="/">
                        <div style={{ paddingBottom: '20px' }}>
                            <Image
                                src="/assets/Layer_1.png"
                                alt="Logo"
                                width={61}
                                height={30}
                            />
                        </div>
                    </Link>
                </header>
                <hr style={{ paddingBottom: '20px' }}></hr>
                <div className={styles.menu}>
                    <div className={styles.menuItems}>
                        <ul className={styles.navLinksTop}>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/home1.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/folder.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/copy.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>


                        </ul>
                        <hr style={{ paddingBottom: '10px' }} />
                        <ul>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/add.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navLinksBottom}>
                        <ul>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/arrow.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/note.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/shieldCheck.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                            <li>
                                <Link href="/"> <Image
                                    src="/assets/icons/group.png"
                                    alt="Logo"
                                    width={48}
                                    height={32}
                                /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default SidebarLayout;
'use client'
import React, { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import styles from "./BottomNavBar.module.css";

const BottomNavBar = () => {
    const [showVerticalBar, setShowVerticalBar] = useState(false);
    const [iconImage, setIconImage] = useState("/assets/icons/more.png");
    const router = useRouter();
    const handleLogout = () => {
        Cookies.set("loggedin", "false");
        router.push("/");
        window.location.reload();
    }

    const toggleVerticalBar = () => {
        setShowVerticalBar(!showVerticalBar);
        if (showVerticalBar) {
            setIconImage("/assets/icons/more.png");
        } else {
            setIconImage("/assets/icons/close.png");
        }
    };

    return (
        <div className={styles.bottomNavBar}>
            <div className={styles.horizontalBar}>
                <ul className={styles.horizontalIcons}>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/home1.png"
                                alt="Icon 1"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/folder.png"
                                alt="Icon 2"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/copy.png"
                                alt="Icon 3"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src="/assets/icons/add.png"
                                alt="Icon 4"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li onClick={toggleVerticalBar} className={styles.toggleMenu}>
                        <Image
                            src={iconImage}
                            alt="Icon 5"
                            width={15}
                            height={20}
                        />
                    </li>
                </ul>
                {showVerticalBar && (
                    <div className={styles.verticalBar}>
                        <ul className={styles.verticalIcons}>
                            <li>
                                <Link href="/">
                                    <Image
                                        src="/assets/icons/arrow.png"
                                        alt="Icon 1"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image
                                        src="/assets/icons/note.png"
                                        alt="Icon 2"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image
                                        src="/assets/icons/shieldCheck.png"
                                        alt="Icon 3"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <Image
                                        src="/assets/icons/group.png"
                                        alt="Icon 4"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li onClick={handleLogout}>
                                <Link href="/" onClick={handleLogout}> <Image
                                    src="/assets/icons/logout.png"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    onClick={handleLogout}
                                /></Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BottomNavBar;

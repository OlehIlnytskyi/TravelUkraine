import Link from 'next/link'
import React from 'react'
import s from '../MainLayout/MainLayout.module.css'

import fb from '../../public/socials/facebook.svg'
import insta from '../../public/socials/insta.svg'
import telegram from '../../public/socials/telegram.svg'
import twitter from '../../public/socials/twitter.svg'
import Image from 'next/image';

export default function MainLayout({ children }) {

    function getCurrentDate(separator = '/') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }

    return (
        <div className={s.wrapper}>

            <nav className={s.customNav}>
                <Link href={'/'}><a>Мандри Україною</a></Link>

                <div className={s.lastPartHeader}>
                    <Link href={'/journeys'}><a>Подорожі</a></Link>
                    <Link href={'/about'}><a>Про нас</a></Link>
                </div>
            </nav>

            <main className={s.customMain}>
                {children}
            </main>

            <footer>
                <div className={s.footer}>

                    <div className={s.social}>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={fb}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={insta}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={telegram}
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <div className={s.wrapperLogo}>
                                    <Image
                                        src={twitter}
                                    />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <p className={s.dated}>
                        Дата створення: {getCurrentDate()}
                    </p>

                </div>
            </footer>

        </div>
    )
}

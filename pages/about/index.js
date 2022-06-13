import React from 'react'
import Head from 'next/head';
import MainLayout from '../../components/MainLayout/MainLayout';

import s from '../../components/MainLayout/MainLayout.module.css';
import Image from 'next/image';
import Link from 'next/link';

import lpnu from '../../public/socials/lpnu.jpg'

export default function About() {

    return <MainLayout>
        <Head>
            <title>
                Про нас
            </title>
        </Head>

        <div className={s.aboutPageWrap}>
            <h1 className={s.createdBy}>
                Курсова робота КН-203
                <br />
                Автор Олег Ільницький
            </h1>

            <p className={s.authorText}>Проект реалізовано у співпраці з <span className={s.authorTextSpan}> Lviv Polytechnic</span> в рамках курсової роботи на тему <span className={s.authorTextSpan}>«Мандрівки Україною»</span>
                <br />
                <br />
                Використання матеріалів сайту і копіювання інформації без письмового дозволу автора заборонено.
                <br />
                <br />
                <span className={s.cursiveText}>
                    Нам пощастило жити у дуже гарній країні: в Україні є дуже багато місць, якими можна пишатися. Милуватися красотами нашої природи можна безкінечно. Заповідник Асканія-Нова і Карпати, кримські гори та приазовські степи, величний Дніпро та Дністер, густі ліси... І не перелічити місць, які неодмінно слід відвідати.
                    <br />
                    <br />
                    Україна - це країна з багатою історією, тож не дивним є розмаїття як
                    природних, так і рукотворних пам’яток: високі гори і просторі степи,
                    затишні містечка і гучні мегаполіси, суворі твердині і розкішні палаци.
                    Україна - край, де пам’яток стільки, що вистачить не на один рік
                    мандрівок.
                    <br />
                    <br />
                    Тож серед сотні чудес України для кожного читача знайдеться своє, що
                    вразить уяву і навіть стане метою нової подорожі.
                    <br />
                    <br />
                </span>
                <span className={s.bigText}>Подорожуйте Україною - їй
                    <br />
                    безумовно є чим пишатися!</span>
            </p>

            <div className={s.lpnuWrapper}>
                <Link href="https://lpnu.ua/">
                    <a>
                        <div className={s.wrapperLogoLpnu}>
                            <Image
                                src={lpnu}
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </div>


    </MainLayout >
}

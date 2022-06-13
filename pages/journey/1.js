import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import data from '../../db'
import Head from 'next/head';

export default function Item() {

    return (
        <MainLayout>

            <Head>
                <title>
                    {data.items[0].name}
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Детальний опис туру</h1>
                    <Link href={'/journeys'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>
                    <img className={s.imgTour} src={data.items[0].imageUrl} alt={data.items[0].name} />

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>
                            <h2>{data.items[0].name}</h2>
                            <p>{data.items[0].info}</p>
                            <p><span className={s.spanTour}>План туру: </span>{data.items[0].plan}</p>
                            <p><span className={s.spanTour}>Менеджер: </span>{data.items[0].contacts}</p>
                            <p><span className={s.spanTour}>Харчування: </span>{data.items[0].eating}</p>
                            <p><span className={s.spanTour}>Ціна: </span>{data.items[0].price}</p>
                            <p><span className={s.spanTour}>К-сть квитків: </span>{data.items[0].count}</p>

                            <div className={s.generalInfo}>
                                <p>У вартість ВХОДЯТЬ: проїзд комфортабельним автобусом, супровід гіда-екскурсовода, екскурсійне обслуговування в туристичних об’єктах, страхування на час подорожі.
                                    <br />
                                    У вартість НЕ ВХОДЯТЬ: вхідні квитки в туристичні об’єкти та харчування.
                                    <br />
                                    Знижки для дітей:
                                    <br />
                                    - Дітям до 6 років (включно), при супроводі 2-х дорослих і без окремого місця в автобусі –безкоштовно;
                                    <br />
                                    - Дітям до 12 років (включно) знижка від загальної вартості туру – 50 грн./особа.
                                    <br />
                                    Вартість вхідних квитків:
                                    <br />
                                    - водоспад Кам’янка і Мертве озеро: загальний, пенсійний, студентський – 15 грн., школярі – 7 грн.;
                                    <br />
                                    - наскельна фортеця «Тустань» та музей Тустані: загальний – 80 грн., студенти, школярі, пенсіонери – 40 грн.;
                                    <br />
                                    - підйом канатно-крісельною дорогою “Буковиця”: загальний, студентський, учнівський - 100 грн., пенсіонери, учасники АТО, діти до 12 р. - 80 грн.; діти до 6 р. - безкоштовно.</p>
                            </div>
                        </div>

                        <div className={s.comments}>

                            <h2>Коментарі:</h2>

                            {data.items[0].comments.map(comment => (
                                <li key={comment.id}>
                                    <p className={s.idGen}><span className={s.idComment}>{comment.id}. </span>{comment.author}</p>
                                    <p className={s.descComment}>{comment.description}</p>
                                    <p className={s.dateComment}>{comment.date}</p>
                                </li>
                            ))}

                        </div>

                        <div className={s.addComments}>

                            <form action="/" method="post" role="form" className={s.emailForm}>
                                <div className={s.row}>
                                    <div className={s.nameInput}>
                                        <input type="text" name="name" className={s.formControl} id="name" placeholder="Ім'я" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.emailInput}>
                                        <input type="email" className={s.formControl} name="email" id="email" placeholder="Пошта"
                                            data-rule="email" data-msg="Please enter a valid email" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.phoneInput}>
                                        <input type="text" className={s.formControl} name="phone" id="phone" placeholder="Телефон"
                                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.dateInput}>
                                        <input type="text" name="date" className={s.formControl} id="date" placeholder="Дата" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.timeInput}>
                                        <input type="text" className={s.formControl} name="time" id="time" placeholder="Час" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                    <div className={s.countPeople}>
                                        <input type="number" className={s.formControl} name="people" id="people" placeholder="К-сть людей"
                                            data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                </div>
                                <div className={s.formControl}>
                                    <textarea className={s.formControl} name="message" rows="5" placeholder="Коментар"></textarea>
                                    <div className={s.validate}></div>
                                </div>
                                <div className={s.textCenter}><button type="submit">Залишити коментар!</button></div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </MainLayout>
    )
}
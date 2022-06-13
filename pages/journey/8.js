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
                    {data.items[7].name}
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
                    <img className={s.imgTour} src={data.items[7].imageUrl} alt={data.items[7].name} />

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>

                            <h2>{data.items[7].name}</h2>
                            <p>{data.items[7].info}</p>
                            <p><span className={s.spanTour}>План туру: </span>{data.items[7].plan}</p>
                            <p><span className={s.spanTour}>Менеджер: </span>{data.items[7].contacts}</p>
                            <p><span className={s.spanTour}>Харчування: </span>{data.items[7].eating}</p>
                            <p><span className={s.spanTour}>Ціна: </span>{data.items[7].price}</p>
                            <p><span className={s.spanTour}>К-сть квитків: </span>{data.items[7].count}</p>

                            <div className={s.generalInfo}>
                                Технічна інформація про пішохідний перехід на гору Путище:
                                <br />
                                1. Довжина маршруту на вершину г. Путище (Захар) приблизно 6 км в обидві сторони, перепад висот 315 метрів.
                                <br />
                                2. Сходження на гору триває орієнтовно 2 години, спуск приблизно 1,5-2 годин.
                                <br />
                                3. Підйом на гору Путище є не важким, тому підходить всім фізично здоровим людям, особливо початківцям, сім’ям з дітьми та літнім людям. Участь у поході на гору Путище не вимагає попередньої підготовки чи досвіду.
                                <br />
                                4. Під час сходження і спуску категорично забороняється вживання алкоголю.
                                <br />
                                5. Пішохідний маршрут є не обов’язковим, ті хто не бажає брати в ньому участь можуть прогулятися частиною маршруту або селом Тухля.
                                <br />
                                6. Для пішохідного переходу просимо взяти зручне взуття та одяг.
                                <br />
                                <br />
                                У вартість ВХОДИТЬ: проїзд комфортабельним автобусом, супровід гіда-екскурсовода, екскурсійне обслуговування в туристичних об’єктах, страхування на час подорожі.
                                <br />
                                <br />
                                У вартість НЕ ВХОДЯТЬ: вхідні квитки в туристичні об’єкти та харчування.
                                <br />
                                <br />
                                Вартість вхідних квитків:
                                <br />
                                - козяча ферма двох Катерин (екскурсія та дегустація 6-7 видів сирів, чай, вино, молоко): для всіх – 150 грн.;
                                <br />
                                - SPA-центр у “Двір княжої корони” (за 2 години): загальний, пенсійний, студентський – 400 грн., діти (7-14 р.) – 175 грн.;
                                <br />
                                - Славське чани (за 1,5 год.): загальний, пенсійний, студентський, учнівський - 195 грн.
                            </div>
                        </div>

                        <div className={s.comments}>

                            <h2>Коментарі:</h2>

                            {data.items[7].comments.map(comment => (
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
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
                    {data.items[3].name}
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
                    <img className={s.imgTour} src={data.items[3].imageUrl} alt={data.items[3].name} />

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>

                            <h2>{data.items[3].name}</h2>
                            <p>{data.items[3].info}</p>
                            <p><span className={s.spanTour}>1 день: </span>{data.items[3].plan1}</p>
                            <p><span className={s.spanTour}>2 день: </span>{data.items[3].plan2}</p>
                            <p><span className={s.spanTour}>3 день: </span>{data.items[3].plan3}</p>
                            <p><span className={s.spanTour}>Менеджер: </span>{data.items[3].contacts}</p>
                            <p><span className={s.spanTour}>Харчування 1 день: </span>{data.items[3].eating1}</p>
                            <p><span className={s.spanTour}>Харчування 2 день: </span>{data.items[3].eating1}</p>
                            <p><span className={s.spanTour}>Харчування 3 день: </span>{data.items[3].eating1}</p>
                            <p><span className={s.spanTour}>Ціна: </span>{data.items[3].price}</p>
                            <p><span className={s.spanTour}>К-сть квитків: </span>{data.items[3].count}</p>

                            <div className={s.generalInfo}>
                                <p>
                                    У вартість НЕ ВХОДЯТЬ і додатково оплачуються: вхідні квитки в туристичні об’єкти, харчування, дегустації вина.
                                    <br />
                                    <br />
                                    Знижки для дітей:
                                    <br />
                                    - Дітям до 6 років (включно), при супроводі 2-х дорослих і без окремого місця в автобусі та при проживанні - безкоштовно;
                                    <br />
                                    - Дітям до 12 років (включно) знижка від загальної вартості туру 150 грн./особа.
                                    <br />
                                    <br />
                                    Вартість вхідних квитків:
                                    <br />
                                    - палац Шенборна: дорослий, пенсійний, студентський - 20 грн., школярі - 15 грн.;
                                    <br />
                                    - новий термальний басейн “Жайворонок” у Берегові (2 години): загальний, пенсіонери, студенти – 220 грн., діти від 120 до 150 см. – 110 грн., діти до 120 см. – безкоштовно, оренда шафки – 30 грн.;
                                    <br />
                                    - дегустація вин: 60 грн., екскурсія без споживання вина – 30 грн.;
                                    <br />
                                    - відвідання веселого ресторану “Деца у нотаря”: загальний – 5 грн., діти до 120 см. – безкоштовно;
                                    <br />
                                    - Ужгородський замок: загальний (дорослі, пенсіонери) - 100 грн., студенти - 75 грн., учні - 40 грн.;
                                    <br />
                                    - купання в чанах з водою с. Лумшори: 140 грн./особа, діти до 12 років – 90 грн./особа;
                                    <br />
                                    - дегустація сиру: загальний – 75 грн.;
                                    <br />
                                    - озеро “Синевир”: загальний, пенсійний – 30 грн, студенти і школярі – 15 грн.
                                </p>
                            </div>
                        </div>

                        <div className={s.comments}>

                            <h2>Коментарі:</h2>

                            {data.items[3].comments.map(comment => (
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
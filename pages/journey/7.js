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
                    {data.items[6].name}
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
                    <img className={s.imgTour} src={data.items[6].imageUrl} alt={data.items[6].name} />

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>

                            <h2>{data.items[6].name}</h2>
                            <p>{data.items[6].info}</p>
                            <p><span className={s.spanTour}>План туру: </span>{data.items[6].plan}</p>
                            <p><span className={s.spanTour}>Менеджер: </span>{data.items[6].contacts}</p>
                            <p><span className={s.spanTour}>Харчування: </span>{data.items[6].eating}</p>
                            <p><span className={s.spanTour}>Ціна: </span>{data.items[6].price}</p>
                            <p><span className={s.spanTour}>К-сть квитків: </span>{data.items[6].count}</p>

                            <div className={s.generalInfo}>
                                Технічна інформація:
                                <br />
                                1. Довжина маршруту на вершину г. Парашка приблизно 19 км в обидві сторони, перепад висот 815 метрів.
                                <br />
                                2. Сходження на гору триває орієнтовно 4-5 години, спуск приблизно 3-4 годин.
                                <br />
                                3. Гора Парашка маршрут розрахований на середньостатистичну групу фізично здорових людей;
                                <br />
                                4. Участь у поході на гору Парашка не вимагає попередньої підготовки чи досвіду;
                                <br />
                                5. Похід на гору Парашка є середньої складності і не вимагає попередньої підготовки чи досвіду, але тим, хто сумнівається у власних силах, радимо починати з легших маршрутів (наприклад, підйом на гори Пікуй, Боржава, Камула, Маківка, Путище, Львівські гори)
                                <br />
                                6. Під час сходження і спуску категорично забороняється вживання алкоголю.
                                <br />
                                <br />
                                Що взяти з собою у тур на гору Парашку:
                                <br />
                                - документ, що засвідчує вашу особу (паспорт);
                                <br />
                                - зручне водонепроникне взуття (бажано гірські трекінгові черевики з високим шнуруванням та протектором типу вібрам);
                                <br />
                                - куртка вітрозахисна з капюшоном, бажано водонепроникна, штани вітрозахисні, такі, що не утруднюють рух, светр теплий або куртка типу полар, головний убір (капелюх, бандана), дощовик;
                                <br />
                                - запасний комплект одягу (можна буде залишити в автобусі);
                                <br />
                                - наплечник (р’юкзак);
                                <br />
                                - вода (1-1,5 літра на особу);
                                <br />
                                - їжу для перекусів під час походу в гори (канапки, шоколад, термос з гарячим чаєм чи кавою);
                                <br />
                                - необхідні ліки (індивідуальна аптечка), якими Ви користуєтесь, лейкопластир.
                            </div>
                        </div>

                        <div className={s.comments}>

                            <h2>Коментарі:</h2>

                            {data.items[6].comments.map(comment => (
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
import React from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../styles/Items.module.css'

import data from '../db'

export default function Items() {

    return <MainLayout>
        <Head>
            <title>
                Подорожі
            </title>
        </Head>
        <h1 className={s.textJourney}>Обери свою подорож Україною!</h1>

        <ul className={s.customUl}>

            <Link href={`/journey/1`}>

                <li key={data.items[0].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/1`}>
                            <img className={s.customImage} src={data.items[0].imageUrl} alt={data.items[0].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[0].id}`}>
                            <a className={s.customName}>{data.items[0].name}</a>
                        </Link>
                        <p>{data.items[0].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[0].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[0].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[0].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/2`}>

                <li key={data.items[1].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/2`}>
                            <img className={s.customImage} src={data.items[1].imageUrl} alt={data.items[1].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[1].id}`}>
                            <a className={s.customName}>{data.items[1].name}</a>
                        </Link>
                        <p>{data.items[1].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[1].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[1].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[1].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/3`}>

                <li key={data.items[2].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/3`}>
                            <img className={s.customImage} src={data.items[2].imageUrl} alt={data.items[2].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[2].id}`}>
                            <a className={s.customName}>{data.items[2].name}</a>
                        </Link>
                        <p>{data.items[2].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[2].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[2].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[2].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/4`}>

                <li key={data.items[3].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/4`}>
                            <img className={s.customImage} src={data.items[3].imageUrl} alt={data.items[3].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[3].id}`}>
                            <a className={s.customName}>{data.items[3].name}</a>
                        </Link>
                        <p>{data.items[3].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[3].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[3].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[3].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/5`}>

                <li key={data.items[4].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/5`}>
                            <img className={s.customImage} src={data.items[4].imageUrl} alt={data.items[4].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[4].id}`}>
                            <a className={s.customName}>{data.items[4].name}</a>
                        </Link>
                        <p>{data.items[4].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[4].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[4].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[4].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/6`}>

                <li key={data.items[5].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/6`}>
                            <img className={s.customImage} src={data.items[5].imageUrl} alt={data.items[5].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[5].id}`}>
                            <a className={s.customName}>{data.items[5].name}</a>
                        </Link>
                        <p>{data.items[5].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[5].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[5].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[5].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/7`}>

                <li key={data.items[6].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/7`}>
                            <img className={s.customImage} src={data.items[6].imageUrl} alt={data.items[6].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[6].id}`}>
                            <a className={s.customName}>{data.items[6].name}</a>
                        </Link>
                        <p>{data.items[6].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[6].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[6].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[6].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

            <Link href={`/journey/8`}>

                <li key={data.items[7].id}>

                    <div className={s.imageBlock}>
                        <Link href={`/journey/8`}>
                            <img className={s.customImage} src={data.items[7].imageUrl} alt={data.items[7].name} />
                        </Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Link href={`/journey/${data.items[7].id}`}>
                            <a className={s.customName}>{data.items[7].name}</a>
                        </Link>
                        <p>{data.items[7].info}</p>

                        <div className={s.dateTimePriceBlock}>

                            <div className={s.firstPart}>
                                <div className={s.dateTour}>{data.items[7].date}</div>
                                <div className={s.timeTour}>
                                    <p className={s.timeTourText}>Тривалість: </p>
                                    <p className={s.timeTourTextData}>{data.items[7].time}</p>
                                </div>
                            </div>

                            <div className={s.priceTour}>{data.items[7].price}</div>

                        </div>

                    </div>

                </li>
            </Link>

        </ul>

    </MainLayout>
}
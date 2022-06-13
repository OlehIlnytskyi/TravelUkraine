import Head from 'next/head'

import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout';
import s from '../components/MainLayout/MainLayout.module.css';
import Slider from '../components/Slider/Slider';
import Accordion from '../components/Accordion/Accordion';

import Image from 'next/image';
import Link from 'next/link'

import chef1 from '../public/chefs/chefs-1.jpg'
import chef2 from '../public/chefs/chefs-2.jpg'
import chef3 from '../public/chefs/chefs-3.jpg'

import fb from '../public/socials/facebook.svg'
import insta from '../public/socials/insta.svg'
import telegram from '../public/socials/telegram.svg'
import twitter from '../public/socials/twitter.svg'

export default function index() {
  return <MainLayout className={s.container}>
    <Head>
      <title>
        Головна
      </title>
    </Head>

    <div className={s.textIndex}>
      <p className={s.textFirst}> <span>Подорож по Україні</span> – це краса гір і морів, мальовничі пейзажі, замки і фортеці, казкові міста і селища. Це вся Україна і її заповідні куточки, красиві парки і заповідники, туристичні пам’ятки та цікаві місця.</p>
    </div>

    <div className={s.container} style={{
      backgroundImage: "url(" + "https://discover.ua/images/bg-about-project.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '450px'
    }}>
      <div className={s.containerContent}>
        <h1 className={s.hello}>Мандруй!</h1>
        <p className={s.clickJourney}>Незабутня подорож Україною починається тут!</p>
      </div>
    </div>

    <div className={s.textIndex}>
      <p className={s.textSecond}><span>Тури по Україні</span> – це можливість отримати незабутні враження на все життя, доступне і незабутнє задоволення. Це приємне проведення часу, неповторні емоції і дотик до невичерпної української культури. Це подорожі і пригоди, які не можуть набриднути. Тури по Україні – це екскурсії по музеях, палацах, замках і фортецях, відвідування пам’яток ландшафтно-паркового мистецтва та історичні пам’ятки. Це улюблені старі і відкриті нові території, відмінне проведення часу і досвід для нових поїздок. Це відмінний спосіб добре відпочити, але при цьому витратити мінімум коштів. Це доступно, цікаво і просто!</p>
    </div>

    <Slider />

    <div className={s.textIndex}>
      <p className={s.textThird}><span>Наші тури Україною</span> – це і спокійний сімейний відпочинок на березі моря, і активні вело- і турпоходи. Тури по Україні – це не тільки популярні туристичні маршрути і відвідування таких міст, як Київ, Львів та Одеса, а й інші цікаві місця, куди туристів приїжджає не дуже багато, але подивитися там дійсно є на що. Але головне надбання, яке Ви отримаєте в наших турах – це хороші люди і все, що їх оточує – життя і побут, все що доведе Вам, що наша країна унікальна і безумовно прекрасна!</p>
    </div>

    <div className={s.accordionGroup}>
      <Accordion
        title="🚗  Куди поїхати в Україні на вихідні?"
        content="На моєму сайті ви знайдете сотні популярних і, навпаки, мало вивчених локацій і маршрутів для подорожі на вихідні. Усе, що вам потрібно, це натиснути на вкладку Подорожі.</br>Хочете дізнатися більше, заручившись підтримкою та знаннями гіда,</br>дзвоніть нам на номер +380 (97) 767 09 66"
      />
      <Accordion
        title="🏰  ТОП пам'яток України"
        content="Острів Хортиця, Кам'янець-Подільська фортеця, Підгорецький замок, озеро Синевир, Актовський каньйон, водоспад Шипіт, Софійський собор — це лише мала частина українських пам'яток!"
      />
      <Accordion
        title="🏖  Де відпочити в Україні?"
        content="Це питання передбачає тисячу гідних відповідей. Щоб не розгубитися в нескінченному списку найцікавіших локацій на сайті, скористайтеся вкладкою Подорожі. Назва говорить сама за себе."
      />
      <Accordion
        title="😍  Найкрасивіші місця України"
        content="Україна сповнена локаціями, вражаючими своєю красою. У кожній області знайдеться озеро, замок, печера, дендропарк або захоплюючий краєвид. На моєму сайті ви знайдете найкрасивіші місця."
      />
    </div>


    <section id="chefs" className={s.chefs} style={{
      backgroundImage: "url(" + "https://emerging-europe.com/wp-content/uploads/2019/07/svidovetsridge-990x556.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className={s.container}>

        <div className={s.sectionTitle}>
          <h2 className={s.textBarbersFirst}>Наші професійні <span>Інструктори</span></h2>
          <p className={s.textBarbers}>Ми презентуємо команду наших інстуркторів-професіоналів!</p>
        </div>

        <div className={s.row}>

          <div className={s.firstInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef1}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Олександр Мороз</h4>
                <span>Засновник туристичного клубу «Маршрут», туризмом займається з 2007 року.</span>
                <div className={s.social}>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={twitter}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
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
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={insta}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={telegram}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={s.secondInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef2}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Ірина Римаренко</h4>
                <span>Засновник туристичного клубу «Маршрут», туризмом займається з 2002 року.</span>
                <div className={s.social}>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={twitter}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
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
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={insta}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={telegram}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div >
            </div >
          </div >

          <div className={s.thirdInstructor}>
            <div className={s.member}>
              <div className={s.pic}>
                <Image
                  src={chef3}
                />
              </div>
              <div className={s.memberInfo}>
                <h4>Анатолій Козаченко</h4>
                <span>Відмінний організатор і душа компанії, який спокійно і впевнено проведе вас по маршруту.</span>
                <div className={s.social}>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={twitter}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
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
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={insta}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className={s.wrapperLogoIn}>
                        <Image
                          src={telegram}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div >
            </div >
          </div >

        </div >

      </div >
    </section >



  </MainLayout >

}
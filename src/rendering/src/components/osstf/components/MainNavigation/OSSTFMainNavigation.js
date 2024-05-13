/* eslint-disable */
import React from 'react'
import { Container, Link, Text, Image } from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const MainNavigation = (props) => {
  return (
    <Container
      tag="nav"
      className={` ${styles['main-navigation']} ${
        styles[props.rootClassName]
      } `}
    >
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <Link
            href={props.fields.href}
            text={props.fields.text}
            className={styles['a']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_0_lbLinkWithoutPadlock_0"
              text={props.fields.text1}
              className={styles['span']}
            />
          </Link>
          <ul className={styles['ul1']}>
            <li className={styles['li01']}>
              <Link
                href={props.fields.href1}
                text={props.fields.text2}
                className={styles['a01']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text3}
                  className={styles['span01']}
                />
              </Link>
            </li>
            <li className={styles['li02']}>
              <Link
                href={props.fields.href2}
                text={props.fields.text4}
                className={styles['a02']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text5}
                  className={styles['span02']}
                />
              </Link>
            </li>
            <li className={styles['li03']}>
              <Link
                href={props.fields.href3}
                text={props.fields.text6}
                className={styles['a03']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text7}
                  className={styles['span03']}
                />
              </Link>
            </li>
            <li className={styles['li04']}>
              <Link
                href={props.fields.href4}
                text={props.fields.text8}
                className={styles['a04']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_3_lbLinkWithoutPadlock_3"
                  text={props.fields.text9}
                  className={styles['span04']}
                />
              </Link>
            </li>
            <li className={styles['li05']}>
              <Link
                href={props.fields.href5}
                text={props.fields.text10}
                className={styles['a05']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_4_lbLinkWithoutPadlock_4"
                  text={props.fields.text11}
                  className={styles['span05']}
                />
              </Link>
            </li>
            <li className={styles['li06']}>
              <Link
                href={props.fields.href6}
                text={props.fields.text12}
                className={styles['a06']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_5_lbLinkWithoutPadlock_5"
                  text={props.fields.text13}
                  className={styles['span06']}
                />
              </Link>
            </li>
            <li className={styles['li07']}>
              <Link
                href={props.fields.href7}
                text={props.fields.text14}
                className={styles['a07']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_6_lblinkWithPadlock_6"
                  className={styles['span07']}
                >
                  <Text text={props.fields.text15} />
                  <Image
                    src={props.fields.src}
                    id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_6_imgPadlock_6"
                    alt={props.fields.alt}
                    className={styles['img']}
                  />
                </span>
              </Link>
            </li>
            <li className={styles['li08']}>
              <Link
                href={props.fields.href8}
                text={props.fields.text16}
                className={styles['a08']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_7_lbLinkWithoutPadlock_7"
                  text={props.fields.text17}
                  className={styles['span08']}
                />
              </Link>
            </li>
            <li className={styles['li09']}>
              <Link
                href={props.fields.href9}
                text={props.fields.text18}
                className={styles['a09']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_8_lbLinkWithoutPadlock_8"
                  text={props.fields.text19}
                  className={styles['span09']}
                />
              </Link>
            </li>
            <li className={styles['li10']}>
              <Link
                href={props.fields.href10}
                text={props.fields.text20}
                className={styles['a10']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_9_lbLinkWithoutPadlock_9"
                  text={props.fields.text21}
                  className={styles['span10']}
                />
              </Link>
            </li>
            <li className={styles['li11']}>
              <Link
                href={props.fields.href11}
                text={props.fields.text22}
                className={styles['a11']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_10_lbLinkWithoutPadlock_10"
                  text={props.fields.text23}
                  className={styles['span11']}
                />
              </Link>
            </li>
            <li className={styles['li12']}>
              <Link
                href={props.fields.href12}
                text={props.fields.text24}
                className={styles['a12']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_11_lbLinkWithoutPadlock_11"
                  text={props.fields.text25}
                  className={styles['span12']}
                />
              </Link>
            </li>
            <li className={styles['li13']}>
              <Link
                href={props.fields.href13}
                text={props.fields.text26}
                className={styles['a13']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_0_lvChildren_0_ctl00_12_lbLinkWithoutPadlock_12"
                  text={props.fields.text27}
                  className={styles['span13']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li14']}>
          <Link
            href={props.fields.href14}
            text={props.fields.text28}
            className={styles['a14']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_1_lbLinkWithoutPadlock_1"
              text={props.fields.text29}
              className={styles['span14']}
            />
          </Link>
          <ul className={styles['ul2']}>
            <li className={styles['li15']}>
              <Link
                href={props.fields.href15}
                text={props.fields.text30}
                className={styles['a15']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text31}
                  className={styles['span15']}
                />
              </Link>
            </li>
            <li className={styles['li16']}>
              <Link
                href={props.fields.href16}
                text={props.fields.text32}
                className={styles['a16']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text33}
                  className={styles['span16']}
                />
              </Link>
            </li>
            <li className={styles['li17']}>
              <Link
                href={props.fields.href17}
                text={props.fields.text34}
                className={styles['a17']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text35}
                  className={styles['span17']}
                />
              </Link>
            </li>
            <li className={styles['li18']}>
              <Link
                href={props.fields.href18}
                text={props.fields.text36}
                className={styles['a18']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_3_lbLinkWithoutPadlock_3"
                  text={props.fields.text37}
                  className={styles['span18']}
                />
              </Link>
            </li>
            <li className={styles['li19']}>
              <Link
                href={props.fields.href19}
                text={props.fields.text38}
                className={styles['a19']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_4_lbLinkWithoutPadlock_4"
                  text={props.fields.text39}
                  className={styles['span19']}
                />
              </Link>
            </li>
            <li className={styles['li20']}>
              <Link
                href={props.fields.href20}
                text={props.fields.text40}
                className={styles['a20']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_1_lvChildren_1_ctl00_5_lbLinkWithoutPadlock_5"
                  text={props.fields.text41}
                  className={styles['span20']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li21']}>
          <Link
            href={props.fields.href21}
            text={props.fields.text42}
            className={styles['a21']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_2_lbLinkWithoutPadlock_2"
              text={props.fields.text43}
              className={styles['span21']}
            />
          </Link>
          <ul className={styles['ul3']}>
            <li className={styles['li22']}>
              <Link
                href={props.fields.href22}
                text={props.fields.text44}
                className={styles['a22']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_2_lvChildren_2_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text45}
                  className={styles['span22']}
                />
              </Link>
            </li>
            <li className={styles['li23']}>
              <Link
                href={props.fields.href23}
                text={props.fields.text46}
                className={styles['a23']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_2_lvChildren_2_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text47}
                  className={styles['span23']}
                />
              </Link>
            </li>
            <li className={styles['li24']}>
              <Link
                href={props.fields.href24}
                text={props.fields.text48}
                className={styles['a24']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_2_lvChildren_2_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text49}
                  className={styles['span24']}
                />
              </Link>
            </li>
            <li className={styles['li25']}>
              <Link
                href={props.fields.href25}
                text={props.fields.text50}
                className={styles['a25']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_2_lvChildren_2_ctl00_3_lbLinkWithoutPadlock_3"
                  text={props.fields.text51}
                  className={styles['span25']}
                />
              </Link>
            </li>
            <li className={styles['li26']}>
              <Link
                href={props.fields.href26}
                text={props.fields.text52}
                className={styles['a26']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_2_lvChildren_2_ctl00_4_lbLinkWithoutPadlock_4"
                  text={props.fields.text53}
                  className={styles['span26']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li27']}>
          <Link
            href={props.fields.href27}
            text={props.fields.text54}
            className={styles['a27']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_3_lbLinkWithoutPadlock_3"
              text={props.fields.text55}
              className={styles['span27']}
            />
          </Link>
          <ul className={styles['ul4']}>
            <li className={styles['li28']}>
              <Link
                href={props.fields.href28}
                text={props.fields.text56}
                className={styles['a28']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text57}
                  className={styles['span28']}
                />
              </Link>
            </li>
            <li className={styles['li29']}>
              <Link
                href={props.fields.href29}
                text={props.fields.text58}
                className={styles['a29']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text59}
                  className={styles['span29']}
                />
              </Link>
            </li>
            <li className={styles['li30']}>
              <Link
                href={props.fields.href30}
                text={props.fields.text60}
                className={styles['a30']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text61}
                  className={styles['span30']}
                />
              </Link>
            </li>
            <li className={styles['li31']}>
              <Link
                href={props.fields.href31}
                text={props.fields.text62}
                className={styles['a31']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_3_lbLinkWithoutPadlock_3"
                  text={props.fields.text63}
                  className={styles['span31']}
                />
              </Link>
            </li>
            <li className={styles['li32']}>
              <Link
                href={props.fields.href32}
                text={props.fields.text64}
                className={styles['a32']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_4_lbLinkWithoutPadlock_4"
                  text={props.fields.text65}
                  className={styles['span32']}
                />
              </Link>
            </li>
            <li className={styles['li33']}>
              <Link
                href={props.fields.href33}
                text={props.fields.text66}
                className={styles['a33']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_5_lbLinkWithoutPadlock_5"
                  text={props.fields.text67}
                  className={styles['span33']}
                />
              </Link>
            </li>
            <li className={styles['li34']}>
              <Link
                href={props.fields.href34}
                text={props.fields.text68}
                className={styles['a34']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_6_lbLinkWithoutPadlock_6"
                  text={props.fields.text69}
                  className={styles['span34']}
                />
              </Link>
            </li>
            <li className={styles['li35']}>
              <Link
                href={props.fields.href35}
                text={props.fields.text70}
                className={styles['a35']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_7_lbLinkWithoutPadlock_7"
                  text={props.fields.text71}
                  className={styles['span35']}
                />
              </Link>
            </li>
            <li className={styles['li36']}>
              <Link
                href={props.fields.href36}
                text={props.fields.text72}
                className={styles['a36']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_8_lbLinkWithoutPadlock_8"
                  text={props.fields.text73}
                  className={styles['span36']}
                />
              </Link>
            </li>
            <li className={styles['li37']}>
              <Link
                href={props.fields.href37}
                text={props.fields.text74}
                className={styles['a37']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_9_lbLinkWithoutPadlock_9"
                  text={props.fields.text75}
                  className={styles['span37']}
                />
              </Link>
            </li>
            <li className={styles['li38']}>
              <Link
                href={props.fields.href38}
                text={props.fields.text76}
                className={styles['a38']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_10_lbLinkWithoutPadlock_10"
                  text={props.fields.text77}
                  className={styles['span38']}
                />
              </Link>
            </li>
            <li className={styles['li39']}>
              <Link
                href={props.fields.href39}
                text={props.fields.text78}
                className={styles['a39']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_3_lvChildren_3_ctl00_11_lbLinkWithoutPadlock_11"
                  text={props.fields.text79}
                  className={styles['span39']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li40']}>
          <Link
            href={props.fields.href40}
            text={props.fields.text80}
            className={styles['a40']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_4_lbLinkWithoutPadlock_4"
              text={props.fields.text81}
              className={styles['span40']}
            />
          </Link>
          <ul className={styles['ul5']}>
            <li className={styles['li41']}>
              <Link
                href={props.fields.href41}
                text={props.fields.text82}
                className={styles['a41']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_4_lvChildren_4_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text83}
                  className={styles['span41']}
                />
              </Link>
            </li>
            <li className={styles['li42']}>
              <Link
                href={props.fields.href42}
                text={props.fields.text84}
                className={styles['a42']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_4_lvChildren_4_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text85}
                  className={styles['span42']}
                />
              </Link>
            </li>
            <li className={styles['li43']}>
              <Link
                href={props.fields.href43}
                text={props.fields.text86}
                className={styles['a43']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_4_lvChildren_4_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text87}
                  className={styles['span43']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li44']}>
          <Link
            href={props.fields.href44}
            text={props.fields.text88}
            className={styles['a44']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_5_lbLinkWithoutPadlock_5"
              text={props.fields.text89}
              className={styles['span44']}
            />
          </Link>
          <ul className={styles['ul6']}>
            <li className={styles['li45']}>
              <Link
                href={props.fields.href45}
                text={props.fields.text90}
                className={styles['a45']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_5_lvChildren_5_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text91}
                  className={styles['span45']}
                />
              </Link>
            </li>
            <li className={styles['li46']}>
              <Link
                href={props.fields.href46}
                text={props.fields.text92}
                className={styles['a46']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_5_lvChildren_5_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text93}
                  className={styles['span46']}
                />
              </Link>
            </li>
            <li className={styles['li47']}>
              <Link
                href={props.fields.href47}
                text={props.fields.text94}
                className={styles['a47']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_5_lvChildren_5_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text95}
                  className={styles['span47']}
                />
              </Link>
            </li>
            <li className={styles['li48']}>
              <Link
                href={props.fields.href48}
                text={props.fields.text96}
                className={styles['a48']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_5_lvChildren_5_ctl00_3_lbLinkWithoutPadlock_3"
                  text={props.fields.text97}
                  className={styles['span48']}
                />
              </Link>
            </li>
            <li className={styles['li49']}>
              <Link
                href={props.fields.href49}
                text={props.fields.text98}
                className={styles['a49']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_5_lvChildren_5_ctl00_4_lbLinkWithoutPadlock_4"
                  text={props.fields.text99}
                  className={styles['span49']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li50']}>
          <Link
            href={props.fields.href50}
            text={props.fields.text100}
            className={styles['a50']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_6_lbLinkWithoutPadlock_6"
              text={props.fields.text101}
              className={styles['span50']}
            />
          </Link>
          <ul className={styles['ul7']}>
            <li className={styles['li51']}>
              <Link
                href={props.fields.href51}
                text={props.fields.text102}
                className={styles['a51']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text103}
                  className={styles['span51']}
                />
              </Link>
            </li>
            <li className={styles['li52']}>
              <Link
                href={props.fields.href52}
                text={props.fields.text104}
                className={styles['a52']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text105}
                  className={styles['span52']}
                />
              </Link>
            </li>
            <li className={styles['li53']}>
              <Link
                href={props.fields.href53}
                text={props.fields.text106}
                className={styles['a53']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text107}
                  className={styles['span53']}
                />
              </Link>
            </li>
            <li className={styles['li54']}>
              <Link
                href={props.fields.href54}
                text={props.fields.text108}
                className={styles['a54']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_3_lblinkWithPadlock_3"
                  className={styles['span54']}
                >
                  <Text text={props.fields.text109} />
                  <Image
                    src={props.fields.src1}
                    id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_3_imgPadlock_3"
                    alt={props.fields.alt1}
                    className={styles['img1']}
                  />
                </span>
              </Link>
            </li>
            <li className={styles['li55']}>
              <Link
                href={props.fields.href55}
                text={props.fields.text110}
                className={styles['a55']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_4_lblinkWithPadlock_4"
                  className={styles['span55']}
                >
                  <Text text={props.fields.text111} />
                  <Image
                    src={props.fields.src2}
                    id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_4_imgPadlock_4"
                    alt={props.fields.alt2}
                    className={styles['img2']}
                  />
                </span>
              </Link>
            </li>
            <li className={styles['li56']}>
              <Link
                href={props.fields.href56}
                text={props.fields.text112}
                className={styles['a56']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_5_lbLinkWithoutPadlock_5"
                  text={props.fields.text113}
                  className={styles['span56']}
                />
              </Link>
            </li>
            <li className={styles['li57']}>
              <Link
                href={props.fields.href57}
                text={props.fields.text114}
                className={styles['a57']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_6_lbLinkWithoutPadlock_6"
                  text={props.fields.text115}
                  className={styles['span57']}
                />
              </Link>
            </li>
            <li className={styles['li58']}>
              <Link
                href={props.fields.href58}
                text={props.fields.text116}
                className={styles['a58']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_7_lbLinkWithoutPadlock_7"
                  text={props.fields.text117}
                  className={styles['span58']}
                />
              </Link>
            </li>
            <li className={styles['li59']}>
              <Link
                href={props.fields.href59}
                text={props.fields.text118}
                className={styles['a59']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_6_lvChildren_6_ctl00_8_lbLinkWithoutPadlock_8"
                  text={props.fields.text119}
                  className={styles['span59']}
                />
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles['li60']}>
          <Link
            href={props.fields.href60}
            text={props.fields.text120}
            className={styles['a60']}
          >
            <Text
              id="header_0_menu_0_lvStatic_MenuItem1_7_lbLinkWithoutPadlock_7"
              text={props.fields.text121}
              className={styles['span60']}
            />
          </Link>
          <ul className={styles['ul8']}>
            <li className={styles['li61']}>
              <Link
                href={props.fields.href61}
                text={props.fields.text122}
                className={styles['a61']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text123}
                  className={styles['span61']}
                />
              </Link>
            </li>
            <li className={styles['li62']}>
              <Link
                href={props.fields.href62}
                text={props.fields.text124}
                className={styles['a62']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_1_lbLinkWithoutPadlock_1"
                  text={props.fields.text125}
                  className={styles['span62']}
                />
              </Link>
            </li>
            <li className={styles['li63']}>
              <Link
                href={props.fields.href63}
                text={props.fields.text126}
                className={styles['a63']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_2_lbLinkWithoutPadlock_2"
                  text={props.fields.text127}
                  className={styles['span63']}
                />
              </Link>
            </li>
            <li className={styles['li64']}>
              <Link
                href={props.fields.href64}
                text={props.fields.text128}
                className={styles['a64']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_3_lblinkWithPadlock_3"
                  className={styles['span64']}
                >
                  <Text text={props.fields.text129} />
                  <Image
                    src={props.fields.src3}
                    id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_3_imgPadlock_3"
                    alt={props.fields.alt3}
                    className={styles['img3']}
                  />
                </span>
              </Link>
            </li>
            <li className={styles['li65']}>
              <Link
                href={props.fields.href65}
                text={props.fields.text130}
                className={styles['a65']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_4_lblinkWithPadlock_4"
                  className={styles['span65']}
                >
                  <Text text={props.fields.text131} />
                  <Image
                    src={props.fields.src4}
                    id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_4_imgPadlock_4"
                    alt={props.fields.alt4}
                    className={styles['img4']}
                  />
                </span>
              </Link>
            </li>
            <li className={styles['li66']}>
              <Link
                href={props.fields.href66}
                text={props.fields.text132}
                className={styles['a66']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_5_lbLinkWithoutPadlock_5"
                  text={props.fields.text133}
                  className={styles['span66']}
                />
              </Link>
            </li>
            <li className={styles['li67']}>
              <Link
                href={props.fields.href67}
                text={props.fields.text134}
                className={styles['a67']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_6_lbLinkWithoutPadlock_6"
                  text={props.fields.text135}
                  className={styles['span67']}
                />
              </Link>
            </li>
            <li className={styles['li68']}>
              <Link
                href={props.fields.href68}
                text={props.fields.text136}
                className={styles['a68']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_7_lbLinkWithoutPadlock_7"
                  text={props.fields.text137}
                  className={styles['span68']}
                />
              </Link>
            </li>
            <li className={styles['li69']}>
              <Link
                href={props.fields.href69}
                text={props.fields.text138}
                className={styles['a69']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_8_lbLinkWithoutPadlock_8"
                  text={props.fields.text139}
                  className={styles['span69']}
                />
              </Link>
            </li>
            <li className={styles['li70']}>
              <Link
                href={props.fields.href70}
                text={props.fields.text140}
                className={styles['a70']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_9_lbLinkWithoutPadlock_9"
                  text={props.fields.text141}
                  className={styles['span70']}
                />
              </Link>
            </li>
            <li className={styles['li71']}>
              <Link
                href={props.fields.href71}
                text={props.fields.text142}
                className={styles['a71']}
              >
                <Text
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_10_lbLinkWithoutPadlock_10"
                  text={props.fields.text143}
                  className={styles['span71']}
                />
              </Link>
            </li>
            <li className={styles['li72']}>
              <Link
                href={props.fields.href72}
                text={props.fields.text144}
                className={styles['a72']}
              >
                <span
                  id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_11_lblinkWithPadlock_11"
                  className={styles['span72']}
                >
                  <Text text={props.fields.text145} />
                  <Image
                    src={props.fields.src5}
                    id="header_0_menu_0_lvStatic_MenuItem1_7_lvChildren_7_ctl00_11_imgPadlock_11"
                    alt={props.fields.alt5}
                    className={styles['img5']}
                  />
                </span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  )
}

MainNavigation.defaultProps = {
  fields: {
    href: '/en-CA/about-us.aspx',
    text: '',
    text1: 'About Us',
    href1: '/en-CA/about-us/tell-us-who-we-are.aspx',
    text2: '',
    text3: 'Self-Identification Survey - Tell Us Who We Are',
    href2: '/en-CA/about-us/what-we-stand-for.aspx',
    text4: '',
    text5: 'What We Stand For',
    href3: '/en-CA/about-us/what-we-do.aspx',
    text6: '',
    text7: 'What We Do',
    href4: '/en-CA/about-us/how-we-are-organized.aspx',
    text8: '',
    text9: 'How We Are Organized',
    href5: '/en-CA/about-us/provincial-office.aspx',
    text10: '',
    text11: 'Provincial Office',
    href6: '/en-CA/about-us/districts-and-bargaining-units.aspx',
    text12: '',
    text13: 'Districts and Bargaining Units',
    href7: '/en-CA/about-us/district-funding.aspx',
    text14: '',
    text15: 'District Funding',
    src: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt: '',
    href8: '/en-CA/about-us/constitution-bylaws-policies.aspx',
    text16: '',
    text17: 'Constitution, Bylaws, Policies',
    href9: '/en-CA/about-us/history-and-fast-facts.aspx',
    text18: '',
    text19: 'History and Fast Facts',
    href10: '/en-CA/about-us/osstf-feeso-and-aoda.aspx',
    text20: '',
    text21: 'OSSTF/FEESO and AODA',
    href11: '/en-CA/about-us/osstf-feeso-s-anti-harassment-policy.aspx',
    text22: '',
    text23: 'Anti-Harassment Policy',
    href12: '/en-CA/about-us/employment-opportunities.aspx',
    text24: '',
    text25: 'Employment Opportunities',
    href13: '/en-CA/about-us/contact-us.aspx',
    text26: '',
    text27: 'Contact Us',
    href14: '/en-CA/public-education.aspx',
    text28: '',
    text29: 'Public Education',
    href15: '/en-CA/public-education/toward-2022-and-beyond.aspx',
    text30: '',
    text31: 'Toward 2022 and Beyond - Election Readiness',
    href16: 'https://www.hereforstudents.ca/',
    text32: '',
    text33: 'Here For Students',
    href17: '/en-CA/public-education/no-cuts-to-education.aspx',
    text34: '',
    text35: 'No Cuts to Education',
    href18: '/en-CA/public-education/parents.aspx',
    text36: '',
    text37: 'Parents',
    href19: '/en-CA/public-education/safety-for-all.aspx',
    text38: '',
    text39: 'Safety for All',
    href20:
      '/en-CA/public-education/strengthening-public-ed-rebuild-ontario.aspx',
    text40: '',
    text41: 'Strengthen Public Education — Rebuild Ontario',
    href21: '/en-CA/membership.aspx',
    text42: '',
    text43: 'Membership',
    href22: '/en-CA/membership/how-to-organize-your-workplace.aspx',
    text44: '',
    text45: 'How to Organize Your Workplace',
    href23: '/en-CA/membership/card-signing-procedure.aspx',
    text46: '',
    text47: 'Card Signing Procedure',
    href24: '/en-CA/membership/the-three-rs-of-membership.aspx',
    text48: '',
    text49: 'The Three Rs of Membership',
    href25: '/en-CA/membership/information-for-ontario-teacher-candidates.aspx',
    text50: '',
    text51: 'Information for Ontario Teacher Candidates',
    href26: '/en-CA/membership/voluntary-membership.aspx',
    text52: '',
    text53: 'Voluntary Membership / Active Retired Members',
    href27: '/en-CA/services.aspx',
    text54: '',
    text55: 'Services',
    href28: '/en-CA/services/awards-scholarships-grants-and-bursaries.aspx',
    text56: '',
    text57: 'Awards, Scholarships, Grants, and Bursaries',
    href29: '/en-CA/services/career-exploration.aspx',
    text58: '',
    text59: 'Career Exploration',
    href30: '/en-CA/services/member-services.aspx',
    text60: '',
    text61: 'Member Services',
    href31: '/en-CA/services/certification.aspx',
    text62: '',
    text63: 'Certification',
    href32: '/en-CA/services/financial-management-services.aspx',
    text64: '',
    text65: 'Financial Management Services',
    href33: '/en-CA/services/health-safety.aspx',
    text66: '',
    text67: 'Health & Safety',
    href34: '/en-CA/services/violence-in-the-workplace-resources.aspx',
    text68: '',
    text69: 'Violence in the Workplace Resources',
    href35: '/en-CA/services/insurance.aspx',
    text70: '',
    text71: 'Insurance',
    href36: '/en-CA/services/mediation-services-resource-bank-msrb.aspx',
    text72: '',
    text73: 'Mediation Services Resource Bank (MSRB)',
    href37: '/en-CA/services/negotiations.aspx',
    text74: '',
    text75: 'Negotiations',
    href38: '/en-CA/services/pensions.aspx',
    text76: '',
    text77: 'Pensions',
    href39: 'http://www.osstfboutique.ca',
    text78: '',
    text79: 'OSSTF/FEESO Boutique',
    href40: '/en-CA/pd-training.aspx',
    text80: '',
    text81: 'PD / Training',
    href41: '/en-CA/pd-training/workshops-and-presentations.aspx',
    text82: '',
    text83: 'Workshops and Presentations',
    href42: '/en-CA/pd-training/union-training.aspx',
    text84: '',
    text85: 'Union Training',
    href43: '/en-CA/pd-training/external-conferences-and-workshops.aspx',
    text86: '',
    text87: 'External Conferences and Workshops',
    href44: '/en-CA/publications.aspx',
    text88: '',
    text89: 'Publications',
    href45: '/en-CA/publications/education-forum.aspx',
    text90: '',
    text91: 'Education Forum',
    href46: '/en-CA/publications/education-watch.aspx',
    text92: '',
    text93: 'Education Watch',
    href47: '/en-CA/publications/update.aspx',
    text94: '',
    text95: 'Update',
    href48: '/en-CA/publications/annual-report.aspx',
    text96: '',
    text97: 'Annual Report',
    href49: '/en-CA/publications/research-studies.aspx',
    text98: '',
    text99: 'Research',
    href50: '/en-CA/resource-centre.aspx',
    text100: '',
    text101: 'Resource Centre',
    href51: '/en-CA/resource-centre/copyright-resources.aspx',
    text102: '',
    text103: 'Copyright Resources',
    href52: '/en-CA/resource-centre/environmental-resources.aspx',
    text104: '',
    text105: 'Environmental Resources',
    href53: '/en-CA/resource-centre/forms-library.aspx',
    text106: '',
    text107: 'Forms Library',
    href54: '/en-CA/resource-centre/member-protection.aspx',
    text108: '',
    text109: 'Member Protection',
    src1: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt1: '',
    href55: '/en-CA/resource-centre/guidelines-and-advice.aspx',
    text110: '',
    text111: 'Guidelines and Advice',
    src2: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt2: '',
    href56: '/en-CA/resource-centre/educators-resources.aspx',
    text112: '',
    text113: 'Educators’ Resources',
    href57:
      '/en-CA/resource-centre/curricular-materials-and-classroom-resources.aspx',
    text114: '',
    text115: 'Curricular Materials and Classroom Resources',
    href58: '/en-CA/resource-centre/briefs-and-submissions.aspx',
    text116: '',
    text117: 'Briefs and Submissions',
    href59: '/en-CA/resource-centre/videos.aspx',
    text118: '',
    text119: 'Videos',
    href60: '/en-CA/news.aspx',
    text120: '',
    text121: 'News',
    href61: '/en-CA/news/world-teachers-day-presidents-video-message.aspx',
    text122: '',
    text123: "World Teachers' Day - President's Video Message",
    href62: '/en-CA/news/collective-bargaining-bulletin.aspx',
    text124: '',
    text125: 'OSSTF/FEESO Bargaining Bulletin',
    href63: '/en-CA/news/100-years-strong.aspx',
    text126: '',
    text127: '100 Years Strong: 1919–2019',
    href64: '/en-CA/news/osstf-feeso-bulletin.aspx',
    text128: '',
    text129: 'OSSTF/FEESO Bulletin',
    src3: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt3: '',
    href65:
      '/en-CA/news/school-boards-collective-bargaining-act-bill-122-1.aspx',
    text130: '',
    text131: 'School Boards Collective Bargaining Act — Bill 122',
    src4: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt4: '',
    href66: '/en-CA/news/regulation-274-information.aspx',
    text132: '',
    text133: 'Regulation 274 Information',
    href67: '/en-CA/news/labour-action-2015.aspx',
    text134: '',
    text135: 'OSSTF/FEESO Labour Action',
    href68: '/en-CA/news/queen-s-park-notes.aspx',
    text136: '',
    text137: "Queen's Park Notes",
    href69: '/en-CA/news/media-outlets.aspx',
    text138: '',
    text139: 'Media Outlets',
    href70: '/en-CA/news/ampa-2024.aspx',
    text140: '',
    text141: 'AMPA 2024',
    href71: '/en-CA/calendar.aspx',
    text142: '',
    text143: 'Calendar',
    href72: '/en-CA/news/upcoming.aspx',
    text144: '',
    text145: 'Upcoming',
    src5: 'https://www.osstf.on.ca/Content/Images/padlock.png',
    alt5: '',
  },
  rootClassName: '',
  rendering: {},
}

MainNavigation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default MainNavigation

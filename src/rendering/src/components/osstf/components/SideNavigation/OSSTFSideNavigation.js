/* eslint-disable */
import React from 'react'
import {
  Container,
  Link,
  Image,
  Text,
  RichText,
} from '@kajoo-ai/sitecore-react'

import PropTypes from 'prop-types'

import styles from './style.module.css'

const SideNavigation = (props) => {
  return (
    <Container
      className={` ${styles['side-navigation']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <input
          name="search"
          type="text"
          placeholder="Search our site"
          data-url="/en-CA/search/results.aspx"
          className={styles['input']}
        />
        <Link
          href={props.fields.href}
          text={props.fields.text}
          className={styles['a']}
        >
          <Image
            src={props.fields.src}
            alt={props.fields.alt}
            className={styles['img']}
          />
        </Link>
        <Link
          href={props.fields.href1}
          text={props.fields.text1}
          className={styles['a01']}
        />
      </Container>
      <select name="quicklinks" className={styles['select']}>
        <option value="Quick Links" className={styles['option']}>
          <Text text={props.fields.text2} />
        </option>
        <option
          value="/en-CA/services/awards-scholarships-grants-and-bursaries.aspx"
          className={styles['option01']}
        >
          <Text text={props.fields.text3} />
        </option>
        <option
          value="/en-CA/services/certification.aspx"
          className={styles['option02']}
        >
          <Text text={props.fields.text4} />
        </option>
        <option
          value="/en-CA/resource-centre/curricular-materials-and-classroom-resources/common-threads.aspx"
          className={styles['option03']}
        >
          <Text text={props.fields.text5} />
        </option>
        <option
          value="/en-CA/about-us/constitution-bylaws-policies.aspx"
          className={styles['option04']}
        >
          <Text text={props.fields.text6} />
        </option>
        <option
          value="/en-CA/resource-centre/curricular-materials-and-classroom-resources.aspx"
          className={styles['option05']}
        >
          <Text text={props.fields.text7} />
        </option>
        <option
          value="/-/media/Provincial/Documents/About-Us/financial-handbook/financial-handbook_en-fillable.ashx?sc_lang=en-CA"
          className={styles['option06']}
        >
          <Text text={props.fields.text8} />
        </option>
        <option
          value="/en-CA/services/health-safety.aspx"
          className={styles['option07']}
        >
          <Text text={props.fields.text9} />
        </option>
        <option
          value="/en-CA/services/pensions.aspx"
          className={styles['option08']}
        >
          <Text text={props.fields.text10} />
        </option>
        <option
          value="/en-CA/about-us/osstf-feeso-s-anti-harassment-policy.aspx"
          className={styles['option09']}
        >
          <Text text={props.fields.text11} />
        </option>
      </select>
      <select name="districts" className={styles['select1']}>
        <option value="Districts" className={styles['option10']}>
          <Text text={props.fields.text12} />
        </option>
        <option
          value="/districtsbargainingunits#01"
          className={styles['option11']}
        >
          <Text text={props.fields.text13} />
        </option>
        <option
          value="/districtsbargainingunits#02"
          className={styles['option12']}
        >
          <Text text={props.fields.text14} />
        </option>
        <option
          value="/districtsbargainingunits#03"
          className={styles['option13']}
        >
          <Text text={props.fields.text15} />
        </option>
        <option
          value="/districtsbargainingunits#04\t"
          className={styles['option14']}
        >
          <Text text={props.fields.text16} />
        </option>
        <option
          value="/districtsbargainingunits#05A"
          className={styles['option15']}
        >
          <Text text={props.fields.text17} />
        </option>
        <option
          value="/districtsbargainingunits#05B"
          className={styles['option16']}
        >
          <Text text={props.fields.text18} />
        </option>
        <option
          value="/districtsbargainingunits#06A"
          className={styles['option17']}
        >
          <Text text={props.fields.text19} />
        </option>
        <option
          value="/districtsbargainingunits#06B"
          className={styles['option18']}
        >
          <Text text={props.fields.text20} />
        </option>
        <option
          value="/districtsbargainingunits#07"
          className={styles['option19']}
        >
          <Text text={props.fields.text21} />
        </option>
        <option
          value="/districtsbargainingunits#08"
          className={styles['option20']}
        >
          <Text text={props.fields.text22} />
        </option>
        <option
          value="/districtsbargainingunits#09"
          className={styles['option21']}
        >
          <Text text={props.fields.text23} />
        </option>
        <option
          value="/districtsbargainingunits#10"
          className={styles['option22']}
        >
          <Text text={props.fields.text24} />
        </option>
        <option
          value="/districtsbargainingunits#11"
          className={styles['option23']}
        >
          <Text text={props.fields.text25} />
        </option>
        <option
          value="/districtsbargainingunits#12"
          className={styles['option24']}
        >
          <Text text={props.fields.text26} />
        </option>
        <option
          value="/districtsbargainingunits#13"
          className={styles['option25']}
        >
          <Text text={props.fields.text27} />
        </option>
        <option
          value="/districtsbargainingunits#14"
          className={styles['option26']}
        >
          <Text text={props.fields.text28} />
        </option>
        <option
          value="/districtsbargainingunits#15"
          className={styles['option27']}
        >
          <Text text={props.fields.text29} />
        </option>
        <option
          value="/districtsbargainingunits#16"
          className={styles['option28']}
        >
          <Text text={props.fields.text30} />
        </option>
        <option
          value="/districtsbargainingunits#17"
          className={styles['option29']}
        >
          <Text text={props.fields.text31} />
        </option>
        <option
          value="/districtsbargainingunits#18"
          className={styles['option30']}
        >
          <Text text={props.fields.text32} />
        </option>
        <option
          value="/districtsbargainingunits#19"
          className={styles['option31']}
        >
          <Text text={props.fields.text33} />
        </option>
        <option
          value="/districtsbargainingunits#20"
          className={styles['option32']}
        >
          <Text text={props.fields.text34} />
        </option>
        <option
          value="/districtsbargainingunits#21"
          className={styles['option33']}
        >
          <Text text={props.fields.text35} />
        </option>
        <option
          value="/districtsbargainingunits#22"
          className={styles['option34']}
        >
          <Text text={props.fields.text36} />
        </option>
        <option
          value="/districtsbargainingunits#23"
          className={styles['option35']}
        >
          <Text text={props.fields.text37} />
        </option>
        <option
          value="/districtsbargainingunits#24"
          className={styles['option36']}
        >
          <Text text={props.fields.text38} />
        </option>
        <option
          value="/districtsbargainingunits#25"
          className={styles['option37']}
        >
          <Text text={props.fields.text39} />
        </option>
        <option
          value="/districtsbargainingunits#26"
          className={styles['option38']}
        >
          <Text text={props.fields.text40} />
        </option>
        <option
          value="/districtsbargainingunits#27"
          className={styles['option39']}
        >
          <Text text={props.fields.text41} />
        </option>
        <option
          value="/districtsbargainingunits#28"
          className={styles['option40']}
        >
          <Text text={props.fields.text42} />
        </option>
        <option
          value="/districtsbargainingunits#29"
          className={styles['option41']}
        >
          <Text text={props.fields.text43} />
        </option>
        <option
          value="/districtsbargainingunits#30"
          className={styles['option42']}
        >
          <Text text={props.fields.text44} />
        </option>
        <option
          value="/districtsbargainingunits#31"
          className={styles['option43']}
        >
          <Text text={props.fields.text45} />
        </option>
        <option
          value="/districtsbargainingunits#32"
          className={styles['option44']}
        >
          <Text text={props.fields.text46} />
        </option>
        <option
          value="/districtsbargainingunits#33"
          className={styles['option45']}
        >
          <Text text={props.fields.text47} />
        </option>
        <option
          value="/districtsbargainingunits#34"
          className={styles['option46']}
        >
          <Text text={props.fields.text48} />
        </option>
        <option
          value="/districtsbargainingunits#35"
          className={styles['option47']}
        >
          <Text text={props.fields.text49} />
        </option>
      </select>
      <Link
        id="left_3_lnkContext"
        href={props.fields.href2}
        text={props.fields.text50}
        className={styles['a02']}
      />
      <ul className={styles['ul']}>
        <li className={styles['li']}>
          <Link
            href={props.fields.href3}
            text={props.fields.text51}
            className={styles['a03']}
          >
            <Text
              id="left_3_lvContext_ctl00_0_lbLinkWithoutPadlock_0"
              text={props.fields.text52}
              className={styles['span']}
            />
          </Link>
        </li>
        <li className={styles['li01']}>
          <Link
            href={props.fields.href4}
            text={props.fields.text53}
            className={styles['a04']}
          >
            <Text
              id="left_3_lvContext_ctl00_1_lbLinkWithoutPadlock_1"
              text={props.fields.text54}
              className={styles['span01']}
            />
          </Link>
        </li>
        <li className={styles['li02']}>
          <Link
            href={props.fields.href5}
            text={props.fields.text55}
            className={styles['a05']}
          >
            <Text
              id="left_3_lvContext_ctl00_2_lbLinkWithoutPadlock_2"
              text={props.fields.text56}
              className={styles['span02']}
            />
          </Link>
        </li>
        <li className={styles['li03']}>
          <Link
            href={props.fields.href6}
            text={props.fields.text57}
            className={styles['a06']}
          >
            <Text
              id="left_3_lvContext_ctl00_3_lbLinkWithoutPadlock_3"
              text={props.fields.text58}
              className={styles['span03']}
            />
          </Link>
          <ul className={styles['ul1']}>
            <li className={styles['li04']}>
              <Link
                href={props.fields.href7}
                text={props.fields.text59}
                className={styles['a07']}
              >
                <Text
                  id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text60}
                  className={styles['span04']}
                />
              </Link>
              <ul className={styles['ul2']}>
                <li className={styles['li05']}>
                  <Link
                    href={props.fields.href8}
                    text={props.fields.text61}
                    className={styles['a08']}
                  >
                    <Text
                      id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_0_lbLinkWithoutPadlock_0"
                      text={props.fields.text62}
                      className={styles['span05']}
                    />
                  </Link>
                  <ul className={styles['ul3']}>
                    <li className={styles['li06']}>
                      <Link
                        href={props.fields.href9}
                        text={props.fields.text63}
                        className={styles['a09']}
                      >
                        <Text
                          id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_0_lvChildren_0_ctl00_0_lbLinkWithoutPadlock_0"
                          text={props.fields.text64}
                          className={styles['span06']}
                        />
                      </Link>
                      <ul className={styles['ul4']}>
                        <li className={styles['li07']}>
                          <Link
                            href={props.fields.href10}
                            text={props.fields.text65}
                            className={styles['a10']}
                          >
                            <Text
                              id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_0_lvChildren_0_ctl00_0_lvChildren_0_ctl00_0_lbLinkWithoutPadlock_0"
                              text={props.fields.text66}
                              className={styles['span07']}
                            />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={styles['li08']}>
                      <Link
                        href={props.fields.href11}
                        text={props.fields.text67}
                        className={styles['a11']}
                      >
                        <Text
                          id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_0_lvChildren_0_ctl00_1_lbLinkWithoutPadlock_1"
                          text={props.fields.text68}
                          className={styles['span08']}
                        />
                      </Link>
                    </li>
                    <li className={styles['li09']}>
                      <Link
                        href={props.fields.href12}
                        text={props.fields.text69}
                        className={styles['a12']}
                      >
                        <Text
                          id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_0_lvChildren_0_ctl00_2_lbLinkWithoutPadlock_2"
                          text={props.fields.text70}
                          className={styles['span09']}
                        />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles['li10']}>
                  <Link
                    href={props.fields.href13}
                    text={props.fields.text71}
                    className={styles['a13']}
                  >
                    <Text
                      id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_1_lbLinkWithoutPadlock_1"
                      text={props.fields.text72}
                      className={styles['span10']}
                    />
                  </Link>
                </li>
                <li className={styles['li11']}>
                  <Link
                    href={props.fields.href14}
                    text={props.fields.text73}
                    className={styles['a14']}
                  >
                    <Text
                      id="left_3_lvContext_ctl00_3_lvChildren_3_ctl00_0_lvChildren_0_ctl00_2_lbLinkWithoutPadlock_2"
                      text={props.fields.text74}
                      className={styles['span11']}
                    />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles['li12']}>
          <Link
            href={props.fields.href15}
            text={props.fields.text75}
            className={styles['a15']}
          >
            <Text
              id="left_3_lvContext_ctl00_4_lbLinkWithoutPadlock_4"
              text={props.fields.text76}
              className={styles['span12']}
            />
          </Link>
          <ul className={styles['ul5']}>
            <li className={styles['li13']}>
              <Link
                href={props.fields.href16}
                text={props.fields.text77}
                className={styles['a16']}
              >
                <Text
                  id="left_3_lvContext_ctl00_4_lvChildren_4_ctl00_0_lbLinkWithoutPadlock_0"
                  text={props.fields.text78}
                  className={styles['span13']}
                />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <input
        type="hidden"
        id="MobileLanguage"
        value="en-CA"
        className={styles['input1']}
      />
      <input
        type="hidden"
        id="UserLoggedIn"
        value="False"
        className={styles['input2']}
      />
      <Container className={styles['div1']}>
        <Container id="mobileContainer" className={styles['div2']} />
      </Container>
      <RichText value={props.fields.value} />
    </Container>
  )
}

SideNavigation.defaultProps = {
  fields: {
    href: '#',
    text: '',
    src: 'https://www.osstf.on.ca/content/images/go.en.gif',
    alt: 'Go',
    href1: '/en-CA/search/advanced.aspx?a=true',
    text1: 'Advanced',
    text2: 'Quick Links',
    text3: 'Awards, Scholarships, Grants, and Bursaries',
    text4: 'Certification',
    text5: 'Common Threads',
    text6: 'Constitution, Bylaws, Policies',
    text7: 'Curricular Materials and Classroom Resources',
    text8: 'Financial Handbook [PDF]',
    text9: 'Health & Safety',
    text10: 'Pensions',
    text11: 'Anti-Harassment Policy',
    text12: 'Districts',
    text13: '01 - Ontario North East District',
    text14: '02 - Algoma District',
    text15: '03 - Rainbow District',
    text16: '04 - Near North District',
    text17: '05A - Northern Shield District',
    text18: '05B - Rainy River District',
    text19: '06A - Thunder Bay District',
    text20: '06B - Superior North District',
    text21: '07 - Bluewater District',
    text22: '08 - Avon Maitland District',
    text23: '09 - Greater Essex District',
    text24: '10 - Lambton Kent District',
    text25: '11 - Thames Valley District',
    text26: '12 - Toronto District',
    text27: '13 - Durham District',
    text28: '14 - Kawartha Pine Ridge District',
    text29: '15 - Trillium Lakelands District',
    text30: '16 - York Region District',
    text31: '17 - Simcoe District',
    text32: '18 - Upper Grand District',
    text33: '19 - Peel District',
    text34: '20 - Halton District',
    text35: '21 - Hamilton-Wentworth District',
    text36: '22 - Niagara District',
    text37: '23 - Grand Erie District',
    text38: '24 - Waterloo District',
    text39: '25 - Ottawa-Carleton District',
    text40: '26 - Upper Canada District',
    text41: '27 - Limestone District',
    text42: '28 - Renfrew District',
    text43: '29 - Hastings-Prince Edward District',
    text44: '30 - PSAT District',
    text45: '31 - Franco-Nord Ontarien District',
    text46: "32 - Centre-Sud-Ouest de l'Ontario District",
    text47: "33 - District de l'Est",
    text48: '34 - Independent Educational Programs',
    text49: '35 - Universities',
    href2: '/en-CA/membership.aspx',
    text50: 'Membership',
    href3: '/en-CA/membership/how-to-organize-your-workplace.aspx',
    text51: '',
    text52: 'How to Organize Your Workplace',
    href4: '/en-CA/membership/card-signing-procedure.aspx',
    text53: '',
    text54: 'Card Signing Procedure',
    href5: '/en-CA/membership/the-three-rs-of-membership.aspx',
    text55: '',
    text56: 'The Three Rs of Membership',
    href6: '/en-CA/membership/information-for-ontario-teacher-candidates.aspx',
    text57: '',
    text58: 'Information for Ontario Teacher Candidates',
    href7:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates.aspx',
    text59: '',
    text60: 'OSSTF/FEESO 101 for Teacher Candidates',
    href8:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/rights-and-duties-of-osstf-feeso-associate-members.aspx',
    text61: '',
    text62: 'Rights and Duties of OSSTF/FEESO Associate Members',
    href9:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/rights-and-duties-of-osstf-feeso-associate-members/professional-conduct-guidelines.aspx',
    text63: '',
    text64: 'Professional Conduct Guidelines',
    href10:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/rights-and-duties-of-osstf-feeso-associate-members/professional-conduct-guidelines/practicum-advice-for-teacher-candidates.aspx',
    text65: '',
    text66: 'Practicum Advice for Teacher Candidates',
    href11:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/rights-and-duties-of-osstf-feeso-associate-members/teacher-candidates-in-classroom.aspx',
    text67: '',
    text68: 'Teacher Candidates in the Classroom',
    href12:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/rights-and-duties-of-osstf-feeso-associate-members/strikes-practicum-and-osstf-feeso.aspx',
    text69: '',
    text70: 'Strikes, Practicum and OSSTF/FEESO',
    href13:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/professional-resources-and-supports.aspx',
    text71: '',
    text72: 'Professional Resources and Supports',
    href14:
      '/en-CA/membership/information-for-ontario-teacher-candidates/osstf-feeso-101-for-teacher-candidates/handy-links-for-teacher-candidates.aspx',
    text73: '',
    text74: 'Handy Links for Teacher Candidates',
    href15: '/en-CA/membership/voluntary-membership.aspx',
    text75: '',
    text76: 'Voluntary Membership / Active Retired Members',
    href16: '/en-CA/membership/voluntary-membership/arm-application-form.aspx',
    text77: '',
    text78: 'ARM Application Form',
    value:
      '<div style="display: block; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px; font-family: Verdana, Helvetica, sans-serif" ><a style="color: rgb(153, 153, 153); text-decoration-line: underline; cursor: pointer; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-size: 9.6px; line-height: normal" href="#" data-toggle-css="Print.less" data-toggle-value="true" >\n\t\t\t\t\t\tPrint Version\n\t\t\t\t\t</a><a style="color: rgb(153, 153, 153); text-decoration-line: underline; cursor: pointer; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-size: 9.6px; line-height: normal" id="lnkEmail" href="mailto:user@domain.com?subject=I thought this might interest you...&body=Membership:https://www.osstf.on.ca/membership.aspx" >Email this page</a><a style="color: rgb(153, 153, 153); text-decoration-line: underline; cursor: pointer; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-size: 9.6px; line-height: normal" href="#" data-toggle-css="Large.less" data-toggle-value="true" ><span style=""  > </span><big style="font-size: larger; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px" ><span style=""  >A</span></big></a></div>',
  },
  rootClassName: '',
  rendering: {},
}

SideNavigation.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default SideNavigation

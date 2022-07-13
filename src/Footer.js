import React from "react";
import {Row, Col, Image} from 'react-bootstrap';
import FooterLegals from "./Components/FooterLegals";
import FooterLinkCollection from "./Components/FooterLinkCollection";
import FooterSocialLinks from "./Components/FooterSocialLinks";

const Footer = (props) => {
  console.log(props);
  const logo = props.brandLogo
  const shogunLink = props.brandLink
  const navSections = props.navSections
  const socialLinks = props.socialLinks
  const legalLinks = props.baselineLinks
  const copyright = props.legalText

  return( 
    <footer>
      <Row >
        <Row>
          <Col lg={3} md={4} xs={12} className='text-center text-md-start'>
            
            <a href={shogunLink}> {logo ? <Image src={`data:image/svg+xml;utf8,${logo}`} />
              : <b>shogun</b>}
            </a>

          </Col>

          <Col>
          <Row>
          {navSections && navSections.map((section) => {
            const highlight = section.highlightOnMobile
            const titleItem = {
              text: section.displayText,
              url: section.url,
              tag: null,
              icon: null
            }
            
            return (
              <Col md={6} lg={3}>
              <FooterLinkCollection highlight={highlight} title={titleItem} links={section.navLinks} />
              </Col>
            )
          })
          }
          </Row>
          </Col>
        </Row>
  
          <Row className='m-0 d-none d-md-block footer-separator' />

        <Row className='py-4 px-1 w-100'>
          <Col md={12} lg={4} className='d-lg-flex text-center text-lg-left d-xxs-block'>
          <FooterSocialLinks links={socialLinks} />
          </Col>
          
          <Col xxs={0} lg={4}></Col>

          <Col md={12} lg={4}>
          <FooterLegals className="d-md-inline d-xxs-block" links={legalLinks} copyright={copyright} />
          </Col>
        </Row>

      </Row>
    </footer>
  )
};

export default Footer;

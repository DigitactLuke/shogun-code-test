import React from "react";
import { Row, Image } from "react-bootstrap";

const FooterLinkItem = ({isHeader = false, text, url, tag, icon}) => {
    const styleClass = isHeader ? 'link-header-text':'link-standard-text'
    const iconSvg = icon

    return(
        <Row>
        <div className='footer-link-item'>
            {icon && <a href={url}><Image src={`data:image/svg+xml;base64,${btoa(iconSvg)}`} /></a>}

            {url ? <a className={styleClass} href={url}>{text}</a>
            : <p className={styleClass}>{text}</p>}

            {tag && <p className='link-tag'>{tag}</p>}
        </div>
        </Row>
    )
};

export default FooterLinkItem;
import React from "react";
import {Row} from 'react-bootstrap';

const FooterLegals = ({links, copyright}) => {
    return (
        <div className='footer-legals'>
                {links.map((item) => {
                    const url = item.url
                    const text = item.displayText

                    return (
                        <a href={url}><p className='legal-text d-lg-inline d-xxs-block text-center text-lg-start'>{text}</p></a>
                    )
                })}

                <p className='legal-text d-lg-inline d-xxs-block text-lg-start text-center'>{copyright}</p>
        </div>
    )
}

export default FooterLegals;
import React from "react";
import {Image} from 'react-bootstrap';

const FooterSocialLinks = ({links}) => {
    return(
        <div className='footer-social-links'>
            {links.map((link) => {
                const icon = link.icon
                const url = link.url
                const alt = link.name

                return (
                    <div className='footer-social-link'>
                    <a href={url}>
                        <Image alt={alt} src={`data:image/svg+xml;utf8,${icon}`}/>
                    </a>
                    </div>
                )
            })}
        </div>
    )
};

export default FooterSocialLinks;
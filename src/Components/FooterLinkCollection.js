import React, {useState} from "react";
import {Col, Row, Collapse} from 'react-bootstrap';
import FooterLinkItem from "./FooterLinkItem";

const FooterLinkCollection = ({highlight = false, title, links}) => {
    const [open, setOpen] = useState(false)

    const doOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
        console.log('click')
    }

    return(
        <div className='footer-link-collection my-1 mb-md-5'>

            <div className='d-md-none'>
                {highlight ? 
                <>
                    <FooterLinkItem isHeader={true} text={title.text} url={title.url} tag={title.tag} icon={title.icon} />

                    {links && links.map((link) =>{
                        return (
                        <FooterLinkItem text={link.displayText} url={link.url} tag={link.tag} icon={link.icon} />
                        )
                        })}
                </> :
                <>
                    <div className='w-100' onClick={(e) => doOpen(e)}>
                        <Row>
                        <Col xs={10}>
                            <FooterLinkItem isHeader={true} text={title.text} url={title.url} tag={title.tag} icon={title.icon} />
                        </Col>
                        <Col xs={2}>
                        <p className='link-header-text text-end'>{open ? '-' : '+'}</p>
                        </Col>
                        </Row>
                    </div>
                    <Collapse in={open}>
                        <div>
                        {links && links.map((link) =>{
                            return (
                            <FooterLinkItem text={link.displayText} url={link.url} tag={link.tag} icon={link.icon} />
                            )
                            })}
                        </div>
                    </Collapse>
                </>
                }
            </div>

            <div className='d-none d-md-block'>
            <FooterLinkItem isHeader={true} text={title.text} url={title.url} tag={title.tag} icon={title.icon} />

            {links && links.map((link) =>{
                return (
                <FooterLinkItem text={link.displayText} url={link.url} tag={link.tag} icon={link.icon} />
                )
                })}
            </div>

        </div>
    )
}

export default FooterLinkCollection;
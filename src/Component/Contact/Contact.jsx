import React from 'react'
import { FaDiscord, FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiWhatsappFill } from 'react-icons/ri'
import './Contact.css'

function Contact() {
    return (
        <div>

            <section id="contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=6282134393412&text&type=phone_number&app_absent=0" without rel="noreferrer"  target={'_blank'}>
                                <RiWhatsappFill size={100} className="large-icons whatsapp" />
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/GSeBJ4WruP" without rel="noreferrer"  target={'_blank'}>
                                <FaDiscord size={100} className="large-icons discord" />
                                </a>
                                </li>
                            <li>
                                <a href="https://instagram.com/shadexml_?igshid=MDM4ZDc5MmU=" without rel="noreferrer"  target={'_blank'}>
                                <FaInstagramSquare size={100} className="large-icons instagram" />
                                </a>
                                </li>
                            <li>
                                <a href="mailto:jefryxml@gmail.com?subject=complain&body=yth,">
                                <SiGmail size={100} className="large-icons gmail" />
                                </a>
                                </li>
                            <li>
                                <a href="https://github.com/xmnnasrul" without rel="noreferrer"  target={'_blank'}>
                                <FaGithub size={100} className="large-icons github" />
                                </a>
                                </li>
                        </ul>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Contact
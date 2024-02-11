import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='social'>
                    <div className='social-list'>
                        <a aria-label='Перейти в GitHub' href="https://github.com/Strocksmin" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>@strocksmin</span>
                        </a>
                    </div>
                </div>
                <div className='social-list'>
                    <a aria-label='Перейти в GitHub' href="https://github.com/Strocksmin" target='_blank'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>strocksmin@yandex.ru</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
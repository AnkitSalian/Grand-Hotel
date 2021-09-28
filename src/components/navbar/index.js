import React from 'react'

import classnames from './index.module.css';

const index = () => {
    return (
        <div className="navbar">
            <div className={classnames.sidebar}>
                <div className={classnames.menu_icon}>
                    <div className={`${classnames.line} ${classnames.line1}`}></div>
                    <div className={`${classnames.line} ${classnames.line2}`}></div>
                    <div className={`${classnames.line} ${classnames.line3}`}></div>
                </div>

                <ul className={classnames.social_icons_list}>
                    <li>
                        <a href="#" className={classnames.social_link} >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classnames.social_link} >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classnames.social_link} >
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={classnames.social_link} >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className={classnames.year}>
                    2021
                </div>
            </div>
        </div>
    )
}

export default index

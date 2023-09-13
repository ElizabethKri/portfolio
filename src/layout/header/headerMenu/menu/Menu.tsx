import React from 'react';
import {S} from './../HeaderMenu_Styles'

const items = [
    {
        title :  "Home",
        href: "home"
    },
    {
        title :  "Skills",
        href: "skills"
    },
    {
        title :  "Works",
        href: "works"
    },
    {
        title :  "About",
        href: "about"
    },
    {
        title :  "Contact",
        href: "contact"
    },
   ]

export const Menu: React.FC = () => {
    return (
        <ul>

        {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               activeClass = "active"

                               offset={-50}
                               smooth={true}
                               spy = {true}
                    >{item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
</ul>
    );
};


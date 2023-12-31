import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    href?: string
}
export const Icon : React.FC <IconPropsType> = (props: IconPropsType) => {
    return (
            <svg  xmlns="http://www.w3.org/2000/svg" width= {props.width || "50"} height= {props.height || "50"}  viewBox= {props.height || "0 0 50 50"} fill="none">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
            </svg>
    );
};

export default Icon;
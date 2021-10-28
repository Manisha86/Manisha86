import {Darcula , Apple ,Basic} from './Themes';
import Themes from './Themes';

export const getTheme = themeName =>{
    switch(themeName){
        case Themes.Darcula: return Darcula;
        case Themes.Apple: return Apple;
        default : return Basic;
    }
};

export default getTheme;
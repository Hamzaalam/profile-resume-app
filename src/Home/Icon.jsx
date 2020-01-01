import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.css'
const Icon = (props) => {
    const [iconColor, setIconColor] = React.useState("#404144");    
    
    const changeIconColor = (type) =>{
        if(type==='onMouseEnter') setIconColor('aliceblue');
        if(type==='onMouseLeave') setIconColor('#404144');
 
    }
    return (
       
        <ListItemText 
            onMouseEnter={()=>changeIconColor('onMouseEnter')} 
            onMouseLeave={()=>changeIconColor('onMouseLeave')}
        >
            {<FontAwesomeIcon icon={props.icon} className="icon" color={iconColor}/>}
        </ListItemText>
        );
}
 
export default Icon;
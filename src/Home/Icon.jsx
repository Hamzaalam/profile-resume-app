import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
    const [iconColor, setIconColor] = React.useState("#545b67");

    const icon = {
        width: 100,
        fontSize: "3.5rem"
    }
    const changeIconColor = (type) =>{
        if(type==='onMouseEnter') setIconColor('aliceblue');
        if(type==='onMouseLeave') setIconColor('#545b67');
 
    }
    return (
        <ListItemText 
            onMouseEnter={()=>changeIconColor('onMouseEnter')} 
            onMouseLeave={()=>changeIconColor('onMouseLeave')}
        >
            {<FontAwesomeIcon icon={props.icon} style={icon} color={iconColor}/>}
        </ListItemText>
        );
}
 
export default Icon;
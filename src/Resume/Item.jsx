import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import './Item.css';
const styles = {
    Typography: {
      lineHeight:'1.8em',
      color:'#333',
      fontSize:'20px',
      letterSpacing:0
    },
};
const Item = (props) => {
    const item ={
        borderLeft: '5px solid',
        paddingBottom: '2em',
        position: 'relative',
        borderColor: '#264e59'
    }
    const descriptionItem ={
        marginTop:'40px',
    }
    const targetBorder = {
        position: 'relative',
        left: '-38px',
        top: '-15px',
        width: '40px',
        height: '40px',
        border: '15px solid white',
        borderRadius: '50%',
        zIndex: '1',
        backgroundColor:'#264e59'
    }
    const targetDot ={
        width: '10px',
        height: '10px',
        borderRadius:'50%',
        zIndex: '10',
        margin: '5px auto',
        border: '10px solid white',
        backgroundColor:'#264e59'
    }
    const itemCompanyTitle = {
        color:'#333',
        fontWeight: '600'

    }
    const itemPositionTitle = {
        color:'#888',
        marginTop: '7px',
        marginLeft:'15px',
        fontSize: '20px',
    }
    const itemDate = {
        position: 'relative',
        right: '765px',
        top: '-60px',
        textAlign: 'right',
        minWidth: '180px',
        color: '#888',
        fontSize: '1em'
    }
    const itemPositionRole = {
        position: 'absolute',
        left: '58px',
        top: '53px',
        textAlign: 'left',
        minWidth: '180px',
        color: '#888',    
        fontSize:'1em'
    }
    const itemDescription = {
        marginLeft:'30px',
    }
    const {classes, companyTitle,postion,positionRole,year,points,flag} = props;
    
    //change the font-size for Education, and otherss
    if(flag==='Education'|| flag==='Certification') itemPositionRole.fontSize='1.2em';

    return (<div style={item} className='item'>  
            <Grid container style={descriptionItem}>
                <Grid item xs={1}>
                    <div style={targetBorder}>
                        <div style={targetDot}>                                        
                        </div>
                    </div>
                </Grid>
                <Grid item xs={11} style={{display:'flex'}}>
                    <Typography variant='h4' style={itemCompanyTitle}>
                        {companyTitle} 
                    </Typography>
                    <Typography  style={itemPositionTitle}>
                        {postion ? postion : ''}
                    </Typography>
                </Grid>
            </Grid>
            <div style={itemPositionRole}>
                    {positionRole}
            </div>
            <div style={itemDate} className='item-date'>
                     {year}
            </div>
            {points?
                <div style={itemDescription}>
                    <ul style={{margin:'unset'}}>
                        {points.map( p => 
                            <li key={p}>
                                <Typography classes={{ root: classes.Typography }}> 
                                    {p}
                                </Typography>   
                            </li>
                        )}
                    </ul>
                </div>
            :''}
            </div>
           );
}
 
export default withStyles(styles)(Item);
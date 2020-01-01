import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'
const Single = (props) => {
    const projectTitle ={
        color:'#333',
        fontWeight:'600',
        fontSize: '1.4rem'
    }
    const projectTools ={
        color:'#888'
    }
    const projectDescription ={
        color:'#333',
        fontSize: '18px',
        lineHeight: '1.8em',
        letterSpacing: '0',
    }
    const projectLink ={
        color:'#333',
    }
    const {Title, Tools , Description , Demo, Project} = props;
    return ( <>
                <Grid container style={{marginTop:'30px'}}>
                    <Grid item xs={12} >
                        <Typography variant='h5' style={projectTitle}>
                                {Title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography  style={projectTools}>
                            {Tools}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:'15px'}}>
                    <Grid item xs={12}>
                        <Typography  style={projectDescription}>
                            {Description}                               
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:'10px'}}>
                    <Grid item xs={12}>
                        {Demo?
                            <Typography  style={projectLink}>
                                Demo:
                                <Link href={Demo} target="_blank" style={{marginLeft:'17px'}}>
                                    {Demo}                             
                                </Link>
                            </Typography>
                        :''
                        }
                        {Project?
                            <Typography  style={projectLink}>
                                Project:
                                <Link href={Project} target="_blank" style={{marginLeft:'10px'}}>
                                    {Project}                             
                                </Link>
                            </Typography>
                        :''
                        }
                        
                    </Grid>
                </Grid>
             </>
            );
}
 
export default Single;
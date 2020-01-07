import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
    const projectLinkContainer = {
        marginTop:'10px',
        display:'unset'
    }
    const projectLink ={
        color:'#333',
                
    }
    const wholeProject ={
        marginTop:'5px',
    }
    const {Title, Tools , Description , Demo, Project} = props;
    return ( <Paper style={wholeProject} key={Title}>
                <div style={{padding:'0px 0px 8px 15px'}}>
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
                <Grid container style={projectLinkContainer} >
                    {Demo?
                    <Grid item xs={12} key={Demo}>
                        <Typography  style={projectLink}>
                            Demo:
                            <Link href={Demo} target="_blank" style={{color:'#e7643e'}}>
                                {Demo}                             
                            </Link>
                        </Typography>
                    </Grid>
                    : ''}
                    {Project? 
                    <Grid item xs={12} > 
                        <Typography  style={projectLink} key={Project}>
                            Project:
                            <Link href={Project} target="_blank" style={{color:'#e7643e'}}>
                                {Project}                             
                            </Link>
                        </Typography>
                    </Grid> 
                    : ''}
                </Grid>                   
                </div>
             </Paper>
            );
}
 
export default Single;
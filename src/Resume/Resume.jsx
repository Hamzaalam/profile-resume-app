import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const styles = {
    Typography: {
      lineHeight:'1.8em',
      color:'#333',
      fontSize:'20px'
    },
    Button:{
        textTransform:'capitalize',
        fontWeight:'700'
    }
  };
const Resume = (props) => {
    const  content ={
        margin: '0 auto',
        maxWidth:'700px',
        padding:'20px 40px',
    }
    const downloadButton ={
        display: 'flex',
        justifyContent: 'flex-end',
        textTransform: 'capitalize'
    }
    const section = {
        marginTop:'40px'
    }
    const descriptionItem ={
        marginTop:'40px',
    }
    const heading ={
        fontWeight:'700'
    }
    const { classes } = props;

    return (<div style={content}>
                <section className='overview' style={section}>
                    <Grid container >
                       <Grid item xs={6}> 
                            <Typography variant='h4' style={heading}>
                                Overview
                            </Typography>
                       </Grid>
                        <Grid item xs={6} style={downloadButton}>
                            <Button 
                                style={{backgroundColor:'#535b67', color:'#fff'}} 
                                variant='contained'
                                classes={{ root: classes.Button }}
                            >
                                    Download Resume
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container style={descriptionItem}>
                        <Grid item xs={12}>
                            <Typography classes={{ root: classes.Typography }} >
                                    I enjoy working with others to produce a better outcome. Facilitating discussions, coordinating different streams of work, and making sure our features meet quality standards means the team can ship better features faster.I'm looking for a company focused on quality and a position where I can explore new problems and come up with creative solutions.
                            </Typography>
                        </Grid>
                    </Grid>
                </section>
                <section className='experience' style={section}>
                    <Grid container >
                       <Grid item xs={6}> 
                            <Typography variant='h4' style={heading}>
                                Experience
                            </Typography>
                       </Grid>
                    </Grid>
                    <Grid container style={descriptionItem}>
                        <Grid item xs={12}>
                            <Typography  classes={{ root: classes.Typography }}>
                                    I enjoy working with others to produce a better outcome. Facilitating discussions, coordinating different streams of work, and making sure our features meet quality standards means the team can ship better features faster.I'm looking for a company focused on quality and a position where I can explore new problems and come up with creative solutions.
                            </Typography>
                        </Grid>
                    </Grid>
                </section>
            </div>  
            );
}
 
export default withStyles(styles)(Resume);
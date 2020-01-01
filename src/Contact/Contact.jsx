import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

  
const styles = {
    Typography: {
      lineHeight:'1.8em',
      color:'#333',
      fontSize:'20px'
    },
    Button:{
        textTransform:'capitalize',
        fontWeight:'700',
        color:'#1E2023 !important',
        border:'1px solid #e7643e !important'
    },
    notchedOutline: {
        borderWidth: "1.5px",
        borderColor: "#e7643e !important"
     }
}
const Contact = (props) => {
    const  content ={
        margin: '0 auto',
        maxWidth:'700px',
        padding:'20px 20px',
    }
    const section = {
        marginTop:'40px'
    }
    const heading ={
        fontWeight:'700',
        color:'#333',

    }
    const { classes } = props;
    return (
            <div style={content}>
                <section style={section}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant='h4' style={heading}> Hi there!</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop:'20px'}}>
                        <Grid item xs={12}>
                            <Typography classes={{ root: classes.Typography }}> 
                                    Want to tell me something interesting? Have a suggestion for me? I'd love to hear from you!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{margin:'20px 0px'}}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                style={{width:'300px'}}
                                InputProps={{
                                    classes: {
                                      notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows="6"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    classes: {
                                      notchedOutline: classes.notchedOutline
                                    }
                                  }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop:'20px'}}>
                        <Grid item xs={12}>
                            <Button
                                variant='outlined'
                                size='large'
                                color="primary"
                                classes={{ root: classes.Button }}
                            >
                                Send Now
                            </Button>
                        </Grid>
                    </Grid>
                </section>
            </div> 
           );
}   
 
export default withStyles(styles)(Contact);
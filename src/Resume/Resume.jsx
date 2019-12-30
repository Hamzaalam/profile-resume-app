import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Item from './Item';

const styles = {
    Typography: {
      lineHeight:'1.8em',
      color:'#333',
      fontSize:'20px',
      letterSpacing:0
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
        fontWeight:'700',
    }
    const { classes } = props;

    return (<div style={content}>
                <section className='overview' style={section}>
                    <Grid container >
                       <Grid item xs={6}> 
                            <Typography variant='h4' style={heading} >
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
                <section className='Experience' style={section}>         
                    <Typography variant='h4' style={heading}>
                        Experience
                    </Typography>
                    <Item
                        flag={'Experience'}
                        companyTitle={'Zaavia'}
                        postion={'Jr. Software Developer'}
                        positionRole={'React, Redux, Angular, Nodejs, MongoDB, Material UI, PDFjs, MinIO(S3)'}
                        year={'Jun 2019 – current'}
                        points={['Develop most of the front features on React for the enterprise product (EDMS).',
                                 'Developed the RESTful APIs for the consumption of several different products.',
                                 'Deploy the MinIO(s3) on the local machine (linux/ubuntu) with using container orchestration technology (Kuberenetes).',
                                 
                                ]}
                    />
                     <Item
                        flag={'Experience'}
                        companyTitle={'Codies.io'}
                        postion={'Web Developer Intern'}
                        positionRole={'JavaScript(ES6), Angular, React, HTML, JS, CSS'}
                        year={'Nov 2018 – Apr 2019'}
                        points={['Built a questionnaire application with user management and result automation.',
                                 'Customization and feature integration to their existing different sites on Angular and React.'
                                ]}
                    />
                </section>
                <section className='Education' style={section}>         
                    <Typography variant='h4' style={heading}>
                        Education
                    </Typography>
                    <Item
                        flag={'Education'}
                        companyTitle={'Iqra University'}
                        positionRole={'BS(Computer Science)'}
                        year={'Sep 2015 – May 2019'}
                        points={['Developed the "smart ballot system" for the regional voting automation.',
                                 'Interact the application with hardware(finger print scanner).',
                                 'Deploye the micro services on container orchestration kubernetes for load balancing.',
                                 
                                ]}
                    />
                </section>
                <section className='Certification' style={section}>         
                    <Typography variant='h4' style={heading}>
                        Certification
                    </Typography>
                    <Item
                        flag={'Certification'}
                        companyTitle={'Mastering React'}
                        positionRole={'codewithmosh.com'}
                        year={'issued: Aug 2019'}
                    />
                    <Item
                        flag={'Certification'}
                        companyTitle={'M220JS MongoDB for Javascript Developers'}
                        positionRole={'MongoDB University'}
                        year={'issued: Jul 2019'}
                    />
                     <Item
                        flag={'Certification'}
                        companyTitle={'Web Eng. / PHP & MYSQL'}
                        positionRole={'Sir Syed university of Engg. Technology'}
                        year={'Jul 2017 – Nov 2017'}
                    />
                </section>
            </div>  
            );
}
 
export default withStyles(styles)(Resume);
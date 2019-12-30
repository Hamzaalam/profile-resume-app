import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Single from './Single';
const project = () => {
    const  content ={
        margin: '0 auto',
        maxWidth:'700px',
        padding:'20px 20px',
        // background:'#535b67'
    }
    const section = {
        marginTop:'40px'
    }
    const heading ={
        fontWeight:'700',
    }
    const projectTitle ={
        color:'#333'
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
    return ( <div style={content}>
                <section style={section}>
                    <Typography variant='h4' style={heading} >
                        My Projects
                    </Typography>
                    <Single
                        Title={'Electronic Document Management System (ENT. Application):'}
                        Tools={'Reactjs, Material UI , Nodejs , MongoDB, MinIO, PDFjs'}
                        Description={'Work on enterprise EDMS application which maintains the document life cycle and flexible to deploy on any organization and their subsidiaries .My role is to develop the most of the front end features on react and deployment of MinIO(object storage) on Kuberenetes and develop the RESTful APIs on nodejs with MinIO-SDK.'}         
                    />
                     <Single
                        Title={'React PDF Viewer:'}
                        Tools={'Reactjs, PDFjs'}
                        Description={'React PDF Viewer is an open source library for react developers which helps to view PDF files from any source local storage OR an online.'}         
                        Demo={'https://hamzaalam.github.io/react-pdf-viewer-demo'}
                        Project={'https://github.com/Hamzaalam/react-pdf-viewer'}
                    />
                    <Single
                        Title={'Developer Folio App:'}
                        Tools={'Reactjs, Material UI'}
                        Description={'Developer Folio is an app to showcase your work online specially for engineers,developers,and freelancers which have the features of profile creation, resume,contacts, projects display, and blogs.'}         
                        Demo={'https://hamzaalam.github.io/'}
                        Project={'https://github.com/Hamzaalam/developer-folio-app'}
                    />
                </section>
            </div> 
            );
}
 
export default project;
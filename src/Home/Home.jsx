import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Home.css'

const Home = () => {
    return ( <div className="home">
                <img 
                     className="profile-image"
                     src={process.env.PUBLIC_URL + '/0.jpeg'} 
                     alt="profile-image"
                />
                <Typography variant="h4">
                    Hello, I’m Hamza Alam!
                </Typography>
            </div> );
}
 
export default Home;
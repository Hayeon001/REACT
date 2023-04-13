import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            
            <div style={{
                height:"100vh", width:"100vw",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage:"url('https://cdn.pixabay.com/photo/2019/05/19/23/47/clouds-4215608_1280.jpg')"}}>
                <h1>Home</h1>    
            </div>
        );
    }
}

export default Home;
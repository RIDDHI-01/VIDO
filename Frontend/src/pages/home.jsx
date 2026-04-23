import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../context/authContext';

function HomeComponent(){
    let navigate=useNavigate();
    const [meetingCode,setMeetingCode]=useState("");
    const {addToUserHistory}=useContext(AuthContext);

    let handleJoinVideoCall=async()=>{
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return (
    <div className="homePage">
        <div className="navBar">
            <div className="logo">
                <img src='/logo.png' alt='LOGO'/>
            </div>

            <div className="navRight">
                <div className="history" onClick={() => navigate("/history")}>
                    <RestoreIcon />
                    <span>History</span>
                </div>

                <Button 
                    variant="outlined" 
                    className="logoutBtn"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate('/auth');
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>

        <div className="mainContainer">

            <div className="leftPanel">
                <h1>
                    Connect with your <span>Loved Ones</span>
                </h1>

                <p>Start or join a secure video meeting instantly</p>

                <div className="joinBox">
                    <TextField
                        onChange={e => setMeetingCode(e.target.value)}
                        label="Enter Meeting Code"
                        variant="outlined"
                        size="small"
                        className="inputField"
                    />

                    <Button 
                        variant="contained"
                        className="joinBtn"
                        onClick={handleJoinVideoCall}
                    >
                        Join
                    </Button>
                </div>
            </div>

            <div className="rightPanel">
                <img src="/home.png" alt="image" />
            </div>

        </div>
    </div>
);
}

export default withAuth(HomeComponent);
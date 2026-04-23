import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import "../App.css"

export default function History(){
    const {getHistoryOfUser} = useContext(AuthContext);
    const [meetings,setMeetings]=useState([]);
    const routeTo=useNavigate();

    useEffect(()=>{
        const fetchHistory=async()=>{
            try{
                const history=await getHistoryOfUser();
                setMeetings(history);
            }catch{

            }
        }
        fetchHistory();
    },[]);
    let formatDate=(dateString)=>{
        const date=new Date(dateString);
        const day=date.getDate().toString().padStart(2,"0");
        const month=(date.getMonth()+1).toString().padStart(2,"0");
        const year=date.getFullYear();
        return `${day}/${month}/${year}`
    }
    return(
        <div className='historyPage'>
            <IconButton className='homeIcon' onClick={()=>{
                        routeTo("/home")
                    }}><HomeIcon/>
            </IconButton>
            { meetings.length !=0 ? meetings.map((e,i)=>{
                return(
                    <>
                    <Card key={i} className='historyCard'>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: '#cbd5f5', fontSize: 14 }}>
                                Code : {e.meetingCode}
                            </Typography>
                            <Typography sx={{ color: '#e0e7ff', mb: 1.5 }}>
                                Date : {formatDate(e.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                    </>
                )
                
            }) : <></>
        }
        </div>
    )
}
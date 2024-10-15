import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Tweetcard from '../HomeSection/Tweetcard';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TweetDetails = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);
  return (
    <React.Fragment>
        <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>
                    Tweet</h1>
        </section>
        <section>
                <Tweetcard></Tweetcard>
                <Divider></Divider>
        </section>
        <section>
            {[1,1,1,].map((item)=><Tweetcard></Tweetcard>)}
        </section>

    </React.Fragment>
  )
}

export default TweetDetails
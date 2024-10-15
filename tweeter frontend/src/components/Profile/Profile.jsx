// import React from 'react'
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import { useNavigate } from 'react-router-dom';
// import { Avatar } from '@mui/material';
// import Button from '@mui/material/Button';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// const Profile = () => {

//     const navigate = useNavigate;
//     const handleBack = () => navigate(-1);
//     const handleOpenProfileModel = () => {
//         console.log("handle open profile model")
//     }
//     const handleFollowUser = () => {
//         console.log("handle follow user")
//     }

//     return (
//         <div>
//             <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
//                 <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}></KeyboardBackspaceIcon>
//                 <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Explore with Vrush</h1>
//             </section>
//             <section>
//                 <img className='w-[100%] h-[15rem] object-cover'
//                     src="https://cdn.pixabay.com/photo/2018/01/19/23/04/cosmea-3093382_960_720.jpg" alt="" />
//             </section>

//             <section className='pl-6'>
//                 <div className='flex justify-between items-start mt-5 h-[5rem]'>
//                     <Avatar className='transform -translate-y-24'
//                         alt='explore with vrushali'
//                         src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg'
//                         sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}>
//                     </Avatar>

//                     {true ? (<Button
//                         onClick={handleOpenProfileModel}
//                         sx={{ borderRadius: "20px" }}
//                         variant='contained'> Edit Profile</Button>
//                     ) : (
//                         <Button
//                             onClick={handleFollowUser}
//                             sx={{ borderRadius: "20px" }}
//                             variant='contained'>{true ? "Follow" : "Unfollow"}</Button>
//                     )}
//                 </div>
//                 <div>
//                     <div className='flex items-center'>
//                         <h1 className='font-bold text-lg'>Explore with Vrushali</h1>
//                         {true && (
//                             <img className='ml-2 w-5 h-5' src="https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg" alt="" />

//                         )
//                         }
//                         <h1>@explore with vrushali</h1>
//                     </div>
//                     <div className='mt-2 space-y-2'>
//                         <p>Hello!! I am Vrsuhali.</p>
//                         <div className='py-1 flex space-x-5'>
//                             <div className='flex items-center text-gray-500'>
//                                 <BusinessCenterIcon>
//                                     <p className='ml-2'>Education</p>
//                                 </BusinessCenterIcon>
//                             </div>
//                             <div className='flex items-center text-gray-500'>
//                                 <LocationOnIcon>
//                                     <p className='ml-2'>India</p>
//                                 </LocationOnIcon>
//                             </div><div className='flex items-center text-gray-500'>
//                                 <CalendarMonthIcon>
//                                     <p className='ml-2'>Joined Feb 22</p>
//                                 </CalendarMonthIcon>
//                             </div>
//                         </div>
//                         <div className='flex items-center space-x-5'>
//                             <div className='flex items-center space-x-1 font-semibold'>
//                                 <span>286</span>
//                                 <span className='text-gray-500'>Followers</span>
//                             </div>
//                             <div className='flex items-center space-x-1 font-semibold'>
//                                 <span>378</span>
//                                 <span className='text-gray-500'>Following</span>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Profile
import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tweetcard from '../HomeSection/Tweetcard';
import ProfileModal from './ProfileModal';


const Profile = () => {
    const [tabValue, setTabValue] = useState("1");
    const [openProfileModal, setOpenProfileModal] = useState(false);

    const handleOpenProfileModel = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    // const handleOpenProfileModel = () => {
    //     console.log("handle open profile model");
    // };

    const handleFollowUser = () => {
        console.log("handle follow user");
    };

    const handleTabChange=(event,newValue)=>{
        setTabValue(newValue)
    if(newValue===4){
        console.log("likes tweet")
    }
    else if(newValue===1){
        console.log("user's tweets")
     }
    }

    return (
        <div>
            <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Explore with Vrush</h1>
            </section>
            <section>
                <img className='w-full h-60 object-cover'
                    src="https://cdn.pixabay.com/photo/2018/01/19/23/04/cosmea-3093382_960_720.jpg" alt="" />
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-20'>
                    <Avatar className='transform -translate-y-24'
                        alt='explore with vrushali'
                        src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg'
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}>
                    </Avatar>

                    {true ? (
                        <Button
                            onClick={handleOpenProfileModel}
                            sx={{ borderRadius: "20px" }}
                            variant='contained'> Edit Profile</Button>
                    ) : (
                        <Button
                            onClick={handleFollowUser}
                            sx={{ borderRadius: "20px" }}
                            variant='contained'>{true ? "Follow" : "Unfollow"}</Button>
                    )}
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Explore with Vrushali</h1>
                        {true && (
                            <img className='ml-2 w-5 h-5' src="https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg" alt="" />
                        )}
                        <h1 className='ml-2'>@explorewithvrushali</h1>
                    </div>
                    <div className='mt-2 space-y-2'>
                        <p>Hello!! I am Vrushali.</p>
                        <div className='py-1 flex space-x-5'>
                            <div className='flex items-center text-gray-500'>
                                <BusinessCenterIcon />
                                <p className='ml-2'>Education</p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <LocationOnIcon />
                                <p className='ml-2'>India</p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <CalendarMonthIcon />
                                <p className='ml-2'>Joined Feb 22</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <div className='flex items-center space-x-1 font-semibold'>
                                <span>286</span>
                                <span className='text-gray-500'>Followers</span>
                            </div>
                            <div className='flex items-center space-x-1 font-semibold'>
                                <span>378</span>
                                <span className='text-gray-500'>Following</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            {[1,1,1,1,1].map((item)=><Tweetcard></Tweetcard>)}
        </TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
            </section>
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}></ProfileModal>
            </section>
        </div>
    );
}

export default Profile;

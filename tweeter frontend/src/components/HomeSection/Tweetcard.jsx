// import React from 'react'
// import RepeatIcon from '@mui/icons-material/Repeat'
// import { Avatar, Button, Menu, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

// const Tweetcard = () => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleDeleteTweets = () => {
//         console.log("delete Tweet")
//         handleClose();
//     }
//     const navigate = useNavigate
//     return (
//         // <div className='flex items-center font-semibold text-gray-700 py-2'>
//         //     <RepeatIcon></RepeatIcon>
//         //     <p>You Retweet</p>
//         // </div>

//         <div className='flex space-x-5'>
//             <Avatar className='cursor-pointer'
//                 onClick={() => navigate(`/profile/${6}`)}
//                 alt='username'
//                 src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg'>

//             </Avatar>
//             <div className='w-full'>
//                 <div className='flex justify-between items-center'>
//                     <div className='flex cursor-pointer items-center space-x-2'>
//                         <span className='font-semibold'>Vrushali</span>
//                         <span className='text-gray-600'>@the explorer</span>
//                         <img className='ml-2 w-5 h-5' src="https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg" alt="" />
//                     </div>
//                     <div>
//                         <Button
//                             id="basic-button"
//                             aria-controls={open ? 'basic-menu' : undefined}
//                             aria-haspopup="true"
//                             aria-expanded={open ? 'true' : undefined}
//                             onClick={handleClick}
//                         >
//                             <MoreHorizIcon></MoreHorizIcon>
//                         </Button>
//                         <Menu
//                             id="basic-menu"
//                             anchorEl={anchorEl}
//                             open={open}
//                             onClose={handleClose}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                         >

//                             <MenuItem onClick={handleDeleteTweets}>Delete</MenuItem>
//                             <MenuItem onClick={handleDeleteTweets}>Edit</MenuItem>

//                         </Menu>
//                     </div>
//                      <div className='mt-2'>
//                     <  div className='cursor-pointer'>
//                             <p>Tweetee: A Twitter clone app built using</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Tweetcard
import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon  from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart'
import Favorite  from '@mui/icons-material/Favorite';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import ReplayModal from './ReplayModal';
import { useState } from 'react';

const Tweetcard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const [openReplayModal, setOpenReplayModal] = useState(false);

    const handleOpenReplayModel = () => setOpenReplayModal(true);
    const handleCloseReplayModal = () => setOpenReplayModal(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweets = () => {
        console.log("delete Tweet");
        handleClose();
    };

    // const handleOpenReplyModal=()=>{
    //     console.log("open modal")
    // }

    const handleCreateRetweet=()=>{
        console.log("handle create retweet")
    }

    const handleliketweet=()=>{
        console.log("handle like tweets")
    }
    const navigate = useNavigate();

    return (
       <React.Fragment>
         <div className='flex space-x-5'>
            <Avatar 
                className='cursor-pointer'
                onClick={() => navigate(`/profile/${6}`)}
                alt='username'
                src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg'
            />
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex cursor-pointer items-center space-x-2'>
                        <span className='font-semibold'>Vrushali</span>
                        <span className='text-gray-600'>@explorer with vrushali</span>
                        <img className='ml-2 w-5 h-5' src="https://img.freepik.com/premium-vector/verified-vector-icon-account-verification-verification-icon_564974-1246.jpg" alt="" />
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleDeleteTweets}>Delete</MenuItem>
                            <MenuItem onClick={handleDeleteTweets}>Edit</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className='mt-2 '>
                    <div className='cursor-pointer' onClick={()=>navigate(`/tweet/${3}`)}>
                    <p className='mb-2 p-0'>The Beautiful Dal lake of India 🌊</p>
                    <img className='w-[28rem] border border-gray-400 rounded-md' src="https://www.kashmironline.com/blog/wp-content/uploads/2022/05/dal.jpg" alt="" />
                    </div>
                </div>
                <div className='py-5 flex flex-wrap justify-between items-center'>
                    <div className='space-x-3 flex items-center text-gray-600' >
                        <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplayModel}></ChatBubbleOutlineIcon>
                        <p>45</p>
                    </div>
                    <div className={`${true? "text-gray-600":"text-gray-600"} flex space-x-3 items-center`}>
                        <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet}></RepeatIcon>
                        <p>55</p>
                    </div>
                    <div className={`${true? "text-pink-600":"text-gray-600"} flex space-x-3 items-center`}>
                       {true?<FavoriteIcon className='cursor-pointer' 
                       onClick={handleliketweet}>
                       </FavoriteIcon>:<FavoriteBorderIcon
                       className='cursor-pointer'
                       onClick={handleliketweet}>
                       </FavoriteBorderIcon>
                       }  <p>1612</p>
                    </div>
                    <div className='space-x-3 flex items-center text-gray-600' >
                        <BarChartIcon className='cursor-pointer' onClick={handleOpenReplayModel}></BarChartIcon>
                        <p>430</p>
                    </div>
                    <div className='space-x-3 flex items-center text-gray-600' >
                        <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplayModel}></FileUploadIcon>
                        
                    </div>

                </div>
            </div>
        </div>
        <section>
            <ReplayModal open={openReplayModal} handleClose={handleCloseReplayModal}></ReplayModal>
        </section>
       </React.Fragment>
    );
}

export default Tweetcard;

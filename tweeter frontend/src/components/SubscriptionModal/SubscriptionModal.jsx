import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline:'none'
};

export default function BasicModal({handleClose,open}) {
//   const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
//   const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
//   const handleCloseSubscriptionModel = () => setOpen(false);

  const [plan, setPlan] = useState("Annually");

  const features=["Prioritized ranking in conversations and search.",
    "See approximately twice as many tweets between ads in your for you and following timelines.",
    "Add bold and italic text in your tweets.",
    "Post longer videos and 1080p video uploads.",
    "All the existing Blue features,including edit tweets,bookmarks fokders and early access to new features."
  ]

  return (
    <div >
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='flex items-center space-x-3'>
<IconButton onClick={handleClose} aria-label='delete'>
    <CloseIcon></CloseIcon>
</IconButton>
                </div>
                <div className='flex justify-center py-10'>
<div className='w-[80%] space-y-10'>
<div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-300'>
<h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark once get approved </h1>
<img className='w-24 h-24'
src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-600nw-2183066365.jpg" alt="" />
</div>
<div className='flex justify-between border rounded-full px-5 py-3 border-gray-500
'>
    <div>
        <span onClick={()=>setPlan("Annually")}
        className={`${plan==="Annually"?"text-black":"text-gray-400"}cursor-pointer`}>Annually</span>
        <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
    </div>
    <p onClick={()=>setPlan("monthly")}
    className={`${plan==="monthly"?"text-black":"text-gray-400"}cursor-pointer`}>Monthly</p>
</div>
<div className='space-y-3'>
   {features.map((item)=><div className='flex items-center space-x-5'>
<FiberManualRecordIcon sx={{width:"7px",height:"7px"}}></FiberManualRecordIcon>
<p className='text-sm'>{item}</p>
</div>) }
</div>
<div className='cursor-pointer flex justify-center rounded-full px-5 py-3 bg-slate-600'>
    <span className='line-through italic'>₹7,800.00</span>
    <span className='px-5'>₹6,800/year</span>
</div>
</div>

                </div>
        </Box>
      </Modal>
    </div>
  );
}

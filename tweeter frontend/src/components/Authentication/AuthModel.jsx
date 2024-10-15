import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: "none"
};

export default function AuthModal({ open, handleClose }) {  // Destructure props here
  const location=useLocation();
  const navigate=useNavigate();
  const handleNavigate=()=>{
    const path=location.pathname==="/signup"?"/signin":"/signup"
navigate(path)
  }
    return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-center font-bold text-3xl pd-20'>
            Create Your Account
          </h1>
          {location.pathname==="/signup"?<SignupForm/>:<SigninForm/>}
        <h1 className='font-semibold text-lg text-center py-5 text-gray-500'>
        {location.pathname==="/signup"?"Already Have Account?":"If you dont have account"}

        </h1>
        <Button variant='outlinned'
        onClick={handleNavigate}
        sx={{borderRadius:"29px",py:"15px"}}>
            {location.pathname==="/signup"?"signin":"signup"}
        </Button>
        </Box>
      </Modal>
    </div>
  );
}

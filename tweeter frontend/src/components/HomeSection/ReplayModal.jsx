import * as React from 'react';
import Box from '@mui/material/Box';
import RepeatIcon from '@mui/icons-material/Repeat';
import Modal from '@mui/material/Modal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon  from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart'
import Favorite  from '@mui/icons-material/Favorite';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import { useFormik } from 'formik';
import { useState } from 'react';

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

export default function ReplayModal({handleClose,open}) {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectimage, setSelectImage] = useState("");


  const navigate =useNavigate()

  const handleSubmit=(values)=>{
    console.log("handle submit",values)
  }
  const formik=useFormik({
    initialValues:{
        content:"",
        image:"",
        tweetId:4
    },
    onSubmit:handleSubmit
  })
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image", imgUrl);
    setUploadingImage(false);
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
                    
                </div>
                <div className='mt-2 '>
                    <div className='cursor-pointer' onClick={()=>navigate(`/tweet/${3}`)}>
                    <p className='mb-2 p-0'>The Beautiful Dal lake of India 🌊</p>
                    <img className='w-[28rem] border
                     border-gray-400 rounded-md'
                      src="https://www.kashmironline.com/blog/wp-content/uploads/2022/05/dal.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section> */}
           
        </div>
        <section className={`py-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt='username' src='https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg' />
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input type="text" name='content' placeholder='What is happening'
                                    className={`border-none outline-none text-xl bg-transparent`} 
                                    {...formik.getFieldProps("content")} />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]'></ImageIcon>
                                        <input
                                            type="file"
                                            name='imageFile'
                                            className='hidden'
                                            onChange={handleSelectImage} />
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]'></FmdGoodIcon>
                                    <TagFacesIcon className='text-[#1d9bf0]'></TagFacesIcon>
                                </div>
                                <div>
                                    <Button sx={{
                                        width: "100%",
                                        borderRadius: "20px",
                                        paddingX: "20px",
                                        paddingY: "8px",
                                        bgcolor: '#1e88e5'
                                    }}
                                        variant='contained'
                                        type='submit'>
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Box>
      </Modal>
    </div>
  );
}

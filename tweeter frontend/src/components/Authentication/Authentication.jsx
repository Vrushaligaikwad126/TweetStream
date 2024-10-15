// import { Grid2 } from '@mui/material'
// import React from 'react'

// const Authentication = () => {
//   return (
//     <div>
//       <Grid2 className='overflow-y-hidden'container>
//         <Grid2 className='hidden lg:block'item="true" lg={7}>
//           <img  className='w-full h-screen '
//           src="https://androidguias.com/wp-content/uploads/2021/05/twitter-2.jpg" 
//           alt="" />
//           {/* <div className='absolute top=[26%] left-[19%]'>
//               <svg height="300"
//               width="300"
//               viewBox='0 0 24 24'
//               aria-hidden="true"
//               class="">

//               </svg>
//           </div> */}
//         </Grid2>
//       </Grid2>
//     </div>
//   )
// }

// export default Authentication
// import { Grid } from '@mui/material'; // Use Grid instead of Grid2 for clarity
// import { GoogleLogin } from '@react-oauth/google';
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import AuthModal from './AuthModel';

// const Authentication = () => {
//   const[openAuthModel,setOpenAuthModel]=useState(false);
//   const handleOpenAuthModel=()=>setOpenAuthModel(true);
//   const handleCloseAuthModel=()=>setOpenAuthModel(false);
//   return (
//     <div>
//       <Grid container className='overflow-y-hidden'>
//         {/* Image Grid Item */}
//         <Grid item lg={7} xs={12}>
//           <img 
//             className='w-full h-screen' // Adjust to maintain aspect ratio
//             src="https://androidguias.com/wp-content/uploads/2021/05/twitter-2.jpg" 
//             alt="" 
//             style={{ objectFit: 'cover' }} 
//           />
//         </Grid>

//         {/* Content Grid Item */}
//         <Grid item lg={5} xs={12} display="flex" flexDirection="column" justifyContent="center" className="px-10">
//           <h1 className='font-bold text-7xl'>Happening Now</h1>
//           <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>

//           <div className="w-[60%]">
//             <div className="w-full">
//               <GoogleLogin width={330}></GoogleLogin>
//               <p className='py-5 text-center'>OR</p>

//               <Button onClick={handleOpenAuthModel} fullWidth variant="contained" size="large" sx={{
//                 borderRadius: "29px",
//                 py: "7px"
//               }}>
//                 Create Account
//               </Button>

//               <p className='text-sm mt-2'>By signing up, you agree to the terms of service and privacy policy, including cookie use.</p>
//             </div>
//             <div className='mt-10'>
//               <h1 className='font-bold text-xl mb-5'>Already have an Account?</h1>
//               <Button onClick={handleOpenAuthModel} fullWidth variant="outlined" size="large" sx={{
//                 borderRadius: "29px",
//                 py: "7px"
//               }}>
//                 Login
//               </Button>
//             </div>
//           </div>
//         </Grid>
//       </Grid>
//       <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel}></AuthModal>
//     </div>
//   );
// }

// export default Authentication;
import { Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AuthModal from './AuthModel';

const Authentication = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const handleOpenAuthModel = () => setOpenAuthModel(true);
  const handleCloseAuthModel = () => setOpenAuthModel(false);

  return (
    <div>
      <Grid container className='overflow-y-hidden'>
        <Grid item lg={7} xs={12}>
          <img 
            className='w-full h-screen' 
            src="https://androidguias.com/wp-content/uploads/2021/05/twitter-2.jpg" 
            alt="" 
            style={{ objectFit: 'cover' }} 
          />
        </Grid>

        {/* Content Grid Item */}
        <Grid item lg={5} xs={12} display="flex" flexDirection="column" justifyContent="center" className="px-10">
          <h1 className='font-bold text-7xl'>Happening Now</h1>
          <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>

          <div className="w-[60%]">
            <div className="w-full">
              <GoogleLogin width={330}></GoogleLogin>
              <p className='py-5 text-center'>OR</p>

              <Button onClick={handleOpenAuthModel} fullWidth variant="contained" size="large" sx={{
                borderRadius: "29px",
                py: "7px"
              }}>
                Create Account
              </Button>

              <p className='text-sm mt-2'>By signing up, you agree to the terms of service and privacy policy, including cookie use.</p>
            </div>
            <div className='mt-10'>
              <h1 className='font-bold text-xl mb-5'>Already have an Account?</h1>
              <Button onClick={handleOpenAuthModel} fullWidth variant="outlined" size="large" sx={{
                borderRadius: "29px",
                py: "7px"
              }}>
                Login
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel} /> {/* Ensure correct prop name */}
    </div>
  );
}

export default Authentication;

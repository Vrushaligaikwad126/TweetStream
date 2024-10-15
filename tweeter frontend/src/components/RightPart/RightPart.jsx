import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import BrightnessIcon from '@mui/icons-material/Brightness4'
import  Button  from '@mui/material/Button'
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal'
const RightPart = () => {
    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);
    const handleChangeTheme=()=>{
        console.log("handle change theme")
    }
    return (
        <div className='py-5 sticky-top'>
            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full w-full text-gray-500 pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500'></SearchIcon>
                    
                </div>
                <BrightnessIcon className='ml-3 cursor-pointer' onClick={handleChangeTheme}></BrightnessIcon>
            </div>
            <section>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='my-2 font-bold'>Subscribe to Unlock new Features</h1>
                <Button variant='contained' sx={{padding: "10px",paddingx:"20px",borderRadius: "25px",}}
                onClick={handleOpenSubscriptionModel}>
                    Get Verified
                </Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's Happening</h1>
                <div>
                    <p className='text-sm'>World War 3?</p>
                    <p className='font-bold'>Massive blasts in Beirut after renewed Israeli air strikes</p>
                    <p>2M tweets</p>
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <p>Entertainment Trending</p>
                        <p className='font-bold'>Ananya Panday Delivers The Darkest-Desi Shade Of Black Mirror </p>
                        <p>34.3k tweets</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <p>T20I series</p>
                        <p className='font-bold'>INDIA vs BANGLADESH</p>
                        <p>34.3k tweets</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div><div className='flex justify-between w-full'>
                    <div>
                        <p>Global Stocks</p>
                        <p className='font-bold'>Goldman Sachs says crude could spike by $20 on Iran oil shock</p>
                        <p>34.3k tweets</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel}></SubscriptionModal>
            </section>
        </div>
    )
}

export default RightPart
import React from 'react'
import { Email, Password, TransgenderTwoTone } from '@mui/icons-material'
import { Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';

const validationSchema=Yup.object().shape({
    email:Yup.string().email("Invalid Email").required("email is required"),
    password:Yup.string().required("Password is requires")
})


const currentYear=new Date().getFullYear();
const years=Array.from({length:100},(_,i)=>currentYear-i);
const days=Array.from({length:31},(_,i)=>i+1);
const months=[
    {value:1,label:"january"},
    {value:2,label:"february"},
    {value:3,label:"march"},
    {value:4,label:"april"},
    {value:5,label:"may"},
    {value:6,label:"june"},
    {value:7,label:"july"},
    {value:8,label:"august"},
    {value:9,label:"september"},
    {value:10,label:"october"},
    {value:11,label:"november"},
    {value:12,label:"december"}
]
const SignupForm = () => {
    const formik=useFormik({
        initialValues:{
            fullname:"",
            email:"",
            password:"",
            dateOfBirth:{
                day:'',
                month:'',
                year:''
            }
        },
        validationSchema,
        // onSubmit:(values)=>{
        //     const {day,month,year}=values.dateOfBirth
        //     const dateOfBirth=`${year}-${month}-${day}`
        //     values.dateOfBirth=dateOfBirth;

        //     console.log("form value",values)
        // }
        onSubmit: (values) => {
            const { day, month, year } = values.dateOfBirth;
            if (day && month && year) {
                const dateOfBirth = `${year}-${month}-${day}`;
                values.dateOfBirth = dateOfBirth;
            } else {
                console.error("Please select a complete date.");
                return; // Early return if date is incomplete
            }
        
            console.log("form value", values);
        }
        
    })
    const handleDateChange=(name)=>(event)=>{
        formik.setFieldValue("dateOfBirth",{
            ...formik.values.dateOfBirth,
            [name]:event.target.value,

        })
    }
  return (
    <form onSubmit={formik.handleSubmit}>
     <Grid container spacing={2}>
     <Grid item xs={12}>
        <TextField fullWidth
        label="Full Name"
        name='fullname'
        variant='outlined'
        size='large'
        value={formik.values.fullname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
        helperText={formik.touched.fullname && formik.errors.fullname}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField fullWidth
        label="Email"
        name='email'
        variant='outlined'
        size='large'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField fullWidth
        label="Password"
        name='password'
        variant='outlined'
        size='large'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        />
        </Grid>

        <Grid item xs={4}>
            <InputLabel>Date</InputLabel>
            <Select name="day"
            fullWidth
            onChange={handleDateChange("day")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.day}>
                {days.map((day)=><MenuItem key={day} value={day}>{day}</MenuItem>)}
            </Select>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>Month</InputLabel>
            <Select name="month"
            fullWidth
            onChange={handleDateChange("month")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.month}>
                {months.map((month)=>
                    (<MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>))}
            </Select>
        </Grid>
        <Grid item xs={4}>
            <InputLabel>Year</InputLabel>
            <Select name="year"
            fullWidth
            onChange={handleDateChange("year")}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth.year}>
                {years.map((year)=><MenuItem key={year} value={year}>{year}</MenuItem>)}
            </Select>
        </Grid>

        <Grid className='mt-20' item xs={12}>
            <Button sx={{borderRadius: "29px",py:"15px",bgcolor:blue[500]}}
            type="submit" 
            fullWidth variant="contained"
            size="large">signup</Button>
        </Grid>
     </Grid>
    </form>
  )
}

export default SignupForm
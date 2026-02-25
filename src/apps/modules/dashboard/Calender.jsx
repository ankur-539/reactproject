import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Calender() {
    return (
        <div className='row'>
            <div className="col-sm-12 hight-1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar className='border bg-white bg-opacity-75  w-100 ' />
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default Calender
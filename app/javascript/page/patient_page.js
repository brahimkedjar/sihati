import React, { useState, useEffect } from 'react';
import NavBarPat from "../components_help/NavBarPat";
import { Routes, Route } from "react-router-dom";
import SearchDoctors from '../page/SearchDoctors';
import FindDoctor from '../page/FindDoctor';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  PatientPage:{
  background: 'linear-gradient(to bottom, rgba(48, 94, 255, 0.5), rgba(52, 155, 219, 0.5)), url("https://wallpaper.dog/large/20499790.jpg")',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'contain',
  backgroundposition: 'center center',
  minheight: '100vh',
  }
}))
function PatientPage() {
  const classes = useStyles();


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch the user data from the API
    fetch('/api/v1/patient_data')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }, []);

  if (!userData) {
    // Render a loading indicator while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div  className={classes.PatientPage}>
      <NavBarPat />
      <Routes>
        <Route path='' element={<SearchDoctors/>}/>
        <Route path='SearchDoctors' element={<SearchDoctors/>}/>
        <Route path='FindDoctor' element={<FindDoctor userData={userData} />} />
      </Routes>
    </div>
  );
}

export default PatientPage;

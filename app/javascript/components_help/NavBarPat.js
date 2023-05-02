import React from 'react';
import '../css/NavBarAcount.css'
import { Link } from 'react-router-dom';
function NavBarPat() {
  return (
    <div className="NavBarPat">
      <div className='navigationPat' >
        <Link to='/PatientPage/SearchDoctors'> <span> Médecins </span> </Link>
        <Link to='/PatientPage/FindDoctor' > <span> Chercher un médecin </span> </Link>
      </div>
    </div>
  );
}

export default NavBarPat;

import { useEffect, useState } from 'react';
import styles from '../css/Doctor.module.css';
import React from 'react';
import avatarIcon from '../img/avatar.jpg';

function DoctorAccount(props) {
  const { doctorData } = props;
  const [editable, setEditable] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    specialite: doctorData.doctor_data.specialite,
    address: doctorData.doctor_data.address,
    phone_number: doctorData.doctor_data.phone_number,
  });

  useEffect(() => {
    console.log(doctorData);
  }, [doctorData]);

  const handleModify = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    // TODO: Update the fields with the updatedData
  };

  if (!doctorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={doctorData.image_url || avatarIcon} alt="doctor" />
        </div>
        <div className={styles.info}>
          <h2>Dr. {doctorData.doctor_data.name}</h2>
          <div>
            <span className={styles.label}>Spécialité:</span> {editable ? (
              <input
                type="text"
                value={updatedData.specialite}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, specialite: e.target.value })
                }
              />
            ) : (
              doctorData.doctor_data.specialite
            )}
          </div>
          <div>
            <span className={styles.label}>Address:</span> {editable ? (
              <input
                type="text"
                value={updatedData.address}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, address: e.target.value })
                }
              />
            ) : (
              doctorData.doctor_data.address
            )}
          </div>
          <div>
            <span className={styles.label}>numéro clinique:</span> {editable ? (
              <input
                type="text"
                value={updatedData.phone_number}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, phone_number: e.target.value })
                }
              />
            ) : (
              doctorData.doctor_data.phone_number
            )}
          </div>
          <div className={styles.buttoncontainer}>
            <button className={styles.modify} onClick={editable ? handleSave : handleModify}>
              {editable ? 'Sauvgader' : 'Modifier'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorAccount;

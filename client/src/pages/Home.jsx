import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Row } from 'antd'
import DoctorList from '../components/doctorlist'

const Home = () => { 
  const [doctors, setDoctors] = useState([]);
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 style={{display:"flex",justifyContent:"center"}}>Home</h1>
      {doctors.length?<Row>
        {doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>:<div style={{display:"flex",justifyContent:"center",marginTop:"45px"}}>
        <h3 style={{color:"blue"}}>No doctors</h3>
        </div>}
      
    </Layout>
  )
}

export default Home
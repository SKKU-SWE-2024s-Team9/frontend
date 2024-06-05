import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
import { useState, useEffect } from 'react';
import axios from "axios";

const AdminPage = () => {

  const [submittedCList, setSubmittedCList] = useState([]);
  const [submittedLList, setSubmittedLList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/manage/forms`);
      const { lab, club } = response.data;
      setSubmittedCList(club);
      setSubmittedLList(lab);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.adminPage}>
      <b className={styles.clubManageList}>동아리 신청 및 수정 목록</b>
      <b className={styles.labManageList}>랩 신청 및 수정 목록</b>

      <div className={styles.clubManage}>
        {submittedCList.map((club, index) => (
          <Link 
            key={index} 
            className={styles.clubName} 
            to={`/admin/manage/forms/${club.id}`}
            state={{ name: club.name }}
          >
            <b className={styles.b}>{club.name}</b>
            <b className={styles.yyyymmdd}>신청 일자: {club.createdAt.substring(0, 10)}</b>
          </Link>
        ))}
      </div>
      
      <div className={styles.labManage}>
        {submittedLList.map((lab, index) => (
          <Link 
            key={index} 
            className={styles.labName} 
            to={`/admin/manage/forms/${lab.id}`}
            state={{ name: lab.name }}
          >
            <b className={styles.b}>{lab.name}</b>
            <b className={styles.yyyymmdd}>신청 일자: {lab.createdAt.substring(0, 10)}</b>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

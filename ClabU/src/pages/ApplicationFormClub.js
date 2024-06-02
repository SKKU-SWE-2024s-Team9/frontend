import React, { useState, useCallback } from "react";
import Frame from "../components/Frame";
import Submit from "../components/Submit";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ClubLogo from "../components/ClubLogo";
import Navigation1 from "../components/Navigation1";
import styles from "./ApplicationFormClub.module.css";

const ApplicationFormClub = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isSubmitOpen, setSubmitOpen] = useState(false);
  const navigate = useNavigate();

  const [clubform, setClubForm] = useState({
    logo: '',
    clubName: '',
    description: '',
    clubTags: '',
    clubLocation: '',
    representativeName: '',
    representativeContact: '',
    website: '',
    members: '',
    username: '',
    password: '',
  });

  const onApplicationContainerClick = useCallback(() => {
    navigate("/application-form-lab");
  }, [navigate]);

  const onListContainerClick = useCallback(() => {
    navigate("/club-list");
  }, [navigate]);

  const onSearchContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onClabUTextClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onLogoIconClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openSubmit = useCallback(() => {
    setSubmitOpen(true);
  }, []);

  const closeSubmit = useCallback(() => {
    setSubmitOpen(false);
  }, []);

  const onLabTextClick = useCallback(() => {
    navigate("/application-form-lab");
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubForm({
      ...clubform,
      [name]: value,
    });
  };

  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <>
      <div className={styles.applicationFormClub}>
        <div className={styles.clubMembers}>
          <div className={styles.clubMembersChild} />
          <input className={styles.membersInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "몇명인지 입력해 주세요"}
          type="number"
          min="0"
          name="members"
          value={clubform.members} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 구성원 (명)</b>
        </div>
        <div className={styles.clubPage}>
          <div className={styles.clubMembersChild} />
          <input className={styles.pageInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "동아리 홈페이지 및 sns를 입력해주세요"}
          type="text"
          name="website"
          value={clubform.website} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 홈페이지 / sns</b>
        </div>
        <div className={styles.clubRepEmail}>
          <div className={styles.clubMembersChild} />
          <input className={styles.contactInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "대표자 이메일을 입력해 주세요>"}
          type="text"
          name="representativeContact"
          value={clubform.representativeContact} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>대표자 연락처</b>
        </div>
        <div className={styles.clubRepName}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubRepInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "대표자 이름을 입력해 주세요"}
          type="text"
          name="representativeName"
          value={clubform.representativeName} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>대표자 이름</b>
        </div>
        <div className={styles.clubLocation}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubLocInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "동아리방 번호와 활동 장소 위치를 입력해주세요"}
          type="text"
          name="clubLocation"
          value={clubform.clubLocation} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리방 / 활동 장소 위치</b>
        </div>
        <div className={styles.clubTag}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubTagInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "동아리 태그를 입력해주세요"}
          type="text"
          name="clubTags"
          value={clubform.clubTags} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 태그</b>
        </div>
        <div className={styles.clubDescription}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubDescInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "동아리를 설명해주세요"}
          type="text"
          name="description"
          value={clubform.description} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 설명</b>
        </div>
        <div className={styles.clubName}>
          <div className={styles.clubMembersChild} />
          <input className={styles.clubNameInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "동아리 이름을 입력해 주세요"}
          type="text"
          name="clubName"
          value={clubform.clubName} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>동아리 이름</b>
        </div>
        <ClubLogo
          prop1="동아리 로고"
          propTop="220px"
        />
        <Navigation1
          logIn="/login@2x.png"
          account1="/account-1@2x.png"
          logo="/logo@2x.png"
          propWidth="100%"
          propRight="0px"
          onApplicationContainerClick={onApplicationContainerClick}
          onListContainerClick={onListContainerClick}
          onSearchContainerClick={onSearchContainerClick}
          onClabUTextClick={onClabUTextClick}
          onLogoIconClick={onLogoIconClick}
        />
        <div className={styles.labIdPassword}>
          <div className={styles.labIdPasswordChild} />
          <b className={styles.b14}>아이디</b>
          <input className={styles.idInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "아이디를 입력해 주세요"}
          type="text"
          name="username"
          value={clubform.username} 
          onChange={handleChange} 
          />
          <div className={styles.labIdPasswordItem} />
          <b className={styles.b16}>비밀번호</b>
          <input className={styles.pwInput}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          // 클릭되어 있지 않을 때 작동(input 이외의 영역이 클릭되었을 때)
          onBlur={() => {
            setIsInputClicked(false);
          }}
          placeholder={isInputClicked === true ? "" : "비밀번호를 입력해 주세요"}
          type="text"
          name="password"
          value={clubform.password} 
          onChange={handleChange} 
          />
          <b className={styles.b1}>회원가입 아이디 및 비밀번호</b>
          <div className={styles.div} onClick={openFrame}>
          <b className={styles.b19}>아이디 중복 확인</b>
          </div>
        </div>
        <div className={styles.submit} onClick={openSubmit}>
          <b className={styles.b20}>제출</b>
        </div>
        <div className={styles.tab}>
          <b className={styles.club}>club</b>
          <div className={styles.lab} onClick={onLabTextClick}>
            lab
          </div>
        </div>
        <div className={styles.applicationFormClubChild} />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isSubmitOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSubmit}
        >
          <Submit onClose={closeSubmit} />
        </PortalPopup>
      )}
    </>
  );
};

export default ApplicationFormClub;

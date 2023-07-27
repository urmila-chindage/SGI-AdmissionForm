import React ,{useState} from 'react';
import "../Admission/AdmissionForm.css";
import Profile from "../../Images/profileimage.jpg";
import { Table, TableCell, TableContainer, TableRow ,TableBody } from "@material-ui/core";
import axios from "axios";

const AdmissionForm = () => {
    const [profile, setProfile] = useState(Profile);
  const [studGender, setStudGender] = useState("Male");
 
  const [selectedBranchOption, setSelectedBranchOption] = useState(null);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
  const [selectedMinority,setSelectedMinority] = useState(null);
  const [selectedDisability ,setSelectedDisability ] = useState(null);
  const [selectedDefence  ,setSelectedDefence  ] = useState(null);

  const [studCArea,setStudCArea] = useState(null);
  const [studPArea,setStudPArea] = useState(null);

  const [SscYear, setSscYear] = useState('')
    const [SscMarkObt, setSscMarkObt] = useState('')
    const [SscMark, setSscMark] = useState('')
    const [SscPercent, setSscPercent] = useState('')
    
    const [HscYear, setHscYear] = useState('')
    const [HscMarkObt, setHscMarkObt] = useState('')
    const [HscMark, setHscMark] = useState('')
    const [HscPercent, setHscPercent] = useState('')
   
    const [DipYear, setDipYear] = useState('')
    const [DipMarkObt, setDipMarkObt] = useState('')
    const [DipMark, setDipMark] = useState('')
    const [DipPercent, setDipPercent] = useState('')
    
    const [CetRollNo, setCetRollNo] = useState('')
    const [CetYear, setCetYear] = useState('')
    const [CetMathScr, setCetMathScr] = useState('')
    const [CetPhyScr, setCetPhyScr] = useState('')
    const [CetChemScr, setCetChemScr] = useState('')
    const [CetTotal, setCetTotal] = useState('')
    
    const [JeeRollNo, setJeeRollNo] = useState('')
    const [JeeYear, setJeeYear] = useState('')
    const [JeeMathScr, setJeeMathScr] = useState('')
    const [JeePhyScr, setJeePhyScr] = useState('')
    const [JeeChemScr, setJeeChemScr] = useState('')
    const [JeeTotal, setJeeTotal] = useState('')

    const [AdmissionLetter, setAdmissionLetter] = useState(false)
    const [SscMarkSheet, setSscMarkSheet] = useState(false)
    const [HscMarkSheet, setHscMarkSheet] = useState(false)
    const [CetMarkSheet, setCetMarkSheet] = useState(false) 
    const [JeeMarkSheet, setJeeMarkSheet] = useState(false) 
    const [DiplomaMarkSheet, setDiplomaMarkSheet] = useState(false) 
    const [LCTC, setLCTC] = useState(false) 
    const [Domicile, setDomicile] = useState(false) 
    const [GapCerti, setGapCerti] = useState(false) 
    const [CastCerti, setCastCerti] = useState(false) 
    const [CastVali, setCastVali] = useState(false) 
    const [NonCreamy, setNonCreamy] = useState(false) 
    const [IncomeCerti, setIncomeCerti] = useState(false) 
    const [DefenceCerti, setDefenceCerti] = useState(false) 
    const [PhysicalDisCerti, setPhysicalDisCerti] = useState(false) 
    const [AdharX, setAdharX] = useState(false) 
    
    const [Remark, setRemark] = useState('') 

    const [agreeStudent, setAgreeStudent] = useState(false);
    const [AgreeParent, setAgreeParent] = useState(false)

  const [student, setStudent] = useState({
    studFullName: "",
    studDob: "",
    studAdhar: "",
    studSign: "",
    studContact:"",
    parentContact:"",
    studEmail:"",
    studNationality:"",
    studBloodGroup:"",
    studFatherName:"",
    studFatherOccupation:"",
    studMotherName:"",
    studCAddress:"",
    studCCity:"",
    studCPincode:"",
    studCTaluka:"",
    studCDistrict:"",
    studCState:"",
    studPAddress:"",
    studPCity:"",
    studPPincode:"",
    studPTaluka:"",
    studPDistrict:"",
    studPState:""
  });

  const { selectedBranchOption1, studFullName, studDob, studGender1, studAdhar, studSign,studContact,parentContact,studEmail,studNationality,studBloodGroup,studFatherName,studFatherOccupation,studMotherName,studCAddress,studCCity,studCPincode,studCTaluka,studCDistrict,studCState,studPAddress,studPCity,studPPincode,studPTaluka,studPDistrict,studPState } =
    student;

    const ValidateForm = () =>{

        if(SscYear.length == 0 || SscMarkObt.length == 0 || SscMark.length == 0 || SscPercent.length == 0 || HscYear.length == 0 || HscMarkObt.length == 0 || HscMark.length == 0 || HscPercent.length == 0 || DipYear.length == 0 || DipMarkObt.length == 0 || DipMark.length == 0 || DipPercent.length == 0 || CetRollNo.length == 0 || CetYear.length == 0 || CetMathScr.length == 0 || CetPhyScr.length == 0 || CetPhyScr.length == 0 || CetChemScr.length == 0 || CetTotal.length == 0 || JeeRollNo.length == 0 || JeeYear.length == 0 || JeeMathScr.length == 0 || JeePhyScr.length == 0 || JeeChemScr.length == 0 || JeeTotal.length == 0){
            alert("Fields Can not be blank")
        }
    }
    const checkboxHandler = () => {
        setAgreeStudent(!agreeStudent);
    }

  function handleChange(e) {
    const target = e.target;
    if (target.checked) {
      setStudGender(target.value);
    }
  }
const handleBranchCheckbox = (branch) => {
    setSelectedBranchOption(branch);
};

const handleCategoryCheckbox = (category) => {
  setSelectedCategoryOption(category);
};

const handleMinorityCheckbox = (minority) => {
  setSelectedMinority(minority);
};

const handleDisabilityCheckbox = (disability) => {
  setSelectedDisability(disability);
};

const handleDefenceCheckbox = (defence) => {
  setSelectedDefence(defence);
};

const handleCareaCheckbox = (cArea) => {
  setStudCArea(cArea);
};
const handlePareaCheckbox = (pArea) => {
  setStudPArea(pArea);
};

const registerDataChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setStudent({ ...student, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  {/*console.log(selectedBranchOption,studFullName,studDob,studAdhar,studContact,parentContact,studEmail,studNationality,studBloodGroup,studFatherName,studFatherOccupation,profile,studMotherName,selectedCategoryOption,selectedMinority,selectedDisability,selectedDefence,studCAddress,studCCity,studCArea,studCPincode,studCTaluka,studCDistrict,studCState,studPAddress,studPCity,studPPincode,studPArea,studPTaluka,studPDistrict,studPState,SscYear,SscMarkObt,SscMark,SscPercent,HscYear,HscMarkObt,HscMark,HscPercent,DipYear,DipMarkObt,DipMark,DipPercent,CetRollNo,CetYear,CetMathScr,CetPhyScr,CetPhyScr,CetChemScr,CetTotal,JeeRollNo,JeeYear,JeeMathScr,JeePhyScr,JeeChemScr,JeeTotal,agreeStudent,AgreeParent) */}
  const payload = {
    Branch:selectedBranchOption,
    FullName:student.studFullName,
    DOB : student.studDob,
    Gender : studGender,
    StudentPhoto  : profile,
    PhotoSign : studSign,
    AdharcardNo : student.studAdhar,
    ContactStudent : student.studContact,
    ContactParents : student.parentContact,
    Email : student.email,
    Nationality : student.studNationality,
    Bloodgrp : student.studBloodGroup,
    FatherName : student.studFatherName,
    Occupation : student.studFatherOccupation,
    MotherName : student.studMotherName,
    Category : selectedCategoryOption,
    MinorityTypeCandidature : selectedMinority,
    DisabilityTypeCandidature : selectedDisability,
    DefenceType : selectedDefence,
    CorrespondenceAddress : student.studCAddress,
    CCityVillage : student.studCCity,
    CArea : studCArea,
    CPincode : student.studCPincode,
    CTaluka : student.studCTaluka,
    CDistrict : student.studCDistrict,
    CState : student.studCState,
    PermanentAddress : student.studPAddress,
    PCityVillage : student.studPCity,
    PArea : studPArea,
    PPincode : student.studPPincode,
    PTaluka : student.studPTaluka,
    PDistrict : student.studPDistrict,
    PState : student.studPState,
    YrOfPassingSSC : SscYear,
    ObtainedMarksSSC : SscMarkObt,
    MarksOutOfSSC : SscMark,
    PercentageOfMarksSSC : SscPercent,
    YrOfPassingHSC : HscYear,
    ObtainedMarksHSC : HscMarkObt,
    MarksOutOfHSC : HscMark,
    PercentageOfMarksHSC : HscPercent,
    YrOfPassingOther : DipYear,
    ObtainedMarksOther : DipMarkObt,
    MarksOutOfOther : DipMark,
    PercentageOfMarksOther : DipPercent,
    ApplicationNoMHTCET : CetRollNo,
    YearOfPassingMHTCET : CetYear,
    MathematicsScoreMHTCET : CetMathScr,
    PhysicsScoreMHTCET : CetPhyScr,
    ChemistryScoreMHTCET : CetChemScr,
    TotalScoreMHTCET : CetTotal,
    ApplicationNoJEEMAins : JeeRollNo,
    YearOfPassingJEEMAins : JeeYear,
    MathematicsScoreJEEMAins : JeeMathScr,
    PhysicsScoreJEEMAins : JeePhyScr,
    ChemistryScoreJEEMAins : JeeChemScr,
    TotalScoreJEEMAins : JeeTotal,
    SSCMarksheet : SscMarkSheet,
    HSCMarksheet : HscMarkSheet,
    MHTCETScoreCard : CetMarkSheet,
    JEEMains : JeeMarkSheet,
    DipBSC : DiplomaMarkSheet,
    LeavingTransferCert : LCTC,
    NationalityDomicileBirt : Domicile,
    GAPCert : GapCerti,
    CasteCertificate : CastCerti,
    CasteValidityCertificate : CastVali,
    Noncreamylayer : NonCreamy,
    IncomeCerificate : IncomeCerti,
    CertiDefense : DefenceCerti,
    DisabilityCert : PhysicalDisCerti,
    AdharCard : AdharX,
    Remark : Remark,
    SignatureStudent  : agreeStudent,
    SignatureParent  : AgreeParent

  }
       axios
           .post(
             "https://localhost:44300/api/AdmissionFormInsertRecord",payload
            
           )
           .then((res) => {
             console.log(res.data);
             alert("Data Uploaded Successfully!!!");
           })
           .catch((error) => {
             console.log(error);
          }); 
    
  };
  return (
    <>
        {/*************** First level Form start Here *******************/}
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="admission-section">
        <section>
      
        <div className="container-fluid">
        <div className="form-heading">
          <h4>Academic year : 2023-2024</h4>
          <h6>
            Admission form for first/direct second year - B.tech (engineering)
          </h6>
        </div>

        <div className="container">
        <div className="row">
        
           
              <div className="form-left-container col-md-8">
                <div className="branch">
                  <label className="mr-5">Branch : </label>

                  <div className="checkbox-container">
                    <label className="mr-5">CSE</label>
                    <input
                      type="checkbox"
                      name="selectedBranchOption1"
                      value="CSE"
                      checked={selectedBranchOption === 'cse'}
                      onChange={() => handleBranchCheckbox('cse')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">Civil</label>
                    <input
                      type="checkbox"
                      name="civil"
                      value="Civil"
                      checked={selectedBranchOption === 'civil'}
                      onChange={() => handleBranchCheckbox('civil')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">Electrical</label>
                    <input
                      type="checkbox"
                      name="electrical"
                      value="Electrical"
                      checked={selectedBranchOption === 'electrical'}
                      onChange={() => handleBranchCheckbox('electrical')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">E & TC </label>
                    <input
                      type="checkbox"
                      name="electronics"
                      value="E & TC"
                      checked={selectedBranchOption === 'electronics'}
                      onChange={() => handleBranchCheckbox('electronics')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">MECH</label>
                    <input
                      type="checkbox"
                      name="mech"
                      value="MECH"
                      checked={selectedBranchOption === 'mechanical'}
                      onChange={() => handleBranchCheckbox('mechanical')}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="form-label">Student's Full Name : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studFullName"
                      className="form-control"
                      value={studFullName}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="form-label">Date of Birth : </label>

                  <div className="input-container">
                    <input
                      type="date"
                      required
                      name="studDob"
                      className="form-control"
                      value={studDob}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label>Gender : </label>
                  <div className="gender-container">
                    <label className="mr-5">Male</label>
                    <input
                      type="radio"
                      name="studGender"
                      value="male"
                      checked={studGender == 'male'}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="gender-container1">
                    <label className="mr-5">Female</label>
                    <input
                      type="radio"
                      name="studGender"
                      value="female" checked={studGender == 'female'} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="form-label">Adhar Card No : </label>

                  <div className="input-container">
                    <input
                      type="number"
                      required
                      name="studAdhar"
                      className="form-control"
                      value={studAdhar}
                      onChange={registerDataChange}
                      onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Contact No.(Student) : </label>

                  <div className="input-container">
                    <input
                      type="number"
                      required
                      name="studContact"
                      className="form-control"
                      value={studContact}
                      onChange={registerDataChange}
                      onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Contact No.(Parent) : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="parentContact"
                      onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}
                      className="form-control"
                      value={parentContact}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Email Id : </label>

                  <div className="input-container">
                    <input
                      type="email"
                      required
                      name="studEmail"
                      className="form-control"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      value={studEmail}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Nationality : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studNationality"
                      className="form-control"
                      value={studNationality}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Blood Group : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studBloodGroup"
                      className="form-control"
                      value={studBloodGroup}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Father's Name : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studFatherName"
                      className="form-control"
                      value={studFatherName}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Father's Occupation : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studFatherOccupation"
                      className="form-control"
                      value={studFatherOccupation}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="input-wrapper float-left">
                  <label className="form-label">Mother's Name : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studMotherName"
                      className="form-control"
                      value={studMotherName}
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div className="category">
                  <label className="mr-5">Category : </label>

                  <div className="checkbox-container">
                    <label className="mr-5">Open</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'open'}
                      onChange={() => handleCategoryCheckbox ('open')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">SC</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'sc'}
                      onChange={() => handleCategoryCheckbox ('sc')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">ST</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'st'}
                      onChange={() => handleCategoryCheckbox ('st')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">OBC</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'obc'}
                      onChange={() => handleCategoryCheckbox ('obc')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">SBC</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'sbc'}
                      onChange={() => handleCategoryCheckbox ('sbc')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">VJ/DT</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'vj'}
                      onChange={() => handleCategoryCheckbox ('vj')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">NT-A</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'nta'}
                      onChange={() => handleCategoryCheckbox ('nta')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">NT-B</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'ntb'}
                      onChange={() => handleCategoryCheckbox ('ntb')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">NT-C</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'ntc'}
                      onChange={() => handleCategoryCheckbox ('ntc')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">NT-D</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'ntd'}
                      onChange={() => handleCategoryCheckbox ('ntd')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">EWS</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'ews'}
                      onChange={() => handleCategoryCheckbox ('ews')}
                    />
                  </div>

                  <div className="gender-container">
                    <label className="mr-5">MINORITY</label>
                    <input
                      type="checkbox"
                      checked={selectedCategoryOption === 'minority'}
                      onChange={() => handleCategoryCheckbox ('minority')}
                    />
                  </div>
              </div>

              <div className="minority mt-3">
                  <label className="mr-5">Do you belong to Minority Type Candidature? : </label>

                  <div className="checkbox-container">
                    <label className="mr-5">Yes</label>
                    <input
                      type="checkbox"
                      checked={selectedMinority === 'yes'}
                      onChange={() => handleMinorityCheckbox('yes')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">No</label>
                    <input
                      type="checkbox"
                      checked={selectedMinority === 'no'}
                      onChange={() => handleMinorityCheckbox('no')}
                    />
                  </div>
              </div>

              <div className="minority mt-3">
                  <label className="mr-5">Do You belong to Person with Disability Type Candidature? : </label>

                  <div className="checkbox-container">
                    <label className="mr-5">Yes</label>
                    <input
                      type="checkbox"
                      checked={selectedDisability === 'yes'}
                      onChange={() => handleDisabilityCheckbox('yes')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">No</label>
                    <input
                      type="checkbox"
                      checked={selectedDisability === 'no'}
                      onChange={() => handleDisabilityCheckbox('no')}
                    />
                  </div>
              </div>

              <div className="minority mt-3">
                  <label className="mr-5">Do You belong to Defence Type Candidature? : </label>

                  <div className="checkbox-container">
                    <label className="mr-5">Yes</label>
                    <input
                      type="checkbox"
                      checked={selectedDefence === 'yes'}
                      onChange={() => handleDefenceCheckbox('yes')}
                    />
                  </div>

                  <div className="checkbox-container">
                    <label className="mr-5">No</label>
                    <input
                      type="checkbox"
                      checked={selectedDefence === 'no'}
                      onChange={() => handleDefenceCheckbox('no')}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">Correspondence Address : </label>

                  <div className="input-container">
                    <textarea
                      type="text"
                      required
                      name="studCAddress"
                      className="form-control"
                      value={studCAddress}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">City/Village : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studCCity"
                      className="form-control"
                      value={studCCity}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label>Area : </label>
                  <div className="gender-container">
                    <label className="mr-5">Urban</label>
                    <input
                      type="checkbox"
                      checked={studCArea === 'CUrban'}
                      onChange={() => handleCareaCheckbox('CUrban')}
                    />
                  </div>

                  <div className="gender-container1">
                    <label className="mr-5">Rural</label>
                    <input
                      type="checkbox"
                      checked={studCArea === 'CRural'}
                      onChange={() => handleCareaCheckbox('CRural')}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="form-label">Pincode : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studCPincode"
                      className="form-control"
                      value={studCPincode}
                      onChange={registerDataChange}
                      onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">Taluka : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studCTaluka"
                      className="form-control"
                      value={studCTaluka}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">District : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studCDistrict"
                      className="form-control"
                      value={studCDistrict}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">State : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studCState"
                      className="form-control"
                      value={studCState}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>


              <div className="input-wrapper">
                  <label className="form-label">Permanent Address : </label>

                  <div className="input-container">
                    <textarea
                      type="text"
                      required
                      name="studPAddress"
                      className="form-control"
                      value={studPAddress}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">City/Village : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studPCity"
                      className="form-control"
                      value={studPCity}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label>Area : </label>
                  <div className="gender-container">
                    <label className="mr-5">Urban</label>
                    <input
                      type="checkbox"
                      checked={studPArea === 'PUrban'}
                      onChange={() => handlePareaCheckbox('PUrban')}
                    />
                  </div>

                  <div className="gender-container1">
                    <label className="mr-5">Rural</label>
                    <input
                     type="checkbox"
                     checked={studPArea === 'PRural'}
                     onChange={() => handlePareaCheckbox('PRural')}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label className="form-label">Pincode : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studPPincode"
                      className="form-control"
                      value={studPPincode}
                      onChange={registerDataChange}
                      onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">Taluka : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studPTaluka"
                      className="form-control"
                      value={studPTaluka}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">District : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studPDistrict"
                      className="form-control"
                      value={studPDistrict}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>

              <div className="input-wrapper">
                  <label className="form-label">State : </label>

                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="studPState"
                      className="form-control"
                      value={studPState}
                      onChange={registerDataChange}
                    />
                  </div>
              </div>
            </div>
          <div className="form-right-container col-md-4">
                <div id="registerImage">
                  <img src={profile} alt="Profile Picture" />
                  <input
                    type="file"
                    name="profile"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input
                  type="text"
                  name="studSign"
                  onChange={registerDataChange}
                  placeholder="Sign"
                  value={studSign}
                  className="form-control mt-3"
                />
            </div>
        </div>
    </div>
    </div>
</section>

{/* Academic year Form Start*/}

<section>
<div className="container ">
      
        <div className="m-4 table-responsive">
          <h4 className="text-center p-2" style={{border:'2px',backgroundColor:'gray',color:'white',borderRadius:'10px'}}>Marks Obtained in Board Examination</h4>
          <Table className="">
            <TableBody>
            <TableRow>
              <TableCell>Exam</TableCell>
              <TableCell>Year of Passing</TableCell>
              <TableCell>Marks Obtained</TableCell>
              <TableCell>Marks Out Of</TableCell>
              <TableCell>% of Marks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S.S.C</TableCell>
              <TableCell>
                <input type="text" id="SSCYear" onChange={(e) => setSscYear(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="SSCMark" onChange={(e) => setSscMarkObt(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="SSCOutOf" onChange={(e) => setSscMark(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="SSCPercent" onChange={(e) => setSscPercent(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H.S.C</TableCell>
              <TableCell>
                <input type="text" id="HSCYear" onChange={(e) => setHscYear(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="HSCMark" onChange={(e) => setHscMarkObt(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="HSCOutOf" onChange={(e) => setHscMark(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" id="HSCPercent" onChange={(e) => setHscPercent(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Diploma / B.Sc / D.Voc.</TableCell>
              <TableCell>
                <input type="text" onChange={(e) => setDipYear(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" onChange={(e) => setDipMarkObt(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" onChange={(e) => setDipMark(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
              <TableCell>
                <input type="text" onChange={(e) => setDipPercent(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
              </TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </div>
        <hr />

        <div className="m-4 table-responsive">
        <h4 className="text-center p-2" style={{border:'2px',backgroundColor:'gray',color:'white',borderRadius:'10px'}}>
          Marks Obtained in MHT-CET and/or JEE Mains Examination
        </h4>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-center p-2" style={{border:'2px',backgroundColor:'gray ',color:'white',borderRadius:'10px'}}>MHT-CET</h4>
            <Table>
            <TableBody>
              <TableRow>
               
                <TableCell>Application/Roll No.</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetRollNo(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Year of Passing</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetYear(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mathematics % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetMathScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Physics % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetPhyScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chemistry % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetChemScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setCetTotal(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="col-lg-6">
            <h4 className="text-center p-2" style={{border:'2px',backgroundColor:'gray',color:'white',borderRadius:'10px'}}>JEE Mains Examination</h4>
            <Table>
            <TableBody>
              <TableRow>
                <TableCell>Application/Roll No.</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeeRollNo(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Year of Passing</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeeYear(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mathematics % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeeMathScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Physics % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeePhyScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chemistry % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeeChemScr(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total % Score</TableCell>
                <TableCell>
                  <input type="text" onChange={(e) => setJeeTotal(e.target.value)}  onKeyPress={(event) => {if (!/[.0-9]/.test(event.key));}}></input>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        </div>

        <hr />

        <div className="m-4 table-responsive">
        <h4 className="text-center p-2" style={{border:'2px',backgroundColor:'gray',color:'white',borderRadius:'10px'}}>
          List of Document attached (Original Set and attested Copies in 05
          Sets)
        </h4>
        <div className="row">
          <div className="col-lg-6">
            <Table>
            <TableBody>
              <TableRow>
                <TableCell>Sr No.</TableCell>
                <TableCell>Document Details </TableCell>
                <TableCell>if Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Admission Letter / Seat Acceptance Letter</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setAdmissionLetter(!AdmissionLetter)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>S.S.C (Std. X) Mark Sheet</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setSscMarkSheet(!SscMarkSheet)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>H.S.C (Std. XII) Mark Sheet</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setHscMarkSheet(!HscMarkSheet)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>MHT-CET Score Card</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setCetMarkSheet(!CetMarkSheet)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>JEE Mains Score Card (if applicable)</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setJeeMarkSheet(!JeeMarkSheet)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>
                  Diploma / B.Sc. / D.Voc Mark Sheet (if applicable)
                </TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setDiplomaMarkSheet(!DiplomaMarkSheet)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>
                  Leaving Certificate / Transfer Certificate
                </TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setLCTC(!LCTC)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>
                  Indian Nationality / Domicile / Birth Certificate
                </TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setDomicile(!Domicile)}></input>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="col-lg-6">
            <Table>
            <TableBody>
              <TableRow>
                <TableCell>Sr No.</TableCell>
                <TableCell>Document Details </TableCell>
                <TableCell>if Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9</TableCell>
                <TableCell>Gap Certificate (if applicable)</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setGapCerti(!GapCerti)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10</TableCell>
                <TableCell>Cast Certificate</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setCastCerti(!CastCerti)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11</TableCell>
                <TableCell>Cast Validity Certificate</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setCastVali(!CastVali)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>Non-Creamy Layer Certificate</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setNonCreamy(!NonCreamy)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13</TableCell>
                <TableCell>
                  Income Certificate (if applicable scholarship student)
                </TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setIncomeCerti(!IncomeCerti)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14</TableCell>
                <TableCell>Certificate of Defence Service</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setDefenceCerti(!DefenceCerti)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15</TableCell>
                <TableCell>Certificate of Physical Disability</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setPhysicalDisCerti(!PhysicalDisCerti)}></input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16</TableCell>
                <TableCell>Adhar Card Xerox</TableCell>
                <TableCell>
                  <input type="checkbox" onChange={(e) => setAdharX(!AdharX)}></input>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        </div>

        <hr />

        <div className="d-flex justify-content-center m-4">
          <textarea placeholder="Remark (if any)" rows="5" cols="80" onChange={(e) => setRemark(e.target.value)}></textarea>
        </div>

        {/*<div className=" d-flex justify-content-center m-4">
            <button type="submit" className="btn btn-primary " onClick={(e) => {ValidateForm(); postdata();}} >Save</button>
          </div>*/}
       
      </div>
</section>

{/*Undertaking form start here*/}
<section>
<div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading mt-3">Undertaking</h2>

                        <ul>
                            <li>To,</li>
                            <li>The Principle,</li>
                            <li>Sanjay Ghodawat Institute,Atigre</li>
                            <li>Respected Sir,</li>
                        </ul>
                        <p className="mt-3">I -----------------------------------------------------------------------------------------------------------------------------
                            The underSigned, admitted to FE/DSE (Branch: -----------------------------) for the year 2023-2024 hereby undertake that-</p>

                        <ul className="undertaking-terms">
                            <li>The above information is correct to the best of my knowledge and belief.</li>
                            <li>I will confirm my DTE Online Admission within time given by DTE and in case failed to do so I am responsible for consequences.</li>
                            <li>I will be fully responsible for producing all the required Original documents for my eligibility,for the course to which I am admitted, and failure to do so by prescribed end date will lead to automatic cancellation of my admission without any liability of any nature to the collage.
                            </li>
                            <li>I will pay full fees of the institute at the time of admission and the charges which Government of Maharashtra/ DBATU,Lonere may levy from time, by due dates and in the event of failure on my part, the Principal of the collage may take such action against me.</li>
                            <li>In case of any increase in fee by Shikshan Samitee, I am bound to pay the same to institute.I am aware that if I do not pay all the fees in time, I will not permitted to appear for the University Examination.</li>
                            <li>I hereby agree to confirm to the rules and regulations at present in force or that may hereafter be made by UGC,DTE,DBATU Lonere, Institute, and/or Govt.I undertake that so long as I am a student of the collage, I will do nothing either inside the collage or outsite the collage that will interfere with its orderly governance and discilpine. I will fulfil attendance criteria to become eligible to appear for the exam. If at any time in future it is found that I have produced false information or concealed any facts;my admission is deemed to cancelled.</li>
                            <li>I know that as per UGC Regulations on Curbing the Menance of Ragging in Higher Educational Institutions, 2009 is strictly prohibited in collage campus and hostel, If I am found in such a case, the necessary disciplinary action taken by the college will be binding on me and I will submit Affidavit of student and Parents as per Annexure I and II.</li>
                        </ul>

                        <p className="mb-3">Date : --------------------</p>
                        <p>Place : ----------------------</p>

                      
                        <div className="agree-checkbox">
                            
                            <input
                                type="checkbox"
                                onChange={checkboxHandler}
                                className="mr-5 mt-5 mb-5"
                            />
                            <label className="ml-5">I agree the terms and conditions</label>
                        </div>

                        
                        
                        
                    </div>
                </div>
            </div>
</section>

{/************ bandhanpatra section start here ******************/}
<section>
<div className="container">
        <div className="text-center p-4">
          <h3 className="heading">बंधपत्र</h3>
        </div>
        <div className="content">
          मी या शाखेत प्रवेश घेतला असून मी असे लिहून देतो / देते की खालील सर्व मुद्दे शासन
          निर्णय क्र. २०१६ / प्र.क्र. २२१ / शिक्षण- १ दि. ३१ मार्च २०१६ मधील
          आहेत. या निर्णयाची पुर्ण कल्पना मला व माझ्या पालकांना मिळाली आहे.
          <br/>
          <br/>
          १. विद्यार्थ्याची शैक्षणिक वर्षातील उपस्थिती ही कमीतकमी ७५ टक्के किंवा
          त्यापेक्षा जास्त असणे बंधनकारक आहे. 
          <br/>
          <br/>
          २. विद्यार्थ्याने शैक्षणिक
          वर्षातील दोन्ही.सेमिस्टरच्या परीक्षा देणे बंधनकारक आहे. 
          <br/>
          <br/>
          ३. विद्यार्थ्याने शैक्षणिक वर्ष अर्धवट सोडल्यास शासनाची कोणतीही
          शिष्यवृत्ती / सवलत मिळणार नाही. तसेच त्या काळात त्याला कोणतीही
          शिष्यवृत्ती मिळाली असेल तर ती शासनास परत करावी लागेल. 
          <br/>
          <br/>
          ४. मुद्दा क्र. १
          व २ नुसार विद्यार्थ्याने शैक्षणिक वर्ष पुर्ण केले नाही तर शासनाची
          कोणतीही शिष्यवृत्तीची सवलत लागू होणार नाही तसेच त्या दरम्यान
          शिष्यवृत्ती प्राप्त झाली असल्यास ती शासनास परत करावी लागेल, व सदर
          विद्यार्थ्यास खुल्या प्रवर्गातील फी भरावी लागेल.
          <br/>
          <br/>
          ५. डिग्री कोर्स चार
          वर्षाचा आहे तो पुर्ण करण्यास विद्यार्थ्यास अतिरिक्त वर्ष लागल्यास त्या
          विद्यार्थ्यास त्यावर्षीजी फी लागू आहे ती भरणे बंधनकारक असेल. 
          <br/>
          <br/>
          वरील सर्व नियमं व निर्णय मी वाचले आहेत व ते मला मान्य आहेत. वरील कोणताही प्रसंग
          माझ्या बाबतीत घडल्यास मी वरील नियमांच्या अनुशंगाने कॉलेजची संपुर्ण फी
          खुल्या प्रवर्गातून भरण्यास तयार आहे. माझी व माझ्य पालकांची या बाबत कोणतीही
          तक्रार असणार नाही
        </div>
        <div className="row m-5">
        <p className="mb-3">Date : --------------------</p>
                        <p>Place : ----------------------</p>
        </div>
        <div className="d-flex justify-content-center align-item-center m-5">
            <label className="m-2 label">Agree</label>
            <input type="checkbox" className="m-2 big-checkbox" onChange={(e) => setAgreeParent(!AgreeParent)}></input>
        </div>
      </div>
</section>
</div>
<div className=" d-flex justify-content-center m-4">
            <button type="submit" className="btn btn-success submit-button">Save</button>
        </div>
</form>
    </>
  )
}

export default AdmissionForm
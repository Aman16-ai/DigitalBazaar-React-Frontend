import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from "./style/LoginModal.module.css"
import loginLogo from "../static/login_logo.png"
import { TextField } from '@mui/material';
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 530,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius:"0.6rem"
};

export default function LoginModal({ open, handleClose }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div className={style["login-container"]}>
            <div className={style["left"]}>
              <div className={style["left-content"]}>
                <Typography style={{ color: "white", fontWeight: "500" }} variant={'h4'}>
                  Login
                </Typography>
                <div style={{marginTop:"20px"}}>
                <Typography style={{
                  color: "#DBD3E1",
                  fontWeight: "400",
                  fontSize: "18px",
                }} variant={'p'}>
                  Get access to your Orders, Wishlist and Recommendations
                </Typography>
                </div>
                <img style={{position:"absolute",bottom:"0",marginBottom:"50px"}} src={loginLogo} alt="" />
              </div>
            </div>
            <div className={style["right"]}>
                <TextField style={{marginTop:"30px"}} className={style['text-in']} label='Username' name='username' variant='standard' />
                <TextField style={{marginTop:"20px"}} className={style['text-in']} label='Password' name='password' variant='standard' />
                
                <div style={{width:"80%",marginTop:"30px"}}>
                  <Typography style={{color:"#878787",fontSize:"12px"}} variant={'p'}>
                  By continuing, you agree to Flipkart's <span style={{color:"#2874F0"}}>Terms of Use</span> and <span style={{color:"#2874F0"}}>Privacy Policy</span>.
                  </Typography>
                </div>
                <Button style={{width:"80%",height:"50px",fontWeight:"bold",backgroundColor:"#FB641B",color:"white",marginTop:"10px"}}>Login</Button>
                <div style={{marginTop:"auto",marginBottom:"30px",fontWeight:"600",cursor:"pointer"}}>
                  <Typography style={{color:"#2874F0"}} variant='p'>
                  New to DigitalBazaar? Create an account
                  </Typography>
                </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
};

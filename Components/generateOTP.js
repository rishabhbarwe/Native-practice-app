function generateOTP() {
  const values = '0123456789';
  // const number = Math.floor(Math.random()*10)
  // console.log(number)
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += values[Math.floor(Math.random() * 10)];
  }
  otp = parseInt(otp);
  // console.log(otp);
  // console.log(typeof (otp));
  return otp;
}



export default generateOTP
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'20bcs028@iiitdmj.ac.in',
        pass:''
    }
});

let mailOptions = {
    from:'20bcs028@iiitdmj.ac.in',
    to:'20bcs064@iiitdmj.ac.in',
    subject:'Sending email for test purpose using nodemailer',
    text:`Hi subham chandravanshi `
};

transporter.sendMail(mailOptions, (error, info)=>{
    if(error)
    {
        console.log(error);
    }else{
        console.log('Email sent: '+info.response );
    }
})
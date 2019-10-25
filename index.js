const nodeMailer = require("nodemailer");
let transporter  = nodeMailer.createTransport();
 
let defaultOptions = {
    from:'"bd"<bd@aicoder.com>',
    to:"malun666@126.com",
    subject:"Hello",
    text:"Hello world text",
    // html:"<b>Hello world</b>"
    //If you use the html, html will overwrite the text;
    attachments:[    ]
//附件
}
mailer.send = (defaultOptions)=>{
    // return new Promise((resolve,reject) =>{
    let code = validation.generateCode();
    defaultOptions.text =  defaultOptions.text+" validation is "+code;
        transporter.sendMail(defaultOptions,(err,info)=>{
            if(err){
                 console.log(err)
            }
            else {
                console.log(err,info)
            }
        });
    return;
}
mailer.send(defaultOptions);
const nodeMailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// create reusable transporter object using the default SMTP transport
(async () => {
  // let testAccount = await nodemailer.createTestAccount();
  let transporter = nodeMailer.createTransport({
    // host: 'smtp.126.com',
    // host: 'smtp.qiye.163.com',
    // port: 994, // 578
    service: '"qiye.aliyun"',
    secureConnection: true,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'bd@aicoder.com', // generated ethereal user
      pass: 'ssfsdfdsfds!' // generated ethereal password
    }
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      // from: '"Fred Foo 👻" <foo@example.com>', // sender address
      // to: 'bar@example.com, baz@example.com', // list of receivers
      // from: '"bd"<bd@aicoder.com>',from: '马伦 <malun666@126.com>',
      from: '马伦 <bd@aicoder.com>',
      to: 'malun666@126.com',
      subject: 'Hello ✔', // Subject line
      text: 'Hello world text',
    });
    console.log('Message sent: %s', info.messageId);
  } catch (e) {
    console.log(e);
  }
})();

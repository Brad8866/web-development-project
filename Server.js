const express = require('express');
const app = express;
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.json())
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/Project Milestone 1.html')
})
app.post('/', (req, res)=>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bgronefeld24@gmail.com',
            pass: '$Bradawg2488'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'bgronefeld24@gmail.com',
        subject: 'Message from ${req.body.email}: ${req.body.subject}',
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, infor)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + infor.response)
            res.send('success')
        }
    })
})
app.listen(PORT, ()=>{
    console.log('Server running on port ${Port}')
})

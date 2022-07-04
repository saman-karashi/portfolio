import nodemailer from 'nodemailer'

export default (req,res)=>{
const {name,message,email}=req.body;

const transporter = nodemailer.createTransport({
service:'gmail',
auth:{
user:process.env.EMAIL,
pass:process.env.PASSWORD
},
})

const mailData = {
from:email,
to:process.env.EMAIL,
subject:`New mail from ${name}`,
text:`
${name} wrote:
${message}
`,
html:`
<p>You have a new mail from ${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Message:</strong>${message}</p>
`
}

transporter.sendMail(mailData)

res.status(200).json()
}
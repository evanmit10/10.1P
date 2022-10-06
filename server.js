const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config();
const https = require("https")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    const user = {
        email:"emitrop@yahoo.com"
    }
    res.send(user)
})



app.post('/' , (req,res)=>{
    apikey = "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"
    var email = req.body.email
    console.log(email)

          const sgMail = require("@sendgrid/mail");

          sgMail.setApiKey(apikey);

          const sendMail = async (msg) => {
          try{
              await sgMail.send(msg);
              console.log("Message sent successfully");
          } catch (error) {
              console.error(error);

              if (error.response) {
                  console.error(error.response.body);
              }
          }
      }
          sendMail({
            to: email,
            from: "enodejs123@gmail.com",
            subject: "Welcome!",
            text: "Welcome! Thank you for subscribing"
        });

})

app.listen(8003, function(){
console.log("Server is running on port 8003")
})


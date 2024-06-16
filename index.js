const express = require('express');
const app = express();
var cors = require('cors');

const ProjoctData=require('./data/projectdata');
const skillsData=require('./data/skills');
const achievementData=require('./data/achievement');


app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://666e87ef273aa989bb03b3df--candid-speculoos-8b8a50.netlify.app/', 
  credentials: true
}));

app.get('/project', async (req, resp) => {
    resp.send(ProjoctData);
});
app.get('/skills', async (req, resp) => {
  resp.send(skillsData);
  
});
app.get('/achievement', async (req, resp) => {
  resp.send(achievementData);
  
});
app.get('/link',(req,resp)=>{
  resp.send({link:"https://drive.google.com/file/d/1q3TK66MEdJ9QRjbHP0S_36UFL8_tu6DX/view?usp=drive_link"})
})

const port = process.env.PORT || 4001;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at port ${port}`);
});
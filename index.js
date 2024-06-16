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
  resp.send({link:"https://666ead9afd6b1a60265c6c90--astounding-kitten-402df7.netlify.app"})
})

const port = process.env.PORT || 4001;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at port ${port}`);
});
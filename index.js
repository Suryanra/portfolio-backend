const express = require('express');
const app = express();
var cors = require('cors');

const ProjoctData=require('./data/projectdata');
const skillsData=require('./data/skills');
const achievementData=require('./data/achievement');


app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://666e5f6f633cce7e54169508--merry-mermaid-d5c5db.netlify.app/', 
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

const port = process.env.PORT || 4001;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at port ${port}`);
});
<template>
<div class="text-center padding elementToFadeInAndOut">
      <div class="col">
        <div class="header">
          <header>
              <h1 class="shadow">Inspire Creativity</h1>
          </header>

        <q-btn
            flat
            round  
            to="/"
            text-color="white"
            size="xl"
            class="icon"
            >
            <img src="~/assets/github.png" class="shrinkSVGicon">
            <q-tooltip content-class="bg-primary toolTipText">Git Hub</q-tooltip>
        </q-btn>

        <q-btn
            flat
            round  
            to="/"
            text-color="white"
            size="xl"
            class="icon"
            >
            <img src="~/assets/linkedin.png" class="shrinkSVGicon">
            <q-tooltip content-class="bg-primary toolTipText">Linkedin</q-tooltip>
        </q-btn>

        <q-btn
            flat
            round  
            to="/"
            text-color="white"
            icon="bedtime"
            size="xl"
            class="icon">
            <q-tooltip content-class="bg-primary toolTipText">Dark Mode</q-tooltip>
        </q-btn>
        </div>
      </div>
      
      <div class="col section2 text-center">
        <header>
            <h1 class="shadow">About</h1>
        </header>

        <img src="~/assets/head.png" class="circle shadow-24">
<div class="shadow2">
       <p class="shadow2"><br><br>I'm a self-driven developer with 4 years of demonstrated ability to excel in agile
      software development, and leveraging my creativity and skillset to create unquestionable value</p>

<p>
Deep understanding of SQL and relational data models, writing complex
T-SQL and Oracle queries, procedures, functions, etc.
▪ Solid Grasp in Object Oriented Programming languages
▪ A strong desire to expand knowledge in other areas of development, such
as JavaScript, Full Stack Web Development, AI, Machine Learning, etc.
      </p>

<p style="font-size:18px;">Na Ali’i</p>
<p>Technical Developer I July 2018 - Current<br>
      <p>
        
Technical Developer I July 2018 - Current
Peoplesoft
▪ Developed frontend using Peoplecode that interfaced with backend
solutions using Oracle SQL to satisfy the client’s business requirements
▪ Worked with analysts and architects to convert business requirements
and data mappings into a solution
▪ Designed flex layouts for both mobile and webapp displays of our
product using HTML and CSS
▪ Unit tested and documented my own work by migrating projects
and data mover scripts between a sandbox environment and
development environment before pushing code through to the QA
environment
▪ Held live presentations of our work at the end of every sprint to gather
feedback and showcase high quality, working software
▪ Redeveloped work based on client feedback received during sprint
reviews to be demonstrated during the following review
▪ Assisted others through peer review, unit tests, debugging, and
brainstorming solutions
▪ Worked tasks and defects in an agile manner, which were managed
through JIRA
      </p>

      
        <p style="font-size:18px;">Advanced Patient Advocacy</p>
<p>Programmer Analyst December 2016 - July 2018<br>
Junior Programmer Analyst April 2016 - December 2016<br>
Robotic Process Automation</p>


          
<p>▪ Solely responsible for all aspects of a major Robotic Process
Automation project, named “DEX” which removed the need for tedious
and manual labor by automating the extraction of business-critical data
from client’s systems. The project continues to provide higher and
more accurate realization of revenue than manual labor would, at $25
million as of 7/2018
▪ Created technical documentation while requirements gathering, and
high level/low level workflows of process to be automated
▪ Programmed a dozen scalable solutions, Desktop and RDP, which
precisely navigated and captured data by means such as keystrokes,
OCR, image capturing, etc. in conjunction with complex logic
▪ Masterminded my own robot orchestrator within SSMS which sends
email alerts, logging, robot wrangling, and data distribution
▪ Developed a deployment and training plan, trained end users, and
provided continuous monitoring and support
▪ Met with customers and client managers on a weekly basis to discuss
possible business rule changes and manage expectations
SQL
▪ Wrote complex and optimized queries, stored procedures, and functions
▪ Created, tested, deployed, and maintained SQL Server jobs, SSIS
packages, and normalized databases
▪ Responsible for analyzing and understanding current databases to build,
modify, test, and debug scripts containing complex business logic
▪ Built, tested, deployed, and provided continuous maintenance to
hundreds of import/export SSIS EDI solutions that involved various
file types and structures ranging from delimited .txt files to hierarchical
.xml files
C#
▪ Developed a multithreaded system tray tool using Windows
Presentation Foundation forms, allowing users to report telephone or
internet connectivity issues
▪ Collected data was inserted into the database using Windows
Communication Foundation services, or momentarily stored locally
using JSON serialization if the internet was down
▪ Gathered statistics over time and used to push back against service
providers and receive better services
Miscellaneous
▪ Monitored the status of an integration system and all file paths
involved, ensuring constant uptime of file imports
▪ Resolved problems issued through tickets, and ensured the customer
received satisfactory support and follow-up
▪ Mentored and lead junior developers by performing code reviews,
backseat programming, and training them in SQL and RPA tools
      </p>
</div>
     
      </div>
      <div class="col section3">
        <header>
            <h1 class="shadow">Contact</h1>
        </header>
        <p class="shadow2">danieldhoang93@gmail.com</p>
        <p class="shadow2">703-314-6010</p>
        <p class="shadow2">https://www.linkedin.com/in/ddhoang/</p><br><br><br>

      </div>
</div>
</template>

<script>
export default {
} 
</script>
<style lang="scss" scoped>
  .column > div {
  padding-left:110px;
  padding-right:110px;
  background: rgba(86, 61, 124, .00);
}
 
.doc-container > div + div {
  margin-top: 1rem;
}

 .shrinkSVGicon {
    width: 35px;
    color:white;
} 

.icon {
    -webkit-filter: drop-shadow( 10px 15px 10px rgba(0, 0, 0, .3));
    filter: drop-shadow( 10px 15px 5px rgba(0, 0, 0, .3));
     padding-left: 1px;
    padding-right: 1px;
}

.section2 {
  margin-top: 10em;
}

.circle {
  border-radius: 50%;
  width: 150px;
}

.elementToFadeInAndOut {
    animation: fadeinout 5s linear forwards;
}	

.header {
  height:40vh;
}

.padding {
  padding-left:160px;
  padding-right:160px;
}

h1 {
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 100;
  color:white;
  margin-top:2em;
}

h5 {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    color:white;
    margin-top:2em;
}

p {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    color:white;
}


@media screen and (min-width: 1008px) {

    h1 {
      font-size: 9em;
      margin-top: 3em;
}
}


@media screen and (max-width: 768px) {
 .padding {
  padding-left:20px;
  padding-right:20px;
}

    h1 {
      font-size: 7em;
      margin-top:3.5em;
}

.header {
  height:40vh;
}
}



@media screen and (max-width: 640px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 6em;
      margin-top: 4em;
    }

    .icon {
     margin-left:1em;
}
}

@media screen and (max-width: 470px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 4em;
      margin-top: 3.5em;
    }

    .icon {
     margin-left:1em;
}
}

@media screen and (max-width: 375px) {
 .padding {
  padding-left:10px;
  padding-right:10px;
}

    h1 {
      font-size: 3.3em;
      margin-top: 26vh;
    }

    .icon {
     margin-left:1em;
}
}

@keyframes fadeinout {
    0% { opacity: 0; }
    30% { opacity: 1; }
    90% { opacity: 1; }
}
</style>

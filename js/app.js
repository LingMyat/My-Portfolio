$(document).ready(function(){
    let personalInfo = [
        { key : 'Birthday',value : '4 june 2003'},
        { key : 'Age',value : '19'},
        { key : 'Website',value : 'lingmyat.github.io/My-Portfolio/'},
        { key : 'Email',value : 'lingmyataung@outlook.com'},
        { key : 'Phone',value : '+959 459 192 583'},
        { key : 'Education',value : 'In matriculation'},
        { key : 'City',value : 'Yangon/Mandalay(Myanmar)'},
        { key : 'Freelance',value : 'Avaliable'},
    ];
    let skillInfo = [
        { key : 'Css',value : 79},
        { key : 'Bootstrap',value : 86},
        { key : 'Js / jQuery',value : 82},
        { key : 'PHP / Laravel',value : 70},
        { key : 'MySql',value : 80},
    ];
    let timeLineContainer = [
        {
            name : 'Education',
            idName : 'timeLineInfo'
        },
        {
            name : 'Experience',
            idName : 'timeLineExperience'
        },
    ];
    let timeLine = [
        { 
            key : 'In matriculation',
            value : `The heighest university that I attended was first year,Computer University.
        I have been stop my education in first year of university for Civil Disobedience Moment and my country conditions.`
        },
        { 
            key : 'Start learn Web Development',
            value : `I have been start learn website development technology by self study in 2021 December after watching the series called "Silicon Valley".Starting from there, I keep learning and practised every single day to be a better developer.`
        },
        { 
            key : 'Certificate',
            value : `I got a certificate deal with 'front-end' from Code-Lab.<br>
            Now I am applying laravel certificate at Code-Lab.`
        },
    ];
    let timeLineExp = [
        { 
            key : 'Work Experience',
            value : `I have'nt have experience on job yet. I am finding junior laravel developer job. And I am finding clients who hire me. I am sure that I am ready to build awesome websites.`
        },
        {
            key : 'Courses',
            value : `Studided Git and GitHub at Creative Coder Myanmar, Studided HTML/CSS/JavaScript at BMPS Education Center/Code-Lab/MSquare Programming, Studided FWD/ Extensive PHP/ Laravel(Specialized) Web Development at A Programmer and PHP/ Laravel courses at Code-Lab.`
        },
        { 
            key : 'Projects',
            value : `You can check my project source codes at my project section. I specialized PHP/Laravel and crafting real world projects reusing that I learnt.`
        },
        
    ];
    let services = [
        {
            icon : 'fa-mobile-screen-button',
            title : 'Responsive',
            content : `I can make a responsive website for mobile phone, tablet, laptop and other devices.`
        },
        {
            icon : 'fa-laptop-code',
            title : 'Interactive feature',
            content : `I can write interactive feature for your website using JavaScript/jQuery and if you wish I can write those type of feature with PHP using session.`
        },
        {
            icon : 'fa-code',
            title : 'Clean Coding',
            content : `In front-end, I can write clean/no repeat code using JavaScript DOM. E.g for data showing. In that case I can create array and show that data with looping. Check this portfilio js source codes. I use js/jQuery DOM to get unrepetitive codes.`
        },
        {
            icon : 'fa-database',
            title : 'Database',
            content : `I have been learned alot of MySql queries and I built PHP projects and Laravel projects with that knowledges. In project section you can check my source codes at GitHub.`
        },
        {
            icon : 'fa-users',
            title : 'Communication/Learning',
            content : `I can comminicate with my senior developers and I can learn fast. I also learn from my mistakes so if you hire me I can be awesome with you.`
        },
        {
            icon : 'fa-clock',
            title : 'Time Managment',
            content : `I can completely make your project in your deadline.`
        },
    ];
    let projects = [
        {
            name : 'Anime-Land',
            content : `Simple movie site UI project using HTML CSS Javascript(events).`,
            image : 'Screenshot (95).png',
            languages : 'HTML/CSS(main)/JS',
            source : 'https://github.com/LingMyat/AnimeLand',
        },
        {
            name : 'My Portfolio',
            content : `Portfolio project JavaScript/jQuery(DOM looping data for unrepetitive codes).`,
            image : 'Screenshot (103).png',
            languages : 'HTML/CSS/JS/jQuery(main)',
            source : 'https://github.com/LingMyat/My-Portfolio',
        },
        {
            name : 'FoodElephant',
            content : `Single page UI project HTML CSS Javascript(only toggle).`,
            image : 'Screenshot (94).png',
            languages : 'HTML/CSS(main)/JS',
            source : 'https://github.com/LingMyat/smple-one-page-site',
        },
        {
            name : 'Pizza-Heaven',
            content : `Real World POS project contain CRUD, authentication, authorization, forgot/reset password, add to cart, order and other features.`,
            image : 'Screenshot (96).png',
            languages : 'Bootstrap/jQuery(ajax)/Laravel/MySql',
            source : 'https://github.com/LingMyat/Real_World_POS_Project_Laravel',
        },
        {
            name : 'My Blog',
            content : `Pure PHP project contain CRUD, authentication, authorization(using session), form validation, change profile and other features.`,
            image : 'Screenshot (97).png',
            languages : 'Bootstrap/PHP(pure)/MySql',
            source : 'https://github.com/LingMyat/php_blog_site_with_mysql',
        },
        {
            name : 'Restaurant',
            content : `Real World Restaurant project contain CRUD, authentication, authorization, order take,serve, billing order, daily profit table and other features.`,
            image : 'Screenshot (98).png',
            languages : 'Bootstrap/jQuery(ajax)/Laravel/MySql',
            source : 'https://github.com/LingMyat/Restaurant_System_Laravel',
        },
    ]
    $perList = '';
    for (let i = 0; i < personalInfo.length; i++) {
        $perList += `<div class="info-item pad-15">
        <p>${personalInfo[i].key} : <span>${personalInfo[i].value}</span></p>
        </div>`;
        $('#personalInfo').html($perList);
    }
    $skillList = '';
    for (let i = 0; i < skillInfo.length; i++) {
        $skillList += `<div class="skill-item pad-15">
        <h5>${skillInfo[i].key}</h5>
            <div class="progress">
                <div class="progress-in" style="width: ${skillInfo[i].value}%;"></div>
                <div class="skill-parcent">${skillInfo[i].value}%</div>
            </div>
        </div>`;
        $('#skillInfo').html($skillList);
    }
    $timeLineContainerList = '';
    for (let i = 0; i < timeLineContainer.length; i++) {
        $timeLineContainerList += `<div class="education pad-15">
                <h3 class="title">${timeLineContainer[i].name}</h3>
                <div class="row">
                    <div class="timeline-box pad-15">
                        <div class="timeline shadow-dark" id="${timeLineContainer[i].idName}">
                        </div>
                    </div>
                </div>
            </div>`
        $('#timelineContainer').html($timeLineContainerList);
    }
    let timeLineItem = function(para1,para2){
       return `<div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-date">
                    <i class="fa-solid fa-calendar-day"></i> 2021-2022
                </h3>
                <h4 class="timeline-title">${para1}</h4>
                <p class="timeline-text">
                ${para2}
                </p>
            </div>`;
    } 
    $timeLineList = '';
    for (let i = 0; i < timeLine.length; i++) {
        $timeLineList += timeLineItem(timeLine[i].key,timeLine[i].value);
        $('#timeLineInfo').html($timeLineList);
    }
    $timeLineExpList = '';
    for (let i = 0; i < timeLineExp.length; i++) {
        $timeLineExpList += timeLineItem(timeLineExp[i].key,timeLineExp[i].value);
        $('#timeLineExperience').html($timeLineExpList);
    }
    $serviceList = '';
    for (let i = 0; i < services.length; i++) {
        $serviceList += `<div class="service-item pad-15">
                    <div class="service-item-inner">
                        <div class="icon">
                            <i class="fa-solid ${services[i].icon}"></i>
                        </div>
                        <h4>${services[i].title}</h4>
                        <p>${services[i].content}</p>
                    </div>
                </div>`
        $('#serviceItemContainer').html($serviceList);
    }
    $projectList = '';
    for (let i = 0; i < projects.length; i++) {
        $projectList += `<div class="project-item pad-15">
                    <div class="project-item-inner shadow-dark">
                        <div class="project-img">
                            <img src="./image/${projects[i].image}" alt="">
                        </div>
                        <div class="project-text pad-15">
                            <h4>${projects[i].name}</h4>
                            <span>${projects[i].content}</span>
                            <p>
                                - ${projects[i].languages} 
                            </p>
                            <a href="${projects[i].source}"><i class="fa-brands fa-github"></i> Source codes</a>
                        </div>
                    </div>
                </div>`
        $('#projectContainer').html($projectList);
    }
});
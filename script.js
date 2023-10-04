// All subjects
const subjects = new Map([
    ['GH203',{name:'ثقافة إسلامية',root:'',units:2,status:false}],
    ["GH150",{name:"اللغة العربية",root:"",units:2,status:false}],
    ['GH152',{name:'مبادئ العلوم السياسية',root:'',units:2,status:false}],
    ['GH203',{name:'ثقافة إسلامية',root:'',units:2,status:false}],
    ["GH141",{name:"اللغة الانجليزية 1",root:"",units:2,status:false}],
    ["GH142",{name:"لغة انجيليزية 2",root:"GH141",units:2,status:false}],
    ['GS100',{name:'رياضة 1',root:'',units:3,status:false}],
    ['GS101',{name:'رياضة 2',root:'GS100',units:3,status:false,allowed:false}],
    ['GS209',{name:'جبر خطي والمنطق',root:'GS101',units:3,status:false}],
    ["GS242",{name:"إحصاء واحتمالات",root:"GS100",units:4,status:false}],
    ['CS205',{name:'تراكيب منفصلة',root:'GS101',units:3,status:false}],
    ['CS200',{name:'مبادئ حاسب',root:'',units:3,status:false}],
    ['GS199',{name:'مبادئ هندسة كهربائية',root:'',units:4,status:false}],
    ["CS201",{name:"اساسيات برمجة",root:"",units:4,status:false}],
    ['CS207',{name:'لغة C',root:'CS201',units:4,status:false}],
    ['CS211',{name:'تحليل نطم',root:'CS201',units:4,status:false}],
    ['CS318',{name:'هندسة برمجيات',root:'CS211',units:4,status:false}],
    ['CS322',{name:'نظم تشغيل',root:'CS318',units:4,status:false}],
    ["CS313",{name:"إدارة قواعد بيانات",root:"CS211",units:4,status:false}],
    ['CS320',{name:'لغة دلفي',root:'CS313',units:4,status:false}],
    ["CS210",{name:"برمجئة مرئية1 (بيسك)",root:"CS207",units:4,status:false}],
    ["CS417",{name:"برمجئة مرئية2 (VB)",root:"CS210",units:4,status:false}],
    ["CS415",{name:"البرمجة الشيئية باستخدام c++",root:"CS207",units:4,status:false}],
    ['CS419',{name:'لغة جافا',root:'CS415',units:4,status:false,allowed:false}],
    ['CS423',{name:'تصميم مواقع انترنت',root:'CS419',units:3,status:false}],
    ["CS414",{name:"النمذجة والمحاكاة",root:"CS210",units:4,status:false}],
    ["CS427",{name:"الرسم بالحاسوب",root:"CS414",units:4,status:false}],
    ['CS204',{name:'مقدمة أنظمة رقمية',root:['CS200','GS199'],units:4,status:false}],
    ['CS303',{name:'تنظيم حاسبات',root:'CS204',units:4,status:false}],
    ['CS319',{name:'لغة تجميع ASSEMBLY',root:'CS303',units:4,status:false}],
    ['CS425',{name:'شبكات حاسوب',root:'CS319',units:4,status:false}],
    ['CS321',{name:'معماية الحاسوب',root:'CS319',units:4,status:false}],
    ['CS416',{name:'برمجة نطم',root:'CS321',units:4,status:false}],
    ['CS312',{name:'تراكيب بيانات 1',root:'CS207',units:4,status:false}],
    ['CS418',{name:'تراكيب بيانات 2',root:'CS312',units:4,status:false}],
    ['CS426',{name:'ذكاء اصطناعي',root:'CS418',units:4,status:false}],
    ['CS308',{name:'طرق عددية',root:'CS207',units:4,status:false}],
    ['CS429',{name:'مواضيع مختارة 1',root:'115',units:4,status:false}],
    ['CS428',{name:'مواضيع مختارة 2',root:'115',units:4,status:false}],
    ['CS430',{name:'مناهج البحث والتدريب الميداني',root:'115',units:2,status:false}],
    ['CS500',{name:'مشروع التخرج',root:'115',units:4,status:false}],

]);

// number values of taken and remaing subjects
const numberOfAllSubjects = subjects.size;
let numberOfTakenSubject = 0;
let numberOfRemainigSubject = numberOfAllSubjects - numberOfTakenSubject;

// Cridts values of taken and remaing subjects
let numberOfAllCridits = 0;
let numberOfTakenCridits = 0;
let numberOfReamingCridits = 0;

// Chache HTML element of subjects
const allSubject = document.querySelector('.lblAllSbj');
const takenSubject = document.querySelector('.lblTakenSbj');
const remaingSubject = document.querySelector('.lblreamingSbj');

// Chache HTML element of cridts
const allCridit = document.querySelector('.numCrditAll');
const takenCridit = document.querySelector('.numCriditTaken');
const remaingCridit = document.querySelector('.numCriditRemaing');

// Intial set of subjects values
allSubject.textContent = numberOfAllSubjects;
takenSubject.textContent = numberOfTakenSubject;
remaingSubject.textContent = numberOfRemainigSubject;

// Chace HTML of subject and allowable subject container
const subjectContainer = document.querySelector('.allSubjectContainer');
const allAllowedSubject = document.querySelector('.allAllowedSubject');

// create all subject buttons
let htmlButtonString = '';
subjects.forEach((value ,key) => {

    htmlButtonString += `<button class = "btn ${key}"> ${value.name}</button>`

});
subjectContainer.innerHTML = htmlButtonString;

// detarmine number of all cridits
subjects.forEach(ele => {
    numberOfAllCridits += ele.units
});

// insital set of all cridits and remaing and taken cridits
numberOfReamingCridits = numberOfAllCridits;
allCridit.textContent = numberOfAllCridits;
remaingCridit.textContent = numberOfReamingCridits;

// create allowable subject labels
let htmlLabelString = '';
subjects.forEach((value , key) => {

    if(value.root === '')
    htmlLabelString += `<label class = "lblSubject"> ${value.name}</label>`

});
allAllowedSubject.innerHTML = htmlLabelString;

// ge all subject buttons and add event listener function
const allBtns = document.querySelectorAll('.btn');
allBtns.forEach(btn => buttonPress(btn));

function buttonPress(b){
    b.addEventListener('click',() => {
        if(b.classList.length === 3)
        {
            b.classList.remove('pressed');
            updateArraySelected(b.classList[1],false);
        }
        else{
            b.classList.add('pressed');
            updateArraySelected(b.classList[1],true);
        }
    });
}

function updateArraySelected(code , status){

    let subject = subjects.get(code);
    numberOfTakenCridits += (status) ? +subject.units : -subject.units; 

    numberOfTakenSubject += (status) ? +1 : -1; 
    numberOfRemainigSubject = numberOfAllSubjects - numberOfTakenSubject;
    takenSubject.textContent = numberOfTakenSubject;
    remaingSubject.textContent = numberOfRemainigSubject;

    numberOfReamingCridits = numberOfAllCridits - numberOfTakenCridits;
    takenCridit.textContent = numberOfTakenCridits;
    remaingCridit.textContent = numberOfReamingCridits;

    subject.status = status;
    tmlLabelString = '';
    subjects.forEach(subject =>{
        
        if(subject.root === '' && subject.status == false){
            tmlLabelString += `<label class = "lblSubject"> ${subject.name}</label>`
        }
        if(!isNaN(parseInt(subject.root))){
            if(subject.status === false)
            {
                let criditNeeded = parseInt(subject.root);
                if(numberOfTakenCridits >= criditNeeded){
                    tmlLabelString += `<label class = "lblSubject"> ${subject.name}</label>`;
                }
            }
        }else{
            if(subject.root !== '' && subject.status === false && getSubjectStatus(subject.root)){
                tmlLabelString += `<label class = "lblSubject"> ${subject.name}</label>`
            } 
        } 
    });

    allAllowedSubject.innerHTML = tmlLabelString;
}

function getSubjectStatus(code){
    
    if(Array.isArray(code))
    {
        return (subjects.get(code[0]).status && subjects.get(code[1]).status );
    }else{
    
    return subjects.get(code).status;
    } 
}
console.log("adding files");
function addNewEdu(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('acqField')
    newNode.classList.add('mt-2')
    newNode.classList.add('mb-2')
    newNode.setAttribute("placeholder","Enter Your Education Details")
    let ContainerEdu = document.querySelector('#contEdu')
    let weAddButton = document.querySelector('#weAdd')
    ContainerEdu.insertBefore(newNode,weAddButton);


}
function addNewWork(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('WorkField')
    newNode.classList.add('mt-2')
    newNode.classList.add('mb-2')
    newNode.setAttribute("placeholder","Enter Your Work Experince");
    let containerWork = document.querySelector('#work');
    let buttonEdu = document.querySelector('#newEdu');
    containerWork.insertBefore(newNode,buttonEdu);

}
function generateCV(){
    let nameOb = document.querySelector('#name');
    let name = nameOb.value;
    let nameTemp = document.querySelector('#nameT');
    nameTemp.innerHTML=name;
    document.querySelector('#nameT2').innerHTML=name;
    let num = document.querySelector('#number')
    let number = num.value;
    document.querySelector('#contactT').innerHTML=number;
    let emailOb = document.querySelector('#email');
    let email = emailOb.value;
    document.querySelector('#emailT').innerHTML=email;
    let addressOb = document.querySelector('#address');
    let addresssValue = addressOb.value
    document.querySelector('#addressT').innerHTML=addresssValue;
    let objectiveOb = document.querySelector('#resObjective');
    let objectiveValue = objectiveOb.value;
    document.querySelector('#obT').innerHTML=objectiveValue;
    let linkEdinOb = document.querySelector('#linkedin');
    let linkEdin = linkEdinOb.value;
    document.querySelector('#linkT').innerHTML=`<a href="${linkEdin}">Linkedin</a>`;
    let githubOb = document.querySelector('#Github');
    let githubLink = githubOb.value;
    document.querySelector('#githubT').innerHTML=`<a href="${githubLink}">Github</a>`;
    let websiteOb = document.querySelector('#website');
    let website=websiteOb.value;
    document.querySelector('#websiteT').innerHTML=`<a href="${website}">Website</a>`;
    let skillsOb = document.getElementsByClassName('WorkField');
    let str = '';
    for(let x of skillsOb){
        str = str+ `<li> ${x.value} </li>`
    }
    document.querySelector('#scT').innerHTML=str;
    let academicsOb = document.getElementsByClassName('acqField');
    let strAcd = '';
    for(let e of academicsOb){
        strAcd = strAcd+`<li> ${e.value} </li>`
    }
    document.querySelector('#acT').innerHTML=strAcd;
    let profilePic = document.querySelector('#profile').files[0];
    let reader = new FileReader(profilePic);
    reader.readAsDataURL(profilePic);
    console.log(reader.result);
    reader.onloadend=function(){
        document.querySelector('#propic').src=reader.result;
    }
    document.querySelector('#cv-form').style.display='none';
    document.querySelector('#cv-temp').style.display='block';


}
function printCv(){
    window.print();
}
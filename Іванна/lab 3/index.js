const InputElementCreate1=document.getElementById('input1')
const InputElementCreate2=document.getElementById('input2')
const InputElementCreate3=document.getElementById('input3')
const InputElementCreate4=document.getElementById('input4')
const InputElementCreate5=document.getElementById('input5')
const CreatePeople=document.getElementById('createPeople')
const Table=document.getElementById('Tbl')
const SortingInput=document.getElementById('sort')
const CatalogElement=document.getElementById('catalog')
const menu=document.querySelector('#menu')
const BtnEdit=document.getElementById('BtnEdit')
const InputElementEdit1=document.getElementById('edit1')
const InputElementEdit2=document.getElementById('edit2')
const InputElementEdit3=document.getElementById('edit3')
const InputElementEdit4=document.getElementById('edit4')
const InputElementEdit5=document.getElementById('edit5')


const people=[
    {
        Name:'Anna',
        Surname:'Smit',
        Email:'AnnaSmit@gmail.com',
        Region:'Kansas',
        City:'Lawrence',
        Sorting: function(){
            if(CatalogElement.value==1){return this.Name}
            if(CatalogElement.value==2){return this.Surname}
            if(CatalogElement.value==3){return this.Email}
            if(CatalogElement.value==4){return this.Region}
            if(CatalogElement.value==5){return this.City}
        }
    }
]

DisplayArray()

function start(){
    Table.innerHTML=`
        <caption>people</caption>
        <tr>
            <th class="i" id="SortColor1" onclick="TypeSorting('Name')"><span>Name</span></th>
            <th class="i" id="SortColor2" onclick="TypeSorting('Surname')"><span>Surname</span></th>
            <th class="i" id="SortColor3" onclick="TypeSorting('Email')"><span>Email</span></th>
            <th class="i" id="SortColor4" onclick="TypeSorting('Region')"><span>Region</span></th>
            <th class="i" id="SortColor5" onclick="TypeSorting('City')"><span>City</span></th>
            <th>edit and delete</th>
        </tr>`
}

//створення
CreatePeople.onclick=function(){
    if(InputElementCreate1.value==''||
    InputElementCreate2.value==''||
    InputElementCreate3.value==''||
    InputElementCreate4.value==''||
    InputElementCreate5.value==''){return}
    people.push({
        Name:InputElementCreate1.value,
        Surname:InputElementCreate2.value,
        Email:InputElementCreate3.value,
        Region:InputElementCreate4.value,
        City:InputElementCreate5.value,
        Sorting: function(){
            if(CatalogElement.value==1){return this.Name}
            if(CatalogElement.value==2){return this.Surname}
            if(CatalogElement.value==3){return this.Email}
            if(CatalogElement.value==4){return this.Region}
            if(CatalogElement.value==5){return this.City}
        }
    })
        dialog.close();
        DisplayArray()
    InputElementCreate1.value=''
    InputElementCreate2.value=''
    InputElementCreate3.value=''
    InputElementCreate4.value=''
    InputElementCreate5.value=''
}

//відображення
function DisplayPeople(index){
    Table.insertAdjacentHTML('beforeEnd',`<tr>
    <td>${people[index].Name}</td>
    <td>${people[index].Surname}</td>
    <td>${people[index].Email}</td>
    <td>${people[index].Region}</td>
    <td>${people[index].City}</td>
    <td><button  class="BtnEdit" onclick="editElement(${index})">Edit</button><button class="BtnDelete" onclick="DeleteElement(id)" id="${index}">&times</button></td>
    
    </tr>`)
}

function DisplayArray(){
    start()
    for(let i=0;i<=people.length-1;i++){DisplayPeople(i)}
}

//видалення елементів
function DeleteElement(id){
    people.splice(id,1)
    DisplayArray()
}

//контекстне меню
var dialog = document.querySelector('dialog');
   document.querySelector('#create').onclick = function() {
    dialog.showModal(); 
   }
   document.querySelector('#close').onclick = function() {
    dialog.close();
   }
   document.querySelector('#exit').onclick = function() {
    dialog.close();
   }

//сортування за типом
function TypeSorting(index){
    if(index=='Name'){people.sort((a,b)=>getsorting(a.Name,b.Name)); DisplayArray()}
    if(index=='Surname'){people.sort((a,b)=>getsorting(a.Surname,b.Surname)); DisplayArray()}
    if(index=='Email'){people.sort((a,b)=>getsorting(a.Email,b.Email)); DisplayArray()}
    if(index=='Region'){people.sort((a,b)=>getsorting(a.Region,b.Region)); DisplayArray()}
    if(index=='City'){people.sort((a,b)=>getsorting(a.City,b.City)); DisplayArray()}
    
}

function getsorting(A,B){
        const nameA = A.toUpperCase(); 
  const nameB = B.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0
}



SortingInput.oninput=function(){
    start()
    for(let i=0;i<=people.length-1;i++){
        if(people[i].Sorting().indexOf(SortingInput.value)==0){DisplayPeople(i)}else start()
    }
 }

 CatalogElement.addEventListener('change',SortingInput.oninput)



function editElement(index){
    InputElementEdit1.value = people[index].Name
    InputElementEdit2.value = people[index].Surname
    InputElementEdit3.value = people[index].Email
    InputElementEdit4.value = people[index].Region
    InputElementEdit5.value = people[index].City
    menu.showModal()
    BtnEdit.onclick=function getEditElement(index){ 
        if(
        InputElementEdit1.value==''||
        InputElementEdit2.value==''||
        InputElementEdit3.value==''||
        InputElementEdit4.value==''||
        InputElementEdit5.value==''){return}
        people.splice(index,1,{
            Name:InputElementEdit1.value,
            Surname:InputElementEdit2.value,
            Email:InputElementEdit3.value,
            Region:InputElementEdit4.value,
            City:InputElementEdit5.value,
            Sorting: function(){
                if(CatalogElement.value==1){return this.Name}
                if(CatalogElement.value==2){return this.Surname}
                if(CatalogElement.value==3){return this.Email}
                if(CatalogElement.value==4){return this.Region}
                if(CatalogElement.value==5){return this.City}
            }
        })
        menu.close()
        DisplayArray()
    }
}





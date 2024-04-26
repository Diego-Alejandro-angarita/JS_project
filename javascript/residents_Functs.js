let listaderesidentes= JSON.parse(localStorage.getItem('lista de residentes'))

function mostrarResid(list){
  let residents = document.getElementById('residentes')
  residents.innerHTML = ''

  list.forEach((residente, index) => {
    let div = document.createElement('div')
    div.innerHTML = `
    <img src="../imgs/ukPp.png" alt="foto de la persona">
    <p>nombre:${residente.name}</p>
    <p>edad:${residente.age}</p>
    <p>numero de habitacion:${residente.roomNumber}</p>
    <p>fecha de admision:${residente.admissionDate}</p>
    <p>condicion de salud del paciente:${residente.healthCondition}</p>
    <div>
        <p>informacion de familiar:</p>
        <p>nombre:${residente.familyContact.name}</p>
        <p>parentezco:${residente.familyContact.relationship}</p>
        <p>numero de telefono:${residente.familyContact.phone}</p>
    </div>
  <hr>
    `
    residents.appendChild(div)
  });
  }
  mostrarResid(listaderesidentes);

function nombrefiltrado(){
  let filtInput = document.getElementById('filtResidentInput')
  let filtrar = filtInput.value.toLowerCase()
  let residentesFiltr = listaderesidentes.filter(residente => residente.name.toLowerCase().includes(filtrar)) 

  mostrarResid(residentesFiltr)
  }

  let addResident = document.getElementById('addResident')  
  function añadirPaciente(){
    let addName = document.getElementById('addName').value
    let addAge = document.getElementById('addAge').value
    let addRoomNumber = document.getElementById('addRoomNumber').value
    let addAdmissionDate = document.getElementById('addAdmissionDate').value
    let addHealthCondition = document.getElementById('addHealthCondition').value
    let addFamiliarName = document.getElementById('addFamiliarName').value
    let addFamiliarRealtionship = document.getElementById('addFamiliarRelationship').value
    let addFamiliarPhone = document.getElementById('addFamiliarPhone').value

    let ResidentAdded = {
      name: addName,
      age: addAge,
      roomNumber: addRoomNumber,
      admissionDate: new Date(addAdmissionDate).toLocaleDateString(),
      healthCondition: addHealthCondition,
      familyContact: {
        name: addFamiliarName,
        relationship: addFamiliarRealtionship,
        phone: addFamiliarPhone
    }
  }
    residentsData.push(ResidentAdded)
    localStorage.setItem('lista de residentes', JSON.stringify(residentsData))
}
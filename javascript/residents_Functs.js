  let residents = document.getElementById('residentes')

function mostrarResid(residentList){
    for (const resident of residentList) {
      residents.innerHTML += `
      <div>
        <img src="../imgs/ukPp.png" alt="foto de la persona">
        <p>nombre:${resident.name}</p>
        <p>edad:${resident.age}</p>
        <p>numero de habitacion:${resident.roomNumber}</p>
        <p>fecha de admision:${resident.admissionDate.toDateString()}</p>
        <p>condicion de salud del paciente:${resident.healthCondition}</p>
        <div>
            <p>informacion de familiar:</p>
            <p>nombre:${resident.familyContact.name}</p>
            <p>parentezco:${resident.familyContact.relationship}</p>
            <p>numero de telefono:${resident.familyContact.phone}</p>
        </div>
      </div>
      <hr>
      	`
    }
  }
  mostrarResid(residentsData);
 let FilterResidentLiist = []

function nombrefiltrado(){
  let filtInput = document.getElementById('filtResidentInput')
  let residenteFiltradoDiv = document.getElementById('residente-filtrado')
  let filtrar = filtInput.value.toLowerCase()
  let residentesFiltr = residentsData.filter(residente => residente.name.toLowerCase().includes(filtrar))
  FilterResidentLiist.push(residentesFiltr)


  if(filtrar == undefined || filtInput == ''){
    alert('residente no encontrado')
  }else{
    for (const filtResident of FilterResidentLiist) {
      residenteFiltradoDiv.innerHTML = `
      <p>nombre: ${filtResident.name}</p>
      <p>edad:${filtResident.age}</p>
      <p>numero de habitacion:${filtResident.roomNumber}</p>
      <p>fecha de admision:${filtResident.admissionDate}</p>
      <p>condicion de salud del paciente:${filtResident.healthCondition}</p>
      <div>
          <p>informacion de familiar:</p>
          <p>nombre:${filtResident.familyContact.name}</p>
          <p>parentezco:${filtResident.familyContact.relationship}</p>
          <p>numero de telefono:${filtResident.familyContact.phone}</p>
      </div>
      `
    }
  }
}

  function crearResidente(){
    let addName = document.getElementById('addName').value
    let addAge = document.getElementById('addAge').value
    let addRoomNumber = document.getElementById('addRoomNumber').value
    let addAdmissionDate = document.getElementById('addAdmissionDate').value
    let addHealthCondition = document.getElementById('addHealthCondition').value
    let addFamiliarName = document.getElementById('addFamiliarName').value
    let addFamiliarRealtionship = document.getElementById('addFamiliarRelationship').value
    let addFamiliarPhone = document.getElementById('addFamiliarPhone').value

    let ResidentAdded = new paciente(addName, addAge, addRoomNumber, addAdmissionDate, addHealthCondition, addFamiliarName, addFamiliarRealtionship, addFamiliarPhone)
    residentsData.push(ResidentAdded) && localStorage.setItem('nuevo paciente', JSON.stringify(ResidentAdded))
  }
  

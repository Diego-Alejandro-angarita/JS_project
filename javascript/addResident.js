class paciente{
    constructor(nombre, edad, numero_de_cuarto, fechaAdmision, condicionSalud, contactoFamiliarnombre,contactoFamiliarrelacion, contactoFamiliartelefono ){
        this.name = nombre;
        this.age = edad;
        this.roomNumber = numero_de_cuarto;
        this.admissionDate = fechaAdmision;
        this.healthCondition = condicionSalud;
        this.familyContact = {
            name: contactoFamiliarnombre,
            relationship: contactoFamiliarrelacion,
            phone: contactoFamiliartelefono
        };
    }
  }

  let addResident = document.getElementById('addResident')  

  addResident.addEventListener('submit', (prevent) => {
    prevent.preventDefault()

    let addName = document.getElementById('addName').value
    let addAge = document.getElementById('addAge').value
    let addRoomNumber = document.getElementById('addRoomNumber').value
    let addAdmissionDate = document.getElementById('addAdmissionDate').value
    let addHealthCondition = document.getElementById('addHealthCondition').value
    let addFamiliarName = document.getElementById('addFamiliarName').value
    let addFamiliarRealtionship = document.getElementById('addFamiliarRelationship').value
    let addFamiliarPhone = document.getElementById('addFamiliarPhone').value

    let ResidentAdded = new paciente(addName, addAge, addRoomNumber, addAdmissionDate, addHealthCondition, addFamiliarName, addFamiliarRealtionship, addFamiliarPhone)
    residentsData.push(ResidentAdded) 
    let toJASON = JSON.stringify(ResidentAdded)
    localStorage.setItem('nuevo paciente', toJASON)
  })

  console.log(residentsData)
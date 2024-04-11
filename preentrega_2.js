const residentsData = [
    {
      name: "Juan Pérez",
      age: 78,
      roomNumber: 101,
      admissionDate: new Date("2020-05-01"),
      healthCondition: "Diabetes y problemas cardíacos",
      familyContact: {
        name: "María Gómez",
        relationship: "Hija",
        phone: "555-1234"
      }
    },
    {
      name: "María Rodríguez",
      age: 82,
      roomNumber: 203,
      admissionDate: new Date("2018-09-15"),
      healthCondition: "Alzheimer",
      familyContact: {
        name: "Pedro Ramírez",
        relationship: "Hijo",
        phone: "555-5678"
      }
    },
    {
      name: "Carlos Sánchez",
      age: 75,
      roomNumber: 115,
      admissionDate: new Date("2022-03-20"),
      healthCondition: "Parkinson",
      familyContact: {
        name: "Lucía Díaz",
        relationship: "Esposa",
        phone: "555-9012"
      }
    },
    {
      name: "Elena Fernández",
      age: 88,
      roomNumber: 307,
      admissionDate: new Date("2019-11-01"),
      healthCondition: "Osteoporosis",
      familyContact: {
        name: "Jorge Fernández",
        relationship: "Nieto",
        phone: "555-3456"
      }
    },
    {
      name: "Miguel Jiménez",
      age: 72,
      roomNumber: 204,
      admissionDate: new Date("2021-08-01"),
      healthCondition: "Hipertensión",
      familyContact: {
        name: "Ana Suárez",
        relationship: "Sobrina",
        phone: "555-7890"
      }
    }
  ];

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

function BuscarPacienteByName(listaPacientes){
   let PedirNombre = prompt(`escribe el nombre del paciente que deseas buscar`)
   let PacienteEncontByName = residentsData.filter(residente => residente.name.toLowerCase().includes(PedirNombre))
   
   if(PacienteEncontByName == undefined || PacienteEncontByName == ""){
    alert(`paciente no encontrado`)
   }else{
    console.table(PacienteEncontByName)
   }
}

function BuscarPacienteByEdad(listaPacientes){
    let MinEdad = parseInt(prompt(`escribe la edad minima de los pacientes`))
    let MaxEdad = parseInt(prompt(`escribe la edad maxima de los pacientes`))
    let PacienteEncontByEdad = residentsData.filter(residente => residente.age >MinEdad && residente.age<MaxEdad)
    
    if(PacienteEncontByEdad == undefined || PacienteEncontByEdad == ""){
     alert(`paciente no encontrado`)
    }else{
     console.table(PacienteEncontByEdad)
    }
 }

 function BuscarPacienteByDate(listaPacientes){
    let MinDate = new Date(prompt(`escriba desde que fecha de admision desea filtrar(AAAA-MM-DD)`))
    let MaxDate = new Date(prompt(`escriba hasta que fecha de admision desea filtrar(AAAA-MM-DD)`))
    let PacienteEncontByDate = residentsData.filter(residente => residente.admissionDate >MinDate && residente.admissionDate<MaxDate)
    
    if(PacienteEncontByDate == undefined || PacienteEncontByDate == ""){
     alert(`paciente no encontrado`)
    }else{
     console.table(PacienteEncontByDate)
    }
 }
 
 function EliminarPaciente(listaPacientes, nombre){ 
  let delt = residentsData.findIndex(residente => residente.name.toLowerCase() == nombre.toLowerCase())
    if(delt !== -1){
       residentsData.splice(nombre, 1)
      alert(`paciente ${nombre} ha sido eliminado`)
    }else{
      alert(`no se encontro ningun paciente con ese nombre`)
    }
    return listaPacientes
 }

let PMenu = prompt(`¿que quieres hacer?\n1-buscar paciente\n2-añadir nuevo paciente\n3-eliminar paciente\n0-salir`)
while(PMenu != 0){
    switch(PMenu){
        case "1":
            let choosePatMeth = prompt(`como quieres buscar al paciente\n1-buscar por nombre\n2-filtrar por edad\n3-filtrar por fecha de admision\n0-atras`)
            while(choosePatMeth != 0){
                switch(choosePatMeth){
                    case "1":
                        BuscarPacienteByName(residentsData)
                    break;
                    case "2":
                        BuscarPacienteByEdad(residentsData) 
                    break;
                    case "3":
                        BuscarPacienteByDate(residentsData)
                    break;
                    default:
                        alert(`accion invalida`)
                    break;
                }
                choosePatMeth = prompt(`como quieres buscar al paciente\n1-buscar por nombre\n2-filtrar por edad\n3-filtrar por condicion medica\n0-atras`)
            }
          break;
        case "2":
            let addName = prompt(`escribe el nombre del paciente que vas a añadir`)
            let addAge = parseInt(prompt(`escribe la edad del paciente que vas a añadir`))
            let addRoomNumber = parseInt(prompt(`escriba el numero de cuarto en el que se va a quedar el paciente`))
            let addCondition = prompt(`escribe la condicion medica del paciente`)
            let addAdmissionDate = new Date(prompt(`escriba la fecha en la que el paciente ha sido ingresado (AAAA-MM-DD)`))
            let addContactName = prompt(`escriba el nombre del familiar del paciente`)
            let addContactRalation = prompt(`escribe la relacion del paciente con su familiar (ejm: nieto)`)
            let addContactPhone = parseInt(prompt(`escribe el numero de telefono del familiar del paciente`))

            residentsData.push(new paciente(addName, addAge, addRoomNumber,addAdmissionDate, addCondition, addContactName, addContactRalation, addContactPhone))
            console.table(residentsData)
          break;
        case "3":
          let choosePac = prompt(`escribe el nombre del áciente que quieres eliminar`)
            EliminarPaciente(residentsData, choosePac)
          break;

    }
    PMenu = prompt(`¿que quieres hacer?\n1-buscar paciente\n2-añadir nuevo paciente\n3-eliminar paciente\n0-salir`)
}
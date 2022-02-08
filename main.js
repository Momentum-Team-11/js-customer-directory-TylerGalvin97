let containered = document.getElementById('container')

for (let customer of customers) {
    let name = customer.name.first + ' ' + customer.name.last
    let first = customer.name.first

    let email = customer.email

    let bday = moment (customer.dob.date).format('MMM D, YY')
    let dob = 'DOB: ' + bday

    let stateName = customer.location.state
    
    console.log(stateName)

    // above displayed all the states that were given in the console

    nameToAbbr(stateName)
    console.log(nameToAbbr(stateName))

    // above displayed the abbreviation of the states in the console

    // still not really getting how this is affecting the browser. when I un-comment the script below, it displays the page. This is so I can possibly understand how it actually works. but after reading it, I still am confused how it actually works??? :/
    //especially how to display the images ??
}















// let containered = document.getElementById('container')


// for (let customer of customers) {
//     let name = customer.name.first + ' ' + customer.name.last
//     let first = customer.name.first

//     let email = customer.email

//     let bday =  moment(customer.dob.date).format("MMM D, YY")
//     let dob ='DOB: ' + bday
    
//     let stateName = customer.location.state
    
//     console.log(stateName)

//     nameToAbbr(stateName)
//     console.log(nameToAbbr(stateName))

//     let address = customer.location.street.number + ' ' + customer.location.street.name + ' ' + customer.location.city + ', ' + nameToAbbr(stateName) + ' ' + customer.location.postcode
//     console.log('Address ', address)


//     let phone = customer.phone
//     console.log(phone)

//     let pic = customer.picture.medium
//     console.log(pic)

//     let date =  moment(customer.registered.date).format("MMM D, YY")
//     let register ='Customer since: ' + date
//     console.log(register)
    
   

//     containered.innerHTML += `<div> <img src=${pic} alt="medium-pic"> <br>
//     <h2 class="name">${name} </h2> <div class="email">${email} </div> <br> ${address} <br>${phone} <br> <br> ${dob} <br> ${register} 
//     </div>`
// }

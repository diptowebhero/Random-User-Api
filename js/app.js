const loadUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => showUser(data.results[0]))
}
loadUser()
const showUser = (user) => {

    //selection
    const profile = document.getElementById("profile")
    const intro = document.getElementById("intro")
    const details = document.getElementById("details")

    profile.src = `${user.picture.large}`
    intro.innerText = `Hi, My name is`
    details.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`

    //name
    document.getElementById("name").addEventListener('mouseover', () => {
        intro.innerText = `Hi, My name is`
        details.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    })
    //email
    document.getElementById("email").addEventListener('mouseover', () => {
        intro.innerText = `My Email is`
        details.innerText = `${user.email}`
    })
    //clander
    document.getElementById("birthday").addEventListener('mouseover', () => {
        intro.innerText = `My Date Of Birth`
        details.innerText = `Age: ${user.dob.age}, ${user.dob.date.slice(0,10)}`
    })
    //phone
    document.getElementById("phone").addEventListener('mouseover', () => {
        intro.innerText = `My Phone number is`
        details.innerText = `${user.phone}`
    })
    //phone
    document.getElementById("location").addEventListener('mouseover', () => {
        intro.innerText = `My location is`
        details.innerText = `${user.location.country} , ${user.location.street.name}`
    })
    //password
    document.getElementById("password").addEventListener('mouseover', () => {
        intro.innerText = `My password is`
        details.innerText = `${user.login.password}`
    })
}
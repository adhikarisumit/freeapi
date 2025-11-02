async function findRandom(){
    const container= document.querySelector('.container');

    const url="https://randomuser.me/api/";

    const getUser= await(fetch(url));
    const response= await getUser;
    const data= await response.json();
    const user =data.results[0];
    console.log(user)
    console.log(user.email)

    // DOM
    const Image=document.querySelector("img");
    const fName=document.querySelector("#Fname");
    const lName= document.querySelector("#Lname");
    const eMail=document.querySelector("#email");
    const Location=document.querySelector("#Location");
    const Gender= document.querySelector("#Gender");

    // user propoties
    const email=user.email;
    const firstName= user.name.first;
    const lastName= user.name.last;
    const image= user.picture.large;
    const gender=user.gender;
    const location= `${user.location.country },`+`${user.location.city },`+`${user.location.postcode}`
    console.log(location)
    console.log(gender);
    console.log(firstName);
    console.log(lastName);
    console.log(image);

    // Manupulation 

    Image.src=image;
    fName.textContent=`First Name: ${firstName}`;
    lName.textContent=`Last Name: ${lastName}`;
    eMail.textContent= `Email: ${email}`;
    Location.textContent=`Location: ${location}`;
    Gender.textContent=`Gender: ${gender}`;
}
findRandom()
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const firstStep = document.querySelector('.cards');

axios 
  .get("https://api.github.com/users/mdegregori1")
  .then(response => {
    console.log('here is your data',response.data);
    const newCard = makeCard(response.data);
    firstStep.appendChild(newCard);
  })
  .catch(error => {
    console.log("The Data Wasn't Returned", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//Calling my own card to the dom 

function makeCard(array){
  const
    card = document.createElement('div');
    profilePic = document.createElement('img');
    cardInfo = document.createElement('div');
    usersName = document.createElement('h3');
    userName = document.createElement('p');
    Location = document.createElement('p');
    Profile = document.createElement('p')
    profileTag = document.createElement('a');
    Followers = document.createElement('p');
    Following = document.createElement('p');
    userBio = document.createElement('p');


//   // classes 

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  userName.classList.add('username');

//  // append (add) data
card.appendChild(profilePic);
card.appendChild(cardInfo);
cardInfo.appendChild(usersName);
cardInfo.appendChild(userName);
cardInfo.appendChild(Location);
cardInfo.appendChild(Profile);
cardInfo.appendChild(profileTag);
cardInfo.appendChild(Followers);
cardInfo.appendChild(Following);
cardInfo.appendChild(userBio);

// //content 
profilePic.src = array.avatar_url;
usersName.textContent = array.name;
userName.textContent = `Username: ${array.login}`;
Followers.textContent = `Followers: ${array.followers}`;
Following.textContent = `Following: ${array.following}`;
Location.textContent = `Location: ${array.location}`;
profileTag.href = array.html_url;
profileTag.textContent = array.html_url;
userBio.textContent = `Bio: ${array.bio}`;



return card;
}

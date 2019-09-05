/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
           https://api.github.com/users/Damilolawumi
*/

function fetchUser(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then((response) => {

      let component = userComponentCreator(response.data)
      let cards = document.querySelector('.cards');

      cards.appendChild(component)
      for(let i = 0; i <= followersArray.length; i++)
    })
   

}



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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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

const userComponentCreator = function (userInfo) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('.card');

  const Image = document.createElement('img');
  Image.src = userInfo.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('.card-info')

  const myH3 = document.createElement('h3')
  myH3.classList.add('.name')
  myH3.textContent = userInfo.name;

  const userNameParagraph = document.createElement('p');
  userNameParagraph.classList.add('.username');
  userNameParagraph.textContent = userInfo.login;

  const locationParagraph = document.createElement('p');
  locationParagraph.textContent = userInfo.location;

  const profileParagraph = document.createElement('p');
  profileParagraph.textContent = 'Profile:'

  const anchor = document.createElement('a');
  anchor.href = userInfo.html_url;
  anchor.textContent = userInfo.html_url

  const followersParagraph = document.createElement('p')
  followersParagraph.textContent = `Followers: ${userInfo.followers}`

  const followingParagraph = document.createElement('p');
  followingParagraph.textContent = `Following: ${userInfo.following}`

  const bioParagraph = document.createElement('p');
  bioParagraph.textContent = `Bio: ${userInfo.bio}`


  profileParagraph.appendChild(anchor);
  cardInfo.appendChild(myH3);
  cardInfo.appendChild(userNameParagraph);
  cardInfo.appendChild(locationParagraph);
  cardInfo.appendChild(profileParagraph);
  cardInfo.appendChild(followersParagraph);
  cardInfo.appendChild(followingParagraph);
  cardInfo.appendChild(bioParagraph);
  cardDiv.appendChild(Image);
  cardDiv.appendChild(cardInfo);

  return cardDiv
}
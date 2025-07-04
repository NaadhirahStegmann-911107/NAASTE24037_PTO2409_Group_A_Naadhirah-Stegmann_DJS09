//Modules
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from "./utils"
import { Permissions, LoyaltyUser } from "./enums"
import { Property, Review } from "./interfaces"
import MainProperty from "./classes"

const propertyContainer = document.querySelector(".properties") as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement
const button = document.querySelector('button') as HTMLElement
const footer = document.querySelector(".footer") as HTMLElement

let isLoggedIn: boolean

//Reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

//User
const you: {
  firstName : string;
  lastName: string;
  permissions: Permissions.ADMIN;
  isReturning : boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"]
}

//Array of Properties
const properties : Property[] = [
  {
    image: "images/columbia-property.jpg",
    title: "Columbian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Columbia"
    },
    contact: [+11223495082908, "marywinkle@gmail.com"],
    isAvailable: true
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland"
    },
    contact: [+11223495082908, "garydavis@hotmail.com"],
    isAvailable: false
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: "SW4 5XW",
      country: "United Kingdom"
    },
    contact: [+11223495082908, "andyluger@aol.com"],
    isAvailable: true
  },
  {
    image: "image/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 35,
    location:{
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia"
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false
  }
]
isLoggedIn = true

//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)



//Add the properties
for (let i =0; i < properties.length; i++) {
  const card = document.createElement("div")
  card.classList.add("card")
  card.innerHTML = properties[i].title
  const image = document.createElement("img")
  image.setAttribute("src", properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
  showDetails(isLoggedIn, card, properties[i].price)
}

let count = 0
function addReviews(array: Review[]) : void {
  if (!count) {
    count++
    const topTwo = getTopTwoReviews(array)
    for (let i = 0; i< topTwo.length; i++) {
      const card = document.createElement("div")
      card.classList.add("review-card")
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name
      reviewContainer.appendChild(card)
    }
    container.removeChild(button)
  }
}

button.addEventListener("click", () => addReviews(reviews))

let currentLocation: [string, string, number] = ["Cape Town", "10:35", 18]
footer.innerHTML = currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + "&deg"


let yourMainProperty = new MainProperty(
  "images/italian-property.jpg", 
  "Italian House",
  [{
    name: "Olive",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "12-04-2021"
  }]
)

const mainImageContainer = document.querySelector(".main-image") as HTMLElement
const image = document.createElement("img")
image.setAttribute("src", yourMainProperty.src)
mainImageContainer.appendChild(image)
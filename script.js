var button = document.getElementById("episodes")

var seasons = [
  "Season One, Episode One: Pilot",
  "Season One, Episode Two: Purple Giraffe",
  "Season One, Episode Three: Sweet Taste Of Liberty",
  "Season One, Episode Four: Return Of the Shirt",
  "Season One, Episode Five: Okay Awesome",
  "Season One, Episode Six: Slutty Pumpkin",
  "Season One, Episode Seven: Matchmaker",
  "Season One, Episode Eight: The Duel",
  "Season One, Episode Nine: Belly Full Of Turkey",
  "Season One, Episode Ten: The Pineapple Incident",
  "Season One, Episode Eleven: The Limo",
  "Season One, Episode Twelve: The Wedding",
  "Season One, Episode Thirteen: Drumroll, Please",
  "Season One, Episode Fourteen: Zip, Zip, Zip",
  "Season One, Episode Fiffteen: Game Night",
  "Season One, Episode Sixteen: Cupcake",
  "Season One, Episode Seventeen: Life Among The Gorillas",
  "Season One, Episode Eighteen: Nothing Good Happens After 2 A.M",
  "Season One, Episode Nineteen: Mary the Paralegal",
  "Season One, Episode Twenty: Best Prom Ever",
  "Season One, Episode Twenty-One: Milk",
  "Season One, Episode Twenty-Two: Come On",
  "Season Two, Episode One: Where Were We?",
  "Season Two, Episode Two: The Scorpion and the Toad",
  "Season Two, Episode Three: Brunch",
  "Season Two, Episode Four: Ted Mosby: Architect",
  "Season Two, Episode Five: World's Greatest Couple",
  "Season Two, Episode Six: Aldrin Justice",
  "Season Two, Episode Seven: Swarley",
  "Season Two, Episode Eight: Atlantic City",
  "Season Two, Episode Nine: Slap Bet",
  "Season Two, Episode Ten: Single Stamina",
  "Season Two, Episode Eleven: How Lily Stole Christmas",
  "Season Two, Episode Twelve: First Time In New York",
  "Season Two, Episode Thirteen: Columns",
  "Season Two, Episode Fourteen: Monday Night Football",
  "Season Two, Episode Fiffteen: Lucky Penny",
  "Season Two, Episode Sixteen: Stuff",
  "Season Two, Episode Seventeen: Arrivedervic, Fiero",
  "Season Two, Episode Eighteen: Moving Day",
  "Season Two, Episode Nineteen: Bachelor Party",
  "Season Two, Episode Twenty: Showdown",
  "Season Two, Episode Twenty-One: Something Borrowed",
  "Season Two, Episode Twenty-Two: Something Blue",
  "Season Three, Episode One: Wait For It",
  "Season Three, Episode Two: We're Not From Here",
  "Season Three, Episode Three: Third Wheel",
  "Season Three, Episode Four: Little Boys",
  "Season Three, Episode Five: How I Met Everyone Else",
  "Season Three, Episode Six: I'm Not That Guy",
  "Season Three, Episode Seven: Dowisetrepla",
  "Season Three, Episode Eight: Spoiler Alert",
  "Season Three, Episode Nine: Slapsgiving",
  "Season Three, Episode Ten: The Yips",
  "Season Three, Episode Eleven: The Platinum Rule",
  "Season Three, Episode Twelve: No Tomorrow",
  "Season Three, Episode Thirteen: Ten Sessions",
  "Season Three, Episode Fourteen: The Bracket",
  "Season Three, Episode Fiffteen: The Chain Of Screaming",
  "Season Three, Episode Sixteen: Sandcastles in the Sand",
  "Season Three, Episode Seventeen: The Goat",
  "Season Three, Episode Eighteen: Rebound Bro",
  "Season Three, Episode Nineteen: Everything Must Go",
  "Season Three, Episode Twenty: Miracles",
  "Season Four, Episode One: Do I Know You?",
  "Season Four, Episode Two: The Best Burger In New York",
  "Season Four, Episode Three: I Heart NJ",
  "Season Four, Episode Four: Intervention",
  "Season Four, Episode Five: Shelter Island",
  "Season Four, Episode Six: Happily Ever After",
  "Season Four, Episode Seven: Not a Father's Day",
  "Season Four, Episode Eight: Wooo!",
  "Season Four, Episode Nine: The Naked Man",
  "Season Four, Episode Ten: The Fight",
  "Season Four, Episode Eleven: Little Minnesota",
  "Season Four, Episode Twelve: Benefits",
  "Season Four, Episode Thirteen: Three Days Of Snow",
  "Season Four, Episode Fourteen: The Possimpible",
  "Season Four, Episode Fiffteen: The Stinsons",
  "Season Four, Episode Sixteen: Sorry, Bro",
  "Season Four, Episode Seventeen: The Front Porch",
  "Season Four, Episode Eighteen: Old King Clancy",
  "Season Four, Episode Nineteen: Murtaugh",
  "Season Four, Episode Twenty: Mosbius Designs",
  "Season Four, Episode Twenty-One: The Three Days Rule",
  "Season Four, Episode Twenty-Two: Right Place, Right Time",
  "Season Four, Episode Twenty-Three: As Fast As She Can",
  "Season Four, Episode Twenty-Four: The Leap",
  "Season Five, Episode One: Definitions",
  "Season Five, Episode Two: Double Date",
  "Season Five, Episode Three: Robin 101",
  "Season Five, Episode Four: The Sexless Innkeeper",
  "Season Five, Episode Five: Duel Citizenship",
  "Season Five, Episode Six: Bagpipes",
  "Season Five, Episode Seven: The Rough Patch",
  "Season Five, Episode Eight: The Playbook",
  "Season Five, Episode Nine: Slapsgiving 2: Revenge Of The Slap",
  "Season Five, Episode Ten: The Window",
  "Season Five, Episode Eleven: Last Cigarette Ever",
  "Season Five, Episode Twelve: Girls Versus Suits",
  "Season Five, Episode Thirteen: Jenkins",
  "Season Five, Episode Fourteen: Perfect Week",
  "Season Five, Episode Fiffteen: Rabbit or Duck",
  "Season Five, Episode Sixteen: Hooked",
  "Season Five, Episode Seventeen: Of Course",
  "Season Five, Episode Eighteen: Say Cheese",
  "Season Five, Episode Nineteen: Zoo Or False",
  "Season Five, Episode Twenty: Home Wreckers",
  "Season Five, Episode Twenty-One: Twin Beds",
  "Season Five, Episode Twenty-Two: Robots Versus Wrestlers",
  "Season Five, Episode Twenty-Three: The Wedding Bride",
  "Season Five, Episode Twenty-Four: Doppelgangers",
  "Season Six, Episode One: Big Days",
  "Season Six, Episode Two: Cleaning House",
  "Season Six, Episode Three: Unfinished",
  "Season Six, Episode Four: Subway Wars",
  "Season Six, Episode Five: Architect of Destruction",
  "Season Six, Episode Six: Baby Talk",
  "Season Six, Episode Seven: Canning Randy",
  "Season Six, Episode Eight: Natural History",
  "Season Six, Episode Nine: Glitter",
  "Season Six, Episode Ten: Blitzgiving",
  "Season Six, Episode Eleven: The Mermaid Theory",
  "Season Six, Episode Twelve: False Positive",
  "Season Six, Episode Thirteen: Bad News",
  "Season Six, Episode Fourteen: Last Words",
  "Season Six, Episode Fiffteen: Oh Honey",
  "Season Six, Episode Sixteen: Desperation Day",
  "Season Six, Episode Seventeen: Garbage Land",
  "Season Six, Episode Eighteen: A Change Of Heart",
  "Season Six, Episode Nineteen: Legendaddy ",
  "Season Six, Episode Twenty: The Exploding Meatball Sub",
  "Season Six, Episode Twenty-One: Hopeless",
  "Season Six, Episode Twenty-Two: The Perfect Cocktail",
  "Season Six, Episode Twenty-Three: Landmarks",
  "Season Six, Episode Twenty-Four: Challenge Accepted",
  "Season Seven, Episode One: The Best Man",
  "Season Seven, Episode Two: The Naked Truth",
  "Season Seven, Episode Three: Ducky Tie",
  "Season Seven, Episode Four: The Stinson Missile Crisis",
  "Season Seven, Episode Five: Field Trip",
  "Season Seven, Episode Six: Mystery vs. History",
  "Season Seven, Episode Seven: Noretta",
  "Season Seven, Episode Eight: The Slutty Pumpkin Returns",
  "Season Seven, Episode Nine: Disaster Averted",
  "Season Seven, Episode Ten: Tick Tick Tick",
  "Season Seven, Episode Eleven: The Rebound Girl",
  "Season Seven, Episode Twelve: Symphony of Illumination",
  "Season Seven, Episode Thirteen: Tailgate",
  "Season Seven, Episode Fourteen: 46 Minutes",
  "Season Seven, Episode Fiffteen: The Burning Beekeeper",
  "Season Seven, Episode Sixteen: The Drunk Train",
  "Season Seven, Episode SeventeenL No Pressure",
  "Season Seven, Episode Eighteen: Karma",
  "Season Seven, Episode Nineteen: The Broath",
  "Season Seven, Episode Twenty: Trilogy Time",
  "Season Seven, Episode Twenty-One: Now We've Even",
  "Season Seven, Episode Twenty-Two: Good Crazy",
  "Season Seven, Episode Twenty-Three: The Magician's Code- Part One",
  "Season Seven, Episode Twenty-Four: The Magician's Code- Part Two",
  "Season Eight, Episode One: Farhampton",
  "Season Eight, Episode Two: The Pre-Nup",
  "Season Eight, Episode Three: Nannies",
  "Season Eight, Episode Four: Who Wants To Be a Godparent?",
  "Season Eight, Episode Five: The Autumn of Break-Ups",
  "Season Eight, Episode Six: Splitsville",
  "Season Eight, Episode Seven: The Stamp Tramp",
  "Season Eight, Episode Eight: Twelve Horny Women",
  "Season Eight, Episode Nine: Lobster Crawl",
  "Season Eight, Episode Ten: The Over-Correction",
  "Season Eight, Episode Eleven: The Final Page- Part One",
  "Season Eight, Episode Twelve: The Final Page- Part Two",
  "Season Eight, Episode Thirteen: Band Or DJ?",
  "Season Eight, Episode Fourteen: Ring Up",
  "Season Eight, Episode Fiffteen: P.S I Love You",
  "Season Eight, Episode Sixteen: Bad Crazy",
  "Season Eight, Episode Seventeen: The Ashtray",
  "Season Eight, Episode Eighteen: Weekend at Barney's",
  "Season Eight, Episode Nineteen: The Fortress",
  "Season Eight, Episode Twenty: The Time Travelers",
  "Season Eight, Episode Twenty-One: Romeward Bound",
  "Season Eight, Episode Twenty-Two: The Bro Mitzvah",
  "Season Eight, Episode Twenty-Three: Something Old",
  "Season Eight, Episode Twenty-Four: Something New",
  "Season Nine, Episode One: The Locket",
  "Season Nine, Episode Two: Coming Back",
  "Season Nine, Episode Three: Last Time In New York",
  "Season Nine, Episode Four: The Broken Code",
  "Season Nine, Episode Five: The Poker Game",
  "Season Nine, Episode Six: Knight Vision",
  "Season Nine, Episode Seven: No Question Asked",
  "Season Nine, Episode Eight: The Lighthouse",
  "Season Nine, Episode Nine: Platonish",
  "Season Nine, Episode Ten: Mom and Dad",
  "Season Nine, Episode Eleven: Bedtime Stories",
  "Season Nine, Episode Twelve: The Rehearsal Dinner",
  "Season Nine, Episode Thirteen: Bass Player Wanted",
  "Season Nine, Episode Fourteen: Slapsgiving 3: Slappointment in Slapmarra",
  "Season Nine, Episode Fiffteen: Unpause",
  "Season Nine, Episode Sixteen: How Your Mother Met Me",
  "Season Nine, Episode Seventeen: Sunrise",
  "Season Nine, Episode Eighteen: Rally",
  "Season Nine, Episode Nineteen: Vesuvius",
  "Season Nine, Episode Twenty: Daisy",
  "Season Nine, Episode Twenty-One: Gary Blauman",
  "Season Nine, Episode Twenty-Two: The End of the Aisle",
  "Season Nine, Episode Twenty-Three: Last Forever- Part One",
  "Season Nine, Episode Twenty-Four: Last Forever- Part Two",
]

var favs = [
  "Season One, Episode One: Pilot",
  "Season One, Episode Fiffteen: Game Night",
  "Season One, Episode Eighteen: Nothing Good Happens After 2 A.M",
  "Season Two, Episode Three: Brunch",
  "Season Two, Episode Six: Aldrin Justice",
  "Season Two, Episode Seven: Swarley",
  "Season Two, Episode Nine: Slap Bet",
  "Season Two, Episode Seventeen: Arrivedervic, Fiero",
  "Season Two, Episode Nineteen: Bachelor Party",
  "Season Three, Episode Five: How I Met Everyone Else",
  "Season Three, Episode Nine: Slapsgiving",
  "Season Three, Episode Eleven: The Platinum Rule",
  "Season Three, Episode Fourteen: The Bracket",
  "Season Four, Episode Two: The Best Burger In New York",
  "Season Four, Episode Four: Intervention",
  "Season Four, Episode Fourteen: The Possimpible",
  "Season Four, Episode Twenty-Four: The Leap",
  "Season Five, Episode Three: Robin 101",
  "Season Five, Episode Eight: The Playbook",
  "Season Five, Episode Nine: Slapsgiving 2: Revenge Of The Slap",
  "Season Five, Episode Twelve: Girls Versus Suits",
  "Season Five, Episode Twenty-Four: Doppelgangers",
  "Season Six, Episode Four: Subway Wars",
  "Season Seven, Episode Three: Ducky Tie",
  "Season Eight, Episode Four: Who Wants To Be a Godparent?",
  "Season Eight, Episode Fiffteen: P.S I Love You",
  "Season Eight, Episode Eighteen: Weekend at Barney's",
  "Season Nine, Episode Fourteen: Slapsgiving 3: Slappointment in Slapmarra",
  "Season Nine, Episode Sixteen: How Your Mother Met Me",
  "Season Nine, Episode Twenty: Daisy",
]

// button random episodes code

button.addEventListener("click", function (){
  var number = randNum(seasons)
  changeQuote(number)
})

function randNum (array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random
}
randNum (seasons)

function changeQuote (someEpisode){
  var NewEpisode = document.getElementById("placeholder")
  placeholder.innerHTML = seasons[someEpisode]
}

// button favorite episodes code

buttonfav.addEventListener("click", function (){
  var number = randNum(favs)
  changeQuote2(number)
})

function randNum2 (array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random
}
randNum2 (favs)

function changeQuote2 (favEpisode){
  var NewEpisode = document.getElementById("placeholder2")
  placeholder2.innerHTML = favs[favEpisode]
}

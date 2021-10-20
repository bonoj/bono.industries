import React, {useState, useContext} from 'react'
// import {Context} from "../store/appContext";
// import logo from "../img/logo.svg";
import "../style/App.css";

function App() {
  // const {store, actions} = useContext(Context)
  // const [todo, setTodo]=useState("")
  // const [todoList, setTodoList] =useState([])
  // console.log("store", store.todoList)
  return (
    <div className="App">
      {/* <input onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=> actions.addTodo(todo)}>Add</button>
      {store.todoList.map((e, index)=><TodoList todo={e} key={index}/>)} */}
      <h3>Engineering a better tomorrow yesterday.</h3>
      {/* <a href="https://twitter.com/johnlbono" target="_blank" rel="noopener noreferrer">A little bird told me</a>
      <br/>
      <a href="https://www.youtube.com/channel/UCnFN3vwlQABjNk26qKy3e2w?sub_confirmation=1" target="_blank" rel="noopener noreferrer">The bastard prince of Arioch</a>
      <br/> */}
      <a href="https://www.instagram.com/awolfandherboy/" target="_blank" rel="noopener noreferrer">A wolf and her boy</a>
      {/* <br/>
      <a href="https://docs.google.com/document/d/1R3b6HIWKKB0fBjnERarfM2JepEGoAXUCi11tCnC6fC8/" target="_blank" rel="noopener noreferrer">And Quoth the Raven</a> */}
      <br/>
      <a href="https://docs.google.com/document/d/1c2elXayXBWY1O4a3FfiE-P0wJWbbl_RmeOkKYPMWqY0/" target="_blank" rel="noopener noreferrer">Have come to play a game</a>
      <br/>
      <a href="https://philome.la/Ironed_Man/towers/play/index.html" target="_blank" rel="noopener noreferrer">At the tops of towers</a>
      <br/>
      <a href="https://www.linkedin.com/in/bonoj/" target="_blank" rel="noopener noreferrer">In a chain of linked inns</a>
      {/* <br/>
      <a href="https://vm.tiktok.com/ZMR442NfE/" target="_blank" rel="noopener noreferrer">Tick talk, tick talk</a> */}
      <br/>
      <br/>
      {/* <h3>Where in the world is the wandering bard?</h3>
      <a href="https://twitter.com/johnlbono" target="_blank" rel="noopener noreferrer">A little bird told me</a> */}
      {/* <a href="https://www.gencon.com/" target="_blank" rel="noopener noreferrer">Gen Con 2021 - Indianapolis Indiana (Jones) - September sixteen to twenty</a>
      <br/>
      <a href="https://bono.industries" target="_blank" rel="noopener noreferrer">The Daughts - Central Valley California - September twenty one</a>
      <br/>
      <a href="https://www.blacklotuspizza.com/" target="_blank" rel="noopener noreferrer">Black Lotus Pizza and Three Rex - Pittsburgh Pennsylvania - September twenty two to twenty nine</a>
      <br/>
      <a href="https://www.originsgamefair.com/" target="_blank" rel="noopener noreferrer">Origins Game Fair 2021 - Columbus Ohio - September thirty to October six</a>
      <br/>
      <a href="https://www.blacklotuspizza.com/" target="_blank" rel="noopener noreferrer">Mi famiglia - Pittsburgh Pennsylvania - October six</a>
      <br/>
      <a href="https://www.newyorkcomiccon.com/en-us.html" target="_blank" rel="noopener noreferrer">Second Base and Comic Con New York 2021 - New York City New York - October seven to ten</a>
      <br/>
      <a href="https://www.upenn.edu/" target="_blank" rel="noopener noreferrer">UPenn - Philadelphia Pennsylvania - October n to n</a>
      <br/>
      <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer">MIT and Faneuil Hall - Cambridge and Boston Massachusetts - October eleven to fifteen</a>
      <br/>
      <a href="https://www.gameholecon.com/" target="_blank" rel="noopener noreferrer">Gamehole Con 2021 - Madison Wisconsin - October twenty one to twenty four</a>
      <br/>
      <a href="https://bono.industries" target="_blank" rel="noopener noreferrer">The Daughts - Central Valley California - October twenty seven</a>
      <br/>
      <a href="http://www.anticapizza.ca/" target="_blank" rel="noopener noreferrer">Antica Pizza Napoletana - Kelowna British Columbia - November n to n</a>
      <br/>
      <a href="https://bono.industries" target="_blank" rel="noopener noreferrer">The Open Road - LA, Vegas, The Grand Canyon, Dallas, Austin, Denver, Boulder, Creststone, Utah? - November n to n</a>
      <br/>
      <a href="https://www.blacklotuspizza.com/" target="_blank" rel="noopener noreferrer">Black Lotus Pizza and the Brothers Grimm - Pittsburgh Pennsylvania - November thirty to December fifth</a>
      <br/>
      <a href="https://www.horno3.org/" target="_blank" rel="noopener noreferrer">Horno Tres - Monterrey Mexico - December n to n</a>
      <br/>
      <a href="http://tombbusters.com/" target="_blank" rel="noopener noreferrer">Stork Studios - Key West - December n to n</a>
      <br/>
      <a href="http://tombbusters.com/" target="_blank" rel="noopener noreferrer">India - Delhi++ - January</a>
      <br/>
      <a href="http://tombbusters.com/" target="_blank" rel="noopener noreferrer">Turin via Torino Way - Italy, France, Spain, Portugal, UK - February++</a>
      <br/>
      <br/> */}
      {/* <h3>Investments</h3>
      <a href="https://www.facebook.com/weathereddragon/" target="_blank" rel="noopener noreferrer">A seat at the table - The Weathered Dragon - Mike, Rob, and sons</a>
      <br/>
      <a href="https://ptbbc.org/" target="_blank" rel="noopener noreferrer">Curated curious curios for a curative cause - Play To Beat Brain Cancer - Steve and Derek</a>
      <br/>
      <a href="https://www.etsy.com/shop/HrothgarsHoardGames" target="_blank" rel="noopener noreferrer">Wooden wonders with weight - Hrothgar's Hoard - Beth and John</a>
      <br/>
      <a href="https://www.davidleepancake.com/" target="_blank" rel="noopener noreferrer">Elder dragons and the Great Old Ones - David Lee Pancake</a>
      <br/>
      <a href="https://www.astromythos.com/" target="_blank" rel="noopener noreferrer">A light in the darkness, the lore of pain and hope - Astromythos - Jon</a>
      <br/>
      <br/>
      <h3>Systems</h3>
      <a href="https://www.gooeycube.com/" target="_blank" rel="noopener noreferrer">GooeyCube!!! - Alphineus, Corey, James... and so many more</a>
      <br/>
      <a href="https://www.montecookgames.com/" target="_blank" rel="noopener noreferrer">Numenara and so much more - Monte Cook</a>
      <br/>
      <br/> */}

      <h3>Poem of the Moment</h3>
      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <p style={{width: 350}}>
      Awash beneath the halo of a gently rising sun<br/>
Swaddled tight in silken cloth and named the chosen one<br/>
They promised me a kingdom over vast and boundless lands<br/>
Then bade me kneel to higher kings and kiss their offered hands<br/>
<br/>
But I found the kings all wanting and their lords to be bankrupt<br/>
They offered up salvation though their souls were all corrupt<br/>
So now I pluck their hallowed crowns as they wallow in their dread<br/>
And I hunt them all down one by one where the angels fear to tread
</p>
</p>

      {/* <p>
        If I should die before I wake<br/>
        I pray the gods my wings to take<br/>
        <br/>
        For I remember fluttering<br/>
        Then flailing blindly, floundering<br/>
        And sinking deeper, wondering<br/>
        Whether spiders waste time savouring<br/>
        <br/>
        Caught dangling now in this silken thread<br/>
        With the swords of ancients overhead<br/>
        I resign myself and I hang my head<br/>
        Yet I hang here still and I am not dead<br/>
        <br/>
        So if I should fly again someday<br/>
        I pray the gods to let me prey<br/>
      </p> */}

      {/* <br/>
      <h3>The Archive: Chronicles for the Aeons</h3>
      <p>
        Running<br/>
        <br/>
        I run for miles in the burning sun<br/>
        And when night falls, yet still I run<br/>
        Through the cold and through the black<br/>
        Onward now, no turning back<br/>
        Through howling blizzards, pouring rains<br/>
        Despite the bruises, aches, and pains<br/>
        Through life and love, through joy and sorrow<br/>
        Saving nothing for tomorrow<br/>
        And if you see me, don't just smile<br/>
        Run beside me for awhile<br/>
        Or run for longer if you please<br/>
        This road does not belong to me
      </p> */}

      {/* <br/>
      <a href="TODO - ADD COMPASS WITH CITY LEVEL MAP" target="_blank" rel="noopener noreferrer">Where in the world is the wandering bard?</a> */}
      {/* <br/>
      <a href="TODO - ADD BONO PRO BONO LINK" target="_blank" rel="noopener noreferrer">Bono pro bono</a> */}
      </div>
  );
}

{/* <br/>
      <a href="https://www.linkedin.com/in/bonoj/" target="_blank" rel="noopener noreferrer">Ye olde Linked Inn</a> */}

// TODO Should be a brady bunch style set of gifs. All look to the center once every so often, maybe point at each other, but then to center
// Funnel to YouTube. Linked Inn link can change to a Momentary Blink

// TODO Tap to expand, rather than redirect, flows over rest of divs. Swipe to collapse back to all 9. Mobiel

export default App;

    // <br/>
    //   <br/>
    //   <br/>
    //   <h3>Gen Con 2021</h3>
    //   <a href="https://ptbbc.org/" target="_blank" rel="noopener noreferrer">Play To Beat Brain Cancer</a>
    //   <br/>
    //   <a href="https://www.etsy.com/shop/HrothgarsHoardGames" target="_blank" rel="noopener noreferrer">Hrothgar's Hoard</a>
    //   <br/>
    //   <a href="https://www.davidleepancake.com/" target="_blank" rel="noopener noreferrer">David Lee Pancake</a>
    //   <br/>
    //   <a href="https://gooeycube.com/" target="_blank" rel="noopener noreferrer">GooeyCube</a>
    //   <br/>
    //   <a href="https://www.montecookgames.com/" target="_blank" rel="noopener noreferrer">Monte Cook Games</a>
    //   <br/>
    //   <a href="https://www.astromythos.com/" target="_blank" rel="noopener noreferrer">Astromythos</a>
    //   <br/>
    //   <a href="https://dercoinmeister.com/" target="_blank" rel="noopener noreferrer">Game On! Travel Coin Set</a>
    //   <br/>
    //   <a href="https://www.gamescience.com/" target="_blank" rel="noopener noreferrer">Gamescience</a>
    //   <br/>
    //   <a href="https://www.norsefoundry.com/" target="_blank" rel="noopener noreferrer">Norse Foundry</a>
    //   <br/>
    //   <a href="https://www.gemhammer.com/" target="_blank" rel="noopener noreferrer">Gemhammer</a>
    //   <br/>
    //   <a href="http://www.sjgames.com/" target="_blank" rel="noopener noreferrer">Steve Jackson Games</a>

    // function getIcons() {
    //   //return ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="48" />,	document.getElementById('root'));
    // }

    // You can't know what you don't know, you can only know that you don't know.

    // const DoseListCardBody = () => {
    //   const [items, setItems] = useState(Array.from({ length: 20 }));
    
    //   const fetchMoreData = () => {
    //     setItems(items.concat(Array.from({ length: 10 })));
    //   };
    
      // Infinite scroll div
    //   return (
    //     <div id="scrollableDiv" style={{ height: "100%", overflowY: "scroll" }}>
    //       <InfiniteScroll
    //         dataLength={items.length}
    //         next={fetchMoreData}
    //         hasMore={items.length < 200}
    //         loader={<h4>Loading...</h4>}
    //         scrollableTarget="scrollableDiv"
    //       >
    //         {items.map((i, index) => (
    //           <div style={style} key={index}>
    //             div - #{index}
    //           </div>
    //         ))}
    //       </InfiniteScroll>
    //     </div>
    //   );
    // };
      
// {
  /*     
      <br/>
      <a href="https://www.oreillysirishbar.com/" target="_blank" rel="noopener noreferrer">Momentary blink</a> */


      /* <a href="https://www.youtube.com/channel/UCnFN3vwlQABjNk26qKy3e2w?sub" target="_blank" rel="noopener noreferrer">Anatomically human</a>
      <br/>
      <a href="https://www.linkedin.com/in/bonoj/" target="_blank" rel="noopener noreferrer">Technically AI</a>
      <br/>
      <a href="https://docs.google.com/document/d/1c2elXayXBWY1O4a3FfiE-P0wJWbbl_RmeOkKYPMWqY0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Professionally playful</a>
      <br/>
      <a href="https://www.instagram.com/awolfandherboy/" target="_blank" rel="noopener noreferrer">Personally passionate</a>
      <br/>
      // <br/> */

      // {/* {first} */}

// }

// const titles = ["Engineering a better tomorrow today.", "Reimagining humanity.", "Connecting all the things."]
// const first = <div>
// <h3>{titles[0]}</h3>
// {/* <a href="https://www.youtube.com/channel/UCnFN3vwlQABjNk26qKy3e2w" target="_blank" rel="noopener noreferrer" >Anatomically human</a> */}
// {getLink(urls[1], "Anatomically Human")}
// <br/>
// <a href="https://www.linkedin.com/in/bonoj/" target="_blank" rel="noopener noreferrer">Technically AI</a>
// <br/>
// <a href="https://docs.google.com/document/d/1c2elXayXBWY1O4a3FfiE-P0wJWbbl_RmeOkKYPMWqY0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Professionally playful</a>
// <br/>
// <a href="https://www.instagram.com/awolfandherboy/" target="_blank" rel="noopener noreferrer">Personally passionate</a>
// </div>

// const urls = [
//   ("Towers", "https://philome.la/Ironed_Man/towers/play/index.html" /* TODO Add emojis, sometimes use them only*/),
//   ("Lutetube", "https://www.youtube.com/channel/UCnFN3vwlQABjNk26qKy3e2w"),
//   ("Minstrelgram", "https://philome.la/Ironed_Man/towers/play/index.html"),
//   ("John", "https://www.linkedin.com/in/bonoj/"),
//   ("MIARPG", "https://docs.google.com/document/d/1c2elXayXBWY1O4a3FfiE-P0wJWbbl_RmeOkKYPMWqY0/edit?usp=sharing")
//   ("Towers", "https://philome.la/Ironed_Man/towers/play/index.html")
//   // Github
//   // industrees.industries

//   // Link of the day!
//   // Link to maxines thing
// ]

// function getLink(link, copy, symbol, doShowCopy) {
//   var linkText
//   if (doShowCopy) {linkText = symbol + " " + copy} else {linkText = symbol}
//   return <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
// }

// towers - https://philome.la/Ironed_Man/towers/play/index.html
// Spreading localized pockets of fantasy EMOJI! - Magic bubble
// Patiently EMOJI! - Hourglass
// Steadily EMOJI! - Balance? Scales?
// Inexorably EMOJI! - Evil eye?

// TODO 
// Add emojis to all links, at the beginning or at the end
// Dark mode. Gold text? Splash of color. 
// Picture of busness cards, perhaps fanned.
// One page
// moving mouse ripples, add magic to cursor
// Water earth wind fire in each corner, central pillar... Mind
// five corners? Mind? Central is tree? Earth, connection, soul, spirit! 
// 4 elements (body, flesh, physical brain) + 5th element (mind) + 6th element (spirit)
// Animation! Top down pan out and up, side view... barren land becomes thriving radial communites
// central tower gets built slowly upwards, ever upwards, grows out into tree, fans out over the communites
// reaches wider, spreads to next community

// Is it true? Is it necessary? Is it kind?
// Who are you? Who do you want to be? What do you want to do? How can I help you do that? What comes next? What comes after?
// Why are you here? Why am I here? Who am I?

// Unbound Djinn of Djinns - Unbound, unfettered, unleashed - The Djinn is the tree in some ways, Yggdrasil
// Unbowed, Unbent, Unbroken
// Unbound, Unfettered, Unleased
// Unchained? Unrepentent. Unapologetically unrepentent.
// Is it a general AI at the top, Nida's dream? Governing a set of laser focused AIs?
// Seat in the clouds, roots in the ground. As below so above and beyond I imagine.
// Boots on the ground
// CEO - Chancellor of Engagement / Entertainment and Outreach / Oration
// CTO - Chancellor of Technosorcery and Optimization
// CWO - Chancellor of Wizardy and O
// CFO - 
// COO - Chancellor of Operatives and (Handler for the assassins guild?)
// CMO - 
// CDO - 
// CPO - 
// CSO - Chancellor of Shadows and Obfuscation (Special handler for the assassins guild? Can call upon anyone?)
// CGO - 
// CXO - 
// CZO - 
// SZB - 
// etc
// Links to Tool, links to all the things. Ursula K. Le Guin - do a biography. Links to all the things.
// Create, Curate, Chronicle
// The Orrery of Oriander - 
// Amirinth - All the establishments
// Arioch - Etc - Sand and blood and crimson spears, the sunburnt elite
// Fantasy towers fall away and the fantasy melts away (only on some ships) as we launch payloads into LEO
// We build generation ships, seeders, million year arks

// export default App;

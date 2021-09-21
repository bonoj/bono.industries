import React, {useState, useContext} from 'react'
// import {Context} from "../store/appContext";
// import logo from "../img/logo.svg";
import "../style/App.css";
import React from 'react';
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

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
      <a href="https://www.youtube.com/channel/UCnFN3vwlQABjNk26qKy3e2w?sub_confirmation=1" target="_blank" rel="noopener noreferrer">The wandering bard</a>
      <br/>
      <a href="https://www.instagram.com/awolfandherboy/" target="_blank" rel="noopener noreferrer">A wolf and her boy</a>
      <br/>
      <a href="https://docs.google.com/document/d/1c2elXayXBWY1O4a3FfiE-P0wJWbbl_RmeOkKYPMWqY0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">{"Massively Inclusive & Accessible RPG"}</a>
      <br/>
      <a href="https://vm.tiktok.com/ZMR442NfE/" target="_blank" rel="noopener noreferrer">Tick talk, tick talk</a>
      <br/>
      <a href="https://www.linkedin.com/in/bonoj/" target="_blank" rel="noopener noreferrer">Ye olde Linked Inn</a>
      <br/>
      <br/>
      <br/>
      <h3>Gen Con 2021</h3>
      <a href="https://ptbbc.org/" target="_blank" rel="noopener noreferrer">Play To Beat Brain Cancer</a>
      <br/>
      <a href="https://www.etsy.com/shop/HrothgarsHoardGames" target="_blank" rel="noopener noreferrer">Hrothgar's Hoard</a>
      <br/>
      <a href="https://www.davidleepancake.com/" target="_blank" rel="noopener noreferrer">David Lee Pancake</a>
      <br/>
      <a href="https://gooeycube.com/" target="_blank" rel="noopener noreferrer">GooeyCube</a>
      <br/>
      <a href="https://www.montecookgames.com/" target="_blank" rel="noopener noreferrer">Monte Cook Games</a>
      <br/>
      <a href="https://www.astromythos.com/" target="_blank" rel="noopener noreferrer">Astromythos</a>
      <br/>
      <a href="https://dercoinmeister.com/" target="_blank" rel="noopener noreferrer">Game On! Travel Coin Set</a>
      <br/>
      <a href="https://www.gamescience.com/" target="_blank" rel="noopener noreferrer">Gamescience</a>
      <br/>
      <a href="https://www.norsefoundry.com/" target="_blank" rel="noopener noreferrer">Norse Foundry</a>
      <br/>
      <a href="https://www.gemhammer.com/" target="_blank" rel="noopener noreferrer">Gemhammer</a>
      <br/>
      <a href="http://www.sjgames.com/" target="_blank" rel="noopener noreferrer">Steve Jackson Games</a>
      </div>
  );
    }
    export default App;

    // function getIcons() {
    //   //return ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://some-website.com/my-social-media-url" size="48" />,	document.getElementById('root'));
    // }

    // You can't know what you don't know, you can only know that you don't know.

    const DoseListCardBody = () => {
      const [items, setItems] = useState(Array.from({ length: 20 }));
    
      const fetchMoreData = () => {
        setItems(items.concat(Array.from({ length: 10 })));
      };
    
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

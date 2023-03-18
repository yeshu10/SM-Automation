import React, { useEffect, useState } from "react";

function App() { 
  const [home, setHome] = useState([]);
 const fetchData = () => {
    return fetch("http://localhost:3000/api/home/homepost")
          .then((response) => response.json())
          .then((data) => setHome(data));
        
        }
  useEffect(() => {
    fetchData();
  },[])

  return (

    <main>
      <h1>Home List</h1>
      <ul>
        {(()=>{
          let post=[];
          for(let i=0 ;i<home.length;i++){
          post.push(<li key={home[i]['id']}>{home[i]['title']} &nbsp; {home[i]['desc']}</li>)
          }
          return post;
        })       
          ()}
      </ul>
     {/*  <ul>
        {home && home.length > 0 && home.map((homeObj, index) => (
            <li key={homeObj['id']}>{homeObj['title']} &nbsp; {homeObj['desc']}</li>
          ))}
        </ul>*/}
    </main>
  );
}

export default App;

/*
videoUrls = async () => {
  let i=0;
  let urllist=[]
  for(i;i< this.state.data.length;i++){
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.data[i].name}&key=xxxxxxxxxxx0`)
      const json = await response.json()
      urllist.push(json.items[0])
      console.log({urllist})
    }
 }
*/
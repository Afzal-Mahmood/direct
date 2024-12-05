import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
function App() {
  const backgroundStyle = {
    backgroundImage: 'url(bg.jpg)', 
    backgroundSize: 'cover',               
    backgroundPosition: 'center',        
    height: '100vh',                     
    width: '100%',                         
  };
  const[longUrl,setLongUrl] = useState("  ")
  const[shortUrl,setShortUrl] = useState("  ")
  const handleShorten = () => {
         // Fake shortening for demo purposes
         const fakeShortUrl = `https://short.ly/${Math.random().toString(36).substr(2, 5)}`;
         setShortUrl(fakeShortUrl);
       };


   return (
     <>
     <div style={backgroundStyle}>
     <div className="col-12 d-flex body">
       <div className="col-5 p-atuo me-5">         
       </div>
      <div className="col-5 rounded ms-5 one" style={{backgroundColor:'lightgray',marginTop:'150px',padding:'80px',font:'small-caption'}}>
            <h2 className=' text-info text heading display-1' style={{textShadow:'-moz-initial',fontFamily:'fantasy'}} >Url Shortner</h2>
            <p className='col-10 paragraph'>ShortURL is a tool to shorten a long link and create a short URL easy to share on sites, chat and emails. Track short URL traffic and manage your links.</p>
            <div className="container m-0 col-10">
            <input
            type="text"
            className="form-control"
            // placeholder="Enter your long URL"
            placeholder='EnteR'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
                <button className='btn w-100 btn-outline-primary mt-2' onClick={handleShorten}>URL SHORTNER</button>
            </div>
      </div>
     </div>
    </div>
    {shortUrl && (
           <div className="text-center">
             <p className="text-success fw-bold">Shortened URL:</p>
             <a href={shortUrl} target="_blank"  className="btn btn-link">
               {shortUrl}
             </a>
           </div>
         )}
    </>
  )
}

 export default App


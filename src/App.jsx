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
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");

//   const handleShorten = () => {
//     // Fake shortening for demo purposes
//     const fakeShortUrl = `https://short.ly/${Math.random().toString(36).substr(2, 5)}`;
//     setShortUrl(fakeShortUrl);
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
//         <h2 className="text-center mb-3 text-primary">URL Shortener</h2>
//         <p className="text-muted text-center">
//           Enter a long URL to generate a shorter, shareable link.
//         </p>
//         <div className="mb-3">
//           {/* <input
//             type="text"
//             className="form-control"
//             placeholder="Enter your long URL"
//             value={longUrl}
//             onChange={(e) => setLongUrl(e.target.value)}
//           /> */}
//         </div>
//         <button className="btn btn-primary w-100 mb-3" onClick={handleShorten}>
//           Shorten URL
//         </button>
//         {shortUrl && (
//           <div className="text-center">
//             <p className="text-success fw-bold">Shortened URL:</p>
//             <a href={shortUrl} target="_blank"  className="btn btn-link">
//               {shortUrl}
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

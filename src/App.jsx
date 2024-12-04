import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const backgroundStyle = {
    backgroundImage: 'url(bg.jpg)', 
    backgroundSize: 'cover',               
    backgroundPosition: 'center',        
    height: '100vh',                     
    width: '100%',                         
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
                <input type="text" className='m-auto mb-2 form-control' />
                <button className='btn w-100 btn-outline-primary'>URL SHORTNER</button>
            </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default App

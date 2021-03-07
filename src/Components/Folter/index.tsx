import './style.css'
import { FaFacebook } from 'react-icons/fa'; 
import Logo from '../Logo';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';

const Folter = () => {

  return (
    <div>
      
      <h1 className="h1-3" id="page-5">
      Try for free!
        </h1>
        
        <div className="d-flex">
        <p>
        Get limited 1 week free try our features!
        </p>
        
             <button className="btn-3">Learn more</button>
             <button className="btn-4">Request Demo</button>
        
        </div>
    <div className="mg-50">
      <div className="d-flex">
      <Logo/> 
      <h3 className="mg-l-5">DataWarehouse</h3>
      
      </div>
      <div className="d-flex">

      <div className="col-1">
      <p>Warehouse Society, 234 <br/>
        Bahagia Ave Street <br/>
        PRBW 29281 <br/>
      </p>
      <p>
      info@warehouse.project <br/>
      1-232-3434 (Main)
      </p>
      <p className="small-p">
      © Datawarehouse™, 2020. All rights reserved. <br/>
      Company Registration Number: 21479524.
      </p>
      
      </div>
      <div className="col-2">
      <h3 className="mg-l-200px">About</h3>
      <p className="mg-l-200px">
      Profile <br/><br/>

      Features <br/> <br/>

      Careers <br/><br/>

      DW News<br/><br/>
      </p>
      
      
      </div>
      <div className="col-3">
      <h3 className="mg-l-150px" id="page-3">Help</h3>
      <p className="mg-l-150px">
      Support <br/><br/>
      Sign up <br/><br/>
      Guide<br/><br/>
      Reports<br/><br/>
      Q&A<br/><br/>
      </p>
      </div>
      <div className="col-4">
      <h3 className="mg-l-150px">Social media</h3>
      <p className="mg-l-150px f-si">
        <FaFacebook/>
        <AiFillTwitterCircle/>
        <RiInstagramFill/>
      </p>
      
      
      </div>
      </div>
      
      
      
    </div>
    
    </div>
  );
}

export default Folter;
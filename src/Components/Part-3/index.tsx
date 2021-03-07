import React from 'react';
import Btn from '../Btn';
import Imagem3 from '../Imagens/imagem3';
import Imagem4 from '../Imagens/imagem4';
import Imagem5 from '../Imagens/imagem5';
import Imagem6 from '../Imagens/imagem6';
import './style.css'


const Parte3 = () => {

  return (
    <div>
      
        <h1 className="h1-2" id="page-4">
        Features
        </h1>
        <p className="p-2">
        Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
        </p>
        <div className="d-flex">
        <div className="img3">
            <Imagem3/>
        </div>
            <div className="text-1">
            <h3>
                Search Data
            </h3>
            <p>
            Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
            </p>
            <Btn/>
            </div>
            <div className="img4">
            <Imagem4/>
             </div>
            <div className="text-2">
           
                <h3>
                24 Hours Access
                </h3>
                <p>
                Access is given 24 hours a full morning to night and
                meet again in the morning, giving you comfort when
                you need data when urgent.
                </p>
                <Btn/>
            </div>
        </div>
        <div className="d-flex">
        <div className="img4">
            <Imagem5/>
        </div>

            <div className="text-2">
            <h3>
            Print Out
            </h3>
            <p>
                Print out service gives you convenience if someday
                you need print data, just edit it all and just print it.
            </p>
            <Btn/>
            </div>
            <div className="img4">
            <Imagem6/>
            </div>
            <div className="text-1">
                <h3>
                Security Code
                </h3>
                <p className="align-text4">
                Data Security is one of our best facilities. Allows for your files
                to be safer. The file can be secured with a code or password that 
                you created, so only you can open the file.
                </p>
                <Btn/>
            </div>
        </div>
    </div>
  );
}

export default Parte3;
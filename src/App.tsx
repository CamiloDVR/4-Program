import Boton from './components/Boton';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Imagen from './components/Imagen';
import Paragraph from './components/Paragraph';
import './components/App.css';
function alerta(){

}







function App() {

  return(
    <div className='General_Container'>
      <div className='left-side'>
        <div className='first'> 
          <Heading texto=" Your product list" />
          <Paragraph texto='3 items'/>
          </div>
        <div className='Img-container'>
          <Imagen url="./src/components/img/shopping-list.jpg"/>
          <div className='align'>
              <div className='elements' >
              <Paragraph texto='Illuminating face cream'/>
              <Counter />
              </div>
              <div className='close-area'>
              <Boton className='close' onClick={alerta} texto='X'/>
              <Paragraph texto='$12.99'/>
              </div>
          </div>
          
          
         
      </div>
        <div className='Img-container'>
          <Imagen url="./src/components/img/shopping-list2.jpg"/>
          <div className='align'>
          <div className='elements'>
          <Paragraph texto='Illuminating face cream'/>
          <Counter />
          </div>
          <div className='close-area'>
            <Boton className='close' onClick={alerta} texto='X'/>
            <Paragraph texto='$9.99'/>
          </div>
          </div>
        </div>


        <div className='Img-container'>
          <Imagen url="./src/components/img/shopping-list3.jpg"/>
          <div className='align'>
            <div className='elements'>
              <Paragraph className='especial' texto='Intense lift up serum'/>
              <Counter />
            </div>
            <div className='close-area'>
               <Boton className='close' onClick={alerta} texto='X'/>
               <Paragraph texto='$29.99'/>
            </div>
          </div>
      </div>


        <div className='Img-container'>
          <Imagen url="./src/components/img/shopping-list4.jpg"/>
          <div className='align'>
            <div className='elements'>
              <Paragraph className="especial1" texto='CBD Premiun Oil'/>
              <Counter />
            </div>
            <div className='close-area'>
              <Boton className='close' onClick={alerta} texto='X'/>
              <Paragraph texto='$32.99'/>
            </div>
          </div>
      </div>
      </div>


      <div className='Right-side'>
        <div className='Right-container'>
          <Heading texto='Order Summary'/>
          <div className='zone1'>
          <Paragraph texto="Subtotal"/>
          <Paragraph texto="$85.96"/>
          </div>
          <div className='zone2'>
          <Paragraph texto="Tax"/>
          <Paragraph texto="$6.88"/>
          </div>
          <div className='zone3'>
          <Paragraph texto="Shipping"/>
          <Paragraph texto="$.0.00"/>
          </div>
          <hr></hr>
          <div className='zone4'>
          <Paragraph texto="Total"/>
          <Paragraph texto='$92.84'/>
          </div>
          <Boton className="pagar" onClick={alerta} texto='Pay now'></Boton>
        </div>
        <div className='bottom-zone'>
          <label className="etiqueta" htmlFor="text">Promo Code</label>
          <input id="text" type='textarea'></input>

      </div>
   </div>
  </div>
  );
}

export default App

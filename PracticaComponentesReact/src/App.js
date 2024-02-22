import React from 'react';
import ProductCard from './productCard'; 
import './productCard.css';
import './App.css';
import Search from './buscar'
import './buscar.css';

function App() {

  return (
    <div className="App">

      <div className='Encabezado'>
        <img src='https://static.vecteezy.com/system/resources/previews/017/722/106/non_2x/cooking-cuisine-cookery-logo-restaurant-menu-cafe-diner-label-logo-design-illustration-free-vector.jpg' width={200} height={200}></img>
        <h1>Recetas de cocina</h1>
      </div>

     
      <div className='buscar-container'>
      <Search></Search>
      </div>
        

      <div className="app-container">
        <div className="product-list">
        
          <ProductCard 
            image="https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/99555-PLATANO-PORTALIMON.jpg"
            name="Platano"
            description="Amarillo"  
          />

          <ProductCard 
            image="https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1708473600&semt=ais" 
            name="manzana"
            description="roja"
          />

          
          <ProductCard 
            image="https://static.vecteezy.com/system/resources/previews/016/744/720/non_2x/illustration-of-strawberry-fruit-strawberry-drawing-vector.jpg"
            name="fresa"
            description="roja y pequeña"  
          />

          <ProductCard 
            image="https://cdn-3.expansion.mx/dims4/default/f6480b1/2147483647/strip/true/crop/2121x1414+0+0/resize/1800x1200!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fa0%2Fa6%2F650f7cb9488a9346cf16f7cd561b%2Fistock-463813283.jpg" 
            name="chocolate"
            description="dulce"
          />

          <ProductCard 
            image="https://mandolina.co/wp-content/uploads/2023/06/tacos-clasicos.png" 
            name="tacos"
            description="rico"
          />

        </div>
      </div>

    </div>
  );

}

export default App;
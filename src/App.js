import './App.css';
import cookies from './cookies.jpg';


function App() {
  return (
    <div className="App">
      <div class="container recipe-container">
    <h1 class="recipe-title">Chocolate Chip Cookies</h1>
    <img class="recipe-image" src={cookies} alt="cookies"></img>
    <div class="row">
      <div class="col-md-6">
        <h2>Ingredients</h2>
        <ul class="list-group">
          <li class="list-group-item">2 1/4 cups all-purpose flour</li>
          <li class="list-group-item">1/2 teaspoon baking soda</li>
          <li class="list-group-item">1 cup unsalted butter, softened</li>
          <li class="list-group-item">1/2 cup granulated sugar</li>
          <li class="list-group-item">1 cup packed brown sugar</li>
          <li class="list-group-item">1 teaspoon vanilla extract</li>
          <li class="list-group-item">2 large eggs</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Instructions</h2>
        <ol class="list-group">
          <li class="list-group-item">Preheat oven to 350°F (175°C).</li>
          <li class="list-group-item">In a small bowl, combine flour and baking soda; set aside.</li>
          <li class="list-group-item">In a large mixing bowl, cream together the butter, granulated sugar, and brown sugar until smooth.</li>
          <li class="list-group-item">Beat in the vanilla extract and eggs until well blended.</li>
          <li class="list-group-item">Gradually add the flour mixture to the wet ingredients, mixing until just incorporated.</li>
          <li class="list-group-item">Stir in the chocolate chips.</li>
          <li class="list-group-item">Drop by rounded spoonfuls onto ungreased baking sheets.</li>
          <li class="list-group-item">Bake for 8 to 10 minutes or until golden brown.</li>
          <li class="list-group-item">Cool on wire racks.</li>
        </ol>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;

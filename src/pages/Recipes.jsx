import RecipeCard from "../components/RecipeCard"
import recipeOneImage from "../assets/images/recipe-one.png";
import recipeTwoImage from "../assets/images/recipe-two.png";
import recipeThreeImage from "../assets/images/recipe-three.png";
import recipeFourImage from "../assets/images/recipe-four.png";

const Recipes = () => {
  return (
    <div className="px-10 py-10">
      <h4>Search</h4>
      <div>
        <h5>What is in your kitchen?</h5>
        <p>Enter some ingredients</p>
      </div>
      <div>
        <i>MG</i>
        <input type="text" />
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        <RecipeCard image={recipeOneImage}
          name="Chorizo & mozzarella gnocchi bake" />
        <RecipeCard image={recipeTwoImage}
          name="Coconut & squash curry" />
        <RecipeCard image={recipeThreeImage}
          name="Huevos Rancheros" />
        <RecipeCard image={recipeFourImage}
          name="Black forest Gateau" />
      </div>
    </div>
  )
}

export default Recipes
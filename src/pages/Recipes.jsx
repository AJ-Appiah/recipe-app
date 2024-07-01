import RecipeCard from "../components/RecipeCard"
import recipeOneImage from "../assets/images/recipe-one.png";
import recipeTwoImage from "../assets/images/recipe-two.png";
import recipeThreeImage from "../assets/images/recipe-three.png";
import recipeFourImage from "../assets/images/recipe-four.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import BottomNavigation from "../components/BottomNavigation";

const Recipes = () => {
  return (
    <>
      <div className="px-10 py-10 size-[2opx]">
        <h4 className="text-2xl font-bold px-[140px]">Search</h4>
        <div className="px-2 py-7">
          <h5 className="text-1xl font-bold">What is in your kitchen?</h5>
          <p>Enter some ingredients</p>
        </div>

        <div className="border-solid w-[350px] h-[5px] bg-[#F1F1F1] mb-10">
          <div className="flex flex-row  py-9">
            <MagnifyingGlassIcon className="size-6 text-black " />
            <input type="text"
              placeholder="Type your ingredient here" />
          </div>
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

      <BottomNavigation />
    </>
  );
}

export default Recipes
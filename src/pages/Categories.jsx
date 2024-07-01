import CategoriesTile from "../components/CategoriesTile"
import breakfast from "../assets/images/breakfast.png"
import lunch from "../assets/images/lunch.png"
import drinks from "../assets/images/drinks.png"
import pastas from "../assets/images/pastas.png"
import salads from "../assets/images/salads.png"
import desserts from "../assets/images/desserts.png"
import soups from "../assets/images/soups.png"
import BottomNavigation from "../components/BottomNavigation"

const Categories = () => {
  return (
    <>
    <div>
      <h3 className="text-black">Categories</h3>
      <div>
        <p>
          <CategoriesTile image={breakfast}
            name="Breakfast" />
        </p>

        <p>
          <CategoriesTile image={lunch}
            name="Lunch" />
        </p>

        <p>
          <CategoriesTile image={drinks}
            name="Drinks" />
        </p>

        <p>
          <CategoriesTile image={pastas}
            name="Pastas" />
        </p>

        <p>
          <CategoriesTile image={salads}
            name="Salads" />
        </p>

        <p>
          <CategoriesTile image={desserts}
            name="Desserts" />
        </p>

        <p>
          <CategoriesTile image={soups}
            name="Soups" />
        </p>
      </div>
    </div >
    <BottomNavigation/>
    </>
  )
}

export default Categories
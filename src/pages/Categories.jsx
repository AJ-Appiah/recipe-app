import CategoriesCard from "../components/CategoriesCard"
import breakfast from "../assets/images/breakfast.png"
import lunch from "../assets/images/lunch.png"
import drinks from "../assets/images/drinks.png"
import pastas from "../assets/images/pastas.png"
import salads from "../assets/images/salads.png"
import desserts from "../assets/images/desserts.png"
import soups from "../assets/images/soups.png"

const Categories = () => {
  return (
    <div>
      <p>Categories</p>
      <div>
        <div>
          <p>
            <CategoriesCard image={breakfast}
              name="Breakfast" />
          </p>
        </div>
        <div>
          <p>
            <CategoriesCard image={lunch}
              name="Lunch" />
          </p>
        </div>
        <div>
          <p>
            <CategoriesCard image={drinks}
              name="Drinks" />
          </p>
        </div>
        <div>
          <p>
            <CategoriesCard image={pastas}
              name="Pastas" />
          </p>
        </div>
        <div>
          <p>
          <CategoriesCard image={salads}
            name="Salads" />
        </p>
      </div>
      <div>
        <p>
          <CategoriesCard image={desserts}
            name="Desserts" />
        </p>
      </div>
      <div>
        <p>
          <CategoriesCard image={soups}
            name="Soups" />
        </p>
      </div>
    </div>
    </div >
  )
}

export default Categories
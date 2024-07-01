import { FireIcon, HeartIcon } from "@heroicons/react/24/outline"

const FavoriteCard = ({name, image}) => {
  return (
    <div>
        <div>
            <div><HeartIcon /></div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <div><FireIcon/></div>
        </div>
    </div>
  )
}

export default FavoriteCard
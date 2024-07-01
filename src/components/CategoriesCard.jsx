const CategoriesCard = ({name, image}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F6F6F6]  rounded ">
        <span>{name}</span>
        <img src={image} alt={name} />
        </div>
    </div>
  )
}

export default CategoriesCard






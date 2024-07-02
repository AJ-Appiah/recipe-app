const CategoriesTile = ({name, image}) => {
  return (
    <div>
      <div className="bg-[#F6F6F6] flex flex-row justify-between rounded ">
        <span>{name}</span>
        <img src={image} alt={name} />
        </div>
    </div>
  )
}

export default CategoriesTile






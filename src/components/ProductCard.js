//import image from `../assets/${image_url}`

export default function ProductCard({id, name, price, description, image_url}) {
  
  return (
    <div>
        <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{price}</li>
            <li>{description}</li>
            <li>{`../assets/${image_url}`}</li>
        </ul>
    </div>
  )
}

import "./App.css" ;

const url1 = "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg" ;
const url2 = "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg" ;
const url3 = "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg";

export default function Layout(){
    return <div className='main_div'>
        <a href="https://google.com" className="img"><img id="image1" src={url1} alt="image1" /></a>
        <a href="https://google.com" className="img"><img id="image2" src={url2} alt="image2" /></a>
        <a href="https://google.com" className="img"><img id="image3" src={url3} alt="image3" /></a>
    </div>
}
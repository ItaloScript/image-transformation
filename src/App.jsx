import { useRef, useState } from 'react'
import './App.css'
import Upload from './components/upload'
import Transform from './components/transform'

function App() {
  const [image, setImage] = useState()
  const imageRef = useRef()
  const [transformedImage, setTransformedImage]= useState()

  return (
        <div className=" container-fluid py-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6" style={{minHeight:'500px'}} >
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" style={{objectFit:"contain"}} src={transformedImage || image || "empty.jpg"} />
                        </div>
                    </div>
                    {
                      image ? <Transform image={image} imageRef={imageRef} setTransformedImage={setTransformedImage}/> : <Upload imageRef={imageRef} setImage={setImage}   />
                    }
                    
                </div>
            </div>
        </div>
    
  )
}

export default App

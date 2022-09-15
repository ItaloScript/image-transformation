
export default function Upload({ setImage, imageRef }) {

    return (
        <div className="col-lg-6 pt-5 pb-lg-5">
            <div className=" bg-white p-4 p-lg-5 my-lg-5">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>ImageTrans</h6>
                <h1 className="mb-3">Faça o upload da foto da qual gostaria que fosse transformada</h1>
                <p>Clique no botão abaixo para fazer o upload da sua imagem</p>
                <div className="row mb-4">
                    <div className="col-6">
                        <img className="img-fluid" src="img/about-1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <img className="img-fluid" src="img/about-2.jpg" alt="" />
                    </div>
                </div>

                <input onChange={e => {
                    console.log(e.target.files[0])
                    setImage(URL.createObjectURL(e.target.files[0]))
                    imageRef.current = e.target.files[0]
                }} className="d-none " id="image-upload" type="file" />

                <a href="#" onClick={() => document.getElementById("image-upload").click()} className="btn btn-primary mt-1">Upload Imagem</a>
            </div>
        </div>
    )
}
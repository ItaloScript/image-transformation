import axios, { post } from "axios"
import { useEffect, useState } from "react"

export default function Transform({ image, setTransformedImage, imageRef }) {

    const [selected, setSelected] = useState(transformations[0])


    async function ApplyTransformation() {
        const formData = new FormData();
        formData.append('image', imageRef.current)
        const data = await axios.post("http://localhost:5000" + selected.route, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            responseType: 'blob'
        });
        setTransformedImage(URL.createObjectURL(data.data))
    }

    return (
        <div className="col-lg-6 pt-5 pb-lg-5">
            <div className=" bg-white p-4 p-lg-5 my-lg-5">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>ImageTrans</h6>
                <h1 className="mb-3">Selecione qual tipo de transformação deseja realizar</h1>
                <p>Clique no botão abaixo para fazer o upload da sua imagem</p>

                <select onChange={(e) => setSelected(transformations[e.target.value])} class="custom-select px-4 mb-4" style={{ height: "47px" }} >
                    {
                        transformations.map((transformation, index) => (
                            <option key={index} value={index}>{transformation.title}</option>
                        ))
                    }
                </select>

                <a href="#" onClick={ApplyTransformation} className="btn btn-primary mt-1">Transformar Imagem</a>
            </div>
        </div>
    )
}

const transformations = [
    {
        title: "Negativo",
        route: "/negativo",
    },
    {
        title: "Logaritmica",
        route: "/logaritmica",
    },
    {
        title: "Potência",
        route: "/potencia",
    },
    {
        title: "Fatiamento por plano de bits",
        route: "/bit-plane",
    },
    {
        title: "Equalização de histograma (local)",
        route: "/histograma-local"
    },
    {
        title: "Equalização de histograma (global)",
        route: "/histograma-global"
    },
    {
        title: "Filtro de média",
        route: "/media-espacial"
    },
    {
        title: "Filtro de mediana",
        route: "/mediana-espacial"
    },
    {
        title: "Filtro de Sobel",
        route: "/sobel"
    },
    {
        title: "Filtro de Laplace",
        route: "/laplacian"
    },
    {
        title: "Filtro High Boost",
        route: "/high-boost"
    },
    {
        title: "Filtro Roberts",
        route: "/roberts"
    },
    {
        title: "Erosão",
        route: "/erosion"
    },
    {
        title: "Dilatação",
        route: "/dilation"
    },
    {
        title: "Abertura",
        route: "/opening"
    },
    {
        title: "Fechamento",
        route: "/closing"
    },
    {
        title: "Hit or Miss",
        route: "/hitOrMiss"
    },
    {
        title: "Extração de Fronteiras",
        route: "/boundaryExtraction"
    },
    {
        title: "Preenchimento de Buracos",
        route: "/holeFilling"
    },
    {
        title: "Componentes Conexos",
        route: "/connectedComponents"
    },
    {
        title: "Prewitt",
        route: "/prewitt"
    },
    {
        title: "Gradiente com Limiarização",
        route: "/gradientThresholding"
    },
    {
        title: "Marr-Hildreth",
        route: "/marrHildrethFilter"
    },
    {
        title: "Canny",
        route: "/cannyFilter"
    },
    {
        title: "Transformada de Hough",
        route: "/houghTransform"
    },
    {
        title: "Método de Otsu",
        route: "/otsuThresholding"
    },
    {
        title: "Médias Móveis",
        route: "/movingAverageFilter"
    },
    {
        title: "Crescimento de Região",
        route: "/regionGrowing"
    },
    {
        title: "Water Shed",
        route: "/watershed"
    }
]
import { useState, useEffect } from "react";
import axios from 'axios';


function Dogs(props) {
    const [dogImg, setDogImg] = useState();

    useEffect(() => {
        const getDogImg = async () => {
            const respImg = await axios.get(`https://dog.ceo/api/breed/${props.breed}/images/random`);
            setDogImg(respImg.data.message);
        }
        getDogImg();
    }, []);

    return (
        <div className='dogsList'>

            <p ><span className="breed">Breed:</span> <br />{props.breed}</p>
            <p><img src={dogImg} /> </p>
            <p>
                <span className="breed">Subreed:</span> 
                <ol className="sub">{
                    props.subBreed.map((item) => {
                        return (
                            <li>
                                {item}
                            </li>
                        )
                    })
                }
                </ol>
            </p>
        </div>
    );
}

export default Dogs;
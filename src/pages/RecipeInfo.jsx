import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_SPOON_API_KEY2;

function RecipeInfo() {
  let { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true)

  const getRecipeInfo = async (name) => {
    // const checkData = JSON.parse(localStorage.getItem("info"));
    // if (checkData) {
    //   setInfo(checkData);
    // } else {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${API_URL}`
    );
    const infoData = await api.json();
    localStorage.setItem("info", JSON.stringify(infoData));
    setInfo(infoData);
    setLoading(false)
   
    //}
  };

  useEffect(() => {
    if (id) {
      getRecipeInfo(id);
      console.log(id);
    }
  }, [id]);
  console.log(info);

  if(loading){
    console.log('loading');
  }

  return (
    <div className="container info-container">
      <div className="article">
        <div className="recipe-title">
          <h2>{info.title}</h2>
        </div>
        <div className="holder">
          <div className="img-holder">
            <img src={info.image} alt="" />
          </div>
          <div className="summary-holder">
            <p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
          </div>
        </div>
        {/* <div className="preparation-holder ">
          <div className="ingridients-holder ">
            {info.extendedIngredients && (
              info.extendedIngredients.map((ingridient, index) => (
                <ul style={{
                  listStyle: 'none',
                  textAlign: 'left',
                }}>
                  <li key={ingridient.id}>
                    {index + 1}. {ingridient.originalName}

                  </li>
                </ul>
              ))
            )}
          </div>
          <div className="instruction-holder">
            <div dangerouslySetInnerHTML={{ __html: info.instructions }}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default RecipeInfo;

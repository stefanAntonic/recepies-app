import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import CuisineContext from "../context/CuisineContext";

function Cusine() {
  const { cuisine, getCuisine} = useContext(CuisineContext);
  const [loading, setLoading] = useState(true)
  let params = useParams();
  // console.log(params.type);
  console.log(cuisine);
  

  useEffect(() => {
  getCuisine(params)
  setLoading(false)
  
  },[params])
  
 if(loading){
   return console.log('loading');
 }
  // Here i need to connect this link to recipe details
  return ( 
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <StyledLink to={`/recipes/${item.id}/information`}>
              {item.title}
            </StyledLink>
          </Card>
        );
      })}
    </Grid>
  );
}
const StyledLink = styled(Link)`
  text-align: center;
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cusine;

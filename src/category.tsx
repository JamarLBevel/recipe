import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import {Card,Col,Row,Container,Image} from 'react-bootstrap';
import { useNavigate,Navigate,Link } from "react-router-dom";
export default function RecipeDetail(){
const location = useLocation()
const data:any = location.state;
const [recipes,setRecipes] = useState<any[]>([])
const navigate = useNavigate();
useEffect(() => {

    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
    .then((response) => response.json())
    .then((result) => setRecipes(result.meals));
    console.log(recipes)
},[]);


    return(
        <div>
        <Row xs={1} md={2} lg={4} className="g-3">
            {recipes.map((recipe) => (
                <div onClick={() => navigate('/recipe',{state:recipe})}>
                <Col>
                <Card className="shadow" style={{borderColor:'white'}}>
                    <Image src={recipe.strMealThumb} className='card-img-top' alt='food image' fluid />
                <Card.Body>
                    <Card.Title>
                        {recipe.strMeal}
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col>
                </div>
            ))}
        </Row>
         
        </div>
    );
}

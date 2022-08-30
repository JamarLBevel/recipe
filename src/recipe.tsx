import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect,useState} from "react";
import {Image,Container,Col,Row,Stack,Button,Collapse} from 'react-bootstrap'
export default function Recipe(){
const data:any = useLocation().state;
const [recipe,setRecipe] = useState<any[]>([])
const [open, setOpen] = useState(false);
const [ingred,setIngred] = useState<any[]>([])
useEffect(() => {

    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
    .then((response) => response.json())
    .then((result) => setRecipe(result.meals));
   
    

},[]);




return(
<div>
<Container fluid>
{recipe.map((data) => (
<Row className="justify-content-center">
<Col sm={8} md={7} lg style={{textAlign:'center'}}>
<Image src={data.strMealThumb} alt='food' fluid height={500} width={500} className='mt-5 ms-4 me-5  rounded shadow'/>
</Col>
<Col sm={8} md={7} lg>
<Stack className="justify-content-center" style={{textAlign:'center'}}>

<h1 className="mt-3 ms-5">
    {data.strMeal}
</h1>
<Button className="col-3 mx-auto"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>instructions</Button>
         <Collapse in={open}>
<p className="me-5" id="example-collapse-text">{data.strInstructions}</p>
</Collapse>

</Stack>
</Col>
</Row>
))}
</Container>
</div>
);
}

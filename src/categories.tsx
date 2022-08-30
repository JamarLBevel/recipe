import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import topPhoto from './theTopPhoto.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState,useEffect} from 'react';
import {Col,Row,Container,Card,Image,InputGroup,Form,ListGroup, Nav, Button, Stack, Collapse} from 'react-bootstrap';
import { motion } from "framer-motion"
import { Link,Navigate,useNavigate } from 'react-router-dom'

export default function Categories(){
    const navigate = useNavigate();
    const [data,setData] = useState<any[]>([])
    function LoadActivity(){
     
      fetch('https://themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => setData(data.categories));
    }
    useEffect(() => {
      LoadActivity() 
    },[]);

    function HandleClick(props:any){
        const navigate = useNavigate();
        console.log(props)
        navigate('./recipeDetail',{state:data})
      };
    return (
      <div>
        <Image src={topPhoto} alt="header photo" fluid/>
        <Search/>
         <div>
          <br/>
          <h1>
          Categories
          </h1>
         <Row xs={1} md={2} lg={4} className='g-3'>
          {data.map(data => (
           <div key={data.idCategory} onClick={() => navigate('/recipeDetail',{state:data})}>
           <Col>
           <Card className='shadow' style={{borderColor:'white'}}>
           <Image src={data.strCategoryThumb} className='card-img-top' alt='food image' fluid />
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>{data.strCategory}</Card.Title>
            </Card.Body>
           </Card>
           </Col>
            </div>
          ))}
          </Row>
       
          </div>
      </div>
    );

  }
  function Search(){
   const [text,setText] = useState("");
  const [open,setOpen] = useState(false)
  const [recipes,setRecipes] = useState<any[]>([])
  const navigate = useNavigate();
  const getSearch = () => {
   
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then((response) => response.json())
    .then((result) => {

      if (result.meals == null) {
        alert('not a good search')
      }
      else {
        setRecipes(result.meals)
        setOpen(true)
      }

    })
  }
    return (
      <div>
     <InputGroup className="mb-3 w-50 mx-auto">
        <Button onClick={getSearch} className='rounded' variant="primary" id="button-addon1" type='submit'>
          Search
        </Button>
        <Form.Control
         value={text}
         onChange={(e) => setText(e.target.value)}
          placeholder='seafood, toco, goat'
          className='rounded-lg'
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Collapse in={open}>
      <Row xs={1} md={2} lg={4} className='g-3'>
      {recipes.map((data) => (
        <div key={data.idMeal} onClick={() => navigate('/recipe',{state:data})}>
        <Col>
        <Card className='shadow' style={{borderColor:'white'}}>
        <Image src={data.strMealThumb} alt='recipe photo' className='card-img-top' fluid />
        <Card.Body>
          <Card.Title>{data.strMeal}</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        </div>
      ))}
      </Row>
      </Collapse>
      </div>
    )
  }
  
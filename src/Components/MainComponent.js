import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetail  from "./DishdetailComponent";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectDish:null
        }
      }
      onDishSelect(dish){
          this.setState({selectDish:dish});
      }
     
    render(){
        const menu = this.props.dishes.map((dish) => {

            return (
                
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id} 
                onClick={()=>this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Card>
                </div>
            );
        });
        return(
            <React.Fragment>
            
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                {menu}
                </div>          
                 <DishDetail selectDish={this.state.selectDish} />
             </div>
           
            </React.Fragment>
        );

    }
}


export default Menu;

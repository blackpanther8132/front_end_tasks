import React, {Component} from "react";
import {Card,  CardBody, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap"
import DishDetail  from "./DishdetailComponent";
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectDish:null
        }
      }
      onDishSelect(dish){
          this.setState({selectDish:dish})
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
            <Header />
            <div className="container">
                <div className="row">
                {menu}
                </div>
              
                 <DishDetail  selectDish={this.state.selectDish} />
             </div>
            <Footer />
            </React.Fragment>
        );

    }
}


export default Menu;

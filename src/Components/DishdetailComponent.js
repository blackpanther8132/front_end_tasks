import React, {Component} from "react"
import {Card,  CardBody, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap"

class DishDetail  extends Component{
    constructor(props){
        super(props);
     
    }
    renderComments(dish){ 
        if(dish!=null)
        return(
          
                 <div>  
                    <h4>Comments</h4>
                    {(() => {
                    const options = [];

                    for (let i = 0; i < dish.comments.length ; i++) {
                        options.push(<ul className="list-unstyled"><li>{dish.comments[i].comment}</li></ul>,
                        <ul className="list-unstyled"><li>-- {dish.comments[i].author} , {new Intl.DateTimeFormat('en-US',{year : 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(dish.comments[i].date)))}</li></ul>);
                    }

                    return options;
                    })()}
                    </div>
                   
           
        );
  else
  return(
      <div></div>
  );
            }
    renderDish(dish){
      
        if(dish!=null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
      else
      return(
          <div></div>
      );
    }

    render(){
                return(
                  <div className="row">  
                    <div className ="col-12 col-md-5 m-1">            
                    {this.renderDish(this.props.selectDish)}
                    </div>
                    <div className ="col-12 col-md-5 m-1">            
                    {this.renderComments(this.props.selectDish)}
                    </div>
                  </div>
 
              );

    }
}
export default DishDetail ;
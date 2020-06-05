import React from "react";
import "./Page.css";

class Page extends React.Component {
  state={            //Весь объект - это This. В react использовать state чтобы всё в него запехнуть (в state всё лежит).
    bag:10,
    shoppingResult:"nothing", //если задать null, то гичего не отобразиться (способ спрятать)
    inputPrice:0,
  }

  cash=(card)=> {
    // console.log(100);
    // console.log(this.state);
    this.setState({                //встроенная функция setState (вместо this.state.bag=this.state.bag+card;)
      bag: this.state.bag+card,
    });

  }


  shopping=(price)=> {
    if (this.state.bag<price) {
      return this.setState({
        shoppingResult: "no money - no honey",
      });
    } else {
      return this.setState({
        shoppingResult: this.state.bag-price,
        // bag: this.state.bag-price,
      });
    }
  }

  render() {
    return (
      /* сюда можно всю страницу заинуть, но только внутри одного тега, например <div> вся страница </div> */
      <div>
        <a href="#" className="first_link">First link</a>
        <div>{this.state.bag}</div>
        <button onClick={()=> this.cash(50)}>Ok</button>

        <input value={this.state.inputPrice} onChange={(event)=> {
          this.setState({
            inputPrice: (event.target.value),
          })
          
        }} />
        <div>{this.state.shoppingResult}</div>
        <button onClick={()=> this.shopping(this.state.inputPrice)}>let's shop</button>
      </div>
    )
  }
}

export default Page;
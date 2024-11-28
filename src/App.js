import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items:[
        {
          id:1,
          title:'Диваны',
          img:'divan1.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'sofa',
          price:'204.10'
        },
        {
          id:2,
          title:'Лампа',
          img:'lampa1.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'light',
          price:'59.9'
        },
        {
          id:3,
          title:'Столы',
          img:'stol1.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'tables',
          price:'37.20'
        },
        {
          id:4,
          title:'Стулья',
          img:'stul1.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'chairs',
          price:'34'
        },
        {
          id:5,
          title:'Диваны',
          img:'divan2.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'sofa',
          price:'180.89'
        },
        {
          id:6,
          title:'Лампа',
          img:'lampa2.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'light',
          price:'58.9'
        },
        {
          id:7,
          title:'Столы',
          img:'stol2.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'tables',
          price:'41.4'
        },
        {
          id:8,
          title:'Стулья',
          img:'stul2.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'chairs',
          price:'68.9'
        },
        {
          id:9,
          title:'Диваны',
          img:'divan3.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'sofa',
          price:'208'
        },
        {
          id:10,
          title:'Лампа',
          img:'lampa3.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'light',
          price:'21.3'
        },
        {
          id:11,
          title:'Столы',
          img:'stol3.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'tables',
          price:'92.90'
        },
        {
          id:12,
          title:'Стулья',
          img:'stul3.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'chairs',
          price:'17.6'
        },
        {
          id:13,
          title:'Диваны',
          img:'divan4.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'sofa',
          price:'242.9'
        },
        {
          id:14,
          title:'Лампа',
          img:'lampa4.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'light',
          price:'44'
        },
        {
          id:15,
          title:'Столы',
          img:'stol4.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'tables',
          price:'55.9'
        },
        {
          id:16,
          title:'Стулья',
          img:'stul4.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'chairs',
          price:'71.4'
        },
        {
          id:17,
          title:'Диваны',
          img:'divan5.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'sofa',
          price:'197.90'
        },
        {
          id:18,
          title:'Лампа',
          img:'lampa5.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'light',
          price:'49.9'
        },
        {
          id:19,
          title:'Столы',
          img:'stol5.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'tables',
          price:'79.5'
        },
        {
          id:20,
          title:'Стулья',
          img:'stul5.jpg',
          desc:'Lorem Ipsumg industry. Lorem Ipsum has been the industrys standard dummy',
          category:'chairs',
          price:'36.1'
        }
        
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems=this.state.items
    this.addToOrder=this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseCategory=this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
  }
  render(){
    return (
   <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
   </div>
  )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  
  chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el=>el.category===category)
    })
  }

  deleteOrder(id){
      this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
  }


  addToOrder(item){
    let isInArray=false
    this.state.orders.forEach(el=>{
      if(el.id==item.id)
        isInArray=true
    })
    if(!isInArray)
      this.setState({orders:[...this.state.orders,item]})
  }
}

export default App;






import React, { Component } from 'react';


class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }
    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(res=>{
            const {memes} = res.data
            console.log(memes)
            this.setState({
                allMemeImgs:memes
                
            })
            
        })
        
    }
    
    handleChange=(e)=>{
        const {name,value}= e.target
        this.setState({
            [name]  : value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(randNum);
        const randMemeImg = this.state.allMemeImgs[randNum].url
        console.log(randMemeImg);
        // /set random img to url of the random item i grapeed
        this.setState({randomImg:randMemeImg})


        
    }
    render() { 
        return <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>

                   <input type="text" name="topText" placeholder="Top Text"  value={this.state.topText} onChange={this.handleChange}/>
                
                   <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>
                 
                <button >Gen</button>
            </form>

            <div className="meme">

                <img  src={this.state.randomImg}/>
                <h1 className="top" >{this.state.topText}</h1>
                <h1  className="bottom">{this.state.bottomText}</h1>

            </div>
        </div>;
    }
}
 
export default MemeGenerator ;
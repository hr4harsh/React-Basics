import React from 'react';

class Counter extends React.Component {
    // state={
    //     count:this.props.counter.value,
    //     // tags:["tag1", "tag2", "tag3"]
    // };
    style={
        fontSize:10
    }

    renderTags() {
        if(this.state.tags.length===0) return <p>There are no tags</p>;

        return <ul>{this.state.tags.map( tag => <li key={tag} > {tag} </li> )}</ul>
    }

//    handleIncrement= (product) =>
//     {
//         // console.log("Increment CLicked", this.state.count);
//         // this.state.count++; //it wont change the value in DOM
//         this.setState({count:this.state.count+1});
//         // console.log( product, this.state.count);
//     }
    render() { 


        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'> Increment</button>
                {/* {this.renderTags()} */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-sm btn-danger m-2'>Delete</button>

            </div>
        );
        
    }
    getBadgeClasses(){
        let classes='btn btn-sm m-2 btn-';
        classes+= this.props.counter.value === 0 ? 'warning': 'info';
        return classes;
    }
    formatCount(){

        return this.props.counter.value===0? "zero" :this.props.counter.value
    }
   
}
 
export default Counter;
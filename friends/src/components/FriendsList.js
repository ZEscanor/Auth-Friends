import React from 'react';
import { axiosWithAuth } from "../util/axiosWithAuth";
import AddFriend from "./AddFriend";
class FriendsList extends React.Component{
    state={
        friends: [""]

        
    };

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        axiosWithAuth()
        .get("/friends")
        .then((res)=> {
            console.log(res.data)
            this.setState({
                friends: res.data
            
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    render(){
    return(<div>  
        {console.log(this.state.friends)}

        { this.state.friends.map((item)=>
        <div>
         <div>{item.name}</div>
         <div>{item.age}</div>
         <div>{item.email}</div>
         </div>
         )}

         <AddFriend/>
         </div>)
    
}
}

export default FriendsList;
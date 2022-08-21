import { Add_To_Table } from "./constant";



const UserData =(data=[] ,action)=>{
    
    switch(action.type){
        case Add_To_Table:
            console.log("Add_To_Cart Condition",action.data)
            const arr1 = [action.data,...data]
            return arr1
        default:
            return data;
            

    }
      
}

export default UserData
import { Add_To_Table } from "./constant"

export const addToTable =(data) => {
   
    return {
        type:Add_To_Table,
        data
}
}
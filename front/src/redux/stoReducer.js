


 const SET_CLIENTS = "STOREDUCER/SET_CLIENTS";
 const SET_CARS = "STOREDUCER/SET_CARS";
 const SET_ORDERS = "STOREDUCER/SET_ORDERS";


const initialState = {
    clients: [],

    cars: [],

    orders: []
}


const stoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS: {
            return {
                ...state,
                clients: [...action.clients]
            }
        }
       
        default: return state;
    }
}

const setClientsAC = () => ({type: SET_CLIENTS, clients});
const setCarsAC = () => ({type: SET_CARS, cars});
const setOrdersAC = () => ({type: SET_ORDERS, orders});
export const getClients = () => async(dispatch, getState)=>{
    
}
export default stoReducer;
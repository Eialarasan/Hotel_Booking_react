import Action from '../action/index'
const initialState={

    formData:{}
}

export const FormReducers=(state=initialState,action)=>{
    switch (action.type) {
        case Action.FORM_DETAILS:
            console.log(action.param,"red")
            return{
                ...state,
                formData:action.param
            }
    
        default:
            return state;
    }
}

export const getFormDetails=(State)=>State?.FORM?.formData
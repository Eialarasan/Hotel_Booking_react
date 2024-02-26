export const FORM_DETAILS="FORM_DETAILS"

export const FormDetails=(param)=>{
    console.log(param,"acrion")
    return{
        type:FORM_DETAILS,
        param
    }
}
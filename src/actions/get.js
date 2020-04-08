import { DrinksRest } from '../services'
// Alert.alert('Modal has been closed.');
export const _getDrinksByCategory = (category) => {

    return dispatch => {

        dispatch({ type: 'DRINKS_LOADING',  payload: '' });
        
        DrinksRest.getDrinksByCategory(category)
        
        .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'drinks' } }) })
        
        .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
    
    }
}


export const _getDrinksAlcoholic = (alcoholic) => {

    return dispatch => {

        dispatch({ type: 'DRINKS_LOADING',  payload: '' });
        
        DrinksRest.getDrinksAlcoholic(alcoholic)
        
        .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'drinks' } }) })
        
        .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
    
    }
}

export const _init = () => {

    return dispatch => {

        dispatch({ type: 'DRINKS_LOADING',  payload: '' });


        DrinksRest.getListOfIgradients()
        
        .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'arrayOfIgradients' } }) })
        
        .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
    

        DrinksRest.getListOfGlass()
        
        .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'arrayOfGlass' } }) })
        
        .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
    
    }
}


export const _getDrinksGlass = (glass) => {

  return dispatch => {

      dispatch({ type: 'DRINKS_LOADING',  payload: '' });
      
      DrinksRest.getDrinksGlass(glass)
      
      .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'drinks' } }) })
      
      .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
  
  }
}

export const _getDrinksIgradient = (igradient) => {

  return dispatch => {

      dispatch({ type: 'DRINKS_LOADING',  payload: '' });
      
      DrinksRest.getDrinksIgradient(igradient)
      
      .then(res =>{ dispatch({ type: 'DRINKS_CHANGE_FIELD',  payload: { value: res.data.drinks, field: 'drinks' } }) })
      
      .catch(err =>{ dispatch({ type: 'DRNKS_ERROR',  payload: {value: err, field: 'msg_erro'} }) });
  
  }
}



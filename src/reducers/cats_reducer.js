const initialState = {
  loading: false,
  pictures:[]

};

export default function catsReducer(state={loading: false, pictures:[]}, actions){
  switch(action.type){
    case "LOADING_CATS":
      return {...state, loading: true}
    case "FETCH_CATS":
        return {loading: false, pictures: action.payload}
    default: return state;
  }
}

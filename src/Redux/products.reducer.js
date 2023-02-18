import * as Types from "./products.actionTypes";

const iState = {
    productsData: [],
    productsDataCopy: [],
    productsLoading: false,
    productsError: false,
    totalCount: 0,
    totalPrice: 0
  };


  export const proReducer = (oldstate=iState, {type,payload})=>{
    switch(type){
        case Types.GET_PRODUCTS_LOADING:
            return {...oldstate, productsLoading: true}
        case Types.GET_PRODUCTS_SUCCESS:
            return {...oldstate, productsData: payload, productsDataCopy: payload, totalCount: cartCountFunc(payload),productsLoading: false, totalPrice:avgfun(payload) }

        case Types.GET_PRODUCTS_ERROR:
            return {...oldstate, productsError: true}



        case Types.GET_PRODUCTS_SORTHL:
            return {
                ...oldstate,
                dogData: sortHLfun(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_SORTLH:
            return {
                ...oldstate,
                dogData: sortLHfun(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_FILTER_MEN:
            return {
                ...oldstate,
                dogData: filterFuncMen(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_FILTER_WOMEN:
            return {
                ...oldstate,
                dogData: filterFuncWomen(oldstate.productsDataCopy),
            };

        case Types.GET_REMOVE_FILTER:
            return {
                ...oldstate,
                dogData: oldstate.productsDataCopy,
            };

        default:
            return oldstate;
        }
  }



  const filterFuncMen = (arr)=>{
    const validate = arr.filter((el) => {
        return el.category == "men";
      });
      return validate.length;
  }

  const filterFuncWomen = (arr)=>{
    const validate = arr.filter((el) => {
        return el.category == "women";
      });
      return validate.length;
  }


  const cartCountFunc =(arr)=>{
    let temp = arr.reduce((acc, el) => (acc += Number(el.price)), 0);
    return temp / arr.length;
  }


  const avgfun = (arr) => {
    let temp = arr.reduce((acc, el) => (acc += Number(el.price)), 0);
    return temp / arr.length;
  };
  


  const sortHLfun = (arr) => {
    return arr.sort((a, b) => Number(b.price) - Number(a.age));
  };
  const sortLHfun = (arr) => {
    return arr.sort((a, b) => Number(a.price) - Number(b.price));
  };
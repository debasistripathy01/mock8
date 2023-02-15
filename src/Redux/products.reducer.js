import * as Types from "./products.actionTypes";

const iState = {
    productsData: [],
    productsDataCopy: [],
    cart:[],
    productsLoading: false,
    productsError: false,
    totalCount: 0,
    totalPrice: 0
  };


  export const proReducer = (oldstate=iState, action)=>{
    const {type,payload} = action;
    switch(type){
        case Types.GET_PRODUCTS_LOADING:
            return {...oldstate, productsLoading: true, productsError:false}

        case Types.GET_PRODUCTS_SUCCESS:
            return {...oldstate, 
                productsData: payload, 
                productsDataCopy: payload,
                productsError:false, 
                totalCount: cartCountFunc(payload),
                productsLoading: false, 
                totalPrice:avgfun(payload) 
            }

        case Types.GET_PRODUCTS_ERROR:
            return {...oldstate, productsError: true}



        case Types.GET_PRODUCTS_SORTHL:
            return {
                ...oldstate,
                productsData: sortHLfun(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_SORTLH:
            return {
                ...oldstate,
                productsData: sortLHfun(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_FILTER_MEN:
            return {
                ...oldstate,
                productsData: filterFuncMen(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_FILTER_WOMEN:
            return {
                ...oldstate,
                productsData: filterFuncWomen(oldstate.productsDataCopy),
            };

        case Types.GET_PRODUCTS_FILTER_KIDS:
            return {
                ...oldstate,
                productsData: filterFuncKids(oldstate.productsDataCopy),
            };

        case Types.GET_REMOVE_FILTER:
            return {
                ...oldstate,
                productsData: oldstate.productsDataCopy,
            };


        case Types.GET_CART_DETAILS_REQUEST:
            return {
                ...oldstate, 

            }
        case Types.GET_CART_DETAILS_SUCCESS:
            return {
                ...oldstate, 
                cart: payload
            }
        case Types.GET_CART_DETAILS_FAILUER:
            return {
                ...oldstate, 

            }

        default:
            return oldstate;
        }
  }



  const filterFuncMen = (arr)=>{
    const validate = arr.filter((el) => {
        return el.category === "men";
      });
      return validate;
  }

  const filterFuncWomen = (arr)=>{
    const validate = arr.filter((el) => {
        return el.category === "women";
      });
      return validate;
  }
  const filterFuncKids = (arr)=>{
    const validate = arr.filter((el) => {
        return el.category === "kids";
      });
      return validate;
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
    return arr.sort((a, b) => Number(b.price) - Number(a.price));
  };
  const sortLHfun = (arr) => {
    return arr.sort((a, b) => Number(a.price) - Number(b.price));
  };
import createDataContext from "./createDataContext"


const blogReducer = (state,action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state,{id:Math.floor(Math.random() * 999),title:action.payload.title,content:action.payload.content}]
    case "delete_blogpost":
      return state.filter(item => item.id !== action.payload) 
    default:
      return state
  }
}
const addBlogPost = (dispatch) => {
  return (title,content,callback) => {
    dispatch({type:"add_blogpost",payload:{title,content}})
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type:"delete_blogpost",payload:id})
  }
}

export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[{title:"Deneme Post",content:"Deneme İçerik İçerik Boyutu Artıyor Bir de Böyle Deniyoruz Bunun Uzun Bir Yazı Olduğunu Varsayarak",id:1}]);
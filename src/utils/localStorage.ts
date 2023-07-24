const addToLocalStorage=(email:string)=>{
   const user={email:email}
localStorage.setItem('userEmail', JSON.stringify(user))  
}

const getUser=()=>{
   return localStorage.getItem('userEmail')
}

const removeUser=()=>{
    localStorage.removeItem('userEmail')
}
export{
    addToLocalStorage,
    getUser,
    removeUser
}
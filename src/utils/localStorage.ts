const addToLocalStorage=(email:string,name:string,phone:number)=>{
   const user={email:email, name:name,phone:phone}
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
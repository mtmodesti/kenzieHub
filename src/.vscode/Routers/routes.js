import { useEffect, useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import { CreateAccForm } from '../Components/CriarAccForm'
import { Dashboard } from '../Components/Dashboard'
import Login from '../Components/LoginForm'

export const Routes = () => {

    const [auth, setAuth] = useState(false)

    useEffect(() => { 
       const token = localStorage.getItem("@Kenziehub:token")
       if(token){
           console.log('token captura do local storagem')
            setAuth(true)
       }
        
    }, [])
   

    return (
        <>
        <Switch>
            <Route exact path ='/'>
               <Login  auth={auth}  setAuth={setAuth} />
            </Route>

            <Route path ='/criarconta'>
               <CreateAccForm auth={auth}  />
            </Route>

            <Route path ='/usuariologado/:token'>
               <Dashboard auth={auth} setAuth={setAuth} />
            </Route>

        </Switch>
        
        </>
    )
}
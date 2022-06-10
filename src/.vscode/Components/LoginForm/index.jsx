import { Component } from "./styles";
import { useState } from "react";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import './styles.css'
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../services/api'
import {Link, useParams} from 'react-router-dom'


const Login = ({auth, setAuth}) => {

    const [email, SetEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const [user, setUser] = useState()

    const history = useHistory()
    const params = useParams()

    
    if(auth){
        history.push(`/usuariologado/${localStorage.getItem('@Kenziehub:token')}`)
    }

    const formSchema = yup.object().shape({
        email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    async function handleLogin (infoPerson)  {
        
        await api.post('/sessions', {
            email: infoPerson.email,
            password: infoPerson.password
        })
        .then(res => {
            setUser(infoPerson)
            setAuth(true)
            const {token,user} = res.data
            localStorage.setItem('@Kenziehub:token', token)
            localStorage.setItem('@Kenziehub:user', JSON.stringify(user))
            toast.success('Login realizado com sucesso!')
            history.push(`/usuariologado/${localStorage.getItem('@Kenziehub:token')}`)
        })
        .catch(error => {
            toast.error('Ops! Credenciais inválidas')
        }) 
    }

    return (
  
        <Component>
            <ToastContainer/>
        <h1>Kenzie Hub</h1>
        <form onSubmit={handleSubmit(handleLogin)} >
            <h2>Login</h2> 

            <span>Email</span>

            <input 
            type="text" 
            placeholder="E-mail"
            onChange={(e) => SetEmail(e.target.value) }
            {...register('email')}
            ></input>
            {errors.email?.message}

            <span>Senha</span>

            <input
            
            placeholder="Senha"
            onChange={(e) => setPassowrd(e.target.value)}
            {...register('password')}
            ></input>
            {errors.password?.message}
            
            <button type="submit" className="entrar" >Entrar</button>
                
            <span>Ainda não possui uma ?</span>
            <button onClick={() => {
            history.push('/criarconta')
            }} className="cadastre">Cadastre-se</button>
            
            </form>
        </Component>
     )
       
       
    
}

export default Login

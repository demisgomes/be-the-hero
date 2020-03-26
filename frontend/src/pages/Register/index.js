import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Register(){
    return (
       <div className="register-container">
           <div className="content">
               <section>
                   <img src={logoImg} alt="Be The Hero"/>
                  
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16}  color="#e02041"/>
                        Não tenho cadastro                    
                    </Link>
               </section>

               <form>
                <input placeholder="Nome da ONG" type="text"/>
                <input placeholder="email" type="text"/>
                <input placeholder="WhatsApp" type="text"/>

                <div className="input-group">
                    <input placeholder="Cidade" type="text"/>
                    <input placeholder="UF" type="text" style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
                
               </form>
           </div>

       </div>
    )
}
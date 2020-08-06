import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://pbs.twimg.com/profile_images/1290293163802988544/R8hcilJv_400x400.jpg" alt="Rodrigo Camilo"/>
            <div>
              <strong>Rodrigo Camilo</strong>
              <span>Inglês</span>
            </div>
          </header>

          <p>
            Entusiasta em ensinar e aprender com o aluno.
            <br/>
            Sempre buscando inovar e ter dinheiro para gastar com o amor da vida.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;
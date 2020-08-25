import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/63320754?s=460&u=46e31d57ffee1d52d560df2ab79bae5afc1c1c99&v=4" alt="Maria Luísa Costa"/>
                <div>
                    <strong>Maria Luísa Costa</strong>
                    <span>Biologia</span>
                </div>
            </header>
            
            <p>
                Apaixonada pela natureza.
                <br /><br />
                Gosto muito de animais e plantas, mas biologia não é só isso. Vou te ensinar da forma mais divertida.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
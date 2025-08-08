Eu quero mudar toda a estrutura das seções de projetos web e projetos relevantes. Eu quero juntar os dois e criar uma
seção chamada "Trabalhos" com o subtitulo "Uma coleção de projetos que eu trabalhei.". Quero mudar o formato dos cards.

Exemplo de card:

```html

<div style="width: 398px; height: 560px; position: relative">
  <div
    style="width: 398px; height: 560px; left: 0px; top: 0px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img
    style="width: 365px; height: 156px; left: 16px; top: 21px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px"
    src="https://placehold.co/365x156" />
  <div
    style="left: 31px; top: 188px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">
    IBMEC Empréstimos
  </div>
  <div
    style="width: 302px; left: 31px; top: 232px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">
    Sistema completo para cadastro de alunos e gestão de empréstimo/devolução de equipamentos com painel em React e API
    Django Rest Framework.
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
    <path d="M5.16699 19.375H25.8337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.16699 11.625H25.8337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M15.5 27.125C21.9203 27.125 27.125 21.9203 27.125 15.5C27.125 9.07969 21.9203 3.875 15.5 3.875C9.07969 3.875 3.875 9.07969 3.875 15.5C3.875 21.9203 9.07969 27.125 15.5 27.125Z"
      stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M15.5003 26.8902L14.5778 27.7942C14.8206 28.0422 15.1532 28.1818 15.5003 28.1818C15.8473 28.1818 16.1798 28.0422 16.4228 27.7942L15.5003 26.8902ZM15.5003 4.10993L16.4228 3.2059C16.1798 2.95799 15.8473 2.81827 15.5003 2.81827C15.1532 2.81827 14.8206 2.95799 14.5776 3.2059L15.5003 4.10993ZM18.8586 15.5001C18.8586 19.5831 17.2271 23.2824 14.5778 25.9861L16.4228 27.7942C19.5263 24.6272 21.4419 20.286 21.4419 15.5001H18.8586ZM14.5776 5.01397C17.2271 7.71773 18.8586 11.4171 18.8586 15.5001H21.4419C21.4419 10.7141 19.5263 6.37295 16.4228 3.2059L14.5776 5.01397ZM12.1419 15.5001C12.1419 11.4171 13.7733 7.71773 16.4228 5.01397L14.5776 3.2059C11.4742 6.37295 9.55859 10.7141 9.55859 15.5001H12.1419ZM16.4228 25.9861C13.7733 23.2824 12.1419 19.5831 12.1419 15.5001H9.55859C9.55859 20.286 11.4743 24.6272 14.5778 27.7942L16.4228 25.9861Z"
      fill="black" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <g clip-path="url(#clip0_47_130)">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.5 0C19.4037 0 25 5.73741 25 12.8162C25 18.4774 21.4225 23.2799 16.4587 24.9762C15.825 25.1024 15.6 24.7022 15.6 24.361C15.6 23.9385 15.615 22.5585 15.615 20.8435C15.615 19.6485 15.215 18.8686 14.7663 18.4711C17.55 18.1536 20.475 17.0697 20.475 12.1472C20.475 10.7472 19.99 9.60478 19.1875 8.70728C19.3175 8.38353 19.7462 7.07994 19.065 5.31494C19.065 5.31494 18.0175 4.97153 15.6312 6.62903C14.6325 6.34528 13.5625 6.20251 12.5 6.19751C11.4375 6.20251 10.3688 6.34528 9.37125 6.62903C6.9825 4.97153 5.9325 5.31494 5.9325 5.31494C5.25375 7.07994 5.6825 8.38353 5.81125 8.70728C5.0125 9.60478 4.52375 10.7472 4.52375 12.1472C4.52375 17.0572 7.4425 18.1577 10.2188 18.4814C9.86125 18.8014 9.5375 19.366 9.425 20.1947C8.7125 20.5222 6.9025 21.089 5.7875 19.1302C5.7875 19.1302 5.12625 17.8988 3.87125 17.8088C3.87125 17.8088 2.6525 17.7926 3.78625 18.5876C3.78625 18.5876 4.605 18.9814 5.17375 20.4626C5.17375 20.4626 5.9075 22.7501 9.385 21.9751C9.39125 23.0463 9.4025 24.056 9.4025 24.361C9.4025 24.6997 9.1725 25.0962 8.54875 24.9774C3.58125 23.2837 0 18.4787 0 12.8162C0 5.73741 5.5975 0 12.5 0Z"
            fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_47_130">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
</div>
```

Exemplo da seção completa:
````html
<div style="width: 1440px; height: 2239px; position: relative; background: white; overflow: hidden">
  <div style="left: 60px; top: 93px; position: absolute; color: black; font-size: 64px; font-family: Inter; font-weight: 300; word-wrap: break-word">Trabalhos</div>
  <div style="left: 60px; top: 191px; position: absolute; color: #9BA1A8; font-size: 24px; font-family: Inter; font-weight: 400; word-wrap: break-word">Uma coleção de projetos que eu trabalhei.</div>
  <div style="width: 398px; height: 560px; left: 60px; top: 263px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 76px; top: 284px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 91px; top: 451px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Useriu</div>
  <div style="width: 302px; left: 91px; top: 495px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Site de roupas femininas com design vibrante e navegação intuitiva. Desenvolvido com React para proporcionar uma experiência de compra moderna e responsiva.</div>
  <div style="width: 31px; height: 31px; left: 91px; top: 765px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 131px; top: 767px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 514px; top: 263px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 530px; top: 284px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 545px; top: 451px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Pilotage</div>
  <div style="width: 302px; left: 545px; top: 495px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Site institucional para empresa autorizada pela CVM, focada em gestão de recursos financeiros. Desenvolvido com WordPress para máxima flexibilidade de conteúdo.</div>
  <div style="width: 31px; height: 31px; left: 545px; top: 765px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 585px; top: 767px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 968px; top: 263px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 984px; top: 284px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 999px; top: 451px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Charlote</div>
  <div style="width: 302px; left: 999px; top: 495px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Site para marca de salgadinhos com catálogo de produtos e design atrativo. Implementado com Tailwind CSS para um visual moderno e performance otimizada.</div>
  <div style="width: 31px; height: 31px; left: 999px; top: 765px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 1039px; top: 767px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 60px; top: 866px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 76px; top: 887px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 91px; top: 1054px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">PVR Capital</div>
  <div style="width: 302px; left: 91px; top: 1098px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Site institucional para empresa de soluções financeiras com foco em emissão de dívida e M&A. Backend desenvolvido em Node.js para robustez e escalabilidade.</div>
  <div style="width: 31px; height: 31px; left: 91px; top: 1368px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 131px; top: 1370px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 514px; top: 866px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 530px; top: 887px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 545px; top: 1054px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Brazilroute</div>
  <div style="width: 302px; left: 545px; top: 1098px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Site para consultoria estratégica voltada a empresas de tecnologia expandindo no Brasil. Desenvolvido em React com design profissional que reflete parceria estratégica.</div>
  <div style="width: 31px; height: 31px; left: 545px; top: 1368px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 585px; top: 1370px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 968px; top: 866px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 984px; top: 887px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 999px; top: 1054px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">IBMEC Empréstimos</div>
  <div style="width: 302px; left: 999px; top: 1098px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Sistema completo para cadastro de alunos e gestão de empréstimo/devolução de equipamentos com painel em React e API Django Rest Framework.</div>
  <div style="width: 31px; height: 31px; left: 999px; top: 1368px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 1039px; top: 1370px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 60px; top: 1469px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 76px; top: 1490px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 91px; top: 1657px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">UFRJ - Pesquisa</div>
  <div style="width: 302px; left: 91px; top: 1701px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Apoio no desenvolvimento de jogo multiplayer para tese de doutorado (UFRJ) em neurociência, criado como instrumento para mensurar a colaboração em grupo.</div>
  <div style="width: 31px; height: 31px; left: 91px; top: 1971px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 131px; top: 1973px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 514px; top: 1469px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 530px; top: 1490px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 545px; top: 1657px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Cronograma TEDx</div>
  <div style="width: 302px; left: 545px; top: 1701px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Cronograma dinâmico com exibição de palestrantes e quizzes, desenvolvido com React Hooks e backend Django para gestão de conteúdos.</div>
  <div style="width: 31px; height: 31px; left: 545px; top: 1971px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 585px; top: 1973px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
  <div style="width: 398px; height: 560px; left: 968px; top: 1469px; position: absolute; background: white; box-shadow: 0px 4px 44.79999923706055px -5px rgba(0, 0, 0, 0.11); border-radius: 20px; border: 3px rgba(255, 127, 57, 0) solid"></div>
  <img style="width: 365px; height: 156px; left: 984px; top: 1490px; position: absolute; box-shadow: 0px -86px 47.29999923706055px -8px rgba(255, 255, 255, 0.93) inset; border-top-left-radius: 10px; border-top-right-radius: 10px" src="https://placehold.co/365x156" />
  <div style="left: 999px; top: 1657px; position: absolute; color: black; font-size: 24px; font-family: Inter; font-weight: 600; word-wrap: break-word">Okka Relatórios </div>
  <div style="width: 302px; left: 999px; top: 1701px; position: absolute; color: #686868; font-size: 20px; font-family: Inter; font-weight: 400; word-wrap: break-word">Web app para registro de atividades corporativas com workflow de aprovação em múltiplos níveis e exportação de relatórios em PDF.</div>
  <div style="width: 31px; height: 31px; left: 999px; top: 1971px; position: absolute; overflow: hidden">
    <div style="width: 23.25px; height: 23.25px; left: 3.88px; top: 3.88px; position: absolute; outline: 2px black solid; outline-offset: -1px"></div>
    <div style="width: 11.88px; height: 25.36px; left: 9.56px; top: 2.82px; position: absolute; background: black"></div>
  </div>
  <div style="width: 25px; height: 25px; left: 1039px; top: 1973px; position: absolute; overflow: hidden">
    <div style="width: 25px; height: 25px; left: 0px; top: 0px; position: absolute; background: black"></div>
  </div>
</div>
````
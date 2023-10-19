<template>

<body class="g-sidenav-show" style="background-color: #1a1e1f">

  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0">
        <span class="font-weight-bold" style="color:white;font-size: 16px;">Gestão de Projetos - Omega</span>
        <p class="text-center" style="color:white"><b>{{ user }}</b></p>
      </a>
    </div>

    <hr class="horizontal dark mt-0">

    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-house" style="color:white"></i>
            <span class="nav-link-text ms-1" style="color:white">Dashboard</span>
          </a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link active" href="/cadastrartumba">
            <i class="fa-solid fa-cross"></i>
            <span class="nav-link-text ms-1">Cadastrar Nova Tumba</span>
          </a>
        </li>        -->
      </ul>
    </div>
    
  </aside>

  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    
    <div class="container-fluid py-4">

      <div class="row mt-4">
        <div class="col-lg mb-lg-0 mb-4">
          <div class="card" style="background-color: #191a1c;">
            <div class="card-body p-3" style="color:white">
             
              <div class="row">
                <div class="container">
                  <div class="col">
                    <p class="text-center"><b>Bem vindo {{ user }} || {{ login }}</b></p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">SGP v1.0</p>
                    <h5 class="font-weight-bolder">Sistema de Gestão de Projetos</h5>
                    <p class="mb-5 text-align-justify">Seja bem vindo ao SGP. Este é o dashboard principal desenvolvido com o intuito de facilitar a gestão de projetos, contratos e cronogramas.</p>
                  </div>
                </div>
                <div class="col-lg-3 ms-auto text-center mt-5 mt-lg-0">
                  <div class="h-100">
                    <img src="./assets/img/shapes/waves-white.svg" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
                    <div class="position-relative d-flex align-items-center justify-content-center h-100">
                      <img class="w-20" src="/logo.png" alt="rocket">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </div>

    <div class="BFMS" v-if="user === 'BFMS' ">

      <div class="container-fluid">
        <div class="row mt-3 mb-3">
            <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">Projeto 1</p>
                        <h5 class="font-weight-bolder mb-0">
                          Sistema Financeiro/ERP
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i class="fa-solid fa-cross"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 font-weight-bold">Projeto 2</p>
                        <h5 class="font-weight-bolder mb-0">
                          BI / API - John Deere
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i class="fa-solid fa-house"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">Status de Desenvolvimento</p>
                        <h5 class="font-weight-bolder mb-0">
                          Projeto 1: x % |
                          Projeto 2: x % 
                          
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i class="fa-solid fa-dove"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="container-fluid" style="background-color:#191a1c">

        <div class="row">
          <div class="col-12">

            <div class="card" style="    background-color: rgb(25, 26, 28) !important;color:white">

              <div class="card-header mb-4">

                <h4 class="text-center">1. ERP | BFMS - Soluções Agrícolas</h4>
                    
              </div>

              <div class="card-body px-0 pt-0 pb-2">
                
                <div class="container">
                  <div class="row">
                    <div class="col">
                      Projeto 1 - Desenvolvimento de um Sistema de Gerenciamento Financeiro e de Contratos (ERP)
                      <ul class="mt-2">
                        Módulos
                        <li>1. Prototipação do Projeto e Aprovação</li>
                        <li>2. Implementação e Configuração do Servidor</li>
                        <li>3. Módulo de administração de Usuários</li>
                        <li>4. Módulo de Cadastro de Clientes</li>
                        <li>5. Módulo Orçamentário e de Contrato</li>
                        <li>6. Módulo Status de Negociação/Calendário</li>
                        <li>7. Módulo Contas a Pagar</li>
                        <li>8. Módulo Contas a Receber</li>
                        <li>9. Módulo de Controle de Estoque</li>
                        <li>10. Módulo de Relatório de Dados</li>
                        <li>11. Documentação e Manutenção (logins/documentação de servidor/descrição de manutenção)</li>
                      </ul>

                      <p><b>Tempo de finalização do projeto <span style="color:red">após aprovação do módulo 1</span>: XX dias.<br>Tempo máximo de execução do projeto XX dias.</b></p>
                      <p>Valor Total da Implementação	R$ 15.000,00 - 25.000,00 | Valor Manutenção + Servidor + SSL	R$ 1.200,00</p>

                    </div>
                    <div class="col">
                    
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Módulo</th>
                            <th scope="col">Tempo de Execução</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Prototipação</td>
                            <td>XX dias</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Implementação do Servidor</td>
                            <td>XX dias</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Módulos</td>
                            <td>XX dias</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Configuração de Marketing</td>
                            <td>XX dias</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Apis e Documentação</td>
                            <td>XX dias</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Documentação/Manutenção</td>
                            <td>XX dias</td>
                          </tr>
                        </tbody>
                      </table>


                    </div>
                  </div>
                </div>

                


              </div>

            </div>
          </div>
        </div>

      </div>

   </div>
    


    <div class="container-fluid" v-if="user === 'Multicor' ">
      <div class="row mt-3 mb-3">
          <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">Projeto 1</p>
                      <h5 class="font-weight-bolder mb-0">
                        Site Institucional
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i class="fa-solid fa-cross"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 font-weight-bold">Projeto 2</p>
                      <h5 class="font-weight-bolder mb-0">
                        Sistema Outdoor/Booking
                        <span class="text-success text-sm font-weight-bolder">+3%</span>
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i class="fa-solid fa-house"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">Status de Desenvolvimento</p>
                      <h5 class="font-weight-bolder mb-0">
                        Projeto 1: x % |
                        Projeto 2: x % 
                        
                      </h5>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i class="fa-solid fa-dove"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="container-fluid" v-if="user === 'Multicor' ">

      <div class="row">
        <div class="col-12">

          <div class="card">

            <div class="card-header mb-4">

              <h4 class="text-center">Projeto 1 - Site Institucional/Ecommerce - Gráfica Multicor</h4>
                   
            </div>

            <div class="card-body px-0 pt-0 pb-2">
              
              <div class="container">
                <div class="row">
                  <div class="col">
                    Projeto 1 - Desenvolvimento de um Site Institucional com ênfase para Ecommerce e checkout via WhatsApp
                    <ul class="mt-2">
                      Módulos
                      <li>1. Prototipação do Projeto e Aprovação</li>
                      <li>2. Implementação e Configuração do Servidor</li>
                      <li>3. Criação das Páginas - Home, Serviços, Portfólios, Landings</li>
                      <li>4. Configuração de Marketing</li>
                      <li>5. Apis de automação e configurações de gerenciamento</li>
                      <li>6. Documentação e Manutenção (logins/documentação de servidor/descrição de manutenção)</li>
                    </ul>

                    <p><b>Tempo de finalização do projeto <span style="color:red">após aprovação do módulo 1</span>: 52 dias.<br>Tempo máximo de execução do projeto 90 dias.</b></p>
                    <p>Valor Implementação	R$ 8.000,00 | Valor Manutenção + Servidor + SSL	R$ 1.000,00</p>

                  </div>
                  <div class="col">
                   
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Módulo</th>
                          <th scope="col">Tempo de Execução</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Prototipação</td>
                          <td>15 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Implementação do Servidor</td>
                          <td>2 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Criação das Páginas</td>
                          <td>10 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Configuração de Marketing</td>
                          <td>5 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Apis e Documentação</td>
                          <td>15 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Documentação/Manutenção</td>
                          <td>5 dias</td>
                        </tr>
                      </tbody>
                    </table>


                  </div>
                </div>
              </div>

              


            </div>

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">

          <div class="card">

            <div class="card-header mb-4">

              <h4 class="text-center">Projeto 2 - Sistema Outdoors - Gráfica Multicor</h4>
                   
            </div>

            <div class="card-body px-0 pt-0 pb-2">
              
              <div class="container">
                <div class="row">
                  <div class="col">
                    Projeto 2 - Desenvolvimento de um Site Institucional com ênfase para Ecommerce e checkout via WhatsApp
                    <ul class="mt-2">
                      Módulos
                      <li>1. Prototipação do Projeto e Aprovação</li>
                      <li>2. Implementação e Configuração do Servidor</li>
                      <li>3. ADMINISTRADOR
                          <br>-Dashboard Administrador (Número de Outdoors cadastrados, outdoors disponíveis/indisponíveis, valor arrecadado total, valor arrecadado mensal , ...), relatório financeiro
                          <br>-Cadastro de Outdoors (Id, Nome do Outdoor, Localização/Mapa, Preço, Extras de Fabricação/Manutenção - parte administrativa) 
                          <br>-Checkout/Pagamento (verificar qual meio de pagamento)
                          <br>-Calendário de disponibilidade
                      </li>
                      <li>4. USUÁRIO
                          <br>-Dashboard Usuário (Outdoors Alugados, Pagamentos ...)
                          <br>-Visualização do Outdoor para o usuário (Google Maps dinâmico com as localizações em pins para ver as informações e uma listagem também de todos os outdoors por filtros de disponível/indisponível numa tabela)
                          <br>-Checkout/Pagamento (verificar qual meio de pagamento)
                          <br>-Calendário de disponibilidade
                      </li>
                      <li>5. Apis de automação e configurações de gerenciamento</li>
                    </ul>

                    <p><b>Tempo da primeira entrega: 35 dias. (Dashboard Administrador)<br>Tempo da segunda entrega 70 dias. (Dashboard Usuário)<br>Tempo da entrega para testes 90 dias.<br>Tempo máximo de execução: 4 meses </b></p>

                    <p>Valor Implementação	R$ 15.000,00 | Valor Manutenção + Servidor + SSL	R$ 1.300,00</p>

                  </div>
                  <div class="col">
                   
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Módulo</th>
                          <th scope="col">Tempo de Execução</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Prototipação e Banco de Dados</td>
                          <td>10 dias</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Implementação do Servidor</td>
                          <td>5 dias dias</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Dashboard Administrador</td>
                          <td>25 dias dias</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Dashboard Usuário</td>
                          <td>25 dias dias</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Apis e Documentação</td>
                          <td>25 dias dias</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Testes/Documentação/Manutenção</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>


                  </div>
                </div>
              </div>

              


            </div>

          </div>
        </div>
      </div>

      
    </div>

  </main>

  <footer class="footer">
    <div class="container-fluid">
      <div class="row" style="display: flex;justify-content: center;">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <div class="copyright text-center">
            Sistema de Gestão © Desenvolvidor por <i class="fa fa-heart"></i>
            <a href="https://www.osoft.com.br" class="font-weight-bold" target="_blank" style="text-decoration: none;color:white"> Omega Software.</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

</body>

</template>

<script>

import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import'./assets/css/nucleo-svg.css'
import'./assets/css/soft-ui-dashboard.css'

export default {
  data(){
    return{
      user: null,
      login: null,
    }
  },
  mounted(){
    this.user = localStorage.getItem('name');
    this.login = localStorage.getItem('email');
  },
  methods: {
    //
  },
}
</script>

<style>

html, body {
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

body {
  display: flex !important;
  flex-direction: column !important;
}

.main-content {
  flex: 1;
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical se o conteúdo for maior do que a altura disponível */
  padding: 5px; 
}

.footer {
  color:white;/* Cor de fundo do footer, se necessário */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 30px; /* Altura do footer (ajuste conforme necessário) */
  width: 100%; /* Garante que o footer ocupe 100% da largura */
}

</style>
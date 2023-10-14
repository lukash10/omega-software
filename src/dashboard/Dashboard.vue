<template>

<body class="g-sidenav-show  bg-gray-100" style="height: 100vw;">
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0">
        <span class="font-weight-bold" style="font-size: 16px;">Gestão de Projetos - Omega</span>
      </a>
    </div>

    <hr class="horizontal dark mt-0">

    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-house"></i>
            <span class="nav-link-text ms-1">Dashboard</span>
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
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">SGP v1.0</p>
                    <h5 class="font-weight-bolder">Sistema de Gestão de Projetos</h5>
                    <p class="mb-5 text-align-justify">Seja bem vindo ao SGP. Este é o dashboard principal desenvolvido com o intuito de facilitar a gestão de projetos, contratos e cronogramas.</p>
                  </div>
                </div>
                <div class="col-lg-3 ms-auto text-center mt-5 mt-lg-0">
                  <div class="bg-gradient-secondary border-radius-lg h-100">
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

      <div class="row mt-3">
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

    <div class="container-fluid">

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

      <!-- <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h6>Projects table</h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center justify-content-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Spotify</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$2,500</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">working</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">60%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-invision.svg" class="avatar avatar-sm rounded-circle me-2" alt="invision">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Invision</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$5,000</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">done</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">100%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-jira.svg" class="avatar avatar-sm rounded-circle me-2" alt="jira">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Jira</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$3,400</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">canceled</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">30%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style="width: 30%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-slack.svg" class="avatar avatar-sm rounded-circle me-2" alt="slack">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Slack</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$1,000</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">canceled</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">0%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-webdev.svg" class="avatar avatar-sm rounded-circle me-2" alt="webdev">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Webdev</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$14,000</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">working</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">80%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style="width: 80%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img src="./assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm rounded-circle me-2" alt="xd">
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm">Adobe XD</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm font-weight-bold mb-0">$2,300</p>
                      </td>
                      <td>
                        <span class="text-xs font-weight-bold">done</span>
                      </td>
                      <td class="align-middle text-center">
                        <div class="d-flex align-items-center justify-content-center">
                          <span class="me-2 text-xs font-weight-bold">100%</span>
                          <div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <button class="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-xs"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <footer class="footer pt-3  ">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                © 
                Desenvolvidor por <i class="fa fa-heart"></i>
                <a href="https://www.osoft.com.br" class="font-weight-bold" target="_blank"> Omega Software.</a>
              </div>
            </div>
           
          </div>
        </div>
      </footer>


  </main>
  

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
      quadra: null,
      optionsQuadra: [
          { value: null, text: 'Selecionar Quadra' },
          { value: 'q1', text: 'Quadra 1' },
          { value: 'q2', text: 'Quadra 2' },
          { value: 'q3', text: 'Quadra 3' },
          { value: 'q4', text: 'Quadra 4' },
          { value: 'q5', text: 'Quadra 5' },
          { value: 'q6', text: 'Quadra 6' },
      ],
      cpf: '',
    }
  },
}
</script>
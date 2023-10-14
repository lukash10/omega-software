<template>

    
    <body>

        <header>

            <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
                <a class="navbar-brand" href="#">
                    <img src="/logo.png" width="40px"> <b>Instituto Provida |</b>
                </a>
                
                <button style="" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i style="color:green" class="fa-solid fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Página Inicial <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#2">Sobre Nós</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Serviços
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
                    </form>
                </div>
            </nav>

            <div>
                <b-carousel
                    id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators>
                    <b-carousel-slide img-src="/10.jpg"></b-carousel-slide>
                    <!-- <b-carousel-slide caption="Second Slide" img-src="/1.jpg"></b-carousel-slide>
                    <b-carousel-slide caption="Third Slide" img-src="/1.jpg"></b-carousel-slide> -->
                </b-carousel>
            </div>

            <div class="text-center mt-3">
                <b-iconstack animation="cylon-vertical" font-scale="3" rotate="90">
                    <b-icon stacked icon="chevron-right" shift-h="-4" variant="success"></b-icon>
                    <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
                    <b-icon stacked icon="chevron-right" shift-h="4" variant="success"></b-icon>
                </b-iconstack>
            </div>

        </header>

        <section id="about">
            
            <div class="container">
                <div class="row align-items-center">
                    <div class="col justify-content-center">
                        <img src="/about.jpg" style="border-radius: 10px;">
                    </div>
                    <div class="col justify-content-center">
                        <h3 class="maincolor">Bem vindo ao Instituto Provida</h3>
                        <h1 class="maincolor">SOBRE NÓS</h1>
                        <hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc pharetra interdum iaculis. Vestibulum semper mauris felis, euismod velit consequat sed. Proin porttitor purus in odio egestas, sed efficitur nibh ultrices.</p>
                        <p>Morbi mattis sollicitudin libero ut finibus. Morbi imperdiet tortor ex, ut convallis nisi vestibulum eget. Phasellus hendrerit ut erat eget pharetra.</p>
                        <button class="btn" style="background: #245833;color:white"><i class="fa-solid fa-users"> </i><span>&nbsp;&nbsp;Nosso Time</span></button>
                    </div>
                </div>

            </div>

        </section>

        <section id="advantages">

            <h1 class="maincolor maintittle text-center mb-5">Por que o Instituto Provida ?</h1>

            <div class="container">
                <div class="row d-flex align-items-center"> 
                    <div class="col-6 shadow-sm">
                        <div class="row mt-5">
                            <div class="accordion" role="tablist">

                                <b-card no-body class="mb-1" style="">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        
                                        <b-button block v-b-toggle.accordion-1 style="background: #245833;color: white;"><i class="fa-solid fa-users"></i> Opção 1</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                        <b-card-text>Informação 1 <code>2</code> is <code>true</code></b-card-text>
                                        
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-2 style="background: #245833;color: white;"><i class="fa-solid fa-users"></i> Opção 2</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                        <b-card-text>2</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-3 style="background: #245833;color: white;"><i class="fa-solid fa-users"></i> Opção 3</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                        <b-card-text>1</b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="row">
                            <img src="/about.jpg">
                        </div>
                    </div>
                </div>
            </div>


        </section>

        <section id="ourservices">

            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="img-wrapper">
                            <img src="/pug.jpg" class="w-100">
                        </div>
                    </div>
                    <div class="col justify-content-center">
                        <h3 class="maincolor text-center">Nossos Serviços</h3>
                        <h5 class="text-center">Lorem ipsum dolor sit amet sed tincidunt suscipit id malesuada.</h5>
                        <hr>

                        <div class="wrapper"> 
                            <div class="row">
                                <div class="col justify-content-center">
                                    <div class="row">
                                        <div class="col-10">
                                            <h4>ORAL SURGERY</h4 >
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mi purus.</p>
                                        </div>
                                        <div class="col">
                                            <i class="fa-solid fa-user-nurse fa-2xl" style="color: #0b6f31;"></i>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div class="col d-flex justify-content-center">1/2</div>
                            </div>
                            <div class="row">
                                <div class="col d-flex justify-content-center">1/2</div>
                                <div class="col d-flex justify-content-center">1/2</div>
                            </div>
                            <div class="row">
                                <div class="col d-flex justify-content-center">1/2</div>
                                <div class="col d-flex justify-content-center">1/2</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </section>

    </body>


</template>

<script>

export default {
    data() {
        return {
            
        };
    },
}


</script>

<style>

a:hover{
    color: white !important;
}

.col-align{
    display: flex;
    justify-content: center;
    align-items: center;
}

.maincolor{
    color: #245833;
}

.maintittle{
    font-family: "Lato", sans-serif;
    font-size: 25px;
    font-weight: 400;
    color: #245833;
    line-height: 25px;
    text-align: center;
    margin-bottom: 39px;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 2.3px;
    font-weight: 500;
}

.advgli{
    background: #202020;
    display: inline-block;
    width: 48px;
    text-align: center;
    height: 48px;
    color: #fff;
    line-height: 48px;
    /* margin-right: 30px; */
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.advga{
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    font-family: "Lato", sans-serif;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    text-decoration: none;
}

.btn{
    text-transform: none !important;
}

#about{
    padding-top:60px;
    padding-bottom: 60px;
    background: #ffffff;
}

#advantages{
    padding-top:60px;
    padding-bottom: 60px;
    background: #F5F5F5;
}

#ourservices{
    padding-top:60px;
    padding-bottom: 60px;
}

</style>
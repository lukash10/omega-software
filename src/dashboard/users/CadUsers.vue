<template>
    
 
    <div id="cadGraduacao" class="d-flex" style="height: 100vh !important;">
        
        <Dashboard></Dashboard>

        <main>

                <header> 
                    <h4 class="color-main"><i class="fa-solid fa-newspaper"></i> Área de Cadastro de Usuário</h4>
                </header>

                <form style="margin: 15px;padding: 15px;border-radius: 5px;" class="form-lks mt-5" @reset="onReset" @submit="onSubmit">
                    
                    <div class="container">
                        
                        <div class="row">

                            <div class="col-12">

                               <div class="row">
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input v-model="form.name" type="text" class="form-control" id="floatingCourseName" placeholder="Nome do Usuário">
                                            <label for="floatingCourseName">Nome do Usuário</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input v-model="form.password" type="text" class="form-control" id="floatingCourseName" placeholder="Password">
                                            <label for="floatingCourseName">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input v-model="form.email" type="email" class="form-control" id="floatingCourseName" placeholder="Email">
                                            <label for="floatingCourseName">Email do Usuário</label>
                                        </div>
                                    </div>
                               </div>                              

                                <div class="row">
                                    <div class="col-6">
                                        <b-form-group  label="Tipo de Usuário:" v-slot="{ ariaDescribedby }" style="padding:10px;border: 1px solid #d9d9d9;border-radius: 10px;">
                                            <b-form-radio class="px-2" style="display: inline-flex;" v-model="form.role" :aria-describedby="ariaDescribedby" name="some-radios" value="COLAB">Colaborador |</b-form-radio>
                                            <b-form-radio style="display: inline-flex;" v-model="form.role" :aria-describedby="ariaDescribedby" name="some-radios" value="ADMIN"> Administrador</b-form-radio>
                                        </b-form-group>
                                    </div>
                                </div>
                             
                               



                            </div>

                        </div>
                    </div>

                    <div class="buttons-lks mt-3 mb-3">
                        <b-button type="submit" style="background-color: rgb(0 131 96);">Cadastrar</b-button>
                        <b-button variant="primary">Voltar</b-button>
                        <b-button type="reset" variant="danger">Limpar</b-button>
                    </div>

                </form>

        </main>
    </div>



   

</template>


<script>

import Dashboard from "../../components/Dashboard.vue";
import axios from "axios";

export default {
    components: {
        Dashboard,
    },
    data() {
        return {
            form:{
                name: null,
                email: null,
                password: null,
                role: 'COLAB',
            }
        }
    },
    mounted() {
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault();

            await axios.post('/api/tag', this.form,  { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }});

            this.$router.push('/listtags');
        },

        onReset(event) {
            event.preventDefault()
            this.form.modality = ""
        },
    }
}
</script>

<style scoped>

main{
    width: 100%;
    height: 100%;
}

header{
    height: 110px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 26%) 19px 0px 23px 1px;
}

.buttons-lks{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.form-lks{
    border: 1px solid #c3c2c2;
    padding: 15px;
}

</style>

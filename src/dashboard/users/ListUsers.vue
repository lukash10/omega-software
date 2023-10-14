<template>
    <div class="d-flex" style="height: 100vh;">

        <Dashboard></Dashboard>

        <main>

            <header> 
                <h4 class="color-main"><i class="fa-solid fa-list"></i> Listagem de Usuários</h4>
            </header>

            <div class="container-fluid table-lks">

                <table class="table" style="border: 1px solid #f4f4f4;border-radius: 9px;">

                    <thead style="background: #474747;color: white;">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tags</th>
                            <th scope="col">Ação</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr v-for="item in items">
                            <th scope="row">1</th>
                            <td> {{ item.name }} </td>
                            <td>
                                <div class="row">
                                    <div class="col">
                                        <router-link to="#"><button class="btn-list"><i class="fa-solid fa-pen-to-square"></i> Editar</button></router-link>   
                                    </div>
                                    <div class="col">
                                        <button @click="deleteTag(item.id)" class="btn-list-del"><i class="fa-solid fa-trash"></i> Excluir</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
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
            items: []
        }
    },
    async mounted() {
        await this.getTags();
    },
    methods: {
        async deleteTag(tagId) {
            const r = await axios.delete(`/api/tag/${tagId}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }});

            await this.getTags();
        },
        async getTags() {
            const response = await axios.get('/api/tags', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }});

            this.items = response.data;
        }
    }
}
</script>


<style scoped>

.btn-list{
    background: #008360;
    border: none;
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 5px;
}

.btn-list:hover{
    background: #09462a;
}

.btn-list-del{
    background: #ae161e;;
    border: none;
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 5px;
}

.btn-list-del:hover{
    background: #e71d28;
}

body{
    height: auto;
}


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

@media only screen and (max-width: 600px){
    .btn-list{
        margin-bottom: 5px;
    }

    .table-lks{
        overflow: scroll;
        
    }
}

.table-lks{
    padding: 30px;
}


</style>

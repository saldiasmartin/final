<template>
  <v-container>
    <v-row class="text-center" id="app">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Ejercicio 3</h1>
        <p class="subheading font-weight-regular">
         Mostrar la información en la consola de desarrollador desde el LocalStorage.
        </p>
        <pre>{{ $data | json }}</pre> 
      </v-col>
      <v-col class="mb-12" cols="12">
        <v-text-field
          label="Ingrese Tarea:"
          :rules="rules"
          hide-details="auto"
          v-model="nuevaTarea"
          @keyup.enter="agregarTarea"
        ></v-text-field>
        <br />
        <v-btn color="info" dark v-bind="attrs" v-on="on" @click="agregarTarea">
          Agregar TAREA
        </v-btn>
        

        <br />
        <div class="mt-3" v-for="(item, index) of tareas" :key="item">
          <!--<v-alert  v-model="alert" dense :type="['v-alert', item.estado ? 'success' : 'info']">-->
               <v-alert dense type="(item.estado) ? 'alert-success' : 'aler.info'">
            <div class="d-flex justify-center-between align-item-center">
              <div>
                <b>Tarea: </b> {{ index }} -<b> Nombre:</b> {{ item.nombre }} -
                <b>Estado:</b> {{ item.estado ? 'ACTIVO':'DESACTIVO' }}
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-btn x-small color="success" @click="editarTarea(index)">
                  Cambiar Estado </v-btn
                ><v-spacer></v-spacer>
                <v-btn x-small color="red" @click="eliminarTarea(index)">
                 Eliminar
                </v-btn>
             
              </div>
            </div>
          </v-alert>
        </div>
      </v-col>
 <v-col class="mb-5" cols="12">

   
  
     
       </v-col>
    </v-row>
    <hr />
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  
  name: "Ejercicio3",
  data() {
   
    return {
      tareas: [],
      nuevaTarea: '',
      listData:[],
      listDataString: String,
     
    };
  },
 

  mounted() {
    axios
      .get("this.tareas")
      .then((response) => {
        this.listDataString = JSON.stringify(response.this.tareas, null, "\t");
        this.listData = response.data;
        console.log(this.listDataString);
        return response; // multiline arrow function must return
      });
  },
  methods: {
    agregarTarea: function() {
    
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      this.nuevaTarea = "";
      localStorage.setItem('Ejercicio3', JSON.stringify(this.tareas));
    },
    editarTarea: function(index) {
      if(this.tareas[index].estado == true){
      this.tareas[index].estado = false}
      else{
         this.tareas[index].estado = true;}
      
      
      //console.log('editar' , index);
      localStorage.setItem('Ejercicio3', JSON.stringify(this.tareas));
    },
    eliminarTarea: function(index) {
      this.tareas.splice(index, 1);
       localStorage.setItem('Ejercicio3', JSON.stringify(this.tareas));
      //console.log('editar' , index);
    },
    
  },
  created: function(){
    
    if (JSON.parse(localStorage.getItem('Ejercicio3')) === null){
      this.tareas=[];
    }else{
      this.tareas=JSON.parse(localStorage.getItem('Ejercicio3'));
    }
    
    
  }
};
</script>

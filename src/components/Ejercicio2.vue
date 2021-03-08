<template>
  <v-container>
    <v-row class="text-center" id="app">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Ejercicio 2</h1>
        <p class="subheading font-weight-regular">
          Guardar algún dato, que se ingrese en un formulario, en el
          LocalStorage de su cliente.
        </p>
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
    </v-row>
    <hr />
  </v-container>
</template>

<script>

export default {
  
  name: "Ejercicio2",
  data() {
    return {
      tareas: [],
      nuevaTarea: ''
      
    };
  },
   methods: {
    agregarTarea: function() {
    
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      this.nuevaTarea = "";
      localStorage.setItem('Ejercicio2', JSON.stringify(this.tareas));
    },
    editarTarea: function(index) {
      if(this.tareas[index].estado == true){
      this.tareas[index].estado = false}
      else{
         this.tareas[index].estado = true;}
      
      
      //console.log('editar' , index);
      localStorage.setItem('Ejercicio2', JSON.stringify(this.tareas));
    },
    eliminarTarea: function(index) {
      this.tareas.splice(index, 1);
       localStorage.setItem('Ejercicio2', JSON.stringify(this.tareas));
      //console.log('editar' , index);
    },
  },
  created: function(){
    
    if (JSON.parse(localStorage.getItem('Ejercicio2')) === null){
      this.tareas=[];
    }else{
      this.tareas=JSON.parse(localStorage.getItem('Ejercicio2'));
    }
  }
};
</script>

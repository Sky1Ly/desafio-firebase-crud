<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button type="button" class="btn btn-success" @click="editUser(user.id)">Edit</button>
            <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button type="button" class="btn btn-success" @click="showAddUser = true">Add New User</button>

    <div v-if="showAddUser || selectedUser">
      <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" v-model="userForm.name" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lastName" v-model="userForm.lastName" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="lastName" v-model="userForm.email" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="phone" class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="phone" v-model="userForm.phone" />
        </div>
      </div>

      <button type="button" class="btn btn-success" @click="submitUser">Submit</button>
      <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
    </div>
  </div>
</template>
<script>
//Importación de la DB y el CRUD de Firebase
import { db } from '@/firebaseConfig'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      users: [],
      showAddUser: false,
      selectedUser: null,
      userForm: {
        name: '',
        lastName: '',
        email: '',
        phone: ''
      }
    }
  },
  //Una vez creado el componente, se traen los datos de la DB
  async created() {
    await this.fetchUsers()
  },

  methods: {
    async fetchUsers() {
      const querySnapshot = await getDocs(collection(db, 'users'))
      //Carga el array de users
      //Map crea objeto nuevo con id y se propaga con doc.data()
      //sort ordena los datos
      this.users = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => a.name.localeCompare(b.name))
    },

    editUser(id) {
      //Se busca el producto por ID
      const user = this.users.find((user) => user.id === id)
      //Se carga el producto a userForm
      this.userForm = { ...user }

      //Se pasa el id al selectedUser y la bandera showAddUser Pasa a verdadero
      this.selectedUser = id
      this.showAddUser = true
    },

    async deleteUser(id) {
      //Elimina el documento
      await deleteDoc(doc(db, 'users', id))
      //Refresca la lista para que no muestre el elemento eliminado
      await this.fetchUsers()
    },

    async submitUser() {
      //Si el producto ya existe, se usa updateDoc
      if (this.selectedUser) {
        await updateDoc(doc(db, 'users', this.selectedUser), this.userForm)
      }
      //Si el producto es nuevo
      else {
        await addDoc(collection(db, 'users'), this.userForm)
      }
      //Limpia el formulario
      this.cancel()

      //refresca los datos
      await this.fetchUsers()
    },

    cancel() {
      this.showAddUser = false
      this.selectedUser = null
      this.userForm = {
        name: '',
        lastName: '',
        email: '',
        phone: ''
      }
    }
  }
}
</script>
<style lang=""></style>

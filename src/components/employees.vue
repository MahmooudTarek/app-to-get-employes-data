<template>
  <table class="table table-striped text-center p-2 mt-2">
    <tbody class="text-center align-center ">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>Birth date</th>
        <th>Phone Number</th>
        <th>Role</th>
        <th>Started At</th>
        <th>Still Working</th>
        <th>Edit</th>
        <th>delete</th>
        <th>staff record</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.birth_date }}</td>
        <td>{{ user.phone }}</td>
        <td v-if="user.role === 'Cleaning Assistant'">
          <font-awesome-icon icon="fa-solid fa-broom" />
        </td>
        <td v-else-if="user.role === 'Assistant'">
          <font-awesome-icon icon="fa-solid fa-user" />
        </td>
        <td v-else-if="user.role === 'Receptionist'">
          <font-awesome-icon icon="fa-solid fa-person-dress-burst" />
        </td>
        <td v-else-if="user.role === 'Marketing and Financial Manger'">
          <font-awesome-icon icon="fa-solid fa-user-secret" />
        </td>

        <td>{{ user.started_date }}</td>
        <td v-if="user.fired === 0">
          <font-awesome-icon class="check" icon="fa-solid fa-circle-check" />
        </td>
        <td v-if="user.fired === 1">
          <font-awesome-icon class="fired" icon="fa-solid fa-xmark" />
        </td>

        <td>
          <button class="edit">
            <font-awesome-icon class="fa-2x warning" icon="fas fa-pen-square" />
          </button>
        </td>
        <td>
          <button
            @click="deleteEmployee(index)"
            
            text="delete"
            color="red"
            
          >
          <font-awesome-icon class="fired fa-2x" icon="fas fa-trash-alt" /> 
        </button>
        </td>
        <td><button class="view fa-lg" text="view" color="blue">
            View <font-awesome-icon icon="fa-solid fa-file-export" />
        </button></td>
      </tr>
    </tbody>
  </table>
</template>
  
<script>
import usersData from "./staff_members.json";
import Button from "./button.vue";

export default {
  data() {
    return {
      users: usersData,
    };
  },
  components: {
    Button,
  },
  methods: {
    deleteEmployee: function (index) {
      if (confirm("are you sure to delete this employee?")) {
        this.users.splice(index, 1);
      }
    },
  },
};
</script>

<style>
.check {
  color: green;
}

.fired {
  color: red;
}
.edit {
  color: orange;
}
.view{color :  blue}
</style>
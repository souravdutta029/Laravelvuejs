<template>
    <div class="container">
        <div class="row mt-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Users Table</h3>

              <div class="card-tools">
                    <!-- Button trigger modal -->
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#Add-New">Add New
                    <i class="fas fa-user-plus fa-fw orange"></i>
                </button>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody><tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registered At</th>
                  <th>Action</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                  <td>{{user.id}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.type | upText}}</td>
                  <td><span class="label label-success">{{user.created_at | myDate}}</span></td>
                  <td>
                    <a href="#"> 
                    <i class="fas fa-edit blue" title="edit"></i>
                    </a> &nbsp;
                    <a href="#"  @click="deleteUser(user.id)"> 
                    <i class="fas fa-trash-alt red" title="delete"></i>
                    </a>
                  </td>
                </tr>
              </tbody></table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </div>

    <!-- Modal -->
    <div class="modal fade" id="Add-New" tabindex="-1" role="dialog" aria-labelledby="Add-NewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="Add-NewLabel">Add Users</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <form @submit.prevent="createUser">
          <div class="modal-body">
              <div class="form-group">
                <input v-model="form.name" type="text" name="name" autocomplete="off"
                    placeholder="Name"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                  <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <input v-model="form.email" type="email" name="email" autocomplete="off"
                    placeholder="johndoe@email.com"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-group">
                <textarea v-model="form.bio" type="email" name="bio" id="bio"
                    placeholder="Short Description for User (optional)"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                  <has-error :form="form" field="bio"></has-error>
              </div>

              <div class="form-group">
                <select v-model="form.type" name="type" id="type"
                class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="">Select User role</option>
                    <option value="admin">Admin</option>
                    <option value="user">Standard User</option>
                    <option value="author">Author</option>
                </select>            
              </div>

              <div class="form-group">
                <input v-model="form.password" type="password" name="password"
                    placeholder="Password"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                  <has-error :form="form" field="password"></has-error>
              </div>

          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close
                  <i class="fas fa-times-circle fa-fw"></i>
              </button>
              <button type="submit" class="btn btn-primary">Create
                  <i class="fas fa-plus-circle fa-fw"></i>
              </button>
          </div>
        </form>
        </div>
    </div>
    </div>

    </div>
</template>

<script>
  export default  {
    data(){
      return{
        users : {},
        form : new Form({
          name : '',
          email : '',
          password : '',
          type : '',
          bio : '',
          picture : '',
        }),
      }
    },
    methods: {
      loadUsers(){
        axios.get('api/user').then(({data}) => (this.users = data.data));
      },
      deleteUser(id){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

          // send request to the server
          if (result.value) {
            this.form.delete('api/user/'+id).then(() => {
                Swal.fire(
                  'Deleted!',
                  'User has been deleted.',
                  'success'
                )
              Fire.$emit('AfterCreate');
            }).catch(() => {
              Swal("Failed", "Something went wrong", "warning")
            });
        }
      })
    },
      createUser(){
        this.$Progress.start();
        this.form.post('api/user')
        .then(() => {
          Fire.$emit('AfterCreate'); // for refreshing the page

          $('#Add-New').modal('hide');

          Toast.fire({
            icon: 'success',
            title: 'User Created successfully'
          })

          this.$Progress.finish();
        });
      }
    },
    created(){
      this.loadUsers();
      // setInterval(() => this.loadUsers(), 3000);
      Fire.$on('AfterCreate', () => {
        this.loadUsers();
      });
    }
  }
</script>
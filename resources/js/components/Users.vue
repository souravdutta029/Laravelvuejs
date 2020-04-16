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
                  <th>Action</th>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Sourav Dutta</td>
                  <td>sourav018dutta@gmail.com</td>
                  <td><span class="label label-success">Approved</span></td>
                  <td>
                    <a href="#"> 
                    <i class="fas fa-edit blue" title="edit"></i>
                    </a> &nbsp;
                    <a href="#"> 
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
            <h5 class="modal-title" id="Add-NewLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close
                <i class="fas fa-times-circle fa-fw"></i>
            </button>
            <button type="button" class="btn btn-primary">Create
                <i class="fas fa-plus-circle fa-fw"></i>
            </button>
        </div>
        </div>
    </div>
    </div>

    </div>
</template>
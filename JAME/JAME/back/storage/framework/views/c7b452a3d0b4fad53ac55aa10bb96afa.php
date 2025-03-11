<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sistema de reserva de citas</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
   <link rel="stylesheet" href="<?php echo e(url('plugins/fontawesome-free/css/all.min.css')); ?>">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo e(url('dist/css/adminlte.min.css')); ?>">

  <!-- Bootstrap CSS  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</svg>

  <!-- jQuery -->
  <script src="<?php echo e(url('plugins/jquery/jquery.min.js')); ?>"></script>

  <!-- SWEETEER ALERT2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo e(url('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(url('plugins/datatables-responsive/css/responsive.bootstrap4.min.css')); ?>">
  <link rel="stylesheet" href="<?php echo e(url('plugins/datatables-buttons/css/buttons.bootstrap4.min.css')); ?>">
  
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="<?php echo e(url('/admin')); ?>" class="nav-link">Sistema de reservas de citas</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
    
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="<?php echo e(url('dist/img/AdminLTELogo.png')); ?>" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Reservacion citas</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        
        <div class="info">
          <a href="#" class="d-block"><?php echo e(Auth::user()->name); ?></a>
        </div>
      </div>



      <!-- iconos de bootstrap--> 
       
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="#" class="nav-link active">
            <i class="bi bi-person-lines-fill"></i>
              <p>
                Usuarios 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="<?php echo e(url('admin/usuarios/create')); ?>" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Creacion de Usuarios</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?php echo e(url('admin/usuarios')); ?>" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Listado de Usuarios</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
    <form action="<?php echo e(route('logout')); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <button type="submit" class="nav-link active" style="background-color:brown">
            <i class="bi bi-door-closed-fill"></i>
            <p>Cerrar Sesión</p>
        </button>
    </form>
</li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

                <?php if($message = Session::get('mensaje')): ?>
                <script>
                  Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "<?php echo e($message); ?>",
                  showConfirmButton: false,
                  timer: 4500
                  });
                </script>
                <?php endif; ?>

  <div class="content-wrapper">
    <br>
    <div class="container">
      <?php echo $__env->yieldContent('content'); ?>
    </div>
  </div>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->


<!-- Bootstrap 4 -->
<script src="<?php echo e(url('plugins/bootstrap/js/bootstrap.bundle.min.js')); ?>"></script>

<!-- DataTables  & Plugins -->
<script src="<?php echo e(url('plugins/datatables/jquery.dataTables.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-responsive/js/dataTables.responsive.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-responsive/js/responsive.bootstrap4.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-buttons/js/dataTables.buttons.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-buttons/js/buttons.bootstrap4.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/jszip/jszip.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/pdfmake/pdfmake.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/pdfmake/vfs_fonts.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-buttons/js/buttons.html5.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-buttons/js/buttons.print.min.js')); ?>"></script>
<script src="<?php echo e(url('plugins/datatables-buttons/js/buttons.colVis.min.js')); ?>"></script>

<!-- AdminLTE App -->
<script src="<?php echo e(url('dist/js/adminlte.min.js')); ?>"></script>
</body>
</html>
<?php /**PATH C:\Users\estud\OneDrive\Documentos\JAME\JAME\back\resources\views/layouts/admin.blade.php ENDPATH**/ ?>
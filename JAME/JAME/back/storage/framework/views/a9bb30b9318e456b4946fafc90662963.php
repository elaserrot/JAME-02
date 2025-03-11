<?php $__env->startSection('content'); ?>
    <div>
        <h1>listado de Usuarios</h1>

        <hr>

        
  <div class="row">
  <div class="col-md-10">
            <div class="card card-outline card-primary">
              <div class="card-header">
                <h3 class="card-title">Usuarios Registrados</h3>

                <div class="card-tools">
                  <a href="<?php echo e(url('admin/usuarios/create')); ?>"  class="btn btn-primary">
                    Regitrar nuevo
                  </a>
                </div>
                <!-- /.card-tools -->
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <?php if( (($message = Session::get('mensaje')) && ($icono = Session::get('icono'))) ): ?>
                <script>
                  Swal.fire({
                  position: "top-end",
                  icon: "<?php echo e($icono); ?>",
                  title: "<?php echo e($message); ?>",
                  showConfirmButton: false,
                  timer: 4500
});
                </script>
                <?php endif; ?>
              <table id="example1" class="table table-striped table-bordered table-hover table-sm">
      <thead class="table-dark">
        <tr>
          <td style="text-align: center"><b>Nmro</b></td>
          <td style="text-align: center"><b>Nombre</b></td>
          <td style="text-align: center"><b>Email</b></td>
          <td style="text-align: center"><b>Acciones</b></td>
        </tr>
      </thead>
  <tbody>
    <?php $contador=1;?>
  <?php $__currentLoopData = $usuarios; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $usuarios): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td style="text-align: center"><?php echo e($contador++); ?></td>
            <td><?php echo e($usuarios->name); ?></td>
            <td><?php echo e($usuarios->email); ?></td>
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <a href="<?php echo e(url('admin/usuarios/'.$usuarios->id)); ?>" type="button" class="btn btn-info btn-sm"><i class="bi bi-eye-fill">Ver</i></a>
                <a href="<?php echo e(url('/admin/usuarios/'.$usuarios->id.'/edit')); ?>" type="button" class="btn btn-succes btn-sm"><i class="bi bi-pen">Editar</i></a>
                <a href="<?php echo e(url('/admin/usuarios/'.$usuarios->id.'/confirm-delete')); ?>" type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash2-fill">Eliminar</i></a>
</div>
            </td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
  </tbody>
</table>
<script>
                        $(function () {
                            $("#example1").DataTable({
                                "pageLength": 10,
                                "language": {
                                    "emptyTable": "No hay información",
                                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Usuarios",
                                    "infoEmpty": "Mostrando 0 a 0 de 0 Usuarios",
                                    "infoFiltered": "(Filtrado de _MAX_ total Usuarios)",
                                    "infoPostFix": "",
                                    "thousands": ",",
                                    "lengthMenu": "Mostrar _MENU_ Usuarios",
                                    "loadingRecords": "Cargando...",
                                    "processing": "Procesando...",
                                    "search": "Buscador:",
                                    "zeroRecords": "Sin resultados encontrados",
                                    "paginate": {
                                        "first": "Primero",
                                        "last": "Ultimo",
                                        "next": "Siguiente",
                                        "previous": "Anterior"
                                    }
                                },
                                "responsive": true, "lengthChange": true, "autoWidth": false,
                                buttons: [{
                                    extend: 'collection',
                                    text: 'Reportes',
                                    orientation: 'landscape',
                                    buttons: [{
                                        text: 'Copiar',
                                        extend: 'copy',
                                    }, {
                                        extend: 'pdf'
                                    },{
                                        extend: 'csv'
                                    },{
                                        extend: 'excel'
                                    },{
                                        text: 'Imprimir',
                                        extend: 'print'
                                    }
                                    ]
                                },
                                    {
                                        extend: 'colvis',
                                        text: 'Visor de columnas',
                                        collectionLayout: 'fixed three-column'
                                    }
                                ],
                            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                        });
                    </script>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
            
    
</div>

    </div>

    
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\estud\OneDrive\Documentos\JAME\JAME\back\resources\views/admin/usuarios/index.blade.php ENDPATH**/ ?>
<?php $__env->startSection('content'); ?>
    <div>
        <h1>Usuario: <?php echo e($usuario->name); ?></h1>
    </div>

    <hr>

    <div class="row">
    <div class="col-md-6">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">Datos registrados</h3>
              </div>
              <div class="card-body">
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Usuario</label>
                            <p><?php echo e($usuario->name); ?></p>
                        </div>

                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Email</label>
                            <p><?php echo e($usuario->email); ?></p>
                        </div>

                    </div>
                </div>

                <br> 

                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <a href="<?php echo e(url('admin/usuarios')); ?>" class="btn btn-secundary">Cancelar</a>
                        </div>

                    </div>
                </div>
                


              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\estud\OneDrive\Documentos\JAME\JAME\back\resources\views/admin/usuarios/show.blade.php ENDPATH**/ ?>
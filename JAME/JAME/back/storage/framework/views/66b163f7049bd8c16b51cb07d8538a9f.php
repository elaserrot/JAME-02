<?php $__env->startSection('content'); ?>
    <div>
        <h1>Editar usuario: <?php echo e($usuario->name); ?></h1>
    </div>

    <hr>

    <div class="row">
    <div class="col-md-6">
            <div class="card card-outline card-success">
              <div class="card-header">
                <h3 class="card-title">Complete los datos</h3>
              </div>
              <div class="card-body">
                <form action="<?php echo e(url('admin/usuarios',$usuario->id)); ?>" method="POST">
                <?php echo method_field('PUT'); ?>    
                <?php echo csrf_field(); ?>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Usuario</label> <p>*</p>
                            <input type="text" value="<?php echo e($usuario->name); ?>" name="name" class="form-control" required>
                            <?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small style="color:red"><?php echo e($message); ?></small>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Email</label> <p>*</p>
                            <input type="email" value="<?php echo e($usuario->name); ?>" name="email" class="form-control" required>
                            <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small style="color:red"><?php echo e($message); ?></small>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                    </div>
                </div>

                <br>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Contraseña</label>
                            <input type="password" value="<?php echo e(old('password')); ?>" name="password" class="form-control">
                            <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small style="color:red"><?php echo e($message); ?></small>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                    </div>
                </div>

                <br>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <label for="">Confirme su Contraseña</label>
                            <input type="password" value="<?php echo e(old('password_confirmation')); ?>" name="password_confirmation" class="form-control">
                            <?php $__errorArgs = ['password_confirmation'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                            <small style="color:red"><?php echo e($message); ?></small>
                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                    </div>
                </div>

                <br>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form group">
                            <a href="<?php echo e(url('admin/usuarios')); ?>" class="btn btn-secundary">Cancelar</a>
                            <button type="submit" class="btn btn-success">Actualizar usuario</button>
                        </div>

                    </div>
                </div>
                </form>


              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\estud\OneDrive\Documentos\JAME\JAME\back\resources\views/admin/usuarios/edit.blade.php ENDPATH**/ ?>
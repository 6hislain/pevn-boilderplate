<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card border border-secondary shadow">
          <div class="card-header bg-body-secondary">Login</div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label"> Email address </label>
                <input id="email" type="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"> Password </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

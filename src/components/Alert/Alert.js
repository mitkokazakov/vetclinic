import 'bootstrap/dist/css/bootstrap.min.css';

function Alert() {

    return (
        <div classs="container p-5">
            <div class="row no-gutters">
                <div class="col-lg-6 col-md-12 m-auto">
                    <div class="alert alert-success fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="True">&times;</span>
                        </button>
                        <h4 class="alert-heading">Well done!</h4>
                        <p>This is an alert within a column. The column can be made any size at different viewpoints.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alert;
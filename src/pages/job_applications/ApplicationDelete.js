import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios_instance";
import { urls } from "../../config";

const ApplicationDelete = ({ applicationID }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    axiosInstance
      .delete(urls.JOB_APPLICATION_DETAIL.replace(":id", applicationID))
      .then(() => {
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      class="modal fade"
      id="delApplicationModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Are you sure?
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body lead">
            Do you really want to delete this record? This process cannot be
            undone.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDelete;

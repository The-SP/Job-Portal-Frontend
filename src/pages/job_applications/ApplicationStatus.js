const ApplicationStatus = ({ status }) => {
  let statusClass;

  switch (status) {
    case "pending":
      statusClass = "badge text-bg-secondary";
      break;
    case "under_review":
      statusClass = "badge text-bg-info";
      break;
    case "shortlisted":
      statusClass = "badge text-bg-success";
      break;
    case "interview":
      statusClass = "badge text-bg-warning";
      break;
    case "rejected":
      statusClass = "badge text-bg-danger";
      break;
    case "hired":
      statusClass = "badge text-bg-primary";
      break;
    default:
      statusClass = "badge text-bg-secondary";
  }

  return (
    <span className={statusClass}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default ApplicationStatus;

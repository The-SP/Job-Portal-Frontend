const API_URL = "http://localhost:8000/";

const auth_urls = {
  LOGIN: "auth/jwt/create/",
  SIGNUP: "auth/users/",
  RESET_PASSWORD: "auth/users/reset_password/",
  RESET_PASSWORD_CONFIRM: "auth/users/reset_password_confirm/",
};

const profile_urls = {
  SEEKER_PROFILE: "api/profile/seeker/",
  EMPLOYER_PROFILE: "api/profile/employer/",
  Company_PROFILE: "api/profile/employer/:id/",
};

const urls = {
  JOB_LIST: "api/jobs/",
  JOB_CREATE: "api/jobs/create/",
  JOB_DETAIL: "api/jobs/:id",
  JOB_UPDATE: "api/jobs/:id/update/",
  JOB_SCRAPED: "api/jobs/scraped/",
  EMPLOYER_JOBS: "api/jobs/employer/",
  JOB_APPLICATION_CREATE: "api/jobs/applications/create/",
  JOB_APPLICATION_DETAIL: "api/jobs/applications/:id/",
  USER_APPLICATIONS: "api/jobs/user-applications/",
  JOB_APPLICATIONS_LIST: "api/jobs/:job_id/applications/",
};

export { auth_urls, profile_urls, urls };

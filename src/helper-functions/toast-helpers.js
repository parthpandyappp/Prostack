import toast from "react-hot-toast";

const toastStyle = {
  backgroundColor: "white",
  border: "2px solid #3DA9FC",
  padding: "16px",
  color: "black",
};

const toastError = {
  backgroundColor: "white",
  border: "2px solid red",
  padding: "16px",
  color: "black",
};

const notifyUserLogin = () =>
  toast(
    (t) => (
      <span>
        <b>User logged in successfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyUserLogout = () =>
  toast(
    (t) => (
      <span>
        <b>User logged out successfully</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyProfileUpdate = () =>
  toast(
    (t) => (
      <span>
        <b>Profile updated successfully.</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyProjectDeletion = () =>
  toast(
    (t) => (
      <span>
        <b>Project deleted successfully.</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyProjectListUpdate = () =>
  toast(
    (t) => (
      <span>
        <b>Project added successfully.</b>
      </span>
    ),
    {
      style: toastStyle,
    }
  );

const notifyError = () =>
  toast(
    (t) => (
      <span>
        <b>Oops! Some error occurred.</b>
      </span>
    ),
    {
      style: toastError,
    }
  );

export {
  notifyUserLogin,
  notifyUserLogout,
  notifyError,
  notifyProfileUpdate,
  notifyProjectDeletion,
  notifyProjectListUpdate,
};

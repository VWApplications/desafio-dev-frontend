import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

export const closeSwal = () => (Swal.close());

export const loadingAlert = (title, text, timer = 500000) => {
  return Toast.fire({
    title, timer,
    didOpen: () => Swal.showLoading()
  }).then(() => true);
};

export const errorAlert = title => {
  return Toast.fire({
    icon: "error",
    title: title
  }).then(() => true);
};

export const infoAlert = title => {
  return Toast.fire({
    icon: "info",
    title: title
  }).then(() => true);
};

export const successAlert = title => {
  return Toast.fire({
    icon: "success",
    title: title
  }).then(() => true);
};

export async function choiceAlert(title, text, yesTextButton = "Sim", noTextButton = "Não") {
  return Swal.fire({
    title: title,
    text: text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: yesTextButton,
    confirmButtonColor: "#3085d6",
    cancelButtonText: noTextButton,
    cancelButtonColor: "#d33"
  }).then((result) => {
    if (result.value) {
      return true;
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      return false;
    }
  });
}

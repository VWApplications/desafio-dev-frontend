export function isAuthenticated() {
  const token = localStorage.getItem("cnab-token");

  if (token) {
    return true;
  }

  return false;
}

export function getLoggedUser(state) {
  let user = undefined;
  if (state.account.user) {
    user = state.account.user;
  }

  if (!user) {
    const urlParams = state.router.location;
    if (urlParams.state) {
      user = urlParams.state.user;
    }
  }

  return user;
}

export function getParams(state) {
  return state.router.location.state;
}

export function hasPermission(requiredPermissions, userPermissions) {
  if (!requiredPermissions) return true;

  const allowedPermissions = new Set(requiredPermissions.filter(item => userPermissions.includes(item)));
  return allowedPermissions.size > 0;
}

export const formatMoney = amount => {
  if (!amount) return amount;
  return amount.toLocaleString("pt-br",{ style: "currency", currency: "BRL", minimumFractionDigits: 2 });
};

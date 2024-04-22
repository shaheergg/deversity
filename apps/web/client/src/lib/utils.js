export function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

export function validateURL(url) {
  const regex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(url);
}

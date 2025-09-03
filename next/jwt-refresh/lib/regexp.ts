const emailRegex = /.+@.+\..+/; // RegExp
const passwordRegex = /^(?!^\d+$)^[a-zA-Z0-9!@#$%^&*]{6,18}$/; // 6-18位，字母数字和特殊字符
export {
  emailRegex,
  passwordRegex
}
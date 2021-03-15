import EncryptPassword from '../../node_modules/encrypt-password/index'
export const navigate = (pathname, props) => {
   return props.history.push(pathname);
}

/**
* Validate password - min charac 8 number numeric with special key and number
* @param password - Password as string
*/
export const validatePassword = (password) => {
   let validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   return validatePassword.test(password);
}

export const userName = (name) => {
   let userName = /\S/;
   let userName1 = /^[a-zA-Z].*[\s\.]*$/;
   if(userName.test(name) === true && userName1.test(name) === true){
      return true
   }
   else{
      return false
   }
}

/**
 * 
 * @param {email} email 
 */
export const emailValidation = (email) => {
   let emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
   return emailRegex.test(email);
}
export const getCypherString = (plainText) => {
   const encryptedPassword = EncryptPassword(plainText, 'Compunnel');
   return encryptedPassword;
}

export const getCookie = (name) => {
   let cookieArr = document.cookie.split(";");
   
   for(let i = 0; i < cookieArr.length; i++) {
       let cookiePair = cookieArr[i].split("=");
       if(name == cookiePair[0].trim()) {
           return (cookiePair[1]);
       }
   }
   return "null";
}


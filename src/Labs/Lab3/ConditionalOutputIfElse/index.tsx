// VERSION 1: OPTION A
const ConditionalOutputIfElse = () => {
 const loggedIn = true;
 if(loggedIn) {
   return (<h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>);
 } else {
   return (<h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>);
 }
};
export default ConditionalOutputIfElse;

// VERSION 1: OPTION B ~ what we have been doing: named function style
// export default function ConditionalOutputIfElse() {
//     const loggedIn = true;

//     if (loggedIn) {
//         return (<h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>);
//     } else {
//         return (<h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>);
//     }
// }

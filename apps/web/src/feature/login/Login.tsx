
import { ILogin } from "@mintit/model-spec";  
import{useAppDispatch, useAppSelector} from '@mintit/redux-provider'
import { loginApi } from '@mintit/redux-provider';
import { Button } from "@chakra-ui/react";
  
  

/* eslint-disable-next-line */
export interface LoginProps {
}



export function Login(props: LoginProps) {
  const dispatch = useAppDispatch();
  const loginStatusCurr = useAppSelector(state=>state.login?.loginEntitity);
  const reqState = useAppSelector(state=>state.login.loadingStatus);
  const reqError = useAppSelector(state=>state.login.error);
  const loginStatus: ILogin = {
    isLoggedIn: false,
    userName: '',
    password: '',
    token: "",
    tokenExpiration: '',
    status: "",
    err: "",

  };  
  const dol=()=>{
    dispatch(loginApi(loginStatus))
  }
  return (
    <div>
      <style jsx>{`div { color: pink; }`}</style>
      <h1>Welcome to Login!</h1>
      <p>
        reqState: {reqState}
      </p>
      <p>
        reqError: {reqError}
      </p>
      <p>
        loginStatusCurr: {JSON.stringify(loginStatusCurr)}
      </p>
      <Button onClick={dol}>
        login
      </Button>
    </div>
  );
};


export default Login;

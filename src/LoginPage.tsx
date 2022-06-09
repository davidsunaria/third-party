import React, { useCallback, useRef, useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  IResolveParams,
  TypeCrossFunction,
} from "reactjs-social-login";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import User from "./User";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  //react social login
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const amazonRef = useRef<TypeCrossFunction>(null!);
  const instagramRef = useRef<TypeCrossFunction>(null!);
  const googleRef = useRef<TypeCrossFunction>(null!);
  const facebookRef = useRef<TypeCrossFunction>(null!);
  const microsoftRef = useRef<TypeCrossFunction>(null!);
  const linkedinRef = useRef<TypeCrossFunction>(null!);
  const githubRef = useRef<TypeCrossFunction>(null!);
  const pinterestRef = useRef<TypeCrossFunction>(null!);
  const twitterRef = useRef<TypeCrossFunction>(null!);
  //react social login

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId:
  //         "839165735440-f5e5ds5e4ut780hoomdg5jrqj1s8pga4.apps.googleusercontent.com",
  //       scope: "email",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {
    switch (provider) {
      case "amazon":
        amazonRef.current?.onLogout();
        break;
      case "facebook":
        facebookRef.current?.onLogout();
        break;
      case "google":
        googleRef.current?.onLogout();
        break;
      case "instagram":
        instagramRef.current?.onLogout();
        break;
      case "microsoft":
        microsoftRef.current?.onLogout();
        break;
      case "github":
        githubRef.current?.onLogout();
        break;
      case "pinterest":
        pinterestRef.current?.onLogout();
        break;
      case "twitter":
        twitterRef.current?.onLogout();
        break;
      case "linkedin":
        linkedinRef.current?.onLogout();
        break;
      default:
        break;
    }
  }, [provider]);

  // const responseGoogle = (response:any) => {
  //   console.log(response);
  //   setName(response.profileObj.name);
  //   setEmail(response.profileObj.email);
  //   setUrl(response.profileObj.imageUrl);
  //   setLoginStatus(true);
  // };
  // const logout = () => {
  //   console.log("logout");
  //   setLoginStatus(false);
  // };
  return (
    <div className="App">
      {/* <h1>Login with Google</h1>
      {!loginStatus && (
        <GoogleLogin
          clientId="839165735440-f5e5ds5e4ut780hoomdg5jrqj1s8pga4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <br />
          <GoogleLogout
            clientId="839165735440-f5e5ds5e4ut780hoomdg5jrqj1s8pga4.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )} */}

      {provider && profile && (
        <User  onLogout={onLogout} />
      )}
      
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialFacebook
          ref={facebookRef}
          appId={process.env.REACT_APP_FB_APP_ID || ""}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          ref={googleRef}
          client_id={
            "839165735440-f5e5ds5e4ut780hoomdg5jrqj1s8pga4.apps.googleusercontent.com"
          }
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>

        <LoginSocialGithub
          ref={githubRef}
          client_id={process.env.REACT_APP_GITHUB_APP_ID || ""}
          client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ""}
          redirect_uri={"http://localhost:3000/"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err: any) => {
            console.log(err);
          }}
        >
          <GithubLoginButton />
        </LoginSocialGithub>
      </div>
    </div>
  );
}

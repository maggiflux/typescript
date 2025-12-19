import React from "react";
import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, logout, user } = useAuthContext();

  if (isChecking) {
    return (
      <div className="flex justify-center items-center">
        <h2>Verificando usuario</h2>
      </div>
    );
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="flex justify-center items-center">
            <h3 className="m-2">Bienvenido</h3>
            <button onClick={() => logout()}
            className=" bg-slate-800 text-white p-2 rounded-xl mt-2">salir</button>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex justify-center items-center">
            <h3 className="m-2">Ingresar a la app</h3>
            <button onClick={() => loginWithEmailPassword('xx', 'xxxx')}
            className=" bg-slate-800 text-white p-2 rounded-xl mt-2">ingresar</button>
          </div>
        </>
      )}
    </>
  );
};

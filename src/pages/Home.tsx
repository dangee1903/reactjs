import * as React from 'react'
import { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useAxios } from '../utils/hooks'
import Header from './../components/Header';
import Title from './../components/Title';
import ThutucLeft from './../components/ThutucLeft';
import ThutucRight from './../components/ThutucRight';
// import Featch from './../services/FeatchApi';
import { render } from '@testing-library/react';
export default () => {
  const { keycloak } = useKeycloak()
  const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
  }, [axiosInstance])
  return (
   <div>
      <Header />
      <main className="home">
         <Title />
         <section className="content">
            <div className="content__wrap container-fluid">
               <div className="row">
                  <ThutucLeft />
                  <ThutucRight />
               </div>
            </div>
         </section>
      </main>
   </div>
   )
}
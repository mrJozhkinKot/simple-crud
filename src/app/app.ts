import { server } from './server';


  export const app = (port: Number): void => {
  server().listen(port, () => {
    console.log(`Server started on ${port}`)
  } )
  }

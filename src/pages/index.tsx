import { Feature } from "@/components/Feature";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { CreateProduct } from "@/components/ProductForm";

export default function Home() {

  return (
    <>

      <Header />

      <div style={{marginTop:"5rem"}}>
        <Feature />
      </div>

      <div style={{marginTop:"5rem"}}>
        <Services />
      </div>

    </>
  )
}

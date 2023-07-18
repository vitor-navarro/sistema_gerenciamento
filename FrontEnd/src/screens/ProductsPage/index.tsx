import ProductsList from "@/components/ProductsList";
import StatCard from "@/components/StatCard";

export function ProductsPage(){
    return(
        <>  
            <div>
                <StatCard></StatCard>
                <ProductsList></ProductsList>
            </div>
        </>
    )
}
export default function CreateProduct() {
    return(
        <div>
            <h1>Criar Produto</h1>

            <div>
                <form>
                    <div>
                        <label>Nome do produto</label>
                        <input type="text" placeholder="Nome do produto" />
                    </div>
                    <div>
                        <label>Valor Custo</label>
                        <input type="text" placeholder="Valor custo" />
                    </div>
                    <div>
                        <label>Descrição do produto</label>
                        <input type="text" placeholder="Descrição do produto" />
                    </div>
                    <button type="submit">Criar produto</button>
                </form>
            </div>
        </div>
    );
    
}

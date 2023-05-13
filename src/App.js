import './App.css';
import Hello from './componentes/Hello'
import HiMessage from './componentes/HiMessage';
import Card from './componentes/Card';
import ListCards from './componentes/ListCards';

function App() {
  return (
    <>
      <Hello />
      <Hello pessoa={{nome: "Fulano", idade: 16}} />
      <Hello pessoa={{nome: "Sicrano", idade: 30}} />
      <HiMessage mensagem= "How are you?" />
      <HiMessage />
      <Card titulo="Produto 1">
        <h4>Descricao do Produto 1</h4>
        <h3>R$ 30,00</h3>
      </Card>
      
      <ListCards />
    </>
  );
}

export default App;

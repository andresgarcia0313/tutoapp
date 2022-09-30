import React from 'react';// Import useState hook que nos permite usar el estado en un componente funcional
import ReactDOM from 'react-dom/client';// Importa el DOM de React que sirve para renderizar el componente
import './index.css';// Importa el archivo CSS para darle estilo al componente
class Square extends React.Component {// Crea un componente de clase para el cuadrado
    render() {
        return (
            <button className="square" onClick={() => console.log('Clic: ' + (Date().toLocaleString()))}            >
                {this.props.value}{/*permite que desde la etiqueta html <Square value={i} /> capture la props o propiedad value*/}
            </button>
        );
    }
}
class Board extends React.Component {//Crea un componente Tablero que contiene los componentes Cuadrado
    renderSquare(i) {//Metodo que renderiza el componente Cuadrado para cada posicion del tablero
        return <Square value={i} />; //Metodo que devuelve el botòn o componente squere recibiendo un valor i
    }//Metodo que retorna un componente por fuera del presente componente Board
    render() {
        const status = 'Próximo(a) jugador(a): X';//Variable que contiene el texto que se muestra en el tablero para indicar el proximo jugador
        return (//Retorna el componente Board que permite mostrar el tablero
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
class Game extends React.Component {//Crea un componente de clase para el juego para que contenga el componente Tablero
    render() {
        return (
            <div className="game">
                <div className="game-board"><Board /></div>
                <div className="game-info"><div>{/* status */}</div><ol>{/* TODO */}</ol></div>
            </div>
        );
    }
}
class ShoppingList extends React.Component {//Crea un componente de clase para la lista de compras
    render() {//Metodo que retorna el componente
        return (<>{/*//Retorna el componente*/}
            <div className="shopping-list">{/*Crea una división con la clase shopping-list*/}
                <h1>Lista de compras para {this.props.name}</h1>{/*Crea un encabezado con el nombre de la lista de compras*/}
                <ul>{/*Crea una lista*/}
                    <li>Portatil</li>{/*Crea un elemento de la lista*/}
                    <li>Servidor</li>{/*Crea un elemento de la lista*/}
                    <li>Pantalla</li>{/*Crea un elemento de la lista*/}
                </ul>{/*finaliza la lista*/}
            </div>{/*finaliza la división*/}
        </>);
    }
}
class Web extends React.Component {// Muestra el componente Game o ShoppingList en el elemento con id root
    constructor(props) {//Constructor de la clase para inicializar el estado
        console.dir(props);//Muestra en consola el objeto props
        super(props);//Inicializa el estado del componente con sus propiedades para que pueda ser usado en el componente
        this.state = { show: true };//Inicializa el estado del componente con el valor entre true o false para que se muestre el componente Game o Tablero
    }
    change = () => this.setState({ show: !this.state.show });//Metodo que cambia el estado del componente para que se muestre el componente Game o Tablero
    render() {//Metodo que muestra el componente Game o Tablero
        return (<>
            <p>{<button onClick={() => this.change()}>Cambiar</button>}</p>
            {this.state.show ? <Game /> : <ShoppingList name="Jorge" />}
        </>);//Retorna el componente Game o Tablero
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));//Crea la etiqueta html root
root.render(<Web />);//Pone en la web el componente react llamado Game
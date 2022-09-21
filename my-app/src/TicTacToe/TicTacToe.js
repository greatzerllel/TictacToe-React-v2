import React, { useState } from 'react';
import './TicTacToe.css'

const TicTacToe = ({challenger1, challenger2}) => {
    const [turn, setTurn] = useState(challenger1);
    const [cells, setCells] = useState(Array(9).fill(''));
    const [ganador, setGanador ] = useState();

    const quienGana = (squares) => {
        let combination = {
            horizontal: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            vertical:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            deagonal:[
                [0,4,8],
                [2,4,6],
            ]

        }
        for (let combo in combination){
            combination[combo].forEach((patron) =>{
                if(
                    squares[patron[0]] === '' || squares[patron[1]] === '' || squares[patron[2]] === ''
                ){
                    //no hacer nada
                } 
                else if(
                    squares[patron[0]] === squares[patron[1]] && squares[patron[1]] === squares[patron[2]]
                ){
                       setGanador(turn) 
                }
                              
            })
        }

    }

    const handleClick = (num) => {
        if (cells[num] !== ''){
            alert('ESTA CELDA YA FUE USADA!');
            return;
        }
        let squares = [...cells];
        console.log(turn);
        if (turn === challenger1){
            squares[num] = 'X';
            setTurn(challenger2)
        }
        else {
            squares[num] = 'O';
            setTurn(challenger1)
        }
        quienGana(squares);
        setCells(squares);
    }

    const handleRestart = () => {
        setTurn('X');
		setGanador(null);
		setCells(Array(9).fill(''));
	};

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    return (
        <div className='container'>
            <div>
               <h1>Turn: {turn}</h1>
                <table>                                
                    <tbody>                       
                        <tr>
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                        </tr>
                        <tr>
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                        </tr>
                        <tr>
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                        </tr>
                    </tbody>
                </table>
                {ganador && (
                    <>
                    <p>{ganador} es el Ganador!</p>
                    <a href='#' className="btn" onClick={() => handleRestart()}> Jugar denuevo</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default TicTacToe
import React,{useEffect, useState} from 'react'
import './calc.css';
import Buttons from '../button/Buttons';
import Clock from 'react-live-clock';

const Calc = () => {
    const [value, setValue] = useState('0')
    const [memory, setmemory] = useState(null)
    const [operator, setoperator] = useState(null)

   
   
 

    const commafy =(number)=>{
      
            let str = number.toString().split(".");
            str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return str.join(".");
        
    }
    const pressHandler =  (content)=>{
        console.log(content)
        setValue(parseFloat(value+content).toString())
        const num = parseFloat(value)
        if(content === 'Ac'){
            setValue('0')
            setmemory(null)
            setoperator(null)
        }
        else if(content=== '.'){
            if(!value.includes('.')){
                setValue(value+'.')
            }
        }
        else if(content === '+/-'){
            setValue((num*-1).toString())
        }
        else if(content === '+'){
            setmemory(parseFloat(value))
            setValue('0')
            setoperator('+')
        }
        else if(content === '-'){
            setmemory(parseFloat(value))
            setValue('0')
            setoperator('-')
        }
        else if(content === '×'){
            setmemory(parseFloat(value))
            setValue('0')
            setoperator('×')
        }
        else if(content === '÷'){
            setmemory(parseFloat(value))
            setValue('0')
            setoperator('÷')
        }
        else if(content === '%'){
            setValue((num/100).toString())
            setmemory(num/100)
        }
        else if(content === '='){
            switch (operator) {
                case '+':
                    setValue((num + memory).toString())
                    setmemory(num + memory)
                    break;
             case '-':
                setValue((num - memory).toString())
                setmemory(num - memory)
                    break;
             case '÷':
                setValue((memory / num).toString())
                setmemory(memory / num)
                    break;
            case '×':
                setValue((num * memory).toString())
                setmemory(num * memory)
                    break;

                default:
                    break;
            }
            
        }
        
    }
    return (
        <div className="container">
            <span className='time'>
            <Clock format={'HH:mm'} ticking={true}  />
            </span>
            <div className="display">{commafy(value)}</div>
            <div className="buttons">
                <Buttons content='Ac' class={'grey'} btn={pressHandler} />
                <Buttons content={'+/-'}  class={'grey'} btn={pressHandler} />
                <Buttons content={'%'}  class={'grey'} btn={pressHandler} />
                <Buttons content={'÷'} class={'orange'} btn={pressHandler}/>
                <Buttons content="7" class={'darker'} btn={pressHandler} />
                <Buttons content={'8'} class={'darker'} btn={pressHandler} />
                <Buttons content={'9'} class={'darker'}  btn={pressHandler}/>
                <Buttons content={'×'}  class={'orange'} btn={pressHandler}/>
                <Buttons content={'4'}  class={'darker'} btn={pressHandler}/>
                <Buttons content={'5'} class={'darker'}  btn={pressHandler}/>
                <Buttons content={'6'} class={'darker'} btn={pressHandler} />
                <Buttons content={'-'}  class={'orange'} btn={pressHandler}/>
                <Buttons content={'1'} class={'darker'} btn={pressHandler}/>
                <Buttons content={'2'} class={'darker'} btn={pressHandler} />
                <Buttons content={'3'} class={'darker'} btn={pressHandler} />
                <Buttons content={'+'} class={'orange'} btn={pressHandler} />
                <Buttons content={'0'}  class={'darker'} btn={pressHandler}/>
                <Buttons content={''} class={'darker'} btn={pressHandler} />
                <Buttons content={'.'} class={'darker'} btn={pressHandler} />
                <Buttons content={'='} class={'orange'} btn={pressHandler} />
                
            </div>
        </div>
    )
}

export default Calc

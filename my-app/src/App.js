import logo from './logo.svg';
import './styles.css';
import './index.css';
import main from './components/main';
import navbar from './components/navbar';

export default function App(){
  return (
    <div className='container'>
      <navbar/>
      <main/>

    </div>
    
  )
}

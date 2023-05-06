import { useContext } from "react";
import {ContextName} from './ContextName';

const contextValue = useContext(ContextName);

const ChangeTheme = () => {
  const [mode, setMode] = useState('light')
  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light')

  }

  const ThemeContext = createContxt(mode)

  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#eee' : '#222',
        color: theme === 'light' ? '#222' : '#eee',
        display: 'grid',
        placeItems: 'center',
        minWidth: '320px',
        minHeight: '320px',
        borderRadius: '4px'
      }}
    >
      <p>Chosing theme: {theme</p>
      <button onClick={handleClick}>Cchanging theme apperiance</button>
    </div>
  )
}
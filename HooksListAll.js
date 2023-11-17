import React from "react";
import { Link } from 'react-router-dom';

function HooksListAll() {
    return (
      <div className='main'>
        <h2>Hooks useState 
          <Link to="/hooks/HooksUseState"><button className='ui button blue right'>Hooks useState</button>
          </Link>
        </h2>
        <h2>Hooks useEffect
          <Link to="/hooks/HooksUseEffect"><button className='ui button blue right'>Hooks useEffect</button>
          </Link>
        </h2>
        <h2>Hooks useNavigate
          <Link to="/hooks/HooksUseNavigate"><button className='ui button blue right'>Hooks useNavigate</button>
          </Link>
        </h2>
        <h2>Hooks useReducer
          <Link to="/hooks/HooksUseReducer"><button className='ui button blue right'>Hooks useReducer</button>
          </Link>
        </h2>
        <h2>Hooks useRef
          <Link to="/hooks/HooksUseRef"><button className='ui button blue right'>Hooks useRef</button>
          </Link>
        </h2>
        <h2>Hooks useLayoutEffect
          <Link to="/hooks/HooksUseLayoutEffect"><button className='ui button blue right'>Hooks useLayoutEffect</button>
          </Link>
        </h2>
        <h2>Hooks ImperativeHandle
          <Link to="/hooks/HooksImperativeHandle"><button className='ui button blue right'>Hooks ImperativeHandle</button>
          </Link>
        </h2>
        <h2>Hooks ContextTutorial
          <Link to="/hooks/HooksContextTutorial"><button className='ui button blue right'>Hooks ContextTutorial</button>
          </Link>
        </h2>
        <h2>Hooks useMemo
          <Link to="/hooks/HooksUseMemo"><button className='ui button blue right'>Hooks useMemo</button>
          </Link>
        </h2>
        <h2>Hooks useCallback
          <Link to="/hooks/HooksCallbackTutorial"><button className='ui button blue right'>Hooks useCallback</button>
          </Link>
        </h2>
      </div>
	);
}

export default HooksListAll;
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './styles.css';
import './site.css';
import './service-offers.css';
import './lean.css';
import './rb.css';
import './rbskin.css';

export const createRoot = ViteReactSSG({ routes });

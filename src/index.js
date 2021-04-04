import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { WpProvider } from "./context";

ReactDOM.render(
  <WpProvider>
    <Router>
      <App />
    </Router>
  </WpProvider>,
  document.getElementById('application')
);
import MainRouter from "./routers/MainRouter";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MessagesContainer from "./components/MessagesContainer";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}

export default App;

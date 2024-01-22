import react, {Component} from 'react';
import ClassComponentProps from './components/propsandstates/ClassComponentProps';
import { FunctionalCompProps } from './components/propsandstates/FunctionalCompProps';
import ClassComponentState from './components/propsandstates/ClassComponentState';
import { SetState } from './components/propsandstates/SetState';
import LoginPage from './components/account/LoginPage';
import SignInPage from './components/account/SignInPage';

class App extends Component {
    render() {
        return(
            <div>
              {/* <LoginPage /> */}
              <SignInPage />
            </div>
        )
    }
}
export default App;
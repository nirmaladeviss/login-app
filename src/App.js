import react, {Component} from 'react';
import ClassComponentProps from './components/propsandstates/ClassComponentProps';
import { FunctionalCompProps } from './components/propsandstates/FunctionalCompProps';
import ClassComponentState from './components/propsandstates/ClassComponentState';
import { SetState } from './components/propsandstates/SetState';
import LoginPage from './components/accountusingFC/LoginPage';
import SignInPage from './components/accountusingFC/SignInPage';
import DashBoard from './components/postlogin/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/login" element={<LoginPage {...this.props} />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
export default App;
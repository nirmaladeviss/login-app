import react, {Component} from 'react';
import ClassComponentProps from './components/propsandstates/ClassComponentProps';
import { FunctionalCompProps } from './components/propsandstates/FunctionalCompProps';
import ClassComponentState from './components/propsandstates/ClassComponentState';

class App extends Component {
    render() {
        return(
            <div>
                <p>Hello world</p>
                <ClassComponentProps name="Nikitha" company="Costrategix">
                    <p>This is a children props</p>
                    </ClassComponentProps>
                <FunctionalCompProps name="Nayana" company="AI" />
                <ClassComponentState />
            </div>
        )
    }
}
export default App;
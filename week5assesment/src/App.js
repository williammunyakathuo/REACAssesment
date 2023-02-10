
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        {/*What is the difference between state and props? */}
        <h4>1.What is the difference between state and props?</h4>
        <p>Props and state are both methods in React for storing data and passing it across components,
          although they differ significantly in the following ways:
        </p>
        <p>Props or properties are used to pass data from one componet to another.
        Props are read-only, immutable, and cannot be updated by the child element.<br/>
        While state represents the parts that change in an application 
        Each component has its state and state is mutable and is local to its component only
        </p> 
        <h4>2. With the following code blocks, can you say what will happen in each of these instances?</h4>
        <p>Yes I can</p>
        <p>
          const c1 = 1; c1 = 3;<br/>
          In the above code the value will be reasigned from 1 to 3
        </p>
        <p>
        <p>
          Or updating a string…</p>
          const c2 = “hello”; c2 += “world!”;<br/>
          in the above code concatenation will happen and the reslt will be "hello world"
        </p>
        <p>
        <p>Or reassigning an object…</p>
          const c3 = {}; c3.name = “Geoff”; c3.someValue = “Sausage”; c3 = {};<br/>
          in this code an empty object is declared then asigned the keys name and someValue both with Geoff and Sausage respectivley
          but then the object c3 is then reinitialized to an empty object again<br/>

        </p>
        <h4>3. stages of the React.js lifecycle.</h4>
        <ol>
          <li>Initializing</li>
          <li>Mounting</li>
          <li>Updating</li>
          <li>Unmounting</li>
        </ol>
        <h4>4. How are controlled and uncontrolled components different?</h4>
        <p>
        Controlled Components are those in which form’s data is handled by the component’s state while uncontrolled components
        Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM
        </p>
        <h4>5.Explain what three dots mean in React.</h4>
        <p>They are known as spread operators which deconstruct arrays or objects into separatable variables protect existing data from getting removed in case of input additional data </p>
      </div>
    </div>
  );
}

export default App;

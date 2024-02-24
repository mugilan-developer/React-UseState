import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Display from './Display';
function App(){
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  return <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group> 
    </Form>
    <Display email={email} 
    password={password} 
    setEmail={setEmail} 
    setPassword={setPassword}/>
  </>
}
export default App




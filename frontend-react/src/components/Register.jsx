import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});   
    const [success, setSuccess] = useState(false);  

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
          
        const userData = {username, email, password};

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)

            console.log('Registration successful:', response.data);
            setError({});
            setSuccess(true);
           
        } catch (error) {
            console.error('Error:', error.response.data);
            setError(error.response.data);
        }finally {
            setLoading(false);
        }


    }   

  return (
    <>
        <div className='text-light container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-center mb-4'>Create an Account</h3>
                    <form onSubmit={handleSubmit}>  
                        <div className='text-center mb-3'>
                            <input type="text" className='form-control' placeholder='Enter username'  value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <small> {error.username && <div className='text-danger'>{error.username}</div>}</small>
                        </div>    

                        <div className='text-center mb-3'>
                            <input type="email" className='form-control' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className='text-center mb-3'>  
                            <input type="password" className='form-control mb-5' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <small> {error.password && <div className='text-danger'>{error.password}</div>}</small>
                        </div>   

                        {success && <div className='alert alert-success'>Registration Successful.</div>}

                        {loading ? (
                            <button className='btn btn-info d-block mx-auto' type='submit' disabled><FontAwesomeIcon icon={faSpinner} spin /> Registering...</button> 
                        ) : (
                            <button className='btn btn-info d-block mx-auto' type='submit'>Register</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register
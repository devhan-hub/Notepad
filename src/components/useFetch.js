import { useEffect , useState } from "react";

const useFetch = (url) => {
    const [notes , setNotes] = useState(null);
    const [isPending , setPending] = useState(true);
    const [error , setError] = useState('');

     
    
    useEffect(() => {
      
        fetch(url)
            .then((res) => 
                {
                    if(!res.ok) {
                        throw Error('fail to feach')
                    }
                   return res.json()
                }
                )
            .then((data) =>{
                 setNotes(data);
                 setPending(false);
                 setError('')
                })
            .catch((err) => {
                setError(err.message);
                setPending(false)
                setNotes(null)
            })
   

} , [url])



  return (
     {notes , isPending , error}
  )
}

export default useFetch

import { useEffect, useState } from 'react'

const useFetch = (url) => { //custom hook SKAL starte med use i navnet!

    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController() //hjælper med at stoppe en given task når der f.eks. klikkes videre til en anden side iden der er returned data etc.


        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { //tjekker om fetchet var "ok"/end-pointet er faulty
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIspending(false)
                setError(null)
            })
            .catch(err => { //fanger en connection-error
                if (err.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setIspending(false)
                    setError(err.message)
                }
            })

        return () => abortCont.abort
    }, [url])

    return { data, isPending, error }
}

export default useFetch
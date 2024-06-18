let div = document.getElementById('root')
let n = 11
function setData(n)
{
    div.innerHTML = `<h1>${n}</h1>` 
}

setTimeout(()=>{
    setData(--n)
    setTimeout(()=>{
        setData(--n)
        setTimeout(()=>{
            setData(--n)
            setTimeout(()=>{
                setData(--n)
                setTimeout(()=>{
                    setData(--n)
                    setTimeout(()=>{
                        setData(--n)
                        setTimeout(()=>{
                            setData(--n)
                            setTimeout(()=>{
                                setData(--n)
                                setTimeout(()=>{
                                    setData(--n)
                                    setTimeout(()=>{
                                        setData(--n)
                                        setTimeout(()=>{
                                            setData("Happy Independence Day")
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
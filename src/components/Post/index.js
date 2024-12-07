import React,{useState} from 'react'

const PostCreation = () => {
    const [showIF, setShowIF]=useState(false)
    const [File,setFile]=useState(null)
    const HandlePostClick=()=>{
        setShowIF(prestate=>!prestate)
    }

    const InputFile=(e)=>{
     console.log(URL.createObjectURL(e.target.files[0]))
     setFile(URL.createObjectURL(e.target.files[0]))
    }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:"center", paddingleft:'10%'}}>
        <div style={{width:'30%', display:'flex',flexDirection:"column", justifyContent:"center"}}>
        <h4 style={{color:"blue", textAlign:"center"}}>Create a Post</h4>
         <div style={{display:"flex" }}></div>
          <button onClick={HandlePostClick} style={{backgroundColor:"blue", color:"white" }}>Add Post</button>
        </div>
        {showIF && (
            <div style={{display:'flex', flexDirection:'row',gap:"2px"}}>
            <input style={{marginTop:"5px"}} placeholder='Add Post' type='file' onChange={InputFile}/>
            <button onClick={HandlePostClick} style={{backgroundColor:"black", color:"white" }}>Close</button>
            </div>
        )}
        <div style={{width:"100%", paddingLeft:"38%", paddingTop:"10px"}}>
        <img src={File} alt="unable to get file"  style={{height:"400px", width:"35%"}}/>
        <div
         style={{width:"100%", display:'flex', flexDirection:'row', gap:"2px"}}
        ></div>
        <button>like</button>
        <button>Comment</button>
        <button>Share</button>
        </div>

      
    </div>
  )
}

export default PostCreation

import React, { useEffect,useState } from 'react'


function District(props){
    const [data,setData]=useState([]);

    useEffect(()=>{
        return ()=> fetchData();
    },[]);

    const fetchData=async ()=>{
        let responde=await fetch(`https://api.postalpincode.in/pincode/${props.inputValue}`);
        let json=await responde.json();
        // console.log(json);

        let result=json[0].PostOffice;
        setData(result);
        console.log(result);
    }

    return(
        <div className="container">
            <div className="pin">Pincode:110048</div>
            <div className="mess">Message:
            <span>Number of Pincode(s) found:</span></div>
            
            {
               
                data.map((item)=>(
                    <div className="container2" key={item.Name}>
                        <div className="container3">
                    <div className='name'>Name: {item.Name}</div>
                    <div className='name'>Branch-Type: {item.BranchType}</div>
                    <div className='name'>Delivery-Status: {item.DeliveryStatus}</div>
                    <div className='name'>District: {item.District}</div>
                    <div className='name'>Division: {item.Division}</div>
                    </div>
                    </div>
                ))
                
            }
        </div>
    )
}

export default District;



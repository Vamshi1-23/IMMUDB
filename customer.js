const ImmudbClient=require('immudb-node');

const Host = '127.0.0.1';
const Port = '3001';
const User = 'Vamshi';
const Password = 'Sai@123';

const client=new ImmudbClient.default({host:Host,port:Port});

const random=Math.floor(Math.random()*Math.floor(1000));
const rando=`${random}`;
const db="opsdb";
(async()=>{
    try {
        
    const loginreq={user:User,password:Password};
    const loginres=await client.login(loginreq);
    console.log("login:",loginreq);

    
    const createDB={database:db};
    const create=await client.createDatabase(createDB);
    console.log("created",create);
    
    const useDB={database:db};
    const use=await client.createDatabase(useDB);
    console.log("created",use);

    // const setAllReq = { Customers: [] }
    // for (let i = 0; i < 20; i++) {
    //   setAllReq.Customers.push({ key: `${i}`, value: `${i}` })
    // }
    // const setAllRes = await cl.setAll(setAllReq)
    // console.log(`setAll`, setAllRes)

    
    // const getAllReq = { NUmbers: [], sincetx: 0 }
    // for (let i = 0; i < 20; i++) {
    //   getAllReq.NUmbers.push(`${i}`)
    // }
    // const getAllRes = await cl.getAll(getAllReq)
    // console.log(`getAll`, getAllRes)
    
    
     }catch (error) {
        console.log('hi');
        return console.log(error);
    }
}
)();
//client.shutdown();
Router.post('/signup',async (req,res)=>{
    const{username,email,password}= req.body;
    

    try{
        const [existingUser]=awaitdb.query('SELECT * FROM users Where email =?'[email]);
        if(existingUser.length > 0){
            return res.status(400).json({message: 'Duplicate Email'});
        }

        const[result]= await debug.query ('INSERT INTO users (username, email, password) VALUES (?,?,?)', [username,email,password]);
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    
    }
});
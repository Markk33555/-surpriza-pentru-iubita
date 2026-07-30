*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(180deg,#020111,#071330,#111c44);
    overflow:hidden;
    font-family:Arial,Helvetica,sans-serif;
    color:white;
}

.hero{
    width:90%;
    max-width:700px;
    text-align:center;
    padding:40px;
    background:rgba(255,255,255,0.08);
    border-radius:25px;
    backdrop-filter:blur(12px);
    box-shadow:0 0 40px rgba(255,255,255,.12);
}

h1{
    font-size:2.3rem;
    margin-bottom:20px;
}

p{
    font-size:1.2rem;
    line-height:1.8;
    color:#ececec;
    margin-bottom:35px;
}

button{
    padding:16px 34px;
    border:none;
    border-radius:50px;
    background:#ff4f81;
    color:white;
    font-size:1.1rem;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.08);
    box-shadow:0 0 25px #ff4f81;
}
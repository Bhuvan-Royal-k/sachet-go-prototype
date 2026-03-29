import { useEffect, useState } from 'react'

// Assets - Using your specific file names
import img1 from './assets/images/1.jpg.webp'
import img2 from './assets/images/2.jpg.webp'
import img3 from './assets/images/3.jpg.webp'
import img4 from './assets/images/4.jpg.webp'
import img5 from './assets/images/5.jpg.webp'
import img6 from './assets/images/6.jpg.jpg' 
import img7 from './assets/images/7.jpg.webp'
import img8 from './assets/images/8.jpg.webp'
import img9 from './assets/images/9.jpg.webp'
import img10 from './assets/images/10.jpg.webp'

const imageMap = {
  1: img1, 2: img2, 3: img3, 4: img4, 5: img5,
  6: img6, 7: img7, 8: img8, 9: img9, 10: img10
};

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState("");

  // HOSTING LOGIC: Uses Vercel Environment Variable or localhost
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("API Error:", err));
  }, [API_URL]);

  const filteredProducts = products.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalBill = cart.reduce((sum, item) => sum + item.price, 0);

  if (!isLoggedIn) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', fontFamily: '-apple-system, sans-serif' }}>
        <div style={{ width: '100%', maxWidth: '350px', padding: '20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '700', letterSpacing: '-1.5px', marginBottom: '40px', color: '#008329' }}>Sachet<span style={{ color: '#000' }}>.go</span></h1>
          <input 
            type="text" 
            placeholder="Enter Name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '12px', border: '1px solid #d2d2d7', fontSize: '16px', boxSizing: 'border-box', outline: 'none' }}
          />
          <button onClick={() => username && setIsLoggedIn(true)} style={{ width: '100%', padding: '15px', backgroundColor: '#008329', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '17px', fontWeight: '600', cursor: 'pointer' }}>Sign In</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh', fontFamily: '-apple-system, sans-serif', color: '#1d1d1f' }}>
      
      {/* NAVBAR */}
      <nav style={{ backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #d2d2d7' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '64px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#008329', userSelect: 'none', cursor: 'default' }}>
            Sachet<span style={{ fontWeight: '400', color: '#000' }}>.go</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #d2d2d7' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#008329', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>{username[0]?.toUpperCase()}</div>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{username}</span>
             </div>
             <button onClick={() => setIsOrdered(true)} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '22px', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}>Cart ({cart.length})</button>
             <button onClick={() => setIsLoggedIn(false)} style={{ fontSize: '13px', color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '700', letterSpacing: '-2px', margin: '0 0 10px 0' }}>The Sachet Economy.</h1>
        <p style={{ fontSize: '24px', color: '#008329', fontWeight: '500' }}>Essentials delivered in micro-packs.</p>
      </div>

      {/* SEARCH */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <input 
          type="text" 
          placeholder="Search for essentials..." 
          style={{ width: '100%', padding: '18px 25px', borderRadius: '20px', border: 'none', backgroundColor: '#fff', fontSize: '17px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', outline: 'none' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '25px' }}>
          {filteredProducts.map(item => (
            <div key={item.id} style={{ 
              background: '#fff', padding: '25px', borderRadius: '24px', 
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)', minHeight: '320px' 
            }}>
              <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                <img src={imageMap[item.id]} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt={item.name} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 5px 0' }}>{item.name}</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>{item.category}</p>
              <div style={{ flexGrow: 1 }}></div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: '700', color: '#008329' }}>₹{item.price}</span>
                <button onClick={() => setCart([...cart, item])} style={{ background: '#008329', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '20px', fontWeight: '600', cursor: 'pointer' }}>+ Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUCCESS OVERLAY */}
      {isOrdered && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(8px)' }}>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '28px', textAlign: 'center', maxWidth: '380px' }}>
            <h1 style={{ color: '#008329', fontSize: '32px' }}>Order Placed! 🎉</h1>
            <p style={{ fontSize: '18px' }}>Total Bill: <b>₹{totalBill}</b></p>
            <button onClick={() => {setCart([]); setIsOrdered(false);}} style={{ marginTop: '25px', width: '100%', padding: '15px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '15px', fontWeight: '600' }}>Back to Store</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
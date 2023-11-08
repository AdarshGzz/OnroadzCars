import cars from '../../assets/pngegg.png';

export default function NotFound() {
  return (
    <div style={{alignItems:'center',justifyContent: 'center',display:"flex",flexDirection: 'column', marginTop:'3rem'}}>
      <h3 style={{ color: '#ce2525', fontSize: '24px' }}>Login</h3>
      <form
        style={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label style={{ color: '#ce2525' }}>Email</label>
        <input
          type="email"
          style={{
            color: '#000',
            background: 'none',
            outline: 'none',
            width: '20rem',
            height: '2rem',
            borderRadius: '10px',
          }}
        />
        <label style={{ color: '#ce2525' }}>Password</label>
        <input
          type="passward"
          style={{
            color: '#000',
            background: 'none',
            outline: 'none',
            height: '2rem',
            borderRadius: '10px',
            width: '20rem',
          }}
        />
        <input
          type="submit"
          style={{
            backgroundColor: '#ce2525',
            borderColor: '#ce2525',
            borderRadius: '5px',
            height: '2rem',
            width: '6rem',
          }}
        />
        <p style={{ color: '#ce2525', fontSize: '12px' }}>
          Already have an account?
        </p>
      </form>
      <img src={cars} alt="LOGIN PAGE" />
    </div>
  );
}

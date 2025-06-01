export default function Iris() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'monospace',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>+iris</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.8' }}>
        “L’œil ne juge pas. Il observe. <br />
        Et parfois, il nous révèle.” <br /><br />
        Ce module explore l’iris comme miroir du corps, des émotions et de l’histoire intérieure.
      </p>
      <a
        href="#"
        style={{
          marginTop: '3rem',
          padding: '1rem 2rem',
          backgroundColor: '#fff',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        Commencer la lecture symbolique
      </a>
    </div>
  )
